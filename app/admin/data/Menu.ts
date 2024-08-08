import { ADMIN_PRODUCTS_ROUTE, ADMIN_REQUEST_ROUTE } from "./routes";

type PageType = {
  title: string;
  route: string;
};

export const pages: PageType[] = [
  { title: "Requests", route: ADMIN_REQUEST_ROUTE },
  { title: "Products", route: ADMIN_PRODUCTS_ROUTE },
];
