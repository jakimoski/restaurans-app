import axios from "axios";
import "./restaurant-details.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TRestaurant, TReview } from "../../types/types";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";
import RestaurantRatings from "../../components/RestaurantRatings/RestaurantRatings";
// Initial form values
const initialReview: TReview = {
  id: 0,
  author: "",
  comment: "",
  stars: 1,
};

export default function RestaurantDetails() {
  const itemRouteState = useLocation();

  const [item, setItem] = useState<TRestaurant>();
  const [itemReviews, setItemReviews] = useState<TReview[]>([]);
  const [newReview, setNewReview] = useState<TReview>(initialReview);
  const [nameErr, setNameErr] = useState(false);
  const [commentErr, setCommentErr] = useState(false);

  const id = itemRouteState.state.id;

  // Fetch current restaurant
  useEffect(() => {
    axios.get(`http://localhost:5001/restaurants/${id}`).then((res: any) => {
      setItem(res.data);
      setItemReviews(res.data.reviewsList);
    });
  }, [id]);

  // Update user review and create review obj
  const onInputChangeHandler = (name: string, value: string | number) => {
    setNewReview((prevValue) => ({
      ...prevValue,
      [name]: value,
      id: item?.reviewsList.length || 0,
    }));
    if (newReview.author !== "") {
      setNameErr(false);
    }
    if (newReview.comment !== "") {
      setCommentErr(false);
    }
  };

  // Submit handler - send updated restaurant to DB and update current display if the response is ok
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit guard clause
    if (newReview.author === "") {
      setNameErr(true);
    }
    if (newReview.comment === "") {
      setCommentErr(true);
      return;
    }
    // Update reviews
    setItemReviews((prev) => prev.concat(newReview));
    // Create new updated restaurant obj
    const updatedRestaurant: any = {
      ...item,
      reviews: itemReviews.length + 1,
      reviewsList: [...itemReviews, newReview],
    };

    axios
      .put(`http://localhost:5001/restaurants/${id}`, {
        ...updatedRestaurant,
      })
      .then((response) => {
        if (response.status === 200) {
          setItem(updatedRestaurant);
        } else {
          console.log("Restaurant update failed!");
        }
      });

    setNewReview(initialReview);
  };

  return (
    <section className="details-section">
      {item ? (
        <>
          <h1 className="restaurant-details__title">{item.businessname}</h1>
          <div className="restaurant-details">
            <img
              className="restaurant-details__image"
              src={item.image}
              alt={item.businessname}
            />
            <div className="restaurant-details__info">
              {item?.reviews > 0 ? <RestaurantRatings {...item} /> : null}
              <p>{item.phone}</p>
              <p>{item.email}</p>
              <p>{item.address}</p>
              <p>
                {item.parkinglot
                  ? "We have a parking lot waiting for you."
                  : "We dont have a parking lot."}
              </p>
            </div>
          </div>
        </>
      ) : null}
      {item && itemReviews.length > 0 ? <ReviewsSection {...item} /> : null}
      <form onSubmit={submitHandler} className="form">
        <h2 className="form__title">Review Form</h2>
        <div className="form__row">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="author"
            onChange={(e) => onInputChangeHandler("author", e.target.value)}
            value={newReview.author}
          />
          {nameErr && <p className="form__error">Please fill this field!</p>}
        </div>
        <div className="form__row">
          <label htmlFor="comment">Comment</label>
          <input
            type="text"
            id="comment"
            name="comment"
            onChange={(e) => onInputChangeHandler("comment", e.target.value)}
            value={newReview.comment}
          />
          {commentErr && <p className="form__error">Please fill this field!</p>}
        </div>
        <div className="form__row">
          <label htmlFor="stars">Stars</label>
          <input
            type="range"
            id="stars"
            min={1}
            step={1}
            max={5}
            name="stars"
            onChange={(e) => onInputChangeHandler("stars", +e.target.value)}
            value={newReview.stars}
          />
        </div>
        <button className="btn btn--surprise">Submit</button>
      </form>
    </section>
  );
}
