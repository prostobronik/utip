import styles from "./HomeControls.module.scss";
import { action } from "mobx";
import peopleStore from "../store/PeopleStore";
import { useNavigate } from "react-router-dom";

const HomeControls = () => {
  const navigate = useNavigate();
  const navigateToAddPage = () => {
    navigate("/add");
  };

  return (
    <div className={styles.buttons_wrapper}>
      <button onClick={action(() => peopleStore.fetchPeople())}>Запрос</button>
      <button onClick={action(() => peopleStore.clearPeople())}>Удалить</button>
      <button onClick={() => navigateToAddPage()}>Добавить </button>
    </div>
  );
};

export default HomeControls;
