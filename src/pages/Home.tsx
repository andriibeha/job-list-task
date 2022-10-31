import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import JobList from "../components/JobList";
import { Loader } from "../components/Loader/indexd";
import { selectJobsData } from "../redux/selectors/selectJobsData";
import { fetchJobsData, JobsListType } from "../redux/slices/JobsSlice";
import { useAppDispatch } from "../redux/store";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectJobsData);

  useEffect(() => {
    dispatch(fetchJobsData());
  }, [dispatch]);

  const jobs = items.map((obj: JobsListType) => (
    <JobList key={obj.id} {...obj} />
  ));

  return (
    <main className="main">
      {status === "error" ? (
        <div className="error-info">
          <h2>Error 😕</h2>
          <p>Sorry try again later</p>
        </div>
      ) : (
        <div>{status === "loading" ? <Loader /> : jobs}</div>
      )}
    </main>
  );
};

export default Home;
