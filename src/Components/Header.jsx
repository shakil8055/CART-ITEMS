import React from "react";
import { useUserContext } from "../ContextProvider";

function Header() {
  const { cardQuantity, cardAmount } = useUserContext();

  return (
    <>
      <header>
         <>       
      <div>
      {/* <div className="col">No of items in Cart: {cardQuantity}</div> */}
              <div className="d-flex justify-content-between align-items-center">
                          Total Cart Value:
                          <p className="card-text">₹{ (cardAmount).toFixed(2)}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                          Shipping Charges:
                          <p className="card-text">FREE{}</p>
              </div>
            <hr></hr>
            <div className="d-flex justify-content-between align-items-center">
              <h4>Total Amount To Be Paid:</h4>
              <h4 className="card-text">₹{ (cardAmount).toFixed(2)}</h4>
              </div>
              
                <button
                type="button"
                className="btn btn-success mr-10 col-xs-2 mx-3 float-end m-3 "
                >
                        Proceed to pay
              </button>
              
              <button
                type="button"
                className="btn btn-danger mr-10 col-xs-2  float-end  my-3 "
                >
                        Clear Cart
              </button> 
      </div>
    </>
      </header>
    </>
  );
}

export default Header;