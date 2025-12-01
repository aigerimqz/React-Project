import { useState, useEffect } from "react";
import TourItem from "./TourItem";
import "./TourList.css";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { searchItems } from "../../services/itemService";
import { fetchItems } from "../../features/items/itemsSlice";
export default function TourList() {
   
    const dispatch = useDispatch();
    const {list, loadingList, errorList} = useSelector(
        (state) => state.items
    );

    const [params, setParams] = useSearchParams();
    const search = params.get("search") || "";
    const [filterQuery, setFilterQuery] = useState(search);
    
    




    useEffect(() => {
        dispatch(fetchItems(search));
    }, [search, dispatch]);


    function handleSearch(e) {
        const value = e.target.value;
        setFilterQuery(value);

        if(value) setParams({ search: value});
        else setParams();
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
            {loadingList ? (
                <p className="loading">Loading tours...</p>
            ):
            list.length ? (
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
