import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import ButtonsPage from './pages/ButtonsPage';
import InputsPage from './pages/InputsPage';
import SideNavbar from './shared/components/layout/side-navbar/SideNavbar';

function App() {
  return (
    <>
        <BrowserRouter>
          <div className='row'>
            <SideNavbar>
              <NavLink to={'/'}>Buttons</NavLink>
              <NavLink to={'/inputs'}>Inputs</NavLink>
            </SideNavbar>
              <div className='router-body'>
                <Routes>
                  <Route path='/' element={<ButtonsPage/>} />
                  <Route path='inputs' element={<InputsPage/>} />
                </Routes>
                <footer className='footer'><span className="credits">created by <b><u>Drande</u></b> - devChallenges.io</span></footer>
              </div>
            </div>
        </BrowserRouter>
    </>
  );
}

export default App;
