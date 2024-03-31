import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantData from "../../hooks/RestaurantDataHooks";

export default function Favorites() {
  const { favoriteRestaurants } = useRestaurantData();

  return (
    <section className="favorite-section">
      {favoriteRestaurants && favoriteRestaurants.length > 0 ? (
        <>
          <h1>Your favorite restaurants</h1>
          {favoriteRestaurants.map((item) => (
            <RestaurantCard key={item.id} {...item} />
          ))}
        </>
      ) : (
        <>
          <h2>You don't have favorite restaurants</h2>
          <Link className="btn btn--cuisine" to={"/"}>
            Explore restaurants
          </Link>
        </>
      )}
    </section>
  );
}
