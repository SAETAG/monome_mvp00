import React, { useState } from "react";
import axios from "axios";

const NewItemForm = ({ onItemAdded }) => {
    const [formData, setFormData] = useState({
        item_name: "",
        category: "",
        purchase_day: "",
        purchase_place: "",
        purchase_price: "",
        memory: "",
        heart_level: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost/api/items", formData)
            .then((response) => {
                onItemAdded(response.data);
                setFormData({
                    item_name: "",
                    category: "",
                    purchase_day: "",
                    purchase_place: "",
                    purchase_price: "",
                    memory: "",
                    heart_level: ""
                });
                setError("");
            })
            .catch(() => {
                setError("アイテムの追加に失敗しました。");
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>新しいアイテムを追加</h3>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div>
                <label>名前:</label>
                <input
                    type="text"
                    name="item_name"
                    value={formData.item_name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>カテゴリ:</label>
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>購入日:</label>
                <input
                    type="date"
                    name="purchase_day"
                    value={formData.purchase_day}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>購入場所:</label>
                <input
                    type="text"
                    name="purchase_place"
                    value={formData.purchase_place}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>購入価格:</label>
                <input
                    type="number"
                    name="purchase_price"
                    value={formData.purchase_price}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>モノとあなたの思い出:</label>
                <textarea
                    name="memory"
                    value={formData.memory}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>お気に入り度:</label>
                <input
                    type="number"
                    name="heart_level"
                    value={formData.heart_level}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">追加</button>
        </form>
    );
};

export default NewItemForm;
