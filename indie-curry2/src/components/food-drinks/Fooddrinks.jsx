export default function Fooddrinks() {
  return (
    <div className="container text-center">
      <div className="text-center my-5">
        <h2 data-aos="zoom-in">Food & Drink at Indie Curry Haus</h2>
        <hr className="w-25 m-auto" />
      </div>

      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-body">
              {/* <h5 className="card-title ">Card title</h5> */}

              <p className="card-text">
                BEGIN YOUR DAY AT INDIE CURRY HAUS with lUNCH, which might be a
                Naan Roll, a Chicken Tikka Masala or a kalmi Kebab, Roomali
                Rolls and Salad Plates, or linger with a feast. Refresh your
                afternoon with a drop of Chai and a small plate or two. Dine
                early or dine late. Or just join us for a tipple – perhaps an
                India Gimlet, a Permit Room Old-fashioned, or our very good
                RESTAURANT IPA?
              </p>

              <img
                src="./cardphoto/food.avif"
                class="img-fluid"
                alt="..."
              ></img>
            </div>
            <p>
              Welcome to Indie Curry Haus, the culinary haven nestled in the
              heart of vibrant Bricklane! Get ready to embark on an
              extraordinary gastronomic adventure and indulge in the most
              exquisite Indian curry this side of town.
            </p>
            <p>
              We take immense pride in curating a menu that showcases the very
              essence of India&#8217;s culinary heritage. Our team of skilled
              chefs, armed with secret spice blends and time-honored recipes,
              craft each dish with utmost care and passion. The result? An
              explosion of flavors that will transport your taste buds to new
              realms of delight.
            </p>
            <p> </p>
          </div>
        </div>
        {/* 2 cart */}
        <div className="col ">
          <div className="diamond-border ">
            <h3 className="c-card__heading">
              ~
              <br />
              Menus
            </h3>
            <div className="c-card__body" data-barba-prevent="all">
              <p>
                Indian breakfast, lunch, afternoon chai, dinner and late
                tipples.
              </p>
            </div>
            <a>
              <span>
                <button type="button" class="btn btn-secondary reservation">
                  <span> <a className="menulink" href="./haagmenu/haagmenu.pdf" type="application/pdf">See The Menus</a></span>
                </button>
              </span>
            </a>
          </div>
          <p className="card-text my-4">
            Start Of Your Day One of India's most popular desserts and is often
            referred to as 'Indian donuts. 'This delectable treat consists of
            soft, melt-in-your-mouth, fried dumplings soaked in rose-flavored
            syrup .
          </p>
          <img
            src="./cardphoto/gulabjamun2.jpg"
            class="img-thumbnail"
            alt="..."
          ></img>
        </div>
        <div className="col">
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-body">
              {/* <h5 className="card-title ">Card title</h5> */}

              <p className="card-text">
                Interestingly, thali is a Hindi word for plate. A thali is
                usually accompanied by small round bowls called katoris, though
                there are also thalis made with built-in compartments for
                different dishes, much like a bento box. In his book “The Story
                of Our Food,” K. T. Achaya writes that in prehistoric India,
                food was eaten on disposable plates made of leaves, such as a
                large banana leaf, stitched-together dried banyan leaves, or
                leaves from palas trees. Even the katoris were made of leaves.
                Banana leaves are still prevalent in South India, especially in
                temples and at wedding feasts, while palas leaves are more
                common in North and Central India. As for the food it contains,
                a thali is a complete meal consisting of 10 or more dishes,
                depending on which part of India you’re in.
              </p>

              <img
                src="./cardphoto/thali.jpg"
                class="img-fluid"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
