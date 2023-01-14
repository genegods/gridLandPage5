import React from 'react'
import { GlobalData } from "../data/CardData"

const GlobalPage = () => {
  return (
    <React.Fragment>
    <section>
      <div className='grid grid-cols-2 w-full h-auto pb-20 gap-5'>
      {
        GlobalData.map((item, index) => {
            return(
                <div key={index}>
                    <div className="bg-white w-62 h-40 shadow-lg rounded-lg centered flex-col">
                        <div className='text-6xl'>{item.icon}</div>
                        <p className='text-2xl capitalize'>{item.title}</p>
                    </div>
                </div>
            )
        })
      }
      </div>
    </section>
  </React.Fragment>
  )
}

export default GlobalPage