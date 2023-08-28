import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/loginPage";
import { ToastContainer } from "react-toastify";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import HomePage from "./pages/HomePage/HomePage";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import { ProductProvider } from "./hooks/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ProductProvider>
  );
}

export default App;
