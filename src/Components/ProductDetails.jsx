import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import { CartButton, ProdCard } from "./StyledComponents";

import { useEffect } from "react";
import axios from "axios";
import { API } from "./API";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`${API}/products/${id}`).then((res) => {
      setProduct([res.data]);
    });
  }, []);

  return (
    <>
      <h1>ProductDetails</h1>
      <br />
      <div id="header"></div>
      <ProdCard id="container">
        <div class="left_side_content">
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
        <div class="image_div">
          {product.map((item) => (
            <img src={item.imgUrl} alt={item.imgUrl} width="200px" />
          ))}
        </div>
        <div class="product_info_rightSide">
          {product.map((item) => (
            <div class="product_name">
              <h2>{item.prod_name}</h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxF6EZhPKz6EhL_9Zf3-E3nn6y-aDwf2jDnmfQmBdTZc7TtSM5zshsfsEboujZ_JJOmg&usqp=CAU"
                alt=""
              />
            </div>
          ))}
          {product.map((item) => (
            <p>{item.description}</p>
          ))}
          <p>₹ 6,990.00</p>
          <p>MRP incl. of all taxes</p>
          <div class="sizes">
            <p>M (UK M)</p>
            <p>L (UK L)</p>
            <p>XL (UK XL)</p>
          </div>
          {/* <div class="sizeScale">
            <p>FIND YOUR SIZE</p>
            <p>SIZE GUIDE</p>
          </div> */}
          <CartButton style={{ width: "18rem" }}>ADD TO BAG</CartButton>
          {/* <p>CHECK IN-STORE AVAILABILITY</p> */}
          <p>DELIVERY, EXCHANGES AND RETURNS</p>
        </div>
      </ProdCard>
    </>
  );
}
