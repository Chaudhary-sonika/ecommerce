import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Home Appliances",
    description:
      "Digities your home space with us, We make every thing easy for you",
    imageUrl:
      "https://media.istockphoto.com/id/1196974664/photo/set-of-home-kitchen-appliances-in-the-room-on-the-wall-background.jpg?s=612x612&w=0&k=20&c=dUSAMg-LUh6j-4437kz30w8k7KgJiR8yrTTXhGiFh0s=",
  },
  {
    _id: uuid(),
    categoryName: "Smart Phone & Smart Watches",
    description: "Watch your steps and Speak with your buddy with modern ways ",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/000/478/104/original/smartphone-compatible-smartwatch-data-transfer-symbols-vector.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Computer & Accessories",
    description: "Language is the medium to talk with new tecnologies",
    imageUrl:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_Homepage_Accessories_Family_Q4FY22:VP1-539x440",
  },
];
