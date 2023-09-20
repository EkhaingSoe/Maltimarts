import React from 'react'

const Helmet = (props) => {
    document.title = "MaltiMart - " + props.title;
    
  return (
      <div className='w-full'>{props.children}</div>
  )
}

export default Helmet