import { FC, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import JobItem from "../../components/JobItem";
import { Loader } from "../../components/Loader/indexd";
import { selectJobsData } from "../../redux/selectors/selectJobsData";
import {
  fetchJobsData,
  setJobDetail,
  JobsListType,
} from "../../redux/slices/JobsSlice";
import { useAppDispatch } from "../../redux/store";

const Home: FC = (props) => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectJobsData);

  useEffect(() => {
    dispatch(fetchJobsData());
  }, [dispatch]);

  const onItemClick = useCallback(
    (item: JobsListType) => {
      dispatch(setJobDetail(item));
    },
    [dispatch]
  );

  if (status === "loading") return <Loader />;

  return (
    <main className="main">
      {status === "error" ? (
        <div className="centered">
          <h2>Error 😕</h2>
          <p>Sorry try again later</p>
        </div>
      ) : (
        <div>
          {items.map((obj: JobsListType) => (
            <JobItem key={obj.id} item={obj} onClick={() => onItemClick(obj)} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;
