import { v4 as uuidv4 } from "uuid";
import blackGraffitiDeck from "../images/product/graffiti-black.png";
import blueGraffitiDeck from "../images/product/graffiti-blue.png";
import grayGraffitiDeck from "../images/product/graffiti-gray.png";
import greenGraffitiDeck from "../images/product/graffiti-green.png";
import purpleGraffitiDeck from "../images/product/graffiti-purple.png";
import whiteGraffitiDeck from "../images/product/graffiti-white.png";
import krispyKleenDeck from "../images/product/krispy-kleen-deck.png";
import blackLogosDeck from "../images/product/logos-black.png";
import blackOnBlackLogosDeck from "../images/product/logos-bob.png";
import whiteLogosDeck from "../images/product/logos-white.png";
import whiteOnWhiteLogosDeck from "../images/product/logos-wow.png";
import shapesOne from "../images/product/shapes-1.png";
import shapesTwo from "../images/product/shapes-2.png";
import shapesThree from "../images/product/shapes-3.png";
import shapesFour from "../images/product/shapes-4.png";
import blackTextDeck from "../images/product/solace-text-black.png";
import blackOnBlackTextDeeck from "../images/product/solace-text-bob.png";
import whiteTextDeck from "../images/product/solace-text-white.png";
import whiteOnWhiteTextDeck from "../images/product/solace-text-wow.png";

const Decks = [
  {
    name: "Graffiti Deck",
    variation: [
      {
        color: "Black",
        img: blackGraffitiDeck,
        alt: "Black skateboard with black graffiti style logo",
        id: uuidv4(),
        inventory: [{ 7.75: 2, 8.0: 4, 8.25: 3, 8.5: 6 }],
        price: 59.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "Blue",
        img: blueGraffitiDeck,
        alt: "Blue skateboard with black graffiti style logo",
        id: uuidv4(),
        inventory: [{ 7.75: 1, 8.0: 5, 8.25: 7, 8.5: 5 }],
        price: 59.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "Gray",
        img: grayGraffitiDeck,
        alt: "Gray skateboard with black graffiti style logo",
        id: uuidv4(),
        inventory: [{ 7.75: 0, 8.0: 3, 8.25: 8, 8.5: 7 }],
        price: 59.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "Green",
        img: greenGraffitiDeck,
        alt: "Green skateboard with black graffiti style logo",
        id: uuidv4(),
        inventory: [{ 7.75: 1, 8.0: 2, 8.25: 8, 8.5: 9 }],
        price: 59.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "Purple",
        img: purpleGraffitiDeck,
        alt: "Purple skateboard with black graffiti style logo",
        id: uuidv4(),
        inventory: [{ 7.75: 1, 8.0: 2, 8.25: 8, 8.5: 9 }],
        price: 59.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "White",
        img: whiteGraffitiDeck,
        alt: "White skateboard with black graffiti style logo",
        id: uuidv4(),
        inventory: [{ 7.75: 1, 8.0: 2, 8.25: 8, 8.5: 9 }],
        price: 59.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
  {
    name: "Krispy Kleen Deck",
    variation: [
      {
        color: null,
        img: krispyKleenDeck,
        alt: "Krispy Kreme inspired skateboard with donut artwork.",
        id: uuidv4(),
        inventory: [{ 7.75: 7, 8.0: 14, 8.25: 23, 8.5: 31 }],
        price: 59.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
  {
    name: "Logos Deck",
    variation: [
      {
        color: "Black",
        img: blackLogosDeck,
        alt: "Black skateboard with white logos patterned over deck",
        id: uuidv4(),
        inventory: [{ 7.75: 2, 8.0: 5, 8.25: 11, 8.5: 13 }],
        price: 59.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "Black on Black",
        img: blackOnBlackLogosDeck,
        alt: "Black skateboard with black logos patterned over deck",
        id: uuidv4(),
        inventory: [{ 7.75: 3, 8.0: 8, 8.25: 14, 8.5: 21 }],
        price: 59.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "White",
        img: whiteLogosDeck,
        alt: "White skateboard with black logos patterned over deck",
        id: uuidv4(),
        inventory: [{ 7.75: 6, 8.0: 3, 8.25: 3, 8.5: 7 }],
        price: 59.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "White on White",
        img: whiteOnWhiteLogosDeck,
        alt: "White skateboard with white logos patterned over deck",
        id: uuidv4(),
        inventory: [{ 7.75: 2, 8.0: 5, 8.25: 2, 8.5: 4 }],
        price: 59.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
  {
    name: "Shapes Deck",
    variation: [
      {
        color: "Gray",
        img: shapesOne,
        alt: "White skateboard with gray triangles patterned over deck",
        id: uuidv4(),
        inventory: [{ 7.75: 1, 8.0: 2, 8.25: 0, 8.5: 1 }],
        price: 59.95,
        sale: true,
        salePrice: 44.95,
      },
      {
        color: "Purple",
        img: shapesTwo,
        alt: "White skateboard with purple triangles patterned over deck",
        id: uuidv4(),
        inventory: [{ 7.75: 0, 8.0: 1, 8.25: 1, 8.5: 0 }],
        price: 59.95,
        sale: true,
        salePrice: 44.95,
      },
      {
        color: "Blue",
        img: shapesThree,
        alt: "White skateboard with blue triangles patterned over deck",
        id: uuidv4(),
        inventory: [{ 7.75: 1, 8.0: 0, 8.25: 0, 8.5: 0 }],
        price: 59.95,
        sale: true,
        salePrice: 44.95,
      },
      {
        color: "Black",
        img: shapesFour,
        alt: "White skateboard with black patterns over deck",
        id: uuidv4(),
        inventory: [{ 7.75: 0, 8.0: 1, 8.25: 0, 8.5: 0 }],
        price: 59.95,
        sale: true,
        salePrice: 44.95,
      },
    ],
  },
  {
    name: "Text Deck",
    variation: [
      {
        color: "Black",
        img: blackTextDeck,
        alt: "Black skateboard with white lettering spelling out Solace",
        id: uuidv4(),
        inventory: [{ 7.75: 7, 8.0: 22, 8.25: 17, 8.5: 14 }],
        price: 49.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "Black on Black",
        img: blackOnBlackTextDeeck,
        alt: "Black skateboard with black lettering spelling out Solace",
        id: uuidv4(),
        inventory: [{ 7.75: 4, 8.0: 19, 8.25: 14, 8.5: 22 }],
        price: 49.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "White",
        img: whiteTextDeck,
        alt: "White skateboard with black lettering spelling out Solace",
        id: uuidv4(),
        inventory: [{ 7.75: 3, 8.0: 15, 8.25: 22, 8.5: 17 }],
        price: 49.95,
        sale: false,
        salePrice: null,
      },
      {
        color: "White on White",
        img: whiteOnWhiteTextDeck,
        alt: "White skateboard with white lettering spelling out Solace",
        id: uuidv4(),
        inventory: [{ 7.75: 4, 8.0: 13, 8.25: 18, 8.5: 22 }],
        price: 49.95,
        sale: false,
        salePrice: null,
      },
    ],
  },
];

export default Decks;
