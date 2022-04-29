import MyReact from "./my-react";

const element = MyReact.createElement(
  'div',
  {
    id: "nmsl",
    style:{
        color:"red",
        width:'200px',
        height:'300px',
        backgroundColor:'black'
    }
  },
  'div',
  MyReact.createElement(
    'a',
    { href: "https://www.bilibili.com/video/BV1aW411Q7x1?p=9" },
    '线性代数',
    MyReact.createElement(
      'a',
      { href: "https://www.bilibili.com/video/BV1aW411Q7x1?p=9" },
      '线性代数',
    )
  )
)

const container = document.querySelector('#root')

MyReact.render(
  element,
  container
)
