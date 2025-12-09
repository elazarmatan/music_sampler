import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import * as Tone from "tone";
import getChannel from "../utils/getChannelFromServer";
import { logoChannel } from "../utils/handles/channels";

type contextType = {
  addColumn: number;
  setAddcolumn: React.Dispatch<React.SetStateAction<number>>;
  gridState: boolean[][];
  setGridState: React.Dispatch<React.SetStateAction<boolean[][]>>;
  urls: string[];
  setUrls: React.Dispatch<React.SetStateAction<string[]>>;
  isPlaying: React.RefObject<boolean>;
  controllSpeed: number;
  setcontrollSpeed: React.Dispatch<React.SetStateAction<number>>;
  column: number;
  setColumn: React.Dispatch<React.SetStateAction<number>>;
  gain: React.RefObject<Tone.Gain<"gain">>;
  error:boolean
  setError:React.Dispatch<React.SetStateAction<boolean>>
  active:boolean
  setActive:React.Dispatch<React.SetStateAction<boolean>>
  namechannel:string
  setnamechannel:React.Dispatch<React.SetStateAction<string>>
  channel:string
  setchannel:React.Dispatch<React.SetStateAction<string>>
  showVolume:number
  setshowVolume:React.Dispatch<React.SetStateAction<number>>;
};

interface providerProps {
  children: React.ReactNode;
}
export const context = createContext<contextType | null>(null);

export function MyContext(props: providerProps) {
  const [addColumn, setAddcolumn] = useState<number>(10);
  const isPlaying = useRef<boolean>(false);
  const [controllSpeed, setcontrollSpeed] = useState(500);
  const [column, setColumn] = useState(-1);
  const gain = useRef(new Tone.Gain(1).toDestination());
  const [urls, setUrls] = useState([""]);
  const [error,setError] = useState(false)
  const [active, setActive] = useState(false);
  const [namechannel,setnamechannel] = useState('piano')
  const [channel,setchannel] = useState('🎹')
  const [showVolume, setshowVolume] = useState(1);
  useEffect(() => {
      getChannel({setError,setGridState,setUrls,addColumn,namechannel})
      logoChannel({namechannel,setchannel})
  }, [namechannel]);

  const [gridState, setGridState] = useState<boolean[][]>(
    Array.from({ length: addColumn }, () =>
      Array.from({ length: urls.length }, () => true)
    )
  );

  useEffect(() => {
    setGridState((prev) => {
      if (prev.length < addColumn) {
        return [...prev, Array.from({ length: urls.length }, () => true)];
      }
      if (prev.length > addColumn) {
        return prev.slice(0, addColumn);
      }
      return prev;
    });
  }, [addColumn]);
  return (
    <context.Provider
      value={{
        addColumn,
        setAddcolumn,
        gridState,
        setGridState,
        urls,
        isPlaying,
        controllSpeed,
        setcontrollSpeed,
        column,
        setColumn,
        gain,
        setUrls,
        error,
        setError,
        active,
        setActive,
        namechannel,
        setnamechannel,
        channel,
        setchannel,
        showVolume,
        setshowVolume
      }}
    >
      {props.children}
    </context.Provider>
  );
}

export function useMyContext() {
  const myContext = useContext(context);
  if (!myContext) throw new Error("error");
  return myContext;
}
