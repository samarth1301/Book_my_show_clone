import './App.css';

//HOC
// import navBar from './components/Navbar/Navbar.component'
import DefaultHOC from './HOC/Default.HOC';
//Copmonent


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/Home.page';

function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={HomePage}/>
    </>
  );
}

export default App;
