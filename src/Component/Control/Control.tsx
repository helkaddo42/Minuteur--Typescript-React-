import React,{useState} from 'react'
import './control.css'

interface getProps{
    setTimeInSecond: Function;
}


export const Control: React.FC<getProps>=({setTimeInSecond})=> {
   
   const [intervalId, setIntervalId]=  useState<number>(0)
   
    const play =()=>{
        let interval: any = setInterval(()=>{
            setTimeInSecond((previousState: number)=>
                previousState + 1)
            
        },1000)
        setIntervalId(interval)
    }

    const stop =()=>{
        clearInterval(intervalId)
    }

    const reset =()=>{
        clearInterval(intervalId)
        setTimeInSecond(0)
    }

    return (
        <div className='controls-container'>
            <button onClick={play}>Play</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

