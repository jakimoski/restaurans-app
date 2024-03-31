import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { TRestaurant } from "../types/types";

const useRestaurantData = () => {
  const [popularRestaurants, setPopularRestaurants] = useState<TRestaurant[]>(
    []
  );
  const [randomRestaurant, setRandomRestaurant] = useState<TRestaurant>();
  // Get all restaurants from state
  const restaurants: TRestaurant[] = useSelector(
    (state: RootState) => state.restaurants.restaurants
  );

  // Get all favorite restaurants from state
  const favoriteRestaurants = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  // Set popular restaurants
  useEffect(() => {
    const restaurantsWithAvgRatings = restaurants.map((restaurant) => ({
      ...restaurant,
      averageRating:
        restaurant.reviewsList.reduce((acc, item) => acc + item.stars, 0) /
          restaurant.reviewsList.length || 0,
    }));

    const popular: TRestaurant[] = restaurantsWithAvgRatings
      .sort((a, b) => b.averageRating - a.averageRating)
      .slice(0, 10);

    setPopularRestaurants(popular);
  }, [restaurants]);

  // Get random restaurant
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    setRandomRestaurant(restaurants[randomIndex]);
  }, [restaurants]);

  return {
    popularRestaurants,
    randomRestaurant,
    restaurants,
    favoriteRestaurants,
  };
};

export default useRestaurantData;
