import React, { useState } from "react";

const EditItemForm = ({ item, onUpdate, onClose }) => {
    const [itemName, setItemName] = useState(item.item_name);
    const [category, setCategory] = useState(item.category);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({
            ...item,
            item_name: itemName,
            category: category,
        });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>アイテムを編集</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>アイテム名:</label>
                        <input
                            type="text"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>カテゴリ:</label>
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <button type="submit">更新</button>
                    <button type="button" onClick={onClose}>
                        キャンセル
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditItemForm;
