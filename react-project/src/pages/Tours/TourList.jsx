import { useState, useEffect } from "react";
import TourItem from "./TourItem";
import "./TourList.css";
export default function TourList() {
    const [items, setItems] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");
    const [loading, setLoading] = useState(false);
    async function load(query = "") {
        setLoading(true);
        let url = "https://react-project-jbmu.onrender.com/api/tours/";
        if(query) {
            url += `?search=${query}`;
        }
        const result = await fetch(url);
        const data = await result.json();
        console.log(data, "fetched data");
        setItems(data);
        setLoading(false);
    }

    useEffect(() => {
        load();
    }, []);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            load(filterQuery);
        }, 400);
        return () => clearTimeout(delayDebounce);
    }, [filterQuery]);
    // const filteredItems = items.filter((item) =>
    //     item.name.toLowerCase().includes(filterQuery.toLowerCase())
    // );
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
            {loading ? (
                <p className="loading">Loading tours...</p>
            ):
            items.length ? (
                <ul className="tour__items">
                    {items.map((item) => (
                        <TourItem key={item.id} tour={item} />
                    ))}
                </ul>
            ) : (
                <p>No matching tours</p>
            )}
        </div>
    );
}
