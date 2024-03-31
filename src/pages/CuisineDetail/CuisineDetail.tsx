import { Fragment } from "react/jsx-runtime";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import Section from "../../components/Section/Section";
import { useParams } from "react-router-dom";
import useRestaurantData from "../../hooks/RestaurantDataHooks";

export default function CuisineDetail() {
  const cuisine = useParams();
  const { restaurants } = useRestaurantData();

  // Filter restaurants on current chosen cuisine
  const cuisineRestaurants = restaurants.filter(
    (item) => item.restauranttype === cuisine.id
  );

  return (
    <Section title={cuisine.id || ""}>
      {cuisineRestaurants &&
        cuisineRestaurants.map((item) => (
          <Fragment key={item.id}>
            <RestaurantCard {...item} />
          </Fragment>
        ))}
    </Section>
  );
}
