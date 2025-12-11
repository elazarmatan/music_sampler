import type { saveParams } from "../../interfaces/params";
import saveState from "../saveState";

export const save = async ({nameFile,gridState,setAccesSave,namechannel}:saveParams) => {
  if (nameFile.current?.value) {
    await saveState(
      nameFile.current.value,
      gridState,
      setAccesSave,
      namechannel
    );
  }
};
