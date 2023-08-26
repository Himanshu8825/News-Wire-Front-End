import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from './Navbar'
import Container from 'react-bootstrap/Container';
import Home from "./Home";
import NewNews from "./NewNews";
import EditNews from "./EditNews";
import ShowNews from "./ShowNews";
import Contact from "./Contact";


const App = () => {
    return (<React.Fragment>
        <BrowserRouter>
            <NavbarComponent />
            <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/news/new' element={<NewNews />} />
                    <Route path='/news/:id' element={<ShowNews />} />
                    <Route path='/news/:id/edit' element={<EditNews />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Container>
        </BrowserRouter>
    </React.Fragment>)
}

export default App;