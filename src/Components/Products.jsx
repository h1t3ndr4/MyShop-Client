import React, { useEffect } from "react";
import {
  ProdCard,
  ProdBorder,
  SelectTag,
  OptionTag,
  CartButton,
  DetailsLink,
} from "./StyledComponents";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllProductsFunc,
  getFilterData,
  getAllProducts,
  addedToCart,
} from "../Redux/Product/action";
import { Link } from "react-router-dom";

export default function Products() {
  localStorage.setItem(
    "user",
    JSON.stringify({
      _id: "",
      username: "",
      password: "",
      email: "",
      token: "",
    })
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { _id, username } = useSelector((store) => store.login);
  const { products } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getAllProductsFunc());
  }, []);

  const handleSort = (value) => {
    let newData = [];
    newData = products;
    if (value === "sortNameAsc") {
      newData.sort((a, b) => {
        if (a.prod_name > b.prod_name) {
          return 1;
        }
        return -1;
      });
    } else if (value === "sortNameDes") {
      newData.sort((a, b) => {
        if (a.prod_name < b.prod_name) {
          return 1;
        }
        return -1;
      });
    } else if (value === "sortPriceAsc") {
      newData.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        return -1;
      });
    } else if (value === "sortPriceDes") {
      newData.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        return -1;
      });
    }
    dispatch(getAllProducts(newData));
  };

  const handleCart = (item_id) => {
    dispatch(addedToCart(_id, item_id));
  };

  const handleFilter = (value) => {
    dispatch(getFilterData(value));
  };

  return (
    <>
      {username !== "" ? (
        <>
          <div>
            <SelectTag
              name="sort"
              id="sort"
              onChange={(e) => handleSort(e.target.value)}
            >
              <OptionTag value="sortNameAsc">Sort By Name Ascending</OptionTag>
              <OptionTag value="sortNameDes">Sort By Name Descending</OptionTag>
              <OptionTag value="sortPriceAsc">
                Sort By Price Ascending
              </OptionTag>
              <OptionTag value="sortPriceDes">
                Sort By Price Descending
              </OptionTag>
            </SelectTag>
            <SelectTag
              name="Categories"
              id="filter"
              onChange={(e) => handleFilter(e.target.value)}
            >
              <OptionTag value="all">All</OptionTag>
              <OptionTag value="men">Men</OptionTag>
              <OptionTag value="women">Women</OptionTag>
            </SelectTag>
          </div>
          <ProdCard className="ProductsContainer">
            {products.map((item) => (
              <ProdBorder key={item._id}>
                <Link to={`/${item._id}`}>{item.name}</Link>
                <h5>{item.prod_name}</h5>
                <img src={item.imgUrl} alt={item.imgUrl} width="200px" />
                <h5>Price : {item.price}</h5>
                <h5>Discount : {item.prod_discount}</h5>
                <h5>Striked Off Price : {item.strikedOffPrice}</h5>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CartButton onClick={() => handleCart(item._id)}>
                    Add To Cart
                  </CartButton>
                  <CartButton>
                    <DetailsLink to={`/productdetails/${item._id}`}>
                      Details
                    </DetailsLink>
                  </CartButton>
                </div>
              </ProdBorder>
            ))}
          </ProdCard>
        </>
      ) : (
        <>{navigate("/login")}</>
      )}
    </>
  );
}
