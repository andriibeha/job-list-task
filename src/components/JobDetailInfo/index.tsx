import { FC } from "react";
import s from "./JobDetailInfo.module.scss";

const JobDetailInfo: FC<any> = ({
  pictures,
  employment_type,
  email,
  phone,
  benefits,
}) => {
  return (
    <>
      <p className={s.job_detail__title}>Attached images</p>

      <img src={pictures[0]} alt="img" className={s.job_detail__image} />

      <p className={s.job_detail__title}>Additional info</p>

      <hr />

      <p className={s.job_detail__second__title}>Employment type</p>

      <ul className={s.job_detail__flex}>
        {employment_type.map((item, index) => (
          <li key={index} className={s.job_detail__employment_type}>
            {item}
          </li>
        ))}
      </ul>

      <p className={s.job_detail__second__title}>Benefits</p>

      <ul className={s.job_detail__flex}>
        {benefits.map((item, index) => (
          <li key={index} className={s.job_detail__benefits}>
            {item}
          </li>
        ))}
      </ul>

      <p className={s.job_detail__title}>Contact</p>

      <ul>
        <li className={s.job_detail__item}>{email}</li>
        <li className={s.job_detail__item}>{phone}</li>
      </ul>
    </>
  );
};

export default JobDetailInfo;
