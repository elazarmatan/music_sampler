import { MyContext } from '../context/MyContext.context'
import GridMusic from '../components/layout/GridMusic'
import NavBar from '../components/layout/NavBar'
import InlineHaeder from '../components/layout/InlineHeader'

function HomePage() {
  return (
        <MyContext>
            <div className='page'>
                <InlineHaeder/>
                <GridMusic/>
                <NavBar/>
            </div>
        </MyContext>
  )
}

export default HomePage