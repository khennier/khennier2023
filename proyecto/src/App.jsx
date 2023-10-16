import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import logo from './multimedia/logo.png';
import './style/personal.css';
import CarouselComponent from './components/carousel';

function App() {
  const images = [
    {
      src: `${process.env.PUBLIC_URL}/multimedia/carousel/imagen1.jpeg`,
      alt: 'Primera',
      title: 'bebe1',
      description: 'bebe1',
    },
    {
      src: `${process.env.PUBLIC_URL}/multimedia/carousel/imagen2.jpeg`,
      alt: 'Segunda',
      title: 'bebe2',
      description: 'bebe2',
    },
  ];
  console.log(images);

  

  return (
    <Container className='my-container'>
      <NavBar logo={logo} />
      <CarouselComponent images={images} />
    </Container>
  );
}

export default App;
