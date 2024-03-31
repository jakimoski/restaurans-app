import { TRestaurant } from "../../types/types";
import { favoritesActions } from "../../store/favorites-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as HeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as HeartRegular } from "@fortawesome/free-regular-svg-icons";
import { RootState } from "../../store/store";
import RestaurantRatings from "../RestaurantRatings/RestaurantRatings";

export default function RestaurantCard(restaurant: TRestaurant) {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state?.favorites.favorites
  );

  // Check if the restaurant is in favorites and update the display
  useEffect(() => {
    const favCheck = favorites?.find(
      (item: TRestaurant) => item.id === restaurant.id
    );
    if (favCheck) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favorites, restaurant.id]);

  // Function to update the isFavorite state of the restaurant
  function updateRestaurants() {
    dispatch(favoritesActions.toggleFavorite(restaurant));

    setIsFavorite((prev) => !prev);
  }

  return (
    <div className="restaurant-card">
      <button className="favorite-btn" onClick={updateRestaurants}>
        <FontAwesomeIcon
          className="favorite-btn__icon"
          icon={isFavorite ? HeartSolid : HeartRegular}
        />
      </button>
      <Link
        className="restaurant-card__wrapper"
        to={`/restaurant-details/${restaurant.slug}`}
        state={{ id: restaurant.id }}
      >
        <div className="restaurant-card__image">
          <img src={restaurant.image} alt={restaurant.slug} />
        </div>
        <div className="restaurant-card__details">
          <h3 className="restaurant-card__title">{restaurant.businessname}</h3>
          <p className="restaurant-card__type">{restaurant.restauranttype}</p>
          {restaurant.reviews > 0 ? (
            <RestaurantRatings {...restaurant} />
          ) : null}
        </div>
      </Link>
    </div>
  );
}
