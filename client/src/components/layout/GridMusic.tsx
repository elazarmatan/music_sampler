import { useEffect } from "react";
import { useMyContext } from "../../context/MyContext.context";
import AudioSquare from "../AudioSquare";

function GridMusic() {
  const { addColumn, gridState, setGridState } = useMyContext();
  const urls = [
    "http://localhost:9000/piano/piano/A1vH.wav",
    "http://localhost:9000/piano/piano/A2vL.wav",
    "http://localhost:9000/piano/piano/A3vH.wav",
    "http://localhost:9000/piano/piano/A4vH.wav",
    "http://localhost:9000/piano/piano/A5vH.wav",
    "http://localhost:9000/piano/piano/A6vH.wav",
    "http://localhost:9000/piano/piano/A7vH.wav",
  ];

  return (
    <section
      id="grid"
      style={{ gridTemplateColumns: `repeat(${addColumn},1fr)` }}
    >
      {gridState.map((col, collIndex) =>
        col.map((cellState, rowIndex) => (
          <AudioSquare
            key={`${collIndex}-${rowIndex}`}
            pathAudio={urls[rowIndex]}
            active={cellState}
            onToggle={() => {
              setGridState((prev) => {
                const newGrid = prev.map((col) => [...col]);
                newGrid[collIndex][rowIndex] = !prev[collIndex][rowIndex];
                return newGrid;
              });
            }}
          />
        ))
      )}
    </section>
  );
}

export default GridMusic;
