import React, {useState, useRef, useEffect} from 'react'
import '../App.css';

const TimerWithoutInput = () => {
  const [days, setDays] = useState('00')
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')

  const [val, setVal] = useState('')

  let interval = useRef()

  const inputHandler = (e) => {
    const val = e.target.value
    setVal(val)
  }

  const startTimer = () => {
    const countDownDate = new Date('July 29, 2021 22:20:00').getTime()



    interval = setInterval(() => {
      const now = new Date().getTime()
      const gap = countDownDate - now

      console.log('countDownDate:', countDownDate);
      console.log('now:', now);
      console.log('gap:', gap);
      
      const days = Math.floor(gap / (1000*60*60*24))
      const hours = Math.floor((gap % (1000*60*60*24)) / (1000*60*60))
      const minutes = Math.floor((gap % (1000*60*60)) / (1000*60))
      const seconds = Math.floor((gap % (1000* 60)) / 1000)


      console.log(days, hours, minutes, seconds)

      if(gap < 0) {
        // Clear the interval
        clearInterval(interval.current)
      } else {
        // Update the Timer
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }
    }, 1000);
  }

  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(interval.current)
    }
  },[])

    
  return (
    <div>
      <h1> React Countdown Without Input</h1>

      <div className="countdown">
          
        
        {days < 10 ? `0${days}` : {days}}
        :
        {hours < 10 ? `0${hours}` : {hours}}
        :
        {minutes}
        :
        {seconds}
      
      </div>

      <div className="container">
        <div className="form-group">
         <label htmlFor="day">Day</label>
          <input type="number" className="form-control" id="day" placeholder={0} min='0' max='31'  onChange={inputHandler}/>

          <label htmlFor="hr">Hr</label>
          <input type="number"className="form-control" id="hr" placeholder={0} min='0' max='12' onChange={inputHandler}/>

          <label htmlFor="min">Min</label>
          <input type="number" className="form-control" id="min" placeholder={0} min='0' max='59' onChange={inputHandler}/>

          <label htmlFor="sec">Sec</label>
          <input type="number" className="form-control" id="sec" placeholder={0} min='1' max='59' onChange={inputHandler}/>
        </div>
      </div>

      <h1>val = {val}</h1>

    </div>
  )
}

export default TimerWithoutInput
