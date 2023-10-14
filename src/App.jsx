import './App.css'
import Layout from './component/layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Benevole from './pages/Benevole'
import Collecteur from './pages/Collecteur'
import Entrepot from './pages/Entrepot'
import DonateMoney from './pages/DonateMoney'

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cpanel" element={<Layout />}>
            <Route index element={<Collecteur />} />
            <Route path="Benevole" element={<Benevole />} />
            <Route path="Entrepot" element={<Entrepot />} />
            <Route path='donate/money' element={<DonateMoney/>} />
          </Route>
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
