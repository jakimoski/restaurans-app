import { TRestaurant } from "../../types/types";

export default function RestaurantRatings(restaurant: TRestaurant) {
  const restaurantRating = restaurant.reviewsList.reduce(
    (acc, item) => acc + +item.stars,
    0
  );
  return (
    <div className="restaurant-ratings">
      <p className="restaurant-ratings__rating">
        Rating:{" "}
        <strong>
          {(restaurantRating / restaurant.reviewsList.length).toFixed(1)}
        </strong>
      </p>

      <p className="restaurant-ratings__review">
        Based on <strong>{restaurant.reviews}</strong>
        {restaurant.reviews > 1 ? " reviews" : " review"}
      </p>
    </div>
  );
}
