import { useState } from 'react'
import './App.css'
import CakeView from './features/cake/cakeView'
import IcecreamView from './features/icecream/icecreamView'
import UserView from './features/user/userView'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
       <CakeView />
       <IcecreamView />
       <UserView />
     </div>
      
     
    </>
  )
}

export default App
