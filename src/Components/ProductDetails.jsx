import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import { CartButton, ProdCard } from "./StyledComponents";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addedToCart, gettingProductDetails } from "../Redux/Product/action";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { _id, username } = useSelector((store) => store.login);

  const { id } = useParams();
  const [product, setProduct] = useState({});

  console.log(product, "product");

  useEffect(() => {
    if (username !== "") {
      dispatch(gettingProductDetails(id, setProduct));
    } else {
      navigate("/login");
    }
  }, []);

  const handleCart = (item_id) => {
    dispatch(addedToCart(_id, item_id));
  };

  return (
    <>
      <h1>ProductDetails</h1>
      <br />
      <div id="header"></div>
      <ProdCard id="container">
        <div className="left_side_content">
          <h4>MATERIALS, CARE AND ORIGIN</h4>
          <h3>MATERIALS</h3>
          <p>
            We work with monitoring programmes to ensure compliance with safety,
            health and quality standards for our products.
          </p>
          <p>
            The Green to Wear 2.0 standard aims to minimise the environmental
            impact of textile manufacturing. To that end, we have developed
            Inditex’s The List programme, which helps guarantee both that
            production processes are
          </p>
          <p>View more</p>
        </div>
        <div className="image_div">
          <img src={product.imgUrl} alt={product.imgUrl} width="200px" />
        </div>
        <div className="product_info_rightSide">
          <div className="product_name">
            <h2>{product.prod_name}</h2>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxF6EZhPKz6EhL_9Zf3-E3nn6y-aDwf2jDnmfQmBdTZc7TtSM5zshsfsEboujZ_JJOmg&usqp=CAU"
              alt=""
            />
          </div>
          <p>{product.description}</p>
          <p>Price : ₹{product.price}</p>
          <p>strikedOffPrice : ₹{product.strikedOffPrice}</p>
          <p>MRP incl. of all taxes</p>
          <div className="sizes">
            <p>M (UK M)</p>
            <p>L (UK L)</p>
            <p>XL (UK XL)</p>
          </div>
          <CartButton
            style={{ width: "18rem" }}
            onClick={() => handleCart(product.item_id)}
          >
            Add To Cart
          </CartButton>
          <p>DELIVERY, EXCHANGES AND RETURNS</p>
        </div>
      </ProdCard>
    </>
  );
}
