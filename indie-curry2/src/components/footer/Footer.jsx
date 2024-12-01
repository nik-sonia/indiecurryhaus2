import Layout from "../layout/Layout"

export default function Footer() {
  return (
   
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="c-footer__social">
            <div>
              {/* &copy; 2019 Dishoom LTD &middot; */}
              {/* <a href="/privacy-policy" data-barba-prevent= "">
                Privacy policy
              </a>
              &nbsp;&nbsp;
              <a
                href="https://store.dishoom.com/shipping-policy"
                data-barba-prevent=""
              >
                Shipping policy
              </a> */}
              <a href="">
              <img src="./logo/logo2.svg" alt="" height={80} width={80} />
              </a>
            </div>
            <div>
              <a
                className="c-footer__social-link"
                href="https://facebook.com/dishoomlondon"
                target="_blank"
                rel="noopener"
                onclick="window.track.outbound('Footer Social Link', '', this)"
                data-barba-prevent=""
              >
                <img
                  className="c-footer__icon"
                  src="https://images.prismic.io/dishoom/5d099bef447e72fa827c5c8c790aa9f722e3d91c_fb.png?auto=compress,format"
                  alt=""
                  width={16}
                />
              </a>
              <a
                className="c-footer__social-link"
                href="twitter"
                target="_blank"
                rel="noopener"
                onclick="window.track.outbound('Footer Social Link', '', this)"
                data-barba-prevent=""
              >
                <img
                  className="c-footer__icon"
                  src="https://images.prismic.io/dishoom/2234a1e2883bcb0c02d9b3f77a695877990895a6_twitter.png?auto=compress,format"
                  alt=""
                  width={16}
                />
              </a>
              <a
                className="c-footer__social-link"
                href="facebook"
                target="_blank"
                rel="noopener"
                onclick="window.track.outbound('Footer Social Link', '', this)"
                data-barba-prevent=""
              >
                <img
                  className="c-footer__icon"
                  src="https://images.prismic.io/dishoom/4cd565711b3a68c09240d5ad8337149b5fba04b8_insta.png?auto=compress,format"
                  alt=""
                  width={16}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}
