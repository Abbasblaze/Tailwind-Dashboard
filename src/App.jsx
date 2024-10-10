import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/Homepage';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';


function App() {
  return (

      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/homepage' element={<HomePage />} />
      </Routes>

  );
}

export default App;
