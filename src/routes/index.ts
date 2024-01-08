import About from "../pages/About";
import Calendar from "../pages/Calendar";
import Login from "../pages/Login";
import Randomizer from "../pages/Randomizer";

export interface IRoute {
  path: string;
  // element: React.ComponentType;
  element: any;
  exact?: boolean;
}

export const publicRoutes: IRoute[] = [
  { path: '/', exact: true, element: Randomizer},
  { path: '/login', exact: true, element: Login},
  { path: '/about', exact: true, element: About},
]

export const privateRoutes: IRoute[] = [
  { path: '/', exact: true, element: Randomizer },
  { path: '/calendar', exact: true, element: Calendar },
  { path: '/about', exact: true, element: About }

]