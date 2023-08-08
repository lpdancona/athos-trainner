import "./App.css";
import { Hero } from "./components/Hero/Hero";
import { Programs } from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Testimonials from "./components/Testimonials/Testimonials";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Testimonials />
    </div>
  );
}

export default App;
