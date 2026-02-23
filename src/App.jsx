import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
