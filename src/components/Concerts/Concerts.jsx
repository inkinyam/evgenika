import "./Concerts.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import React from "react";
import PropTypes from "prop-types";
import ConcertCard from "../ConcertCard/ConcertCard";

const Concerts = ({ data }) => {
  const [showMore, setShowMoreVisible] = React.useState(false);
  const [hideMore, setHideMoreVisible] = React.useState(false);
  const [showed, setShowed] = React.useState([]);

  React.useEffect(() => {
    setShowed(data.slice(0, 4));
    setShowMoreVisible(true);
  }, [data]);

  const handleShowMoreClick = () => {
    setShowed(data);
    setShowMoreVisible(false);
    setHideMoreVisible(true);
  };
  const handleHideMoreClick = () => {
    setShowed(data.slice(0, 4));
    setShowMoreVisible(true);
    setHideMoreVisible(false);
  };

  const buttonShowMoreClassList = !showMore
    ? "concert__link concert__link_hidden"
    : "concert__link";
  const buttonHideMoreClassList = !hideMore
    ? "concert__link concert__link_hidden"
    : "concert__link";

  return (
    <section className="section concerts" id="concerts">
      <SectionTitle text="Концерты" />

      <ul className="concerts__list">
        {showed.map((item) => {
          return <ConcertCard data={item} key={item.id} />;
        })}
      </ul>

      <a onClick={handleShowMoreClick} className={buttonShowMoreClassList}>
        {" "}
        Показать все
      </a>
      <a onClick={handleHideMoreClick} className={buttonHideMoreClassList}>
        {" "}
        Скрыть
      </a>
    </section>
  );
};

Concerts.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Concerts;
