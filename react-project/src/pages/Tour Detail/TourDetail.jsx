import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemById } from "../../services/itemService";
import "../Tour Detail/TourDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemById } from "../../features/items/itemsSlice";
export default function TourDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {selectedItem, loadingItem, errorItem} = useSelector(
    (state) => state.items
  );
  // const [tour, setTour] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getItemById(id)
  //     .then(data => setTour(data))
  //     .finally(() => setLoading(false));
  // }, [id]);


  useEffect(() => {
    dispatch(fetchItemById(id));
  }, [id, dispatch]);


  if (loadingItem) return <p>Loading...</p>;
  if (errorItem) return <p>Error: {errorItem}</p>
  if (!selectedItem) return <p>Tour not found</p>;

  return (
    <div className="tour__details">
      <h2 className="tour__title">{selectedItem.name}</h2>
      <img className="tour__img" src={selectedItem.photo} alt={selectedItem.name} width={300} />
      <h2 className="tour__title">{selectedItem.name}</h2>
      <p className="tour__country">{selectedItem.country}</p>
      <p className="tour__description">{selectedItem.description}</p>
      <p className="tour__price">{selectedItem.price.toLocaleString()} ₸</p>
      <button className="tour__btn" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
