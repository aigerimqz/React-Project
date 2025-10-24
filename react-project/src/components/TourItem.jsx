export default function TourItem({ tour }) {
  return (
    <div className="tour__card">
      <img src={tour.photo} alt={tour.name} className="tour-image" />
      <div className="tour-content">
        <h2 className="tour-title">{tour.name}</h2>
        <p className="tour-country">{tour.country}</p>
        <p className="tour-description">{tour.description}</p>
        <p className="tour-price">{tour.price.toLocaleString()} ₸</p>
      </div>
    </div>
  );
}
