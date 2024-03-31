import { Fragment } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import Section from "../Section/Section";
import useRestaurantData from "../../hooks/RestaurantDataHooks";
import { TRestaurant } from "../../types/types";

export default function PopularRestaurants() {
  const { popularRestaurants } = useRestaurantData();

  return (
    <Section title="Our most Popular Restaurants">
      {popularRestaurants &&
        popularRestaurants.map((item: TRestaurant) => (
          <Fragment key={item.id}>
            <RestaurantCard {...item} />
          </Fragment>
        ))}
    </Section>
  );
}
