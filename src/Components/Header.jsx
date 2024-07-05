import React, { useState, useContext } from "react";
import { UserContext } from "../App";

function Header() {
  let { total, setTotal} = useContext(UserContext);
  return (
    <>       
      <div>

            <h1 className="text-decoration-underline">CART ITEMS</h1>
              <div className="d-flex justify-content-between align-items-center">
                          Total Cart Value:
                          <p className="card-text">₹{}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                          Shipping Charges:
                          <p className="card-text">FREE{}</p>
              </div>
            <hr></hr>
            <div className="d-flex justify-content-between align-items-center">
              <h4>Total Amount To Be Paid:</h4>
              <h4 className="card-text">₹{}</h4>
              </div>
              
                <button
                type="button"
                className="btn btn-success mr-10 col-xs-2 margin-left btn-spacing float-end my-3 "
                >
                        Proceed to pay
              </button>
              
              <button
                type="button"
                className="btn btn-danger mr-10 col-xs-2 margin-left float-end  my-3 "
                >
                        Clear Cart
              </button> 
      </div>
    </>
  );
}

export default Header;