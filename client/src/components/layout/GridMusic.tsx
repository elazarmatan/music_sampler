import { useMyContext } from "../../context/MyContext.context";
import setColorAfter from "../../utils/setColorAfter";
import AudioSquare from "../AudioSquare";

function GridMusic() {
  const { addColumn, gridState, setGridState,urls,error} = useMyContext();
  if(error){
    return <h1>ERROR</h1>
  }
  return (
    <section
      id="grid"
      style={{ gridTemplateColumns: `repeat(${addColumn},1fr)`,  gridTemplateRows: `repeat(${gridState[0].length},1fr)`}}
    >
      {urls.length > 1 ? gridState.map((col, collIndex) =>
        col.map((cellState, rowIndex) => (
          <AudioSquare
            key={`${collIndex}-${rowIndex}`}
            pathAudio={urls[rowIndex]}
            active={cellState}
            mycolumn={collIndex}
            colorAfter={setColorAfter(rowIndex)}
            onToggle={() => {
              setGridState((prev) => {
                const newGrid = prev.map((col) => [...col]);
                newGrid[collIndex][rowIndex] = !prev[collIndex][rowIndex];
                return newGrid;
              });
            }}
          />
        ))
      ):<h1 className="loading">loading...</h1>}
    </section>
  );
}

export default GridMusic;
