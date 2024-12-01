import Layout from "../layout/Layout";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP);
export default function Galleryanimate() {
  let mm = gsap.matchMedia();
  mm.add("(min-width:800px)", () => {
    useGSAP(() => {
      gsap.to(".bottom ", {
        bottom: "-50%",
        scrollTrigger: {
          trigger: ".main3",
          start: " 10% ",
          end: "50%",
          scrub: true,
          markers: true,
        },
      });

      gsap.to(".top ", {
        top: "-50%",
        scrollTrigger: {
          trigger: ".main3",
          start: " 10% ",
          end: "50%",
          scrub: true,
          markers: true,
          pin: true,
        },
      });

      gsap.to(".top-h ", {
        top: "80%",
        scrollTrigger: {
          trigger: ".main3",
          start: " 10% ",
          end: "30%",
          scrub: true,

          markers: true,
        },
      });

      gsap.to(".bottom-h ", {
        bottom: "-80%",
        scrollTrigger: {
          trigger: ".main3",
          start: " 10% ",
          end: "30%",
          scrub: true,

          markers: true,
        },
      });

      gsap.to(".contentgallery ", {
        marginTop: "0",
        scrollTrigger: {
          trigger: ".main3",
          start: " 10% ",
          end: "30%",
          scrub: true,
          markers: true,
        },
      });
    });
  });
  //  phone responsiveness

  mm.add("(max-width:768px)", () => {
    useGSAP(() => {
      gsap.to(".bottom ", {
        bottom: "-50%",
        scrollTrigger: {
          trigger: ".main3",
          start: " 20% ",
          end: "30%",
          scrub: true,
          markers: true,
        },
      });

      gsap.to(".top ", {
        top: "-50%",
        scrollTrigger: {
          trigger: ".main3",
          start: " 10% ",
          end: "30%",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      gsap.to(".top-h ", {
        top: "80%",

        scrollTrigger: {
          trigger: ".main3",
          start: " 5% ",
          end: "30%",
          scrub: true,

          markers: true,
        },
      });

      gsap.to(".bottom-h ", {
        bottom: "-80%",

        scrollTrigger: {
          trigger: ".main3",
          start: " 5% ",
          end: "30%",
          scrub: true,

          markers: true,
        },
      });

      gsap.to(".contentgallery", {
        bottom: "-30%",
        position: "absolute",
        scrollTrigger: {
          trigger: ".main3",
          start: " 10% ",
          end: "60%",
          scrub: true,

          markers: true,
        },
      });
    });
  });

  return (
    <Layout className=" mainp container">
      <div className=" main3 row">
        <div className="top">
          <h1 className="top-h">GALLERY</h1>
        </div>
        <div className="center ">
          <div className="contentgallery">
            <h2>Our Gallery</h2>
            
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src="./cardphoto/thali.jpg"
                  className="card-img-top"
                  alt="..."
                />
            
            </div>
          </div>
          
        </div>
        <div className="bottom ">
          <h1 className="bottom-h">GALLERY</h1>
        </div>
      </div>
    </Layout>
  );
}
