import Layout from "../layout/Layout";

export default function Reservation() {
  return (
    <Layout>
      <div className="container contactimage my-5 bg-">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Reservation
            </h1>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <form
                className="px-md-2"
                method="POST"
                data-netlify="true"
                name="contact"
                onSubmit={"submit"}
              >
                <input
                  type="hidden"
                  form="form-name"
                  defaultValue='{"contact"}'
                />

                <div data-mdb-input-init="" className="form-outline mb-2">
                  <label className="form-label  mb-1" htmlFor="form3Example1q">
                    Name
                  </label>
                  <input
                    type="text"
                    id="form3Example1q"
                    className="form-control"
                    required
                    name="name"
                  />
                </div>

                <div data-mdb-input-init="" className="form-outline mb-4">
                  <label className="form-label  mb-1" htmlFor="form3Example1q">
                    email
                  </label>
                  <input
                    type="text"
                    id="form3Example1q"
                    className="form-control"
                    required
                    name="email"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <div
                      data-mdb-input-init=""
                      className="form-outline datepicker"
                    >
                      <label
                        htmlFor="exampleDatepicker1"
                        className="form-label"
                      >
                        Select a date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="exampleDatepicker1"
                        required
                        name="date"
                      />
                    </div>
                  </div>

                  <div className="col-md-6 mb-4">
                    <div
                      data-mdb-input-init=""
                      className="form-outline datepicker"
                    >
                      <label
                        htmlFor="exampleDatepicker1"
                        className="form-label"
                      >
                        Select a Time
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="exampleDatepicker1"
                        required
                        name="time"
                      />
                    </div>
                  </div>

                  <div className="col-md-6 mb-2">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="floatingTextarea"
                      name="message"
                    ></textarea>
                    <label for="floatingTextarea"></label>
                  </div>
                </div>
                <div className="mb-4">
                  <select
                    className="p-2 rounded-1"
                    data-mdb-select-init=""
                    name="number"
                  >
                    <option value={1} disabled="">
                      How Many Peoples
                    </option>
                    <option value={2}>1</option>
                    <option value={2}>2</option>
                    <option value={2}>3</option>
                    <option value={2}>4</option>
                    <option value={2}>5</option>
                    <option value={2}>6</option>
                    <option value={2}>7</option>
                    <option value={2}>8</option>
                    <option value={2}>9</option>
                    <option value={2}>10</option>
                  </select>
                </div>
                <button
                  type="submit"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-success btn-lg mb-1"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="./contactphoto/contact-me.svg"
              alt=""
              width={720}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
