import { useState } from "react";

export default function TourList(){
    const [items, setItems] = useState([]);

    async function load() {
        const result = await fetch(
            "http://127.0.0.1:8000/api/tours/"
        );
        const data = await result.json();
        console.log(data, "fetched data");
        setItems(data);
        
    }

}