import Layout from "../layout/Layout";
import "remixicon/fonts/remixicon.css";
export default function Menu() {
  return (
    <Layout>
      <div className="  menuphoto">
        <div className="menu">
          <div className="">
            <a href="./haagmenu/haagmenu.pdf" type="application/pdf">
              {/* <embed
                  src="./haagmenu/haagmenu.pdf"
                  type="application/pdf"
                  width={"100%"}
                  height={"600px"}
                /> */}
              <button className="menubutton">
                MENU.PDF <i class="ri-arrow-down-double-line"></i>
              </button>

              
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
