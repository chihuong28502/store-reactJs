import Products from "../ComponentDad/Products";
import Home from "../ComponentDad/Home";
import Contact from "../ComponentDad/Contact";
import News from "../ComponentDad/News";
import NewItem from "../componentChild/NewItem";
import Introduce from "../ComponentDad/Introduce";
import AllProducts from "../ComponentDad/AllProducts";
import ListSearch from "../componentChild/ListSearch";
import ShowAllWishList from "../componentChild/ShowAllWishList";

const listRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/news/:NewItem",
    component: NewItem,
  },
  {
    path: "/introduce",
    component: Introduce,
  },
  { path: "/products/:slug", component: AllProducts },
  { path: "/search/:valueSearch", component: ListSearch },
  { path: "/danh-sach-yeu-thich", component: ShowAllWishList },
];
export default listRouter;
