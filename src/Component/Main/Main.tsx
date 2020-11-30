import React,{useState,useEffect} from 'react'
import "./main.css"
import Timer from '../Timer/Timer'
import {Control} from '../Control/Control'


function Main() {

    const [timeInSecond, setTimeInSecond] = useState<number>(0)
    const [timerArray, setTimerArray] = useState<Array<number|string>>([])

    useEffect(() => {
        let timer: Array<number|string> = Timer(timeInSecond)
        setTimerArray(timer)
    }, [timeInSecond])

    return (
        <main>
            <div className='timer-container'>
                <p className='timer-text'>{timerArray[0]}</p>
                <span>:</span>
                <p className='timer-text'>{timerArray[1]}</p>
                <span>:</span>
                <p className='timer-text'>{timerArray[2]}</p>
            </div>
            <Control setTimeInSecond={setTimeInSecond} />
        </main>
      
    )
} 

export default Main
