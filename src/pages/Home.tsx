import styles from "./Home.module.scss";
import peopleStore from "../store/PeopleStore";
import { observer } from "mobx-react-lite";
import Table, { colsData } from "../components/Table";
import HomeControls from "../components/HomeControls";
import Pagination from "../components/Pagination";
import Loader from "@/features/Loader";

const Home = observer(() => {
  const isPlaceholderShown = peopleStore.status === "init";
  const isLoading = peopleStore.status === "loading";

  const tableHeaders: colsData[] = [
    { label: "Имя", sortField: "name" },
    { label: "День рождения", sortField: "birth_year" },
    { label: "Вес", sortField: "mass" },
    { label: "Рост", sortField: "height" },
    { label: "Цвет", sortField: "skin_color" },
  ];

  return (
    <div className={styles.wrapper}>
      <HomeControls />
      {isPlaceholderShown && (
        <p className={styles.placeholder}>
          Данные отсутствуют, выполните запрос
        </p>
      )}
      {isLoading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}

      {!isPlaceholderShown && !isLoading && (
        <Table rowsData={peopleStore.people} colsData={tableHeaders} />
      )}
      {!isPlaceholderShown && <Pagination />}
    </div>
  );
});

export default Home;
