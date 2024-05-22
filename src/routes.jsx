import App from "./App";
import { NotFoundPage } from "../src/Page/NotFoundPage/NotFoundPage";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import {Footer} from "./Components/Footer/Footer";
import { Main } from './Components/Main/Main'

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home/*",
    element: <Home />,
  },
  {
    path: "/Navbar/*",
    element: <Navbar />,
  },
  {
    path: '/Main/*',
    element: <Main />
  },
  {
    path: '/Footer/*',
    element: <Footer />
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
