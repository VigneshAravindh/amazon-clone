import React from "react";
import "./Home.css";
import Product from "./Product";

const products = [
  {
    id: "1",
    title: "Flow with Life: all about nature's magic",
    price: 98.96,
    rating: 3,
    image: "images/book.webp"
  },
  {
    id: "2",
    title: "Arav Ecomm: tablet pro [32Gb RAM,512 GB ROM, Arav v8 processor, QHD Display, 100MP rear camera]",
    price: 78999.0,
    rating: 4,
    image: "images/tablet.webp"
  },
  {
    id: "3",
    title: "Arav amoled QHD+ display with Arav v10 powerful processor (vicky arav special edition)",
    price: 28999.99,
    rating: 3,
    image: "images/watch.webp"
  },
  {
    id: "4",
    title: "Arav SmartPhone (12th generation) | 12GB RAM | 256GB ROM | v12 Processor | Vpen | 200X Zoom | Super Retina Display, MidNight Black",
    price: 129988.99,
    rating: 5,
    image: "images/phone.webp"
  },
  {
    id: "5",
    title: "New Arav Laptop Pro VA3 Chip (15.6-inch, Wi-Fi, 2TB) - Silver (3rd Generation)",
    price: 79990.99,
    rating: 5,
    image: "images/laptop.webp"
  },
  {
    id: "6",
    title: "Arav 55inch HDR+ SmartAi LED Gaming Monitor - Super WQHD 5120 x 1440",
    price: 1094.98,
    rating: 4,
    image: "images/tv.webp"
  }
];

const Home = () => {
  const rows = [
    products.slice(0, 2),
    products.slice(2, 5),
    products.slice(5, 6)
  ];

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="images/banner.png"
          alt=""
        />
        {rows.map((row, i) => (
          <div key={i} className="home__row">
            {row.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
