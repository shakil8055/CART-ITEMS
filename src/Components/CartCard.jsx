import React, { useState, useContext } from "react";
import { UserContext } from "../App";

function CartCard() {
  let { product, setProduct } = useContext(UserContext);
  return (
    <>
      <div className="container">
        {product.map((e, i) => {
          const discountPrice = Math.round(e.price * (e.discountPercentage / 100));
          const discountedPrice = (e.price-discountPrice);
         
          const [quantity, setQuantity] = useState(1);

          const increase = () => {
            setQuantity(quantity => quantity + 1, );
          };

          const decrease = () => {
            setQuantity(quantity => Math.max(quantity  - 1, 1));
          };
          
          return (
            <>
              <div
                key={i}
                className="card mb-5 border border-secondary"
                style={{ minWidth: "100%", maxWidth: "540px" }}
              >
                <div className="row g-0">
                  <div className="col-md-4 cardimg">
                    <img
                      src={e.image}
                      className="img-fluid rounded-start cardImage "
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body px-3">
                      <div className="top">
                        <div className="top-header d-flex justify-content-between align-items-center">
                          <h5 className="card-title fw-bolder">{e.title}</h5>
                          <h4 className="card-title">₹{e.price}</h4>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="card-text">{e.description}</p>
                          <p className="card-text text-success text-end">
                            Discount Offer : {e.discountPercentage}%
                          </p>
                        </div>
                        
                        <p className="card-text">Ratings : {e.rating}/5</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="card-text">
                            <small className="text-muted">
                              Stock left: {e.stock}
                            </small>
                          </p>
                          <div className="d-flex flex-row justify-content-between align-items-center">
                            <button
                              type="button"
                              className="btn w-50 btn-sm btn-outline-danger"
                              style={{ marginRight: "8px" }}
                              onClick={() => {
                                decrease();
                              }}
                            >
                              {" "}
                              -{" "}
                            </button>
                            <div className="py-1 quantityText">{quantity}</div>
                            <button
                              type="button"
                              className="btn w-50 btn-sm btn-outline-success"
                              style={{ marginLeft: "8px" }}
                              onClick={() => {
                                increase();
                              }}
                            >
                              {" "}
                              +{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="bottom">
                      <div className="d-flex justify-content-between align-items-center">
                      <p className="bd-highlight fw-bold fst-italic">Inclusive of all taxes</p>
                          <p className="fw-light ">(Free Shipping)</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          Original Price (x1):
                          <p className="card-text">₹{e.price } </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          Discount Amount :
                          <p className="card-text text-success">
                            {" "}
                            - ₹{discountPrice }
                          </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          Price - After discount :
                          <p className="card-text">
                          ₹{discountedPrice}
                          </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          Total Amount To be paid :
                          <h5 className="card-text">₹{discountedPrice * quantity}</h5>
                        </div>
                      </div>
                      
                      <button
                        type="button"
                        className="btn btn-success float-end my-3"
                      >
                        Proceed to pay
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger my-3"
                        >
                        Remove From Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default CartCard;