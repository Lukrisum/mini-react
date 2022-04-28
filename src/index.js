// import React from "react";
import MyReact from "./mini-react";
// import  ReactDOM  from "react-dom";

const element = MyReact.createElement(
  'div',
  {
    title: 'hello',
    id:'sky'
  },
  'world',
  MyReact.createElement(
    'a',
    {href:"https://www.bilibili.com/video/BV1aW411Q7x1?p=8"},
    'nmsl',
    MyReact.createElement('a',{href:"https://www.baidu.com"},
    'nmsl')
  )
)

console.log(element)
/**
 * React.createElement(element type) ---> “格式化”为对象
 * //
 * render(element,container) ---> element转化为 node 并挂载到 container上
 * 创造 DOM节点 
 * node ===> document.createElement(element type)
 * node['title'] = element.props.title
 * 创造文本节点
 * text = document.createTextNode("")
 * text['nodeValue'] = element.props.chidren
 * 文本节点塞入DOM节点
 * node.appendChildren(text)
 * container.appendChild
 * //
 *  (---> 浏览器渲染)
 *  */ 

const container = document.getElementById('root')

MyReact.render(
  element,
  container
)
