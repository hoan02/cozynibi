import AboutUs from "../pages/AboutUs";
import Accommodation from "../pages/Accommodation";
import Menu from "../pages/Menu";
import TourTravel from "../pages/TourTravel";
import Service from "../pages/Service";
import News from "../pages/News";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

import CreateRoom from "../components/roomControl/CreateRoom";
import UpdateRoom from "../components/roomControl/UpdateRoom";
import CreateTour from "../components/tourControl/CreateTour";
import UpdateTour from "../components/tourControl/UpdateTour";

export const listParentPage = [
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

export const listChildPage = [
  {
    name: "Create new room",
    slug: "accommodation/create",
    component: <CreateRoom />,
  },
  {
    name: "Update room",
    slug: "accommodation/update/:id",
    component: <UpdateRoom />,
  },
  {
    name: "Create new tour",
    slug: "tour-travel/create",
    component: <CreateTour />,
  },
  {
    name: "Update tour",
    slug: "tour-travel/update/:id",
    component: <UpdateTour />,
  },
];
