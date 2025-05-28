import AppRoutes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Navbar/>
      <AppRoutes />
      <ScrollToTop />
      <Footer/>
    </>
  );
}

export default App;
