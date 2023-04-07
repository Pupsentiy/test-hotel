export type TRoutesConfig = {
  [key: string]: {
    path: string;
    component: () => JSX.Element;
  };
};
