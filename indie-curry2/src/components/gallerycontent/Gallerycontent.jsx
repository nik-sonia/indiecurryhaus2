export default function Gallerycontent() {
  return (
    <div className="container gallery-content my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg border border-black">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            Indie Curry Haus verandha
          </h1>
          <p className="lead">
            Outside Indie curry haus, on the Verandah, the serious business of
            lounging is in progress. People spill out from the shadows, and laze
            gratefully in the sunlight. Ice cubes clink inside crystal tumblers.
            Sunlight warms the brocade fabrics and carved wood of the heavy
            antique furniture. Shelves – filled with well-thumbed books – sit
            beside faded old photographs. The armchair creaks as someone settles
            further into its inviting bulk, sighing with contentment.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"></div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            className="rounded-lg-3"
            src="./cardphoto/verandha.avif"
            alt=""
            width={720}
          />
        </div>
      </div>
      {/* second */}
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg flex-lg-row-reverse my-5 border border-black">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            Welcome to the Permit Room
          </h1>
          <p className="lead">
            Since 1949, and to this very day Bombay has been under a state of
            prohibition. Set apart from a family room, there is a special place
            where only permit holders may consume liquor which has come to be
            known unofficially as a Permit Room. Our Permit Room – the bar
            within our Shoreditch café serves the most delicious and sincere old
            cocktails, recalling the days before Independence, such as Gimlets,
            Juleps and Sours; Fizzes and Old-Fashioneds, and a Bombay Presidency
            Punch.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"></div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg ">
          <img
            className="rounded-lg-3"
            src="./galleryphotos/3.JPG"
            alt=""
            width={720}
          />
        </div>
      </div>
    </div>
  );
}
