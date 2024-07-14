import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({item}) => {
  const navigate = useNavigate();

  function handleNavigation(id){
    navigate(`/products/${id}`)
  }

  return (
    <div
      data-testid="product-card"
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
        maxWidth: "300px",
        position: "relative",
      }}
    >
      <div style={{ position: "relative", paddingBottom: "100%" }}>
        <img
          data-testid="product-image"
          src={item.image}
          alt="Product Image"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <h3
        data-testid="product-title"
        style={{ margin: "10px 0", fontSize: "1.2rem" }}
      >
        {item.title}
      </h3>
      <p
        data-testid="product-price"
        style={{ margin: "0", fontWeight: "bold" }}
      >
        ${item.price}
      </p>
      <button data-testid="more-details-button" onClick={()=>{handleNavigation(item.id)}} >More Details</button>
    </div>
  );
};

export default ProductCard;
