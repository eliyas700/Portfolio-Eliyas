//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/ReycoAutomotive/Reyco-Automotive.png";
import Project2 from "./assets/img/projects/GadgetWorld/Home-Gadget-World.png";
import Project3 from "./assets/img/projects/Tourisman/TourisMan.png";
import Project4 from "./assets/img/projects/EZ-Eli-Scents/https-ez-eli-scents-eliyas-netlify-app.png";
import Project5 from "./assets/img/projects/CryptoCafe/Eliyas-Crypto-Cafe.png";
import Project6 from "./assets/img/projects/CalculatorApp/Calculator (1).png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";
import SkillImg9 from "./assets/img/skills/firebase.png";
import SkillImg10 from "./assets/img/skills/mongo.png";
import SkillImg11 from "./assets/img/skills/tailwind.png";
// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "testimonials",
    href: "testimonials",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: "https://www.youtube.com/channel/UCdESMHPbeNlDG48HNgOhYDA",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/_eliyashossain_/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/eliyas700/",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/eliyas700/",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Reyco Automotive",
    category: "Full Stack",
    about:
      "This Site is a fully Dynamic Car Parts Selling site. User Can Buy any products and can pay throughout Credit Card. Admin Panel can manage the overall site",
  },
  {
    id: "2",
    image: Project2,
    name: "Gadget World",
    category: "Full Stack",
    about:
      "It's a Gadget gears selling fully functional site, User can easily buy their favorite gadget items from here, give their valuable feedbacks also.But they must be Authentic user.",
  },
  {
    id: "3",
    image: Project3,
    name: "Tourisman",
    category: "Frontend",
    about:
      "A single person Tourist Service Site. User can easily choose any available package and book that service. User can log in through email password or Google/Github/Facebook",
  },
  {
    id: "4",
    image: Project4,
    name: "EZ-ElI-Scents",
    category: "Frontend",
    about:
      "A small e-commerce perfume selling site.User can choose the perfect perfume for them and they buy it / add it to cart. They can easily manage the cart ",
  },
  {
    id: "5",
    image: Project5,
    name: "Crypto Cafe",
    category: "Web App",
    about:
      "A site of some crypto currencies , User can easily click on any available crypto item and can see the details about the crypto item. Users also can Contact with the site offices.",
  },
  {
    id: "6",
    image: Project6,
    name: "My Calculator ",
    category: "Web App",
    about:
      "A small and simple fully functional Calculator app. Any User can use this calculator as a regular calculator. All the functionalities are available there.",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Full Stack",
  },
  {
    name: "Frontend",
  },
  {
    name: "Web App",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg10,
  },
  {
    image: SkillImg11,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Design Sites as Clients Requirement.Love to work with Perfection. Try to Design the Site as like the design template",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Work with previously  built sites, and modify them as client requirements. Add new functionality and update site",
  },
  {
    icon: <FiPenTool />,
    name: "Build Dynamic Sites",
    description:
      "Make fully functional dynamic sites , implement updated features, make attractive look.",
  },
  {
    icon: <FiTag />,
    name: "Responsive Web Design",
    description:
      "Responsiveness is  a very important part of Modern websites. I build fully (Mobile, PC, Tablet) responsive sites",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at eliyashossain700@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Khulna,Bangladesh",
    description: "Serving clients worldwide",
  },
];
