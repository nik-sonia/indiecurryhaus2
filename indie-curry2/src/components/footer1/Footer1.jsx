export default function Footer1() {
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom">
   
      <div className="col-lg-6 mx-auto"></div>
      <div className="overflow-hidden" style={{ maxHeight: "80vh" }}>
        <div className="container px-5">
          <img
            src="./footerimage/footerimage.avif"
            className="img-fluid border rounded-3 shadow-lg mb-4"
            alt="Example image"
            width={900}
            height={800}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
