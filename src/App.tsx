
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Signin from "./pages/signin";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App