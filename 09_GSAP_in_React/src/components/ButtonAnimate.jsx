import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useState } from "react";

function ButtonAnimate() {
  const [value, setValue] = useState(0);
  const circleRef = useRef(null);

  function handleRandom() {
    const random = gsap.utils.random(0, 500, 100);
    setValue(random);
    console.log(random);
  }

  useGSAP(() => {
    gsap.to(circleRef.current, {
      x: value,
      duration: 0.5,
    });
  }, [value]);

  return (
    <>
      <main className="h-screen w-screen bg-white flex flex-col justify-evenly items-center">
        <button
          onClick={handleRandom}
          className="bg-linear-180 from-teal-900 to-teal-700 hover:scale-110 active:scale-125 transform transition-transform duration-500 text-white font-bold text-lg px-16 py-3 rounded-full"
        >
          Aniamte
        </button>
        <div
          ref={circleRef}
          className="rounded-full bg-blue-700 w-48 h-48 flex justify-center items-center"
        >
          <p className="font-bold text-white text-xl">{value}</p>
        </div>
      </main>
    </>
  );
}
export default ButtonAnimate;
