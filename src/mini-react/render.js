const render = (element, container) => {
    const dom =
        element?.type !== 'TEXT_ELEMENT'
            ? document.createElement(element.type)
            : document.createTextNode('')

    const isProperty = key => key !== 'children'

    Object.keys(element?.props)
        .filter(isProperty)
        .forEach(name => {
            name !== "style"
                ? dom[name] = element.props[name]
                : Object.keys(element.props.style)
                    .forEach(cssName => dom.style[cssName] = element.props.style[cssName])
        })

    element?.props?.children?.forEach(child => render(child, dom))

    container.appendChild(dom)
}

export default render
