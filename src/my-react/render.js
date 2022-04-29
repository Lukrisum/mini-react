let nextUnitOfWork = null

//执行任务单元 vDOM -> rDOM
const perforUnitOfWork = (fiber) => {

  //创造执行到 container下第一个子节点
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }
  if (fiber.parent) {
    console.log(fiber.parent)
    fiber.parent.dom.appendChild(fiber.dom)
  }

  //为当前的 fiber 创建子节点的fiber 对 vDOm 树进行一个 DFS
  //parents child sibling 
  const elements = fiber?.props?.children
  let pervSibling = null
  elements.forEach((childrenElement, index) => {
    const newFiber = {
      parent: fiber,
      props: childrenElement.props,
      type: childrenElement.type,
      dom: null,
    }

    if (index === 0) {
      fiber.child = newFiber
    } else {
      pervSibling.sibling = newFiber
    }
    pervSibling = newFiber
  })

  //return 下一个任务单元
  if(fiber.child){
    return fiber.child
  }
  
  let nextFiber = fiber
  while(nextFiber){
    if(nextFiber.sibling){
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }
}

const workLoop = (deadline) => {
  let shouldYield = true
  //有时间 且 有子任务 ---> 执行
  while (shouldYield && nextUnitOfWork) {
    nextUnitOfWork = perforUnitOfWork(nextUnitOfWork)
    shouldYield = deadline.timeRemaining() > 1
  }
}

requestIdleCallback(workLoop)

const createDom = (element) => {
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode("")
      : document.createElement(element.type)

  const isProperty = key => key !== 'children'

  Object.keys(element?.props)
    .filter(isProperty)
    .forEach(name => dom[name] = element.props[name])

  return dom
}

const render = (element, container) => {
  nextUnitOfWork = {
    dom: container,
    props: {
      children: [element]
    }
  }
}

export default render
