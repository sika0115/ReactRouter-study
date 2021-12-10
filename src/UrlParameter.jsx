import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams(); //idを受け取る
  const { search } = useLocation();
  const query = new URLSearchParams(search); //クエリパラメータを使いやすくする
  //console.log(locationn);//searchにクエリパラメータが入ってる
  return (
    <div>
      <h1>UrlParameter page</h1>
      <p>パラメータ：{id}</p>
      <p>クエリパラメータ：{query.get("name")}</p>
    </div>
  );
};
