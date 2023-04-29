import { Card, Pagination, Rate } from "antd";
import Stack from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../ulits/data";
import {
  Container,
  Description,
  Products as ProductsWrapper,
  Raten,
  Title,
  Wrapper,
} from "./stayle";

export const Shop = () => {
  const [stete, stetStete] = useState([]);
  const [page, setPage] = useState(products.slice(0, 3));
  const navigate = useNavigate();
  const Return = (e) => {
    stetStete(true);
    switch (e) {
      case 1: {
        return stetStete(products.slice(0, 8));
      }
      case 2: {
        return stetStete(products.slice(8, 16));
      }
      default:
        return "";
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Our Products</Title>
        <Description>
          Here you can check out our new products with fair price on rymo.
        </Description>
        <ProductsWrapper>
          {stete.length === 0
            ? page?.map((v) => (
                <div className="hover" key={v.id}>
                  <img src={v.featuredImage} alt={v.title} />
                  <Raten>
                    <Rate
                      allowHalf
                      defaultValue={v.rating[0]}
                      onChange={(e) => ({ value: e })}
                    />
                    <h4>{v.title}</h4>
                    <h4>${v.price}.00</h4>
                    <button onClick={() => navigate(`/shop/:${v.id}`)}>
                      BUY NOW
                    </button>
                  </Raten>
                </div>
              ))
            : stete.map((v) => (
                <div className="hover" key={v.id}>
                  <img src={v.featuredImage} alt={v.title} />
                  <Raten>
                    <Rate
                      allowHalf
                      defaultValue={v.rating[0]}
                      onChange={(e) => ({ value: e })}
                    />
                    <h4>{v.title}</h4>
                    <h4>${v.price}.00</h4>
                    <button onClick={() => navigate(`/shop/:${v.id}`)}>
                      BUY NOW
                    </button>
                  </Raten>
                </div>
              ))}
        </ProductsWrapper>
        <Pagination onChange={Return} defaultCurrent={1} total={20} />
      </Wrapper>
    </Container>
  );
};

export default Shop;
