import { FC } from "react";
import bullet from "../../assets/Bullet.svg";
import s from "./JobDetailBenefits.module.scss";
import { Props } from "./types";

const JobDetailBenefits: FC<Props> = ({ benefits }) => {
  return (
    <>
      <p className="title mb">Compensation & Benefits:</p>

      <p className={s.job_detail__description}>
        Our physicians enjoy a wide range of benefits, including:
      </p>

      <ul>
        {benefits.map((item) => (
          <li key={item} className="flex">
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
