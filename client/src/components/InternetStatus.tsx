import { useEffect, useState } from "react"

function InternetStatus() {
    const [isOnline,setIsOnline] = useState(navigator.onLine)

    useEffect(() => {
        const goOnline = () => setIsOnline(true)
        const goOffline = () => setIsOnline(false)

        window.addEventListener('online',goOnline)
        window.addEventListener('offline',goOffline)

        return () => {
            window.removeEventListener('online',goOnline)
            window.removeEventListener('offline',goOffline)
        }

    },[])
  return (
    <div>
        {isOnline ? <p>
            connected to internet 
        </p>
            :
        <p>
            no internet
        </p>}
    </div>
  )
}

export default InternetStatus