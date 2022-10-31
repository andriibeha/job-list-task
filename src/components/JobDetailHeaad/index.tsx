import { FC } from "react";
import favorite from "../../assets/Bookmark.svg";
import shape from "../../assets/Shapeicon.svg";
import s from "./JobDetailHeaad.module.scss";

const JobDetailHeaad: FC<any> = ({ title, salary }) => {
  return (
    <>
      <div className={s.job_detail__pc}>
        <div className={s.job_detail}>
          <div className={s.job_detail__header}>Job Details</div>
        </div>

        <hr />

        <div className="flex mt mb">
          <div className={s.job_detail__favorite__star}>
            <img
              src={favorite}
              alt="favorite"
              className={s.job_detail__favorite__star__icon}
            />
            <p className={s.job_detail__favorite__star__text}>
              Save to my list
            </p>
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
      </div>

      <span className={s.job_detail__line__pc}>
        <hr />
      </span>

      <button type="button" className={s.job_detail__button}>
        Apply now
      </button>

      <div className="title">{title}</div>

      <div className={s.job_detail__info}>
        <p className={s.job_detail__info__time}>Posted 2 day ago</p>
        <div className={s.job_detail__info__price}>
          <p className={s.job_detail__info__price__text}>Brutto, per year</p>
          <p className={s.job_detail__info__price__salary}>€ {salary}</p>
        </div>
      </div>
    </>
  );
};

export default JobDetailHeaad;
