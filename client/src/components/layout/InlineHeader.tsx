import { useNavigate } from 'react-router'
import '../../style/InlineHaeder.css'
import SaveState from '../buttons/SaveState'

function InlineHaeder() {
  const musicsaveNav = useNavigate()
  return (
    <header className='inlineHead'>
      <button onClick={() => {musicsaveNav('/music')}} className='button'>MUSIC SAVE</button>
      <img src="/logo.png" className="logo" />
      <SaveState/>
    </header>
  )
}

export default InlineHaeder