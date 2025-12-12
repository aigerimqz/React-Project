import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemById } from "../../services/itemService";
import "../Tour Detail/TourDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemById } from "../../features/items/itemsSlice";
import Loader from "../../components/Loader/Loader";
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


  if (loadingItem) return <Loader></Loader>;
  if (errorItem) return <p>Error: {errorItem}</p>
  if (!selectedItem) return <p>Tour not found</p>;

  return (
    <div className="tour__details">
      <div className="tour__top">
        <div className="tour__gallery">
          <img className="tour__gallery" src={selectedItem.gallery[0]} alt={selectedItem.name} />
          <img className="tour__gallery" src={selectedItem.gallery[1]} alt={selectedItem.name} />
          <img className="tour__gallery" src={selectedItem.gallery[2]} alt={selectedItem.name} />

        </div>
        <div className="tour__mainphoto">
          <img className="tour__img" src={selectedItem.photo} alt={selectedItem.name}  />
        </div>
      </div>
      <div className="tour__info">
        <div className="tour__titlemain">
          <h2 className="tour__title">{selectedItem.name}</h2>
          <p className="tour__pricee">{selectedItem.price.toLocaleString()} ₸</p>
        </div>
        <div className="tour__location">
          <p className="tour__country">{selectedItem.country} | {(selectedItem.continent).charAt(0).toUpperCase() + (selectedItem.continent).slice(1)}</p>
          <p className="tour__rating"><img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" className="img__star" alt="" />{selectedItem.rating}</p>
        </div>
        
      </div>
      <div className="tour__icons">
       
        <div className="tour__elements">
           <img className="duration__icon" src="https://cdn-icons-png.flaticon.com/512/833/833593.png" alt="" />
          <p>{selectedItem.duration} days</p>
        </div>
        <div className="tour__dates">
          <p>

           
            {new Date(selectedItem.start_date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p>

            {"  - "}
            {new Date(selectedItem.end_date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}</p>
        </div>
      </div>
      
      
      <p className="tour__descriptionn">{selectedItem.description}</p>
      <button className="tour__btn" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
