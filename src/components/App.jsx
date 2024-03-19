import React from "react";
import Home from "./Home";
import Contact from "./Home page components/Contact";
import LogIn from "./Login and register/LogIn";
import Register from "./Login and register/Register";
import Phone from "./Product components/Phone";
import Television from "./Product components/Television";
import Mail from "./Product components/Mail";
import Youtube from "./Product components/Youtube";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path ="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/LogIn" element={<LogIn />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Phone" element={<Phone />} />
                <Route path="/Television" element={<Television />} />
                <Route path="/Mail" element={<Mail />} />
                <Route path="/Youtube" element={<Youtube />} />
            </Routes>
        </Router>
    );
}

export default App;