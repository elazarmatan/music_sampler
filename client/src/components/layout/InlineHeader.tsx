import '../../style/InlineHaeder.css'
import SaveState from '../buttons/SaveState'

function InlineHaeder() {
  return (
    <header className='inlineHead'>
      <img src="/logo.png" className="logo" />
      <SaveState/>
    </header>
  )
}

export default InlineHaeder