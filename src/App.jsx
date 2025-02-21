import react,{useState} from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import UseEffect from './Hooks/UseEffect'
import Parent from './Hooks/UseContext/Parent'
import { UserProvider } from './Hooks/UseContext/UserContext'
import Child from './Hooks/UseContext/Child'
import UseReducer from './Hooks/UseContext/UseReducer'

function App()
{
  const user="I'm RizZzii"
  const user2="tHe Rizz Karthick!"
  return(
    <div>
      <UseReducer/>
      {/* <UserProvider>
        <Child/>
      </UserProvider> */}
      {/* <Parent user={user}/> */}
      {/* /{ <Navbar/> } */}
      {/* <UseEffect/> */}
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes> 
    </div>
  )
}
export default App