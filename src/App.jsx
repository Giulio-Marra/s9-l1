import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import Button from './components/button';

function App() {
  return (
    <>
    <Navbar className="navBar bgBlue" logoSrc={logo} />
    <Card  imageCard="https://gaming-cdn.com/images/products/9575/616x353/helldivers-2-pc-gioco-steam-europe-cover.jpg?v=1708503564" titleCard="titolocarta1" textCard="fsdfegsgdsfgdsgsdfgsdgfsdgd"/>
    <Card imageCard="https://gaming-cdn.com/images/products/15527/616x353/no-rest-for-the-wicked-pc-gioco-steam-europe-cover.jpg?v=1713457793" titleCard="titolocarta2" textCard="dsfdsfgsdg"/>
    <Card imageCard="https://gaming-cdn.com/images/products/15920/616x353/balatro-pc-gioco-steam-cover.jpg?v=1708442647" titleCard="titlecard3" textCard="sdfsdfsfd" />
    <Button buttonText="Premi"/>
  </>
  );
}

export default App;
