import AboutUs from "../pages/aboutUs/AboutUs";
import Accommodation from "../pages/accommodation/Accommodation";
import Menu from "../pages/menu/Menu";
import TourTravel from "../pages/tourTravel/TourTravel";
import Service from "../pages/service/Service";
import News from "../pages/news/News";
import Gallery from "../pages/gallery/Gallery";
import Contact from "../pages/contact/Contact";

export const listPage = [
  {
    name: "About Us",
    slug: "about-us", 
    component: <AboutUs />,
  },
  {
    name: "Accommodation",
    slug: "accommodation",
    component: <Accommodation />,
  },
  {
    name: "Menu",
    slug: "menu",
    component: <Menu />,
  },
  {
    name: "Tour Travel",
    slug: "tour-travel",
    component: <TourTravel />,
  },
  {
    name: "Service",
    slug: "service",
    component: <Service />,
  },
  {
    name: "News",
    slug: "news",
    component: <News />,
  },
  {
    name: "Gallery",
    slug: "gallery",
    component: <Gallery />,
  },
  {
    name: "Contact",
    slug: "contact",
    component: <Contact />,
  },
];
