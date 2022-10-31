import { FC } from "react";
import s from "./JobDetailDescription.module.scss";

const JobDetailDescription: FC<any> = ({ description }) => {
  return (
    <>
      <p className={s.job_detail__description}>{description}</p>

      <p className="title">Responsopilities</p>

      <p className={s.job_detail__description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        voluptatibus mollitia quo incidunt eveniet! Esse distinctio quae omnis
        assumenda amet, in commodi a veniam cum quibusdam, eaque quis culpa
        temporibus.
      </p>
    </>
  );
};

export default JobDetailDescription;
