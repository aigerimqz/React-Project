import { useState, useEffect } from "react";
import TourItem from "./TourItem";
import "./TourList.css";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { searchItems } from "../../services/itemService";
import { fetchItems } from "../../features/items/itemsSlice";
import { useDebounce } from "../../hooks/useDebounce";
import { useI18n } from "../../context/I18nContext";
import Loader from "../../components/Loader/Loader";
export default function TourList() {
    const { t } = useI18n();
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const {list, loadingList, errorList, count, next, previous} = useSelector(
        (state) => state.items
    );

    const [params, setParams] = useSearchParams();
    const search = params.get("search") || "";
    const category = params.get("category") || "";
    const continent = params.get("continent") || "";

    const [filterQuery, setFilterQuery] = useState(search);
    const [selectedCategory, setSelectedCategory] = useState(category);
    const [selectedContinent, setSelectedContinent] = useState(continent);


    const debouncedSearch = useDebounce(filterQuery, 400);

    function updateFilters(newFilters){
        const cleanFilters = {};
        if (newFilters.search && newFilters.search.trim() !== "") cleanFilters.search = newFilters.search;
        if (newFilters.category) cleanFilters.category = newFilters.category;
        if (newFilters.continent) cleanFilters.continent = newFilters.continent;

        cleanFilters.page = currentPage;
        cleanFilters.page_size = pageSize;

        
        setParams(cleanFilters);

    }
    




    // useEffect(() => {
    //     dispatch(fetchItems(search));
    // }, [search, dispatch]);
    useEffect(() => {
        dispatch(fetchItems({
            search: debouncedSearch,
            category: selectedCategory,
            continent: selectedContinent,
            page: currentPage,
            page_size: pageSize,
        }));
    }, [debouncedSearch, selectedCategory, selectedContinent, currentPage, pageSize, dispatch]);

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

    function goToPage(newPage){
        setCurrentPage(newPage);

        const newParams = new URLSearchParams(params);
        newParams.set("page", newPage);
        setParams(newParams);
    }



    return (
        



        <div className="tour__list">
            <h2 className="list__title">{t("tours_page.title")}</h2>

            <button onClick={() => goToPage(Math.max(currentPage - 1, 1))}
                disabled={!previous}>
                {t("tours_page.previous_btn")}
                </button>

                <button
                onClick={() => goToPage(currentPage + 1)}disabled={!next}>
                {t("tours_page.next_btn")}
            </button>


         
            <div className="search__bar">
                <input type="text" className="search__input" 
                placeholder={t("tours_page.search_placeholder")}
                value={filterQuery}
                onChange={handleSearch} />
                <button className="clear__btn" onClick={clearFilters}>{t("tours_page.clear_btn")}</button>
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
                    <option value="">{t("tours_page.filters.all_categories")}</option>
                    <option value="adventure">{t("tours_page.filters.adventure")}</option>
                    <option value="family-friendly">{t("tours_page.filters.family_friendly")}</option>
                    <option value="cultural">{t("tours_page.filters.cultural")}</option>
                    <option value="nature-wildlife">{t("tours_page.filters.nature_wildlife")}</option>
                    <option value="relax-spa">{t("tours_page.filters.relax_spa")}</option>
                    <option value="beach-water">{t("tours_page.filters.beach_water")}</option>
                    <option value="city-sightseeing">{t("tours_page.filters.city_sightseeing")}</option>
                    <option value="extreme-sports">{t("tours_page.filters.extreme_sports")}</option>
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
                    <option value="">{t("tours_page.filters.all_categories")}</option>
                    <option value="asia">{t("tours_page.filters.asia")}</option>
                    <option value="europe">{t("tours_page.filters.europe")}</option>
                    <option value="africa">{t("tours_page.filters.africa")}</option>
                    <option value="north-america">{t("tours_page.filters.north_america")}</option>
                    <option value="south-america">{t("tours_page.filters.south_america")}</option>
                </select>
            </div>



            {loadingList ? (
                <Loader></Loader>
            ):
            list.length ? (
                <ul className="tour__items">
                    {list.map((item) => (
                        <TourItem key={item.id} tour={item} />
                    ))}
                </ul>
            ) : (
                <p>{t("tours_page.no_results")}</p>
            )}
        </div>
    );
}
