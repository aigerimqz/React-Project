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

    // useEffect( () => {
    //     load();
    // }, []);
    
    

    return (
        <div className="tour__list">
            <h2 className="tour__title">Tours</h2>
            <button onClick={load}>Click</button>
            
            {items ? 
                <ul className="tour__items">
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                    // <p>{item}</p>
                ))}

                </ul>
            : <p>No data</p>}
        </div>   
    )

}