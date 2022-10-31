import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import arrow from "../../assets/Arrow.svg";
import star from "../../assets/Star.svg";
import shape from "../../assets/Shapeicon.svg";
import s from "./JobItem.module.scss";

type JobsListProps = {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  updatedAt: string;
  description: string;
  employment_type: string[];
  pictures: string[];
};

const JobItem: FC<JobsListProps> = ({ title }) => {
  const { id } = useParams();

  return (
    <>
      <div className={s.job_detail}>
        <div className={s.job_detail__header}>Job Details</div>
      </div>

      <hr />

      <div className="job_detail__flex">
        <div className={s.job_detail__favorite__star}>
          <img
            src={star}
            alt="satr"
            className={s.job_detail__favorite__star__icon}
          />
          <p className={s.job_detail__favorite__star__text}>Save to my list</p>
        </div>
        <div className={s.job_detail__favorite__shape}>
          <img
            src={shape}
            alt="shape"
            className={s.job_detail__favorite__shape__icon}
          />
          <p className={s.job_detail__favorite__shape__text}>Shape</p>
        </div>
      </div>

      <div>{title}</div>

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
