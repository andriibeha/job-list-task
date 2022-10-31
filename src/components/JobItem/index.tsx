import { FC } from "react";
import { Link } from "react-router-dom";
import location from "../../assets/Location.svg";
import star from "../../assets/5starRatingBig.svg";
import favorite from "../../assets/Bookmark.svg";
import s from "./job-list.module.scss";
import { JobsListType } from "../../redux/slices/JobsSlice";

type JobsListProps = {
  item: JobsListType,
  onClick: () => void
};

const JobList: FC<JobsListProps> = ({ item, onClick }) => {
  const {id, name, title, pictures} = item;
  return (
    <section className="section" >
      <Link to={`/job/${id}`} onClick={onClick}>
        <div className={s.job_list}>
          <div className={s.job_list__wraper}>
            <img src={pictures[0]} alt="img" className={s.job_list__img} />

            <div className={s.job_list__text__wraper}>
              <div className={s.job_list__description}>
                <p className={s.job_list__description__title}>{title}</p>

                <p className={s.job_list__description__name}>
                  Department name
                  <span className={s.job_list__description__span}>.</span>{" "}
                  {name} - AKH
                </p>

                <div className={s.job_list__description__location}>
                  <img
                    src={location}
                    alt="location icon"
                    className={s.job_list__description__location__icon}
                  />
                  <p className={s.job_list__description__location__address}>
                    City, Country
                  </p>
                </div>
              </div>
              <div className={s.job_list__mobile__favorite}>
                <img src={star} alt="star icon" className={s.job_list__star} />

                <div className={s.job_list__favorite}>
                  <img
                    src={favorite}
                    alt="favorite icon"
                    className={s.job_list__favorite__icon}
                  />
                  <p className={s.job_list__favorite__time}>Posted ... ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default JobList;
