//格式化
const createElement = (type, props, ...children) => {

  return {
    type,
    props: {
      ...props,
      children: children?.map(child =>
        typeof child == "object"
          ? child
          : createTextElement(child)
      )
    }
  }
}

const createTextElement = (text) => {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: []
    }
  }
}

export default createElement
//编译器内容（状态机）————还没这么快好像...
