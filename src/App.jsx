import "./App.css";
import Navbar from "./components/Layout/Navbar/Navbar";
import SpeedTest from "./components/SpeedTest/SpeedTest";
import Footer from "./components/Layout/Footer/Footer";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {!isModalOpen && <Navbar />}
      <SpeedTest setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      {!isModalOpen && <div className="mt-auto h-full">
        <Footer />
        </div>
        }
    </>
  );
}

export default App;
