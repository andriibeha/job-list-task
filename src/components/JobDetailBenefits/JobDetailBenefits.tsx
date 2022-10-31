import { FC } from "react";
import bullet from "../../assets/Bullet.svg";
import s from "./JobDetailBenefits.module.scss";

const JobDetailBenefits: FC<any> = ({ benefits }) => {
  return (
    <>
      <p className={s.job_detail__title}>Compensation & Benefits:</p>

      <ul>
        {benefits.map((item: any) => (
          <li key={item} className={s.job_detail__flex}>
            <img src={bullet} alt="bullet" className={s.job_detail__bullet} />
            <p className={s.job_detail__description__item}>{item}</p>
          </li>
        ))}
      </ul>

      <button type="button" className={s.job_detail__button}>
        Apply now
      </button>
    </>
  );
};

export default JobDetailBenefits;
