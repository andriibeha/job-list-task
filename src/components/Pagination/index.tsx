import { FC } from "react";
import s from "./Pagination.module.scss";
import next from "../../assets/nextArrow.svg";
import prew from "../../assets/prewArrow.svg";

const Pagination: FC = () => {
  return (
    <div className="centered">
      <div className={s.wraper}>
        <ul className={s.list}>
          <img src={prew} alt="prew" className={s.arrow__prew} />
          <li className={s.item}>1</li>
          <li className={s.item__active}>2</li>
          <li className={s.item}>3</li>
          <li className={s.item}>4</li>
          <li className={s.item}>5</li>
          <li className={s.item}>...</li>
          <li className={s.item}>18</li>
          <img src={next} alt="next" className={s.arrow__next} />
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
