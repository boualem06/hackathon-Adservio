import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Benevole from '../pages/Benevole'
import Collecteur from '../pages/Collecteur'
import Entrepot from '../pages/Entrepot'
import Home from '../pages/Home'
const Routers = () => {
    return (
        <Router>

        <Routes>
            <Route path='/Home' element={<Home></Home>}></Route>
            <Route path='/Benevole' element={<Benevole></Benevole>}></Route>
            <Route path='/Collecteur' element={<Collecteur></Collecteur>}></Route>
            <Route path='/Entrepot' element={<Entrepot></Entrepot>}></Route>
        </Routes>
        </Router>
    )
}

export default Routers