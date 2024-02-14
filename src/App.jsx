/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import "./App.css";
import song from './assets/song.mp3'
import { sound_on , sound_off } from './assets/icons'
export default function Page() {
  const audioRef =useRef(new Audio(song))
  const [isPlayingMusic, setIsPlayingMusic] = useState();
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause()
    }
  }, [isPlayingMusic])

  return (
    <div className="centered-container">      
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-container">Ok yay!!!</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-container">Will you be my Valentine?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
      <div className="absolute bottom-2 left-2">
          <img 
            src={isPlayingMusic ? sound_off : sound_on} 
            alt="sound"
            className="w-10 h-10 cursor-pointer object-contain"
            style={{ width: 50, height: 50 }}
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          />
      </div>
    </div>
  );
}
