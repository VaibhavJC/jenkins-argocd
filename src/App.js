import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Genre from './components/Genre';
import Language from './components/Language';
import Nav from './components/Nav';
import NavBar from './components/NavBar';
import Platforms from './components/Platforms';
import Row from './components/Row';
import requests from './request';

// ✅ Import video from components folder
import myVideo from './components/video_2026-03-03_15-42-28.mp4';

function App() {
  return (
    <>
      <div className='rel'>

        {/* Left Navigation */}
        <div className="nnn">
          <Nav />
        </div>

        <div className="aaa">

          {/* Top Navbar */}
          <div className='first'>
            <NavBar />
          </div>

          <div className='second'>

            {/* Banner */}
            <div className='stick'>
              <Banner />
            </div>

            {/* Movie Preview Section */}
            <div className='lg'>

              <video
                className="hero-video"
                autoPlay
                loop
                muted
                controls
              >
                <source src={myVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <h3>
                2023 · 2h 54m · 4 languages · <span>U/A 16+</span>
              </h3>

              <p>
                In a crime-infested town, Kannan bhai and his gang are the reigning powers.
                To combat this reign and seek revenge, Inspector enters the battlefield.
              </p>

              <h3>Action | Drama | Thriller | Crime</h3>

              <button className='btn'>Subscribe to Watch</button>
              <button className='bb btn'>+</button>

            </div>

            {/* Movie Rows */}
            <div className='z'>

              <Row
                title="Veera The Boss - Release on 25-10-26"
                fetchUrl={requests.fetchActionMovies}
              />

              <Row
                title="Free - Newly Added"
                fetchUrl={requests.fetchComedyMovies}
              />

              <Row
                title="Disney Movies"
                fetchUrl={requests.fetchDocumentaries}
              />

              <Platforms />
              <Language />
              <Genre />

              <Row
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
              />

              <Row
                title="Romantic Movies"
                fetchUrl={requests.fetchRomanceMovies}
              />

              <Row
                title="Popular Movies"
                fetchUrl={requests.fetchDoc}
              />

              <Footer />

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default App;
