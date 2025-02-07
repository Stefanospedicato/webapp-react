const StarRating = ({ vote }) => {
  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((_, i) => (
      <i className={`bi bi-star${i < vote ? "-fill" : ""}`}></i>
    ));
  };
  return <span>{renderStars()}</span>;
};

export default StarRating;
