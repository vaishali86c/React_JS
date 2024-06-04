import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
