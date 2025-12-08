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
    const category = params.get("category") || "";
    const continent = params.get("continent") || "";

    const [filterQuery, setFilterQuery] = useState(search);
    const [selectedCategory, setSelectedCategory] = useState(category);
    const [selectedContinent, setSelectedContinent] = useState(continent);


    function updateFilters(newFilters){
        const cleanFilters = {};
        if (newFilters.search) cleanFilters.search = newFilters.search;
        if (newFilters.category) cleanFilters.category = newFilters.category;
        if (newFilters.continent) cleanFilters.continent = newFilters.continent;

        setParams(cleanFilters);

    }
    




    // useEffect(() => {
    //     dispatch(fetchItems(search));
    // }, [search, dispatch]);
    useEffect(() => {
        dispatch(fetchItems({ search, category, continent }));
    }, [search, category, continent, dispatch]);

    function handleSearch(e) {
        const value = e.target.value;
        setFilterQuery(value);

        updateFilters({
            search: value,
            category: selectedCategory, 
            continent: selectedContinent,
        });
    }

    function clearFilters(){
        setFilterQuery("");
        setSelectedCategory("");
        setSelectedContinent("");

        setParams({});
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
                <button className="clear__btn" onClick={clearFilters}>Clear</button>
            </div>
            <div className="filters">
                <select
                    value={selectedCategory}
                    onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        updateFilters({
                            search: filterQuery,
                            category: e.target.value,
                            continent: selectedContinent,
                        });}}>
                    <option value="">All Categories</option>
                    <option value="adventure">Adventure</option>
                    <option value="family-friendly">Family Friendly</option>
                    <option value="cultural">Cultural</option>
                    <option value="nature-wildlife">Nature & Wildlife</option>
                    <option value="relax-spa">Relaxation / Spa</option>
                    <option value="beach-water">Beach / Water</option>
                    <option value="city-sightseeing">City Tours / Sightseeing</option>
                    <option value="extreme-sports">Extreme / Sports</option>
                </select>

                <select
                    value={selectedContinent}
                    onChange={(e) => {
                        setSelectedContinent(e.target.value);
                        updateFilters({
                            search: filterQuery,
                            category: selectedCategory,
                            continent: e.target.value,
                        });}}>
                    <option value="">All Continents</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="africa">Africa</option>
                    <option value="north-america">North America</option>
                    <option value="south-america">South America</option>
                </select>
            </div>



            {loadingList ? (
                <p className="loading">Loading tours...</p>
            ):
            list.length ? (
                <ul className="tour__items">
                    {list.map((item) => (
                        <TourItem key={item.id} tour={item} />
                    ))}
                </ul>
            ) : (
                <p>No matching tours</p>
            )}
        </div>
    );
}
