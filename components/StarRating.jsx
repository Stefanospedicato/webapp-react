const StarRating = ({ vote }) => {
  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((index) => (
      <i
        key={index}
        className={`bi bi-star${index < vote + 1 ? "-fill text-warning" : ""}`}
      ></i>
    ));
  };

  return <span>{renderStars()}</span>;
};

export default StarRating;
