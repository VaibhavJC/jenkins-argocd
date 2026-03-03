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

function App() {
  return (
    <>
   <div className='rel'>
   <div className="nnn">
          <Nav/>
        </div>
     
      <div className="aaa">
        
  
  <div className='first'>
    
          <NavBar/>
  </div>
  
   <div className='second'>
  
    <div className='stick'>
      
     <Banner/>
    </div>
    <div className='lg'>
    //<img src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2744/1602744-t-f24fc98823fa" alt="" />
    <video width="320" height="240" controls>
      <source src="video_2026-03-03_15-42-28.mp4" type="video/mp4">
      <source src="video_2026-03-03_15-42-28.mp4" type="video/ogg">
      Your browser does not support the video tag.
  </video>
            <h3>2023 . 2h 54m . 4 languages . <span>U/A 16+</span> </h3>
            <p>In a crime-infested town, Kannan bhai and his gang are the reigning powers. To combat this reign and seek revenge, Inspector </p>
            <h3>Action | Drama | Thriller | Drugs</h3>
            <button className='btn'>Subscribe to Watch</button>
            <button className='bb btn'>+</button>
  
  
  
    </div>
    <div className='z'>
            
      <Row title="Veera The Boss release on 25-10-26" fetchUrl={requests.fetchActionMovies} />
      <Row title="Free-Newly Added" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Disney Movies" fetchUrl={requests.fetchDocumentaries}/>
      <Platforms/>
      <Language/>
      <Genre/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Populer Movies" fetchUrl={requests.fetchDoc}/>
      <Footer/>
    </div>
    
    
   </div>
      </div>
   </div>
    </>
  );
}

export default App;
