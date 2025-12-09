import GridMusic from '../components/layout/GridMusic'
import NavBar from '../components/layout/NavBar'
import InlineHaeder from '../components/layout/InlineHeader'

function HomePage() {
  return (
            <div className='page'>
                <InlineHaeder/>
                <GridMusic/>
                <NavBar/>
            </div>
  )
}

export default HomePage