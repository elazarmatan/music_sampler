import { useState } from "react";
import { useMyContext } from "../../context/MyContext.context";

function Volume() {
  const { gain ,showVolume,setshowVolume } = useMyContext();
  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    gain.current.gain.value = Number(e.target.value);
    setshowVolume(Number(e.target.value));
  };
  return (
    <div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        onChange={handleVolume}
        value={showVolume}
        className="inputRange"
      />
      <p>volume: {(showVolume * 100).toFixed(0)}</p>
    </div>
  );
}

export default Volume;