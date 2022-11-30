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
    variation: [
      {
        color: "Black",
        img: blackBasicHoodie,
        alt: "Black hoody with a basic Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { small: 3 },
          { medium: 4 },
          { large: 6 },
          { xl: 2 },
          { xxl: 0 },
        ],
        price: 49.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
  {
    name: "Camo Logo Hoodie",
    variation: [
      {
        color: "Black",
        img: blackCamoHoodie,
        alt: "Black hoody with a camo Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { small: 1 },
          { medium: 2 },
          { large: 3 },
          { xl: 1 },
          { xxl: 0 },
        ],
        price: 49.95,
        sale: true,
        salePrice: 39.95,
      },
    ],
  },
  {
    name: "Floral Logo Hoodie",
    variation: [
      {
        color: "Black",
        img: blackFloralHoodie,
        alt: "Black hoody with a floral Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { small: 5 },
          { medium: 8 },
          { large: 8 },
          { xl: 3 },
          { xxl: 1 },
        ],
        price: 49.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
  {
    name: "Galaxy Logo Hoodie",
    variation: [
      {
        color: "Black",
        img: blackGalaxyHoodie,
        alt: "Black hoody with a galaxy Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { small: 12 },
          { medium: 12 },
          { large: 18 },
          { xl: 5 },
          { xxl: 3 },
        ],
        price: 49.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
  {
    name: "Pattern Logo Hoodie",
    variation: [
      {
        color: "Black",
        img: blackPatternHoodie,
        alt: "Black hoody with a patterned Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { small: 6 },
          { medium: 5 },
          { large: 9 },
          { xl: 2 },
          { xxl: 0 },
        ],
        price: 49.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
  {
    name: "Shredded Logo Hoodie",
    variation: [
      {
        color: "Black",
        img: blackShreddedHoodie,
        alt: "Black hoody with a shredded Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { small: 11 },
          { medium: 16 },
          { large: 25 },
          { xl: 18 },
          { xxl: 7 },
        ],
        price: 49.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
];

export default Hoodies;
