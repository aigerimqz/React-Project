import "../styles/TourItem.css"
export default function TourItem({ tour }) {
  return (
    <div className="tour__card">
      <img src={tour.photo} alt={tour.name} className="tour__image" />
      <div className="tour__content">
        <h2 className="tour__title">{tour.name}</h2>
        <p className="tour__country">{tour.country}</p>
        <p className="tour__description">{tour.description}</p>
        <p className="tour__price">{tour.price.toLocaleString()} ₸</p>
      </div>
    </div>
  );
}
