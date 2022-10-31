import { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import arrow from "../../assets/Arrow.svg";
import s from "./JobDetail.module.scss";
import { useSelector } from "react-redux";
import { selectJobDetail } from "../../redux/selectors/selectJobsData";
import { Loader } from "../../components/Loader/indexd";
import { setJobDetail } from "../../redux/slices/JobsSlice";
import { useAppDispatch } from "../../redux/store";
import JobDetailInfo from "../../components/JobDetailInfo";
import JobDetailHeaad from "../../components/JobDetailHeaad";
import JobDetailDescription from "../../components/JobDetailDescription/JobDetailDescription";
import JobDetailBenefits from "../../components/JobDetailBenefits/JobDetailBenefits";

const JobItem: FC = () => {
  const navigate = useNavigate();
  const item = useSelector(selectJobDetail);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!item) navigate("/");
    return () => {
      dispatch(setJobDetail(null));
    };
  }, [dispatch, navigate, item]);

  if (!item) return <Loader />;

  const {
    description,
    benefits,
    title,
    salary,
  } = item;

  return (
    <>
      <JobDetailHeaad title={title} salary={salary} />
      <JobDetailDescription description={description} />
      <JobDetailBenefits benefits={benefits} />
      <JobDetailInfo job={item} />
      <Link to={"/"}>
        <div className={s.return}>
          <img src={arrow} alt="return" className={s.return__arrow} />
          <p className={s.return__description}>RETURN TO JOB BOARD</p>
        </div>
      </Link>
    </>
  );
};

export default JobItem;
