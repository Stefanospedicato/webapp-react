import StarRating from "./StarRating";

const ReviewCard = ({ review }) => {
  const { name, vote, text } = review;
  return (
    <>
      <div className="container">
        <div className="review-box">
          <div className="user d-flex justify-content-between">
            <address>{name}</address>
            <div className="vote">
              <StarRating vote={vote} />
            </div>
          </div>
          <p className="review-text">"{text}"</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
