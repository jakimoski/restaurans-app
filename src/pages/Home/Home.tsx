import SurpriseRestaurant from "../../components/SurpriseRestaurant/SurpriseRestaurant";
import PopularRestaurants from "../../components/PopularRestaurants/PopularRestaurants";
import AllRestaurants from "../../components/AllRestaurants/AllRestaurants";
import { Cuisines } from "../../components/Cuisines/Cuisines";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRestaurants } from "../../store/restaurants-slice";
import { AppDispatch } from "../../store/store";

export default function Home() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  return (
    <>
      <SurpriseRestaurant />
      <PopularRestaurants />
      <Cuisines />
      <AllRestaurants />
    </>
  );
}
