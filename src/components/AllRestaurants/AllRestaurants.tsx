import { Fragment } from "react/jsx-runtime";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import Section from "../Section/Section";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function AllRestaurants() {
  const restaurants = useSelector(
    (state: RootState) => state.restaurants.restaurants
  );

  return (
    <Section title="All Restaurants">
      {restaurants &&
        restaurants.map((item) => (
          <Fragment key={item.id}>
            <RestaurantCard {...item} />
          </Fragment>
        ))}
    </Section>
  );
}
