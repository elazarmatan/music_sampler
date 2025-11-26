import { useMyContext } from "../../context/MyContext.context";

function Restart() {
  const {
    setGridState,
    setAddcolumn,
    addColumn,
    setcontrollSpeed,
    setColumn,
    gain,
  } = useMyContext();
  return (
    <button
      onClick={() => {
        setAddcolumn(5);
        setGridState(
          Array.from({ length: addColumn }, () =>
            Array.from({ length: 7 }, () => true)
          )
        );
        setcontrollSpeed(500);
        setColumn(-1);
        gain.current.gain.value = 0.5
      }}
    >
      Restart
    </button>
  );
}

export default Restart;
