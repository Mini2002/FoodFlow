import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import './App.css'
import { Outlet } from 'react-router-dom'
import {Provider} from "react-redux"
import appStore from "./utils/appStore.js";

function App() {


  return (
    <Provider store = {appStore}>
    <>
    <Header/>
    <Outlet/>
    </>
    </Provider>
  )
}

export default App
