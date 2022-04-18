import React from "react";
import "./CheckOut.css";
const CheckOut = () => {
  return (
    <div>
      <section className="component">
        <div className="credit-card">
          <h2>Credit card</h2>
          <form>
            <input type="text" placeholder="NAME" />
            <div className="line">
              <input type="text" placeholder="CARD" />{" "}
              <input type="text" placeholder="NUMBER" /> <input type="text" />
              <input type="text" />
            </div>
            <div className="line">
              <input className="litle" type="text" placeholder="EXPIRY" />
              <input className="tall" type="text" placeholder="CCV" />
            </div>
            <button type="submit" className="valid-button">
              PROCEED TO CHECKOUT
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CheckOut;
