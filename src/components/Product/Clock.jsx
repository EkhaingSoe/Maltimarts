import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSecond] = useState(0);

    let interval;

    const countDown = () => {
        const destination = new Date('Oct 20, 2023').getTime();
        
        interval = setInterval(() => {
            const now = new Date().getTime();
            const different = destination - now;
            // console.log(different);
            const days = Math.floor(different / (1000 * 60 * 60 * 24));
            // console.log(days);
            const hours = Math.floor(different % (1000 * 60 * 60 * 24)/(1000*60*60));
            const minutes = Math.floor(different % (1000 * 60 * 60)/(1000*60 ));
            const seconds = Math.floor(different % (1000 * 60) / 1000);
            if (destination < 0) clearInterval(interval.current)
            else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSecond(seconds);
            }

        })
        
    }

    useEffect(() => {
        countDown();
    },[])
  return (
      <div className='flex items-center gap-3 justify-center'>
          <div className='flex items-center gap-3'>
              <div className='flex flex-col gap-1 justify-center items-center'>
                  <h1 className='font-semibold'>{days}</h1>
              <p className='text-xs font-thin'>Days</p>
                </div>
                <p>:</p>
              
          </div>
           <div className='flex items-center gap-3'>
              <div className='flex flex-col gap-1 justify-center items-center'>
                  <h1 className='font-semibold'>{hours}</h1>
              <p className='text-xs font-thin'>Hours</p>
                </div>
                <p>:</p>
              
          </div>
           <div className='flex items-center gap-3'>
              <div className='flex flex-col gap-1 justify-center items-center'>
                  <h1 className='font-semibold'>{minutes}</h1>
              <p className='text-xs font-thin'>Minutes</p>
                </div>
                <p>:</p>
              
          </div>
           <div className='flex items-center gap-3'>
              <div className='flex flex-col gap-1 justify-center items-center'>
                  <h1 className='font-semibold'>{seconds}</h1>
              <p className='text-xs font-thin'>Seconds</p>
                </div>
                <p></p>
              
          </div>
          
    </div>
  )
}

export default Clock