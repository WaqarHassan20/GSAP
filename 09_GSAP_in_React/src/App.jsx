import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  useGSAP(() => {
    gsap.to(".mydiv", {
      x: 1000,
      y: 200,
      borderRadius: 100,
      duration: 1,
      scale: 1.5,
      rotate: 180,
      yoyo: true,
      repeat: -1,
      backgroundColor: "blue",
      ease: "power1.inOut",
    });
  });

  return (
    <>
      <main className="h-screen w-screen bg-black">
        <div className="mydiv w-44 h-44 bg-red-600 rounded-2xl flex justify-center items-center text-white font-bold text-2xl">
          I am Div
        </div>
      </main>
    </>
  );
}

export default App;
