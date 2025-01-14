import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LogIn from './Pages/LogIn.jsx'
import CreateAcc from './Pages/CreateAcc.jsx'
import Games from './Pages/Games.jsx'
import Profile from './Pages/Profile.jsx'
import LandingPage from './Pages/LandingPage.jsx'
import NoPage from './Pages/NoPage.jsx'

export default function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<LandingPage/>}/>
                    <Route path='/home' element={<LandingPage/>}/>
                    <Route path='/login' element={<LogIn/>}/>
                    <Route path='/register' element={<CreateAcc/>}/>
                    <Route path='/games' element={<Games/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/*' element={<NoPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}