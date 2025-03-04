import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function UseRefGSAP() {
  // This is how to use the useRef hook to get a reference and use in GSAP

  const divRef = useRef(null);

  useGSAP(() => {
    gsap.to(divRef.current, {
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
        <div
          ref={divRef}
          className="mydiv w-44 h-44 bg-red-600 rounded-2xl flex justify-center items-center text-white font-bold text-2xl"
        >
          I am Div
        </div>
      </main>
    </>
  );
}

export default UseRefGSAP;
