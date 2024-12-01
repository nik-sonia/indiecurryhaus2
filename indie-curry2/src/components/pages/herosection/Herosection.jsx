import gsap from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);

export default function Herosection() {
  useGSAP(() => {
    gsap.from("h1 span", {
      duration: 0.8,
      delay: 0.5,
      y: 50,
      stagger: 0.15,
      opacity: 0,
    });

    gsap.from("h3 span", {
      duration: 0.8,
      delay: 1,
      y: 50,
      stagger: 0.15,
      opacity: 0,
    });

    gsap.from("h4 span", {
      duration: 0.8,
      delay: 1,
      y: 50,
      stagger: 0.15,
      opacity: 0,
    });
  });
  return (
    <>
      {/* <div className="center-image"> */}
        <div className="text-overlay maincontent">
          <h1 className=" indie  ">
            <span>I</span>
            <span>n</span>
            <span>d</span>
            <span className="text-danger">i</span>
            <span>e</span>
          </h1> &nbsp;
          <h3 className=" curry1 " >
            <span>C</span>
            <span>u</span>
            <span>r</span>
            <span>r</span>
            <span>y</span>
            <span>H</span>
            <span>a</span>
            <span>u</span>
            <span>s</span>
            
          </h3>
        <div className="curry">
          <h4>
            <span>F</span>
            <span>I</span>
            <span>N</span>
            <span>E</span>
             &nbsp;
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>N</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </h4>
        </div>
          
        </div>
        
        
      
    </>
  );
}
