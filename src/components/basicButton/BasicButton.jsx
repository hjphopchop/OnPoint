import React from 'react'
import cl from "./BasicButton.module.css"

const BasicButton = ({children, buttonClick}) => {
  return (
    
    <button onClick = {() =>buttonClick()} className={cl.button}>
        {children}
    </button>
    
  )
}

export default BasicButton