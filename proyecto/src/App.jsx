import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/personal.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import CarouselComponent from './components/carousel';
import TextoBox from './components/TextBox';
import MapaGoogle from './components/MapaGoogle';
import Footer from './components/Footer';
import imagen1 from './multimedia/carousel/imagen1.png';
import imagen2 from './multimedia/carousel/imagen2.png';
import teteros from './multimedia/carousel/teteros.png';
import logo from './multimedia/logo.png';

function App() {
  const images = [
    {
      src: imagen1,
      alt: 'Primera',
      title: 'bebe1',
      description: 'bebe1',
    },
    {
      src: imagen2,
      alt: 'Segunda',
      title: 'bebe2',
      description: 'bebe2',
    },
    {
      src: teteros,
      alt: 'teteros',
      title: 'teteros',
      description: 'teteros',
    },
  ];
  console.log(images);

  

  return (
    <Container className='my-container'>
      <NavBar logo={logo} />
      <CarouselComponent images={images} />
      <div className="seccion-dos-recuadros">
        <TextoBox />
        <MapaGoogle />
      </div>
      <Footer />

    </Container>
  );
}

export default App;
