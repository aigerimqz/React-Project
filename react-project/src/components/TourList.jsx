import { useState, useEffect } from "react";
import TourItem from "./TourItem";
import "../styles/TourList.css";
export default function TourList() {
    const [items, setItems] = useState([]);

    async function load() {
        const result = await fetch("http://127.0.0.1:8000/api/tours/");
        const data = await result.json();
        console.log(data, "fetched data");
        setItems(data);
    }

    useEffect(() => {
        load();
    }, []);

    return (
        <div className="tour__list">
            <h2 className="list__title">Tours</h2>
            <button onClick={load}>Click</button>
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
