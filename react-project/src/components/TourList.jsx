import { useState, useEffect } from "react";
import TourItem from "./TourItem";
import "../styles/TourList.css";
export default function TourList() {
    const [items, setItems] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");
    const [loading, setLoading] = useState(false);
    async function load() {
        setLoading(true);
        const result = await fetch("http://127.0.0.1:8000/api/tours/");
        const data = await result.json();
        console.log(data, "fetched data");
        setItems(data);
        setLoading(false);
    }

    useEffect(() => {
        load();
    }, []);

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
    return (
        <div className="tour__list">
            <h2 className="list__title">Tours</h2>
            <button className="load__btn" onClick={load}>Reload tours</button>
            <div className="search__bar">
                <input type="text" className="search__input" 
                placeholder="Search tours..."
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)} />
                <button className="clear__btn" onClick={() => setFilterQuery("")}>Clear</button>
            </div>
            {items.length > 0 ? (
                <ul className="tour__items">
                    {items.map((item) => (
                        <TourItem key={item.id} tour={item} />
                    ))}
                </ul>
            ) : (
                <p>No data</p>
            )}
        </div>
    );
}
