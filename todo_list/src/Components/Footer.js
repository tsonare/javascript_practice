import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "10vh",
    width:"100%",
  }
  return (
    <footer className='bg-dark text-light' style={footerStyle}>
        <p>
         <marquee> Copyright &copy; MyTodolist.com</marquee>
        </p>
    </footer>
  )
}
