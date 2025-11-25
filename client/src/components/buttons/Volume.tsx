import { useState } from "react";
import { useMyContext } from "../../context/MyContext.context";

function Volume() {
  const { gain } = useMyContext();
const [showValue,setshowValue] = useState(0.5)
  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    gain.current.gain.value = value;
    setshowValue(value)
  };
  return (
    <div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        defaultValue="0.5"
        onChange={handleVolume}
      />
      <p>volume: {showValue * 100}</p>
    </div>
  );
}

export default Volume;
