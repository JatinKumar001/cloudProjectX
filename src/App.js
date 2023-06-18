import './App.css';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
// import img1 from './img/1.jpg';
// import img2 from './img/2.jpg';
// import img3 from './img/maxresdefault.jpg';

function App() {
  const slider = [
    {
      "src": "https://picsum.photos/seed/img1/600/400",
      "alt": "Image 1 for carousel"
    },
    {
      "src": "https://picsum.photos/seed/img2/600/400",
      "alt": "Image 2 for carousel"
    },
    {
      "src": "https://picsum.photos/seed/img3/600/400",
      "alt": "Image 3 for carousel"
    }
  ];

  const containerStyles = {
    width: "600px",
    height: "401px",
    margin: "0 auto",
  };

  return (
    <>
      <Navbar />
      <div style={containerStyles}>
        <ImageSlider data={slider} />
      </div>
    </>
  );
}

export default App;
