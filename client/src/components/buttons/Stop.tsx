import { useMyContext } from '../../context/MyContext.context'

function Stop() {
  const {isPlaying,setActive} = useMyContext()
  return (
    <div className='stop'>
      {isPlaying.current ? 
      <button  onClick={() => {
        isPlaying.current = false;
        setActive(false)
    }}>stop</button>
    :
    <div>
    </div>
      }
    </div>
  )
}

export default Stop