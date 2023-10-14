import './App.css'
import Layout from './component/layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Benevole from './pages/Benevole'
import Collecteur from './pages/Collecteur'
import Entrepot from './pages/Entrepot'
import DonateMoney from './pages/Donate'
import Signup from './pages/Signup'
import Login from './pages/Login'
import MarketPlace from './pages/MarketPlace'
import Item1 from './pages/Item1'

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="cpanel" element={<Layout />}>
            <Route index element={<Collecteur />} />
            <Route path="Benevole" element={<Benevole />} />
            <Route path="Entrepot" element={<Entrepot />} />
            <Route path='donate' element={<DonateMoney/>} />
          </Route>
          <Route path='market-place' element={<MarketPlace/>}/>
          <Route path='market-place/Manteau' element={<Item1/>}/>
        </Routes>
      </Router>

      {/* <div>
        <ChatBox />
        <SendMessage />
      </div> */}
    </>
  )
}

export default App
