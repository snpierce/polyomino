import React from 'react';
import Countdown from './Countdown';
import Countup from './Countup';
import './static/Timer.css';

type TimerProps = {
  countDown?: boolean;
  startTime?: number;
  paused: boolean;
};

const Timer: React.FC<TimerProps> = ({ countDown, startTime, paused }) => {
  if (countDown && startTime && startTime > 0) {
    return <Countdown startTime={startTime} />;
  }
  if (!countDown) {
    return <Countup paused={paused} />;
  }
  return (<div className='timer-container'>
    <span className="timer"/>
    </div>);
};

export default Timer;