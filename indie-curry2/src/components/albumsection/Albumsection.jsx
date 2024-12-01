export default function Albumsection() {
  return (
    <div className="container text-center card border-bottom border-black ">
      <div className="row">
        <div className="col ">
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-body">
           
              <p className="card-text">
                ONE DAY, AN eccentric old Indian Restaurant (born circa 1930,
                Punjab), creaking slightly at the seams, made the long trip from
                Bombay in 1970 to Munich in 2012. Tired from the long journey,
                it shuffled into an empty space in Indie curry haus and made
                itself comfortable. This old Restaurant had for some time been
                maintaining correspondence with its slightly more showy cousin
                who had made a similar trip and had found a home in Covent
                Garden.
              </p>
              <p>
                However, while the cousin in Covent Garden had worked hard to
                polish, primp and style itself, this Restaurant was less
                concerned. It knew instinctively that the layers of imperfection
                and eccentricity built up over the many years of serving
                customers in India weren’t merely clutter to be cleaned up and
                scratches to be polished out, but were in fact its very memory
                and character. It decided to leave its disheveled corners right
                where they were, as little reminders of home.
              </p>
              <img
                src="./galleryphotos/17.JPG"
                class="img-fluid"
                alt="..."
              ></img>
            </div>
            <p>
              Welcome to Taste of Jaipur, the culinary haven nestled in the
              heart of vibrant Bricklane! Get ready to embark on an
              extraordinary gastronomic adventure and indulge in the most
              exquisite Indian curry this side of town.
            </p>
           
          </div>
        </div>
        {/* secondd card */}
        <div className="col ">
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 ">Card subtitle</h6> */}
              <p className="card-text">
                Gradually, as it grew to know and love its new community, it
                realised that it felt very much at home in it. The customers
                enjoyed hearing its stories of old Bombay, many of which were
                even true. They liked the faded pictures of the relatives on the
                walls. They smiled as they gradually grew to know the quirks of
                this old Café – which seemed constantly to be hankering after a
                lost mid-century Bombay. They seemed to care little that the
                shininess of the Covent Garden cousin was absent.
              </p>
              <img src="./cardphoto/chai.jpeg" class="img-fluid  "></img>
              <p className="card-text">
                And most of all the Café loved serving food and drink with so
                much enthusiasm. The food which came quickly out of the open
                kitchen. The endless cups of chai, the best thing to revive
                energy levels on a wilted Tuesday afternoon. The bar, serving
                the most delicious and sincere old cocktails – Flips, Gimlets,
                Juleps and Sours.
              </p>
            </div>
          </div>
        </div>
        {/* 3rd card */}
        <div className="col my-2">
          <div className="diamond-border">
            <h3 className="c-card__heading">
              ~
              <br />
              Reservations
            </h3>
            <div className="c-card__body" data-barba-prevent="all">
              <p>
                Indie curry haus is mostly a walk-in restaurant – simply come along
                and walk-in. However, if you&#39;d like to make a reservation,
                groups of any size may book during the day. After 6pm, we accept
                bookings by phone.
              </p>
            </div>
            <a>
              <span>
                <button type="button" class="btn btn-secondary reservation">
                  <span> <a className="reservelink" href="/reservation">Book a Reservation </a></span>
                </button>
              </span>
            </a>
          </div>
          <img
            src="./galleryphotos/6.JPG"
            class="img-fluid my-4 "
            alt="..."
          ></img>
          <p>
            Throughout, the Restaurant smiled inwardly to itself. It was never
            happier than when it was being true to itself and serving its guests
            – sharing its love for punjab, serving its food, telling its
            stories. And before too long, the Café began to feel as if it had
            always been there wedged comfortably into Boundary Street,
            accumulating its own East bayern layers.
          </p>
        </div>
      </div>
    </div>
  );
}
