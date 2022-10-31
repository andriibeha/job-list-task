import { FC } from "react";
import s from "./JobDetailInfo.module.scss";
import { Props } from "./types";

const JobDetailInfo: FC<Props> = ({ job }) => {
  const { pictures, employment_type, email, phone, benefits } = job;
  return (
    <>
      <p className="title">Attached images</p>

      <hr />

      <img src={pictures[0]} alt="img" className={s.job_detail__image} />

      <p className={s.job_detail__title}>Additional info</p>

      <hr />

      <p className={s.job_detail__second__title}>Employment type</p>

      <ul className="flex">
        {employment_type.map((item, index) => (
          <li key={index} className={s.job_detail__employment_type}>
            {item}
          </li>
        ))}
      </ul>

      <p className={s.job_detail__second__title}>Benefits</p>

      <ul className="flex">
        {benefits.map((item, index) => (
          <li key={index} className={s.job_detail__benefits}>
            {item}
          </li>
        ))}
      </ul>

      <p className="title">Contact</p>

      <ul>
        <li className={s.job_detail__item}>{email}</li>
        <li className={s.job_detail__item}>{phone}</li>
      </ul>
    </>
  );
};

export default JobDetailInfo;
