import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './dashboard';
import SignIn from './SignIn';
import SignUp1 from './SignUp1';
import SignUp2 from './SignUp2';
// import Footer from './Footer';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Navbar />
      <Marquee /> */}
      <div className="content">
      <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/sign-in' element={<SignIn />} />
          <Route exact path='/sign-up/page-1' element={<SignUp1 />} />
          <Route exact path='/sign-up/page-2' element={<SignUp2 />} />
          {/* <Route path='/about' element={<About />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/projects' element={<Project />} /> */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
