// interface IData {
//   productItems: {}[];
// }

export interface IItems {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity :number 
}

const data = {
  productItems: [
    <IItems>{
      id: "1",
      name: "Sony Headphones",
      price: 350,
      image: "./pictures/sony-headphones.jpg",
      quantity: 0
    },
    <IItems>{
      id: "2",
      name: "Dr.Dre Headphones",
      price: 200,
      image: "./pictures/beats-by-dre.jpg",
      quantity: 0
    },
    <IItems>{
      id: "3",
      name: "MacBook Air",
      price: 1200,
      image: "./pictures/macbook-air.jpg",
      quantity: 0
    },
    <IItems>{
      id: "4",
      name: "MacBook Pro",
      price: 2500,
      image: "./pictures/macbook-pro.jpg",
      quantity: 0
    },
    <IItems>{
      id: "5",
      name: "Samsung Galaxy S22",
      price: 320,
      image: "./pictures/samsung-galaxy.jpg",
      quantity: 0
    },
    <IItems>{
      id: "6",
      name: "Lenovo Legion 5 Pro",
      price: 1400,
      image: "./pictures/lenovo-legion-5-pro.jpg",
      quantity: 0
    },
    <IItems>{
      id: "7",
      name: "iPhone X",
      price: 475,
      image: "./pictures/iphone-x.png",
      quantity: 0
    },
    <IItems>{
      id: "8",
      name: "iPhone 14 Pro Max",
      price: 1350,
      image: "./pictures/iphone-14-pro-max.jpg",
      quantity: 0
    },
    <IItems>{
      id: "9",
      name: "Apple Airpods",
      price: 150,
      image: "./pictures/airpods.jpg",
      quantity: 0
    },
  ],
};

export default data;
