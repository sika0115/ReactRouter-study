import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  console.log(location);

  const history = useHistory();

  const onClickBack = () => history.goBack(); //goBack:遷移元に戻る

  return (
    <div>
      <h1>Page1 Detaul A page</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
