import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP);

export default function Svganimate() {
  let mm = gsap.matchMedia();
  mm.add("(min-width:800px)", () => {
    useGSAP(() => {
      gsap.to(".svganimate", {
        duration: 0.8,
        delay: 0.2,
        maskSize: "200%",
        scrollTrigger: {
          trigger: ".main",
          start: " 5% ",
          end: "10%",
          scrub: true,
        },
      });
    });
  });
  // phone responviness

  mm.add("(max-width:768px)", () => {
    useGSAP(() => {
      gsap.to(".svganimate", {
        duration: 0.8,
        delay: 0.2,
        maskSize: "200%",
     
        margin:-50,
        marginRight:-80,
        marginLeft:-40,
        scrollTrigger: {
          trigger: ".main",
          start: " 5% ",
          end: "10%",
          scrub: true,
        },
      });
    });
  });

  return (
    <div className=" main container  text-center m-5 p-5">
      <div className="row svganimate ">
        <div className="col  svgimg "></div>
      </div>
    </div>
  );
}
