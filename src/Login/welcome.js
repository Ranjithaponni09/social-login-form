import React, { useEffect, useRef, useState } from 'react';
import './Welcome.css';
import { Container } from 'react-bootstrap';

const Welcome = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    let vol = 0;
    audio.volume = 0;
    audio.play().catch((e) => console.log('Autoplay issue:', e));

    const fadeIn = setInterval(() => {
      if (vol < 0.2 && !isMuted) {
        vol += 0.05;
        audio.volume = vol;
      } else {
        clearInterval(fadeIn);
      }
    }, 200);
  }, [isMuted]);

  return (
    <Container sm={12} md={12}>
    <div >
      <h1 className="emoji-pop"> Welcome!</h1>

      {/* Button to manually play */}
      <span onClick={() => audioRef.current.play()} className=""/>
        
      

      {/* Falling Flowers */}
      {[...Array(15)].map((_, i) => (
        <div className="flower" key={i}>🌸</div>
      ))}

      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
    </Container>
  );
};

export default Welcome;
