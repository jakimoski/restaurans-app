import { TRestaurant } from "../../types/types";

export default function ReviewsSection(restaurant: TRestaurant) {
  return (
    <section className="review">
      <h2 className="review__title">Reviews</h2>
      {restaurant.reviewsList.map((item) => (
        <div key={item.id} className="review__single">
          <p>
            <strong> Author:</strong> {item.author}
          </p>
          <p>
            <strong>Message:</strong> {item.comment}
          </p>
          <p>
            <strong>Start: </strong>
            {item.stars}
          </p>
        </div>
      ))}
    </section>
  );
}
