import { useState, useEffect } from "react";
import TourItem from "./TourItem";
import "./TourList.css";
import { useSearchParams } from "react-router-dom";
import { searchItems } from "../../services/itemService";
export default function TourList() {
    const [items, setItems] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [params, setParams] = useSearchParams();
    const search = params.get("search") || "";


    async function load(query = "") {
        setLoading(true);
        let data;

        if(query) {
            data = await searchItems(query);
        }else{
            const res = await fetch("https://react-project-jbmu.onrender.com/api/tours");
            data = await res.json()
        }
    
        setItems(data || []);
        setLoading(false);
    }

    useEffect(() => {
        load(search);
    }, [search]);


    function handleSearch(e) {
        const value = e.target.value;
        setFilterQuery(value);
        setParams({search: value});
    }

    // useEffect(() => {
    //     const delayDebounce = setTimeout(() => {
    //         load(filterQuery);
    //     }, 400);
    //     return () => clearTimeout(delayDebounce);
    // }, [filterQuery]);
    // const filteredItems = items.filter((item) =>
    //     item.name.toLowerCase().includes(filterQuery.toLowerCase())
    // );
    return (
        <div className="tour__list">
            <h2 className="list__title">Tours</h2>
         
            <div className="search__bar">
                <input type="text" className="search__input" 
                placeholder="Search tours..."
                value={filterQuery}
                onChange={handleSearch} />
                <button className="clear__btn" onClick={() => {setFilterQuery(""); setParams({});}}>Clear</button>
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
