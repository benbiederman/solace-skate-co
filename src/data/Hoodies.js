import { v4 as uuidv4 } from "uuid";
import blackBasicHoodie from "../images/product/basic-hoodie-black.png";
import blackCamoHoodie from "../images/product/camo-hoodie-black.png";
import blackFloralHoodie from "../images/product/floral-hoodie-black.png";
import blackGalaxyHoodie from "../images/product/galaxy-hoodie-black.png";
import blackPatternHoodie from "../images/product/pattern-hoodie-black.png";
import blackShreddedHoodie from "../images/product/shredded-hoodie-black.png";

const Hoodies = [
  {
    name: "Basic Logo Hoodie",
    category: "Hoodies",
    variation: [
      {
        color: "Black",
        img: blackBasicHoodie,
        alt: "Black hoody with a basic Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 3 },
          { size: "md", quantity: 4 },
          { size: "lg", quantity: 6 },
          { size: "xl", quantity: 2 },
          { size: "xxl", quantity: 0 },
        ],
        price: 49.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
  {
    name: "Camo Logo Hoodie",
    category: "Hoodies",
    variation: [
      {
        color: "Black",
        img: blackCamoHoodie,
        alt: "Black hoody with a camo Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 1 },
          { size: "md", quantity: 2 },
          { size: "lg", quantity: 3 },
          { size: "xl", quantity: 1 },
          { size: "xxl", quantity: 0 },
        ],
        price: 49.95,
        sale: true,
        salePrice: 39.95,
      },
    ],
  },
  {
    name: "Floral Logo Hoodie",
    category: "Hoodies",
    variation: [
      {
        color: "Black",
        img: blackFloralHoodie,
        alt: "Black hoody with a floral Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 5 },
          { size: "md", quantity: 8 },
          { size: "lg", quantity: 8 },
          { size: "xl", quantity: 3 },
          { size: "xxl", quantity: 1 },
        ],
        price: 49.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
  {
    name: "Galaxy Logo Hoodie",
    category: "Hoodies",
    variation: [
      {
        color: "Black",
        img: blackGalaxyHoodie,
        alt: "Black hoody with a galaxy Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 12 },
          { size: "md", quantity: 12 },
          { size: "lg", quantity: 18 },
          { size: "xl", quantity: 5 },
          { size: "xxl", quantity: 3 },
        ],
        price: 49.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
  {
    name: "Pattern Logo Hoodie",
    category: "Hoodies",
    variation: [
      {
        color: "Black",
        img: blackPatternHoodie,
        alt: "Black hoody with a patterned Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 6 },
          { size: "md", quantity: 5 },
          { size: "lg", quantity: 9 },
          { size: "xl", quantity: 2 },
          { size: "xxl", quantity: 0 },
        ],
        price: 49.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
  {
    name: "Shredded Logo Hoodie",
    category: "Hoodies",
    variation: [
      {
        color: "Black",
        img: blackShreddedHoodie,
        alt: "Black hoody with a shredded Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 11 },
          { size: "md", quantity: 16 },
          { size: "lg", quantity: 25 },
          { size: "xl", quantity: 18 },
          { size: "xxl", quantity: 7 },
        ],
        price: 49.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
];

export default Hoodies;
