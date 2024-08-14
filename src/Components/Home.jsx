import React, { useState, useEffect } from 'react';
import '../styles.css';

const Home = () => {
  const birthday = new Date('2024-08-14T00:00:00');
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const distance = birthday - now;
    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      <div className="countdown-wrapper">
        {timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0 ? (
          <h1 className="celebrate">오늘은 선주의 생일입니다. 생일 추카포카푸카포카!</h1>
        ) : (
          <div className="countdown">
            <h1>선주의 생일까지✨</h1>
            <div className="time">
              <div className="time-item">
                <div className="time-value">{timeLeft.days}</div>
                <div className="time-label">일</div>
              </div>
              <div className="time-item">
                <div className="time-value">{timeLeft.hours}</div>
                <div className="time-label">시간</div>
              </div>
              <div className="time-item">
                <div className="time-value">{timeLeft.minutes}</div>
                <div className="time-label">분</div>
              </div>
              <div className="time-item">
                <div className="time-value">{timeLeft.seconds}</div>
                <div className="time-label">초</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
