import { Link } from "react-router-dom";
import Section from "../Section/Section";
import useRestaurantData from "../../hooks/RestaurantDataHooks";

export default function SurpriseRestaurant() {
  const { randomRestaurant } = useRestaurantData();

  return (
    <Section title="Dont know what to eat?">
      {randomRestaurant && (
        <Link
          className="btn btn--surprise"
          to={`restaurant-details/${randomRestaurant.slug}`}
          state={{ id: randomRestaurant.id }}
        >
          Surprise me!
        </Link>
      )}
    </Section>
  );
}
