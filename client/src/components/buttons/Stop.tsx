import { useMyContext } from '../../context/MyContext.context'

function Stop() {
  const {isPlaying,setActive} = useMyContext()
  return (
    <div className='divstop'>
      {isPlaying.current ? 
      <button className='stop button'  onClick={() => {
        isPlaying.current = false;
        setActive(false)
    }}>⏸</button>
    :
    <div>
    </div>
      }
    </div>
  )
}

export default Stop