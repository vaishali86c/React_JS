import LoginForm from './components/LoginForm';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayFormData from './components/DisplayFormData';
import { FormProvider } from './FormContext';

function App() {
  return (
    <>
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />}></Route>
            <Route path='/display' element={<DisplayFormData />}></Route>
          </Routes>
        </BrowserRouter>
      </FormProvider>
    </>
  );
}

export default App;
