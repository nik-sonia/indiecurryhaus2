import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP);

export default function Mapsection() {
  let mm = gsap.matchMedia();
  mm.add("(min-width:800px)", () => {
    useGSAP(() => {
      gsap.from(".c-map-card__details p ", {
        duration: 0.8,
        delay: 0.5,
        x: 20,
        stagger: 0.15,
        opacity: 0,
        scrollTrigger: {
          trigger: ".main2",
          start: " 10% ",
          end: "20%",
          scrub: true,
        },
      });

      gsap.from(".c-map-card__time  ", {
        duration: 0.8,
        delay: 0.5,
        x: 20,
        stagger: 0.15,
        opacity: 0,
        scrollTrigger: {
          trigger: ".main2",
          start: " 10% ",
          end: "20%",
          scrub: true,
        },
      });
    });
  });
  //  phone responsiveness
  mm.add("(max-width:768px)", () => {
    useGSAP(() => {
      gsap.from(".c-map-card__details p ", {
        duration: 0.8,
        delay: 0.5,
        y: 20,
        stagger: 0.15,
        opacity: 0,
        scrollTrigger: {
          trigger: ".main2",
          start: " 10% ",
          end: "20%",
          scrub: true,
        },
      });

      gsap.from(".main2 ", {
        marginBottom: -90,
        scrollTrigger: {
          trigger: ".main2",
          start: " 10% ",
          end: "20%",
          scrub: true,
        },
      });

      gsap.from(".c-map-card__time  ", {
        duration: 0.8,
        delay: 0.5,
        y: 20,
        stagger: 0.15,
        opacity: 0,
        scrollTrigger: {
          trigger: ".main2",
          start: " 10% ",
          end: "20%",
          scrub: true,
        },
      });
    });
  });

  return (
    <div className=" main2 container ">
      <div className="row">
        <div className="col">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1330.656660781391!2d12.184021693921649!3d48.16204228796171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4775f95a8710bfdd%3A0x798e1b7b5988a099!2sRute%205%2C%2083527%20Haag%20in%20Oberbayern!5e0!3m2!1sde!2sde!4v1726402537683!5m2!1sde!2sde"
            width={700}
            height={550}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="col">
          <div className="c-map-card__details">
            <div className="c-map-card__contact">
              <h3>Contact Details</h3>
              <div className="c-map-card__address">
                <p className="details">
                  Indie Curry Haus
                  <br />
                  Rute Haag,
                  <br />
                  OberBayern
                  <br />5
                </p>
              </div>
              <a
                href="https://www.google.com/maps/place/Rute+5,+83527+Haag+in+Oberbayern/@48.162014,12.185277,18z/data=!4m6!3m5!1s0x4775f95a8710bfdd:0x798e1b7b5988a099!8m2!3d48.1619958!4d12.1852877!16s%2Fg%2F11c5mvgwf5?hl=de&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener"
                onclick="window.track.outbound('Location Map', 'Shoreditch Google Map', this)"
              >
                View on Google Maps
              </a>
              <p className="c-map-card__phone details">
                <em>Tel:</em> 080729583718
              </p>
              <img src="/assets/img/icon-roundel.png" alt="" width={16} />
            </div>
            <div className="c-map-card__opening-times">
              <h3>
                ~<br />
                Opening Times
              </h3>
              <div className="c-map-card__time">
                <div>Monday – Sunday</div>
                <div>
                  11:00 - 14:30 Uhr
                  <em />
                  <div> 17:30 - 23:00 Uhr</div>
                </div>
                
                
              </div>
              <div className="c-map-card__time">
                <div>
                <i class="fa-solid fa-envelope"></i>
                  info@indiecurryhaushaag.de</div>
                {/* <div>
                  8am to 12am
                  <em />
                </div> */}
              </div>
              {/* <div className="c-map-card__time">
                <div>Saturday</div>
                <div>
                  9am to 12am
                  <em />
                </div>
              </div>
              <div className="c-map-card__time">
                <div>Sunday</div>
                <div>
                  9am to 11pm
                  <em />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
