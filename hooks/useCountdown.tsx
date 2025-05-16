"use client";

import { 
    useCallback, 
    useEffect, 
    useState 
} from 'react'

const useCountdown = (initialTime: number) => {
  const [minutes, setMinutes] = useState(Math.floor(initialTime / 60));
  const [seconds, setSeconds] = useState(initialTime % 60);
  const [isRunning, setIsRunning] = useState(false);

  // Start or resume countdown
  const start = useCallback(() => {
      setIsRunning(true);
  }, []);

  // Reset Countdown
  const reset = useCallback(() => {
    setIsRunning(false);
    setMinutes(Math.floor(initialTime / 60));
    setSeconds(initialTime % 60);
  }, [initialTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes]);

  return {
    start,
    reset,
    minutes,
    seconds,
    isRunning: minutes === 0 && seconds === 0
  }
}

export default useCountdown