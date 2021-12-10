import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    chidren: <Page2 />
  },
  {
    path: "/:id", //Urlパラメータを扱う場合pathにコロン(:)をつけてパラメータ名を書く
    exact: false,
    chidren: <UrlParameter />
  }
];
