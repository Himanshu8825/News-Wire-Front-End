import React from "react";
// for react router below module is required
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Home from "./Home";
import NewNews from "./NewNews";
import EditNews from "./EditNews";
import ShowNews from "./ShowNews";
import Contact from "./Contact";
import NavbarComponent from "./Navbar";


const App = () => {
    return(
        <>
            <BrowserRouter>
                <NavbarComponent/>
                <ToastContainer/>
                <Container>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/news/new" element={<NewNews/>}/>
                        <Route path="/news/:id" element={<ShowNews/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/news/:id/edit" element={<EditNews/>}/>
                        <Route path="*" element={<Home/>}/>
                    </Routes>
                </Container>
            </BrowserRouter>
        </>
    )
}

export default App;