import React, { useState } from 'react';
import Confetti from 'react-confetti'; // 폭죽 효과 라이브러리
import './Letter.css'; // 스타일링을 위한 CSS 파일

const Letter = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleOpenLetter = () => {
    setShowLetter(true);
    setShowMessage(true); // 메시지와 케이크 애니메이션 표시
  };

  return (
    <div className="letter">
      <h1>happy sun-ju day💖</h1>
      <button onClick={handleOpenLetter} className="open-letter-button">
        Check Your Letter
      </button>
      {showLetter && (
        <div className="letter-body">
          <div className="letter-text">
            <p>Happy Birthday, 선주야! 🎉🎂</p>
            <p>너를 알게되서 나는 노무너무 기뻐!ㅎㅎㅎ</p>
            <p>앞으로 좋은 추억 많이 쌓자!</p>
          </div>
        </div>
      )}
      {showMessage && (
        <div className="message">
          <h2 className="birthday-message">선주야 생일축하해</h2>
          <div className="cake-container">
            <span className="cake-emoji">🎂</span>
          </div>
        </div>
      )}
      {showMessage && <Confetti width={window.innerWidth} height={window.innerHeight} />}
    </div>
  );
};

export default Letter;
