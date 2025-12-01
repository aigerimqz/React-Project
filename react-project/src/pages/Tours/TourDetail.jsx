import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemById } from "../../services/itemService";
import "../Tours/TourDetail.css";
export default function TourDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItemById(id)
      .then(data => setTour(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!tour) return <p>Tour not found</p>;

  return (
    <div className="tour__details">
      <h2 className="tour__title">{tour.name}</h2>
      <img className="tour__img" src={tour.photo} alt={tour.name} width={300} />
      <h2 className="tour__title">{tour.name}</h2>
      <p className="tour__country">{tour.country}</p>
      <p className="tour__description">{tour.description}</p>
      <p className="tour__price">{tour.price.toLocaleString()} ₸</p>
      <button className="tour__btn" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
