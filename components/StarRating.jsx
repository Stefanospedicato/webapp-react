const StarRating = ({ vote }) => {
  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star, index) => (
      <i
        key={index}
        className={`bi bi-star${index < vote ? "-fill text-warning" : ""}`}
      ></i>
    ));
  };

  return <span>{renderStars()}</span>;
};

export default StarRating;
