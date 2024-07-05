import React, { useEffect, useState } from "react";
import CartCard from "./Components/CartCard";
import Header from "./Components/Header"



export const UserContext = React.createContext();

function App() {

  const [product, setProduct] = useState([
    {
      id: 1,
      title: "iPhone 15 Pro",
      description: "Apple iPhone 15 Pro (512 GB) - White Titanium",
      price: 119990 , 
      discountPercentage: 8,
      rating: 4.69,
      stock: 16,
      brand: "Apple",
      category: "smartphones",
      image: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/Apple-iphone-15-pro-max-white-titanium-1TB-Back-Front-View.png",
      
    },
    {
      id: 2,
      title: "Google pixel 8 Pro",
      description:"Pixel 8 Pro 5G Smartphone (Bay Blue, 12GB RAM+ 128GB Storage)",
      price: 69990,
      discountPercentage: 12,
      rating: 4.44,
      stock: 30,
      brand: "Apple",
      category: "smartphones",
      image: "https://m.media-amazon.com/images/I/713eEl39eLL._AC_SL1500_.jpg",
    },
    {
      id: 3,
      title: "Samsung S24 Ultra",
      description:"Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB, 256GB Storage)",
      price: 139999,
      discountPercentage: 10,
      rating: 4.09,
      stock: 20,
      brand: "Samsung",
      category: "smartphones",
      image: "https://clickbuy.com.vn/uploads/pro/samsung-galaxy-s24-ultra-1tb_197561.jpg",
      
    },
    {
      id: 4,
      title: "OnePlus 12",
      description: "OnePlus 12 (Flowy Emerald, 16GB RAM, 512GB Storage)",
      price: 64999,
      discountPercentage: 15,
      rating: 4.3,
      stock: 42,
      brand: "OPPO",
      category: "smartphones",
      image: "https://image01-in.oneplus.net/india-oneplus-statics-file/epb/202401/10/iaxCtvY5C6HPBCti.png?x-amz-process=image/format,webp/quality,Q_80",
    },
    {
      id: 5,
      title: "Oppo F27 Pro+",
      description:"OPPO F27 Pro+ (Midnight Navy, 128 GB)  (8 GB RAM)",
      price: 29999,
      discountPercentage: 15,
      rating: 4.09,
      stock: 68,
      brand: "Huawei",
      category: "smartphones",
      image: "https://www.oppo.com/content/dam/oppo-campaign-site/in/events/oppo-product/image-link/march-2023/OPPO_F27_Pro+_5G_Midnight_Navy_frontback_1200x1200.jpg",
    },
  ]);



  
  return (
    
    <>
      <UserContext.Provider value={{ product, setProduct }}>
      
        <div className="header mb-5 border-5 border-secondary rounded">
              
            <Header/>  
        </div>
        
        <div className="container ">
          
          <CartCard />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
