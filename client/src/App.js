import './App.css';
import EmailDetails from './components/emailDetails/EmailDetails';
import Emails from './components/emails/Emails';
import NotFound from './components/errorComponent/NotFound';
import Main from './pages/main/Main';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}>
        <Route path= ':type' element={<Emails/>}>  
          <Route path='emailDetails/:emaiId' element={<EmailDetails/>}/>
        </Route>
      </Route>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
  );
}

export default App;