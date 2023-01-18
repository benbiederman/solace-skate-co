import { v4 as uuidv4 } from "uuid";
import noahBenson from "../images/team/noah-benson.jpg";
import jakeKeith from "../images/team/jake-keith.jpg";
import chanceMorse from "../images/team/chance-morse.jpg";
import coleScheck from "../images/team/cole-scheck.jpg";

const Team = [
  {
    name: "Noah Benson",
    stance: "Goofy",
    bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    img: noahBenson,
    alt: "Noah Benson heel flip over the hip of a pyramid.",
    id: uuidv4(),
  },
  {
    name: "Jake Keith",
    stance: "Regular",
    bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    img: jakeKeith,
    alt: "Jake Keith doing a switch blunt stall on a quarterpipe.",
    id: uuidv4(),
  },
  {
    name: "Chance Morse",
    stance: "Regular",
    bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    img: chanceMorse,
    alt: "Chance Morse nose blunting a bump to box.",
    id: uuidv4(),
  },
  {
    name: "Cole Scheck",
    stance: "Goofy",
    bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    img: coleScheck,
    alt: "Cole Scheck crooked grind on lamp post base.",
    id: uuidv4(),
  },
];

export default Team;
