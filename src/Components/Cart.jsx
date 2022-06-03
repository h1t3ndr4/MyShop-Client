import React, { useEffect } from "react";
import { useState } from "react";
import {
  ProdCard,
  ProdBorder,
  CartButton,
  CheckOutDiv,
  QntyP,
  QntyFlex,
  QuntyBtn,
  Summary,
} from "./StyledComponents";
import { useSelector, useDispatch } from "react-redux";
import { gettingCartItems, removeFromCart } from "../Redux/Product/action";
import StripeCheckout from "react-stripe-checkout";

export default function Cart() {
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  const { _id } = useSelector((store) => store.login);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    dispatch(gettingCartItems(_id, setCart));
  }, []);

  const removeCartItem = (item_id) => {
    dispatch(removeFromCart(_id, item_id, setCart));
  };
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += +cart[i].price;
  }

  let gst = (total * count * 12) / 100;
  let deliveryCharge = "Free";

  // const priceForStripe = 100;
  const publishableKey =
    "pk_test_51Kz2CTSGY3GgiPDfEd0COWD3O4gqHcaycYpqdxt9ejxmEG9Fy4ohjMwPHuwrFJ3Ve4QFn2a3khN7ODIWGRKBKbUS00mxLHmokC";

  const onToken = (token) => {
    alert("Payment Successful");
    setCart([]);
    setCount([]);
  };

  return (
    <>
      <h1>Cart</h1>
      <ProdCard className="ProductsContainer">
        {cart.length > 0 &&
          cart.map((item) => (
            <ProdBorder key={item._id}>
              <h5>{item.prod_name}</h5>
              <img src={item.imgUrl} alt={item.imgUrl} width="200px" />
              <div>
                <QntyFlex>
                  <QuntyBtn
                    onClick={() => {
                      if (count > 1) {
                        setCount(count - 1);
                      }
                    }}
                  >
                    -
                  </QuntyBtn>
                  <QntyP>{count}</QntyP>
                  <QuntyBtn
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </QuntyBtn>
                </QntyFlex>
              </div>
              <h5>Price : {item.price}</h5>
              <h5>Discount : {item.prod_discount}</h5>
              <h5>Striked Off Price : {item.strikedOffPrice}</h5>
              <CartButton onClick={() => removeCartItem(item._id)}>
                Remove
              </CartButton>
            </ProdBorder>
          ))}
      </ProdCard>

      <CheckOutDiv>
        <h1>Order Summary</h1>
        <Summary>
          <div>Cart Sub Total : </div>
          <div>₹{total * count}</div>
        </Summary>
        <Summary>
          <div>Delivery Charges :</div>
          <div>{deliveryCharge}</div>
        </Summary>
        <Summary>
          <div>GST 12% :</div>
          <div> ₹{gst.toFixed()}</div>
        </Summary>
        <Summary>
          <div> Total Cart Amount :</div>
          <div> ₹{((total + gst) * count).toFixed()}</div>
        </Summary>
      </CheckOutDiv>

      <StripeCheckout
        style={{ width: "10%" }}
        label={`Pay Now ₹${((total + gst) * count).toFixed()}`}
        name="MyShop"
        currency="INR"
        billingAddress
        shippingAddress
        description={`Your total is ₹${((total + gst) * count).toFixed()}`}
        // amount={priceForStripe}
        panelLabel={`Pay Now ₹${((total + gst) * count).toFixed()}`}
        token={onToken}
        stripeKey={publishableKey}
      />
      <p>Credentials for payment</p>
      <p>Card : 4242 4242 4242 4242</p>
      <p>Any future date</p>
      <p>Any three digits</p>
      <a href="https://stripe.com/docs/testing?numbers-or-method-or-token=card-numbers">
        <p>More credentails to test</p>
      </a>
    </>
  );
}
