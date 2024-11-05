import styles from "./Pagination.module.scss";
import peopleStore from "../store/PeopleStore";
import { observer } from "mobx-react-lite";

const Pagination = observer(() => {
  const nextButtonHandler = () => {
    peopleStore.nextPage();
  };
  const prevButtonHandler = () => {
    peopleStore.prevPage();
  };

  return (
    <div className={styles.pagination}>
      <button onClick={prevButtonHandler} disabled={peopleStore.isFirstPage}>
        Назад
      </button>
      {peopleStore.page}
      <button onClick={nextButtonHandler} disabled={peopleStore.isLastPage}>
        Вперед
      </button>
    </div>
  );
});

export default Pagination;
