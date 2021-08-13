export interface IRoute {
  type: "public" | "private";
  path: string;
  component: React.ReactNode;
  exact: boolean;
}
