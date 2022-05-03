import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Views/About';
import Contact from './Views/Contact';
import Home from './Views/Home';
import Product from './Views/Product';

function App() {
    return (
        <div>
            <Router>
            <Header />


                <div className="p-3">

                <Routes>
                    <Route exact path='/' element={
                        <Home />
                    }>

                    </Route>
                    <Route path='/about' element={
                        <About />
                    }>

                    </Route>
                    <Route path='/contact' element={
                        <Contact />
                    }>

                    </Route>
                    <Route path='/product/:id' element={
                        <Product />
                    }>

                    </Route>

                </Routes>

                </div>
            <Footer />
            </Router>
        </div>
    );
}

export default App;
