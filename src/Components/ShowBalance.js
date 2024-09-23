import React from 'react'

const ShowBalance = ({Expense,Income}) => {
  return (
    <div className='showBalance'>
        <div className='sub'>
            <p>Expense</p>
            <p style={{color:`red`,fontWeight:900}}>$ {Expense}</p>
        </div>
        <div className='sub'>
            <p>Budget</p>
            <p style={{color:`green`,fontWeight:900}}>$ {Income}</p>
        </div>
    </div>
  )
}

export default ShowBalance