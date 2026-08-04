"use client";

import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Handmade Candle",
    price: 19.99,
    image: "https://picsum.photos/400?random=1"
  },
  {
    id: 2,
    name: "Wooden Sign",
    price: 29.99,
    image: "https://picsum.photos/400?random=2"
  },
  {
    id: 3,
    name: "Crochet Bear",
    price: 24.99,
    image: "https://picsum.photos/400?random=3"
  },
  {
    id: 4,
    name: "Flower Vase",
    price: 34.99,
    image: "https://picsum.photos/400?random=4"
  }
];

export default function Products() {
  return (
    <main style={{ padding: 40 }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: 50,
          marginBottom: 40
        }}
      >
        Our Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: 25
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: "white",
              borderRadius: 15,
              overflow: "hidden",
              boxShadow: "0 5px 20px rgba(0,0,0,.1)"
            }}
          >
            <img
              src={product.image}
              style={{
                width: "100%",
                height: 250,
                objectFit: "cover"
              }}
              alt={product.name}
            />

            <div style={{ padding: 20 }}>
              <h2>{product.name}</h2>

              <h3
                style={{
                  color: "#d63384",
                  marginTop: 10
                }}
              >
                ${product.price}
              </h3>

              <button
                style={{
                  width: "100%",
                  marginTop: 20,
                  padding: 15,
                  background: "#d63384",
                  color: "white",
                  border: "none",
                  borderRadius: 10
                }}
              >
                Add To Cart
              </button>

              <Link href="/">
                <button
                  style={{
                    width: "100%",
                    marginTop: 10,
                    padding: 15,
                    borderRadius: 10
                  }}
                >
                  Back Home
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
