import "./cuisines.scss";
import Section from "../Section/Section";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export function Cuisines() {
  const restaurants = useSelector(
    (state: RootState) => state.restaurants.restaurants
  );

  const cuisines = Array.from(
    new Set(restaurants?.map((item) => item.restauranttype))
  );

  return (
    <Section title="Cuisines">
      <div className="cuisines">
        {cuisines &&
          cuisines.map((cuisine) => (
            <Link
              to={`cuisine/${cuisine}`}
              key={cuisine}
              className="btn btn--cuisine"
            >
              {cuisine}
            </Link>
          ))}
      </div>
    </Section>
  );
}
