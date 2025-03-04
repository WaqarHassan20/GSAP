import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function Index() {
  const circleRef1 = useRef(null);

  useGSAP(
    () => {
      gsap.to(".circle", {
        x: 645,
        y: 320,
        duration: 4,
        delay: 1,
        opacity: 0.5,
        yoyo: true,
        repeat: -1,
      });
    },
    // { scope: ".DABBA" }
    // you can use this property to apply the animation to a specific element
    // Or you can also use the useRef hook to get a reference and use it in GSAP

    { scope: circleRef1 }
  );

  return (
    <>
      <main className="h-screen w-screen bg-black flex justify-evenly items-center">
        <div
          ref={circleRef1}
          className="DABBA border-2 border-white flex flex-col gap-44"
        >
          <div className="circle w-40 h-40 bg-gradient-to-b from-yellow-500 to-yellow-700 rounded-full m-10"></div>
          <div className="box w-40 h-40 bg-gradient-to-b from-blue-500 to-blue-700 rounded-2xl m-10"></div>
        </div>

        <div className="DABBA2 border-2 border-white flex flex-col gap-44">
          <div className="circle w-40 h-40 bg-gradient-to-b from-yellow-500 to-yellow-700 rounded-full m-10"></div>
          <div className="box w-40 h-40 bg-gradient-to-b from-blue-500 to-blue-700 rounded-2xl m-10"></div>
        </div>
      </main>
    </>
  );
}
export default Index;
