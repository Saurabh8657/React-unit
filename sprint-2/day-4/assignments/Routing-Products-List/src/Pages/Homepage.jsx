import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  function handleNavigation(){
    navigate(`/products`)
  }
  return (
    <div
      data-testid="home-page"
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f0f0",
        margin: 0,
        padding: 0,
      }}
    >
      <header
        style={{
          backgroundColor: "#fff",
          padding: 20,
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h1 style={{ margin: 0, fontSize: 36, color: "#333" }}>HOMEPAGE</h1>
        </div>
      </header>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: 20,
          height: "100vh",
        }}
      >
        <h2>New Arrivals</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 300,
              backgroundColor: "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              margin: 20,
            }}
          >
            <img
              style={{ height: 200, objectFit: "cover" }}
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt="Product 1"
            />
            <h3 style={{ fontSize: 24, fontWeight: "bold", margin: 10 }}>
              Product 1
            </h3>
            <p
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#333",
                margin: 10,
              }}
            >
              $19.99
            </p>
            <p style={{ margin: 10, lineHeight: 1.4 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              venenatis magna eget augue pharetra, eu egestas urna vestibulum.
            </p>
          </div>
          <div
            style={{
              width: 300,
              backgroundColor: "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              margin: 20,
            }}
          >
            <img
              style={{ height: 200, objectFit: "cover" }}
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              alt="Product 2"
            />
            <h3 style={{ fontSize: 24, fontWeight: "bold", margin: 10 }}>
              Product 2
            </h3>
            <p
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#333",
                margin: 10,
              }}
            >
              $29.99
            </p>
            <p style={{ margin: 10, lineHeight: 1.4 }}>
              Donec eget mauris tincidunt, posuere lectus sit amet, lobortis
              libero. Aenean quis lectus euismod, eleifend odio id, molestie
              sapien.
            </p>
          </div>
        </div>
        <button
          data-testid="view-products-button"
          style={{
            display: "inline-block",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            fontSize: 18,
            fontWeight: "bold",
            borderRadius: 5,
            marginTop: 20,
            textDecoration: "none",
            cursor: "pointer",
          }}
          onClick={()=>{handleNavigation()}}
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Homepage;
