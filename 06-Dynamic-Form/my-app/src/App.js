import LoginForm from './components/LoginForm';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayFormData from './components/DisplayFormData';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />}></Route>
          <Route path='/display' element={<DisplayFormData />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
