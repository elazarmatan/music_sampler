import { useMyContext } from "../../context/MyContext.context";

function Restart() {
  const {
    setGridState,
    setAddcolumn,
    addColumn,
    setcontrollSpeed,
    setColumn,
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
        setcontrollSpeed(1000);
        setColumn(-1);
      }}
    >
      Restart
    </button>
  );
}

export default Restart;
