import Header from './components/ui/Header'
import About from './components/ui/Aboutme'
import Portfolio from './components/ui/Portofolio'
import Services from './components/ui/Services'
import Contact from './components/ui/Contact'
import Footer from './components/ui/Footer'
import Experience from './components/ui/Experience'
import Testimonials from './components/ui/Testimonial'
import './App.css'

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <About />
        <Experience />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;

