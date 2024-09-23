import React, { useState } from 'react'
import ShowBalance from './ShowBalance'

const Balance = () => {
   
    const [btnName, setbtnName] = useState("Add")
    const [display, setdisplay] = useState("none")
    const [record, setrecord] = useState([])
    const [amount, setamount] = useState(0)
    const [note, setnote] = useState("")
    const [radio, setradio] = useState("")

    const Expense = () =>{
        let sum = 0 ;
        for (const rec of record) {
            if(rec.Type == "Expense"){
                sum = +rec.Amount + sum
            }
        }
        return sum
    }
    const Income = () =>{
        let sum = 0 ;
        for (const rec of record) {
            if(rec.Type == "Income"){
                sum = +rec.Amount + sum
            }
        }
        return sum
    }

    const styleNewRecord = () =>{
        if(btnName == "Cancel"){
            setdisplay("none")
            setbtnName("Add")
        }else{
            setdisplay("block")
            setbtnName("Cancel")
        }
    }

    
    const radioCheck = (e) =>{
        setradio(e.target.value)
    }

    const family = () =>{
        setdisplay("none")
        setbtnName("Add")
        setamount(0)
        setnote("")
        setradio("")
    }

    const addTransaction = () =>{
        if(amount !== "" && note !== "" && radio !== ""){
            let arr = {
                Amount: amount,
                Type: radio,
                Note: note
            }
            setrecord([...record,arr])
            family()
        }
    }

    const deleteHistory = (index) =>{
        let arr = [...record]
        arr.splice(index,1)
        setrecord(arr)
    }

  return (
    <div>
        <div className='balance'>
            <p>Balance : ${Income()-Expense()}</p>
            <button onClick={()=>{
                styleNewRecord()
            }} className='addRecord'>{btnName}</button>
        </div>

        <div style={{display:`${display}`}} className='newRecord'>
            <input onChange={(e)=>{
                setamount(e.target.value)
            }} className='txt' type='number' placeholder=' Enter Amount' value={amount}/>
            <input onChange={(e)=>{
                setnote(e.target.value)
            }} className='txt' type='text' placeholder=' Enter note' value={note}/>
            <div className='selection'>
                <div>
                    <input onChange={(e)=>{
                        radioCheck(e)
                    }} type='radio' name='check' value={"Expense"}/>
                    <p>Expense</p>
                </div>
                <div>
                    <input onChange={(e)=>{
                        radioCheck(e)
                    }} type='radio' name='check' value={"Income"}/>
                    <p>Income</p>
                </div>
                <button onClick={()=>{
                    addTransaction()
                }} className='transactionBtn'>Add Transaction</button>
            </div>
        </div>
        <ShowBalance  Expense={Expense()} Income={Income()}/>
        <div className='transaction'>
            <h3>Transaction History</h3>
            <ul>
                {
                    record.map((item,index)=>{
                        return (<li key={index}>
                                    <p>{item.Amount}</p>
                                    <p>{item.Note}</p>
                                    <button onClick={()=>{
                                        deleteHistory(index)
                                    }} className='reomveBtn'>Remove</button>
                                </li>)
                    })
                }
                
                
            </ul>
        </div>
    </div>
    
  )
}

export default Balance