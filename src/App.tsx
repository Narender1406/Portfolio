import ThemeToggle from "./components/ThemeToggle";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
    
      {/* Theme toggle button */}
      <ThemeToggle />

      {/* Background layer */}
      <AnimatedBackground />

      {/* App content */}
      <Navbar />
      <Home />
    </>
  );
}
