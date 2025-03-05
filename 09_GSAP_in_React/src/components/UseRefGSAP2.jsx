import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function Index() {
  const circleRef1 = useRef(null);
  const circleRef2 = useRef(null);
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);

  useGSAP(() => {
    gsap.to(circleRef1.current, {
      x: 645,
      y: 320,
      duration: 4,
      delay: 1,
      opacity: 0.5,
      yoyo: true,
      repeat: -1,
    });
    gsap.to(circleRef2.current, {
      x: -645,
      y: 320,
      opacity: 0.5,
      duration: 4,
      delay: 1,
      yoyo: true,
      repeat: -1,
    });
    gsap.to(boxRef1.current, {
      x: 645,
      y: -320,
      opacity: 0.5,
      duration: 4,
      delay: 1,
      yoyo: true,
      repeat: -1,
    });
    gsap.to(boxRef2.current, {
      x: -645,
      y: -320,
      duration: 4,
      opacity: 0.5,
      delay: 1,
      yoyo: true,
      repeat: -1,
    });
  });

  return (
    <>
      <main className="h-screen w-screen p-28  bg-gray-800 flex justify-between items-center">
        <div className="border-2 border-white flex flex-col gap-44">
          <div
            ref={circleRef1}
            className="w-40 h-40 bg-gradient-to-b from-yellow-500 to-yellow-700 rounded-full m-10"
          ></div>
          <div
            ref={boxRef1}
            className="w-40 h-40 bg-gradient-to-b from-blue-500 to-blue-700 rounded-2xl m-10"
          ></div>
        </div>

        <div className="border-2 border-white flex flex-col gap-44">
          <div
            ref={circleRef2}
            className="w-40 h-40 bg-gradient-to-b from-yellow-500 to-yellow-700 rounded-full m-10"
          ></div>
          <div
            ref={boxRef2}
            className="w-40 h-40 bg-gradient-to-b from-blue-500 to-blue-700 rounded-2xl m-10"
          ></div>
        </div>
      </main>
    </>
  );
}
export default Index;
