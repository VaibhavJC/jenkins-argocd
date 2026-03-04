import './App.css';
import Footer from './components/Footer';
import Genre from './components/Genre';
import Language from './components/Language';
import Nav from './components/Nav';
import NavBar from './components/NavBar';
import Platforms from './components/Platforms';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div className='rel'>

      <div className="nnn">
        <Nav />
      </div>

      <div className="aaa">

        <div className='first'>
          <NavBar />
        </div>

        <div className='second'>

          {/* ✅ HERO SECTION FIXED */}
          <div className='hero-container'>

            <video
              className="hero-video"
              autoplay
              loop
              controls
              playsInline
            >
              <source src="/Video-Project.mp4" type="video/mp4" />
            </video>

            {/* Overlay Content */}
            <div className='hero-content'>

              <h3>
                2026 · 2h 54m · 4 languages · <span>U/A 16+</span>
              </h3>

              <p>
                In a world of failing deployments and crashing systems, one DevOps mentor stands between chaos and control.
              </p>

              <h3>Action | Drama | Thriller | Crime</h3>

              <button className='btn'>Subscribe to Watch</button>
              <button className='bb btn'>+</button>

            </div>

          </div>
          {/* ✅ HERO SECTION END */}

          <div className='z'>

            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

            <Platforms />
            <Language />
            <Genre />
            <Footer />

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
