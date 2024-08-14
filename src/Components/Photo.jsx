import React, { useState } from 'react';
import Confetti from 'react-confetti';
import '../styles.css';
import birthdayPhoto from '../assets/birthphoto.jpg';

const Photo = () => {
  const [showPhoto, setShowPhoto] = useState(false);

  return (
    <div className="photo">
      <h1>아래 클릭해봐🥰</h1>
      <button onClick={() => setShowPhoto(!showPhoto)} className="emoji-button">🎂</button>
      {showPhoto && (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <img src={birthdayPhoto} alt="Birthday" className="photo-img" />
        </>
      )}
    </div>
  );
};

export default Photo;
