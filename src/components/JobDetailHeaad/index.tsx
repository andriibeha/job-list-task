import { FC } from "react";
import star from "../../assets/Star.svg";
import shape from "../../assets/Shapeicon.svg";
import s from "./JobDetailHeaad.module.scss";

const JobDetailHeaad: FC<any> = ({ title, salary }) => {
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

      <div className="title">{title}</div>

      <div className={s.job_detail__info}>
        <p className={s.job_detail__info__time}>Posted ... day ago</p>
        <div className={s.job_detail__info__price}>
          <p className={s.job_detail__info__price__text}>Brutto, per year</p>
          <p className={s.job_detail__info__price__salary}>€ {salary}</p>
        </div>
      </div>
    </>
  );
};

export default JobDetailHeaad;
