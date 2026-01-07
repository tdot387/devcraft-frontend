export type TRouter = {
  init: () => void;
  nav: (route: string, addHistory?: boolean) => void;
  // addRoute: (path: string, viewFunction: () => void) => void; keept it - maybe we need it later
};

export type RouteHandler = (params?: Record<string, string>) => void;
