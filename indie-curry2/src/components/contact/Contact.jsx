import Layout from "../layout/Layout";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP);

export default function Contact() {


  useGSAP(
    () => {
      
      gsap.from(".feedback  ", {
        duration: 0.8,
      delay: 0.5,
      x: 20,
      stagger: 0.15,
      opacity: 0,
        scrollTrigger:{
          trigger: ".contact",
          start:" 30% ",
          end:"10%",
          scrub:true,
         
         
        }
        
      });

      gsap.from(" span", {
        duration: 0.8,
        delay: 0.5,
        y: 50,
        stagger: 0.15,
        opacity: 0,
      });
      
    },
    
  );
  return (
    <Layout>
      <div className="container ">
        <div className="row contact-container">
          <div className="col">
            <div className="text-center my-5">
              <h1 data-aos="zoom-in">Contact </h1>
              <hr className="w-25 m-auto" />
            </div>
            <div className=" contact container col-xl-10 col-xxl-8 px-2 py-2">
              <div className="row align-items-center g-lg-5 py-5">
                <div className=" feedback col-lg-7 text-center text-lg-start">
                  <h5 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
                    <span>G</span>
                    <span>I</span>
                    <span>V</span>
                    <span>E</span> &nbsp;
                    <span>F</span>
                    <span>E</span>
                    <span>E</span>
                    <span>D</span>
                    <span>B</span>
                    <span>A</span>
                    <span>C</span>
                    <span>K</span>
                    
                  </h5>
                  <p className="col-lg-10 fs-4">
                    Good. Bad. Ugly. We’d love to hear it. If it’s good, we’ll
                    feel warm inside and be glad that we made you happy. If it’s
                    bad (or god forbid, ugly!) then we’ll earnestly convene
                    huddles, figure out what happened, and put it right.
                  </p>
                  <div className="contact-details d-flex flex wrap gap-5 text-center m-4">
                    <div>
                      <a href="">
                        <img
                          className="c-footer__icon"
                          src="https://images.prismic.io/dishoom/5d099bef447e72fa827c5c8c790aa9f722e3d91c_fb.png?auto=compress,format"
                          alt=""
                          width={16}
                        />
                      </a>

                      <p>Follow us</p>
                    </div>
                    <div>
                      <a href="">
                        <img
                          className="c-footer__icon"
                          src="https://images.prismic.io/dishoom/2234a1e2883bcb0c02d9b3f77a695877990895a6_twitter.png?auto=compress,format"
                          alt=""
                          width={16}
                        />
                      </a>

                      <p>Follow us</p>
                    </div>
                    <div>
                      <a href="">
                        <img
                          className="c-footer__icon"
                          src="https://images.prismic.io/dishoom/4cd565711b3a68c09240d5ad8337149b5fba04b8_insta.png?auto=compress,format"
                          alt=""
                          width={16}
                        />
                      </a>

                      <p>Follow us</p>
                    </div>
                  </div>
                  <div className="contact-details d-flex flex wrap gap-5 text-center m-4">
                    <div className="phoneno ">
                      <a href="">
                        <i
                          style={{ color: "#383a3b" }}
                          class="fa-solid fa-square-phone "
                        ></i>
                      </a>
                      <p>080729583718</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-10 mx-auto col-lg-5 ">
                  <form className="p-4 p-md-5 form-border">
                    <div className="form-floating mb-3 ">
                      <input
                        type="NAME"
                        className="form-control"
                        id="floatingInput"
                        placeholder="YOUR NAME"
                      />
                      <label htmlFor="floatingInput">YOUR NAME</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="EMAIL"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="EMAIL@GMAI.COM"
                      />
                      <label htmlFor="floatingPassword">EMAIL</label>
                    </div>
                    <div class="form-floating mb-3">
                      <textarea
                        class="form-control"
                        placeholder="OPTIONAL.. BUT APPERECIATED"
                      ></textarea>
                      <label for="floatingTextarea">MESSAGE</label>
                    </div>
                    <div className="checkbox mb-3">
                      <label>
                        <input type="checkbox" defaultValue="remember-me" />{" "}
                        Remember me
                      </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-dark" type="submit">
                      SEND
                    </button>
                    <hr className="my-4" />
                    <small className="text-body-secondary">
                      Thanks for giving us Feedback!
                    </small>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
