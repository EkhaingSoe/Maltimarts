import React from 'react'
import "./CommonSection.css"

const CommonSection = ({title}) => {
  return (
    <section className='common__section'>
          <div className='container '>
              <h1 className='font-semibold text-center text-3xl'>{title}</h1>
        </div>
    </section>
  )
}

export default CommonSection