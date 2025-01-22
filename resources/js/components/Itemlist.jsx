import React, { useState, useEffect } from "react";
import axios from "axios";

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("/api/items")
            .then(response => setItems(response.data))
            .catch(error => setError("Failed to fetch items"));
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Item List</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.item_name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
