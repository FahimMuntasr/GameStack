import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LogIn from './Pages/LogIn.jsx'
import CreateAcc from './Pages/CreateAcc.jsx'
import Games from './Pages/Games.jsx'
import Profile from './Pages/Profile.jsx'
import LandingPage from './Pages/LandingPage.jsx'
import NoPage from './Pages/NoPage.jsx'
import { useEffect } from 'react'

export default function App(){
    // useEffect(()=>{
    //     fetch(`https://api.rawg.io/api/developers?key=183b214550c74ba2b84e5a8c05960de2`)
    //         .then((response) => response.json()) 
    //         .then((data) => console.log(data.results)) 
    // },[]);
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