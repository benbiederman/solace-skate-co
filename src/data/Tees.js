import { v4 as uuidv4 } from "uuid";
import blackBasicTee from "../images/product/basic-logo-black.png";
import blueBasicTee from "../images/product/basic-logo-blue.png";
import greenBasicTee from "../images/product/basic-logo-green.png";
import whiteBasicTee from "../images/product/basic-logo-white.png";
import blackCamoTee from "../images/product/camo-logo-black.png";
import greenCamoTee from "../images/product/camo-logo-green.png";
import tanCamoTee from "../images/product/camo-logo-tan.png";
import whiteCamoTee from "../images/product/camo-logo-white.png";
import blackFloralTee from "../images/product/floral-logo-black.png";
import greenFloralTee from "../images/product/floral-logo-green.png";
import pinkFloralTee from "../images/product/floral-logo-pink.png";
import whiteFloralTee from "../images/product/floral-logo-white.png";
import blackGalaxyTee from "../images/product/galaxy-logo-black.png";
import whiteGalaxyTee from "../images/product/galaxy-logo-white.png";
import blackPatternTee from "../images/product/pattern-logo-black.png";
import grayPatternTee from "../images/product/pattern-logo-gray.png";
import whitePatternTee from "../images/product/pattern-logo-white.png";
import blackShreddedTee from "../images/product/shredded-logo-black.png";
import grayShreddedTee from "../images/product/shredded-logo-gray.png";
import redShreddedTee from "../images/product/shredded-logo-red.png";

const Apparel = [
  {
    name: "Basic Logo Tee",
    category: "Tees",
    variation: [
      {
        color: "Black",
        img: blackBasicTee,
        alt: "Black t-shirt with a basic Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 5 },
          { size: "md", quantity: 7 },
          { size: "lg", quantity: 14 },
          { size: "xl", quantity: 11 },
          { size: "xxl", quantity: 2 },
        ],
        price: 24.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "Blue",
        img: blueBasicTee,
        alt: "Blue t-shirt with a basic Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 7 },
          { size: "md", quantity: 4 },
          { size: "lg", quantity: 18 },
          { size: "xl", quantity: 5 },
          { size: "xxl", quantity: 1 },
        ],
        price: 24.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "Dark Green",
        img: greenBasicTee,
        alt: "Green t-shirt with a basic Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 7 },
          { size: "md", quantity: 4 },
          { size: "lg", quantity: 18 },
          { size: "xl", quantity: 5 },
          { size: "xxl", quantity: 0 },
        ],
        price: 24.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "White",
        img: whiteBasicTee,
        alt: "White t-shirt with a basic Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 2 },
          { size: "md", quantity: 3 },
          { size: "lg", quantity: 7 },
          { size: "xl", quantity: 2 },
          { size: "xxl", quantity: 0 },
        ],
        price: 24.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
  {
    name: "Camo Logo Tee",
    category: "Tees",
    variation: [
      {
        color: "Black",
        img: blackCamoTee,
        alt: "Black t-shirt with a traditional camouflage Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 3 },
          { size: "md", quantity: 4 },
          { size: "lg", quantity: 6 },
          { size: "xl", quantity: 4 },
          { size: "xxl", quantity: 1 },
        ],
        price: 24.95,
        sale: true,
        salePrice: 19.95,
      },
      {
        color: "Green",
        img: greenCamoTee,
        alt: "Green t-shirt with a traditional camouflage Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 2 },
          { size: "md", quantity: 2 },
          { size: "lg", quantity: 5 },
          { size: "xl", quantity: 2 },
          { size: "xxl", quantity: 0 },
        ],
        price: 24.95,
        sale: true,
        salePrice: 19.95,
      },
      {
        color: "Tan",
        img: tanCamoTee,
        alt: "Tan t-shirt with a traditional camouflage Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 0 },
          { size: "md", quantity: 2 },
          { size: "lg", quantity: 4 },
          { size: "xl", quantity: 2 },
          { size: "xxl", quantity: 0 },
        ],
        price: 24.95,
        sale: true,
        salePrice: 14.95,
      },
      {
        color: "White",
        img: whiteCamoTee,
        alt: "White t-shirt with a traditional camouflage Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 1 },
          { size: "md", quantity: 2 },
          { size: "lg", quantity: 2 },
          { size: "xl", quantity: 1 },
          { size: "xxl", quantity: 0 },
        ],
        price: 24.95,
        sale: true,
        salePrice: 19.95,
      },
    ],
  },
  {
    name: "Floral Logo Tee",
    category: "Tees",
    variation: [
      {
        color: "Black",
        img: blackFloralTee,
        alt: "Black t-shirt with a floral Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 5 },
          { size: "md", quantity: 7 },
          { size: "lg", quantity: 8 },
          { size: "xl", quantity: 6 },
          { size: "xxl", quantity: 2 },
        ],
        price: 24.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "Green",
        img: greenFloralTee,
        alt: "Green t-shirt with a floral Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 2 },
          { size: "md", quantity: 2 },
          { size: "lg", quantity: 5 },
          { size: "xl", quantity: 2 },
          { size: "xxl", quantity: 0 },
        ],
        price: 24.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "Pink",
        img: pinkFloralTee,
        alt: "Pink t-shirt with a floral Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 6 },
          { size: "md", quantity: 6 },
          { size: "lg", quantity: 10 },
          { size: "xl", quantity: 5 },
          { size: "xxl", quantity: 0 },
        ],
        price: 24.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "White",
        img: whiteFloralTee,
        alt: "White t-shirt with a floral Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 7 },
          { size: "md", quantity: 8 },
          { size: "lg", quantity: 11 },
          { size: "xl", quantity: 6 },
          { size: "xxl", quantity: 0 },
        ],
        price: 24.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
  {
    name: "Galaxy Logo Tee",
    category: "Tees",
    variation: [
      {
        color: "Black",
        img: blackGalaxyTee,
        alt: "Black t-shirt with a galaxy Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 7 },
          { size: "md", quantity: 11 },
          { size: "lg", quantity: 14 },
          { size: "xl", quantity: 6 },
          { size: "xxl", quantity: 2 },
        ],
        price: 24.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "White",
        img: whiteGalaxyTee,
        alt: "White t-shirt with a galaxy Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 8 },
          { size: "md", quantity: 12 },
          { size: "lg", quantity: 13 },
          { size: "xl", quantity: 4 },
          { size: "xxl", quantity: 0 },
        ],
        price: 24.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
  {
    name: "Pattern Logo Tee",
    category: "Tees",
    variation: [
      {
        color: "Black",
        img: blackPatternTee,
        alt: "Black t-shirt with a patterned Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 5 },
          { size: "md", quantity: 7 },
          { size: "lg", quantity: 11 },
          { size: "xl", quantity: 3 },
          { size: "xxl", quantity: 0 },
        ],
        price: 24.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "Gray",
        img: grayPatternTee,
        alt: "Gray t-shirt with a patterned Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 3 },
          { size: "md", quantity: 6 },
          { size: "lg", quantity: 9 },
          { size: "xl", quantity: 3 },
          { size: "xxl", quantity: 0 },
        ],
        price: 24.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "White",
        img: whitePatternTee,
        alt: "White t-shirt with a patterned Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 4 },
          { size: "md", quantity: 5 },
          { size: "lg", quantity: 8 },
          { size: "xl", quantity: 2 },
          { size: "xxl", quantity: 0 },
        ],
        price: 24.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
  {
    name: "Shredded Logo Tee",
    category: "Tees",
    variation: [
      {
        color: "Black",
        img: blackShreddedTee,
        alt: "Black t-shirt with a shredded Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 5 },
          { size: "md", quantity: 7 },
          { size: "lg", quantity: 11 },
          { size: "xl", quantity: 3 },
          { size: "xxl", quantity: 0 },
        ],
        price: 24.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "Gray",
        img: grayShreddedTee,
        alt: "Gray t-shirt with a shredded Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 3 },
          { size: "md", quantity: 6 },
          { size: "lg", quantity: 9 },
          { size: "xl", quantity: 3 },
          { size: "xxl", quantity: 0 },
        ],
        price: 24.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "Red",
        img: redShreddedTee,
        alt: "Red t-shirt with a shredded Solace Skate Co. logo on the front",
        id: uuidv4(),
        inventory: [
          { size: "sm", quantity: 4 },
          { size: "md", quantity: 5 },
          { size: "lg", quantity: 8 },
          { size: "xl", quantity: 2 },
          { size: "xxl", quantity: 0 },
        ],
        price: 24.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
];

export default Apparel;
