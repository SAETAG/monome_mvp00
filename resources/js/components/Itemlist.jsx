import React, { useState, useEffect } from "react";
import axios from "axios";
import NewItemForm from "./NewItemForm";
import EditItemForm from "./EditItemForm";
import "../../css/ItemList.css"; // ItemList用のCSS


const ItemList = () => {
    const [items, setItems] = useState([]); // アイテム一覧
    const [loading, setLoading] = useState(true); // ローディング状態
    const [error, setError] = useState(""); // エラー状態
    const [editingItem, setEditingItem] = useState(null); // 編集中のアイテム

    // アイテム一覧を取得
    const fetchItems = () => {
        axios
            .get("http://localhost/api/items")
            .then((response) => {
                setItems(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("データの取得に失敗しました");
                setLoading(false);
            });
    };

    // コンポーネント初期化時にデータ取得
    useEffect(() => {
        fetchItems();
    }, []);

    // アイテム追加
    const handleItemAdded = (newItem) => {
        setItems([...items, newItem]);
    };

    // アイテム削除
    const handleDelete = (itemId) => {
        axios
            .delete(`http://localhost/api/items/${itemId}`)
            .then(() => {
                setItems(items.filter((item) => item.item_id !== itemId));
            })
            .catch(() => {
                alert("削除に失敗しました");
            });
    };

    // 編集開始
    const handleEditClick = (item) => {
        setEditingItem(item);
    };

    // 編集の送信
    const handleUpdate = (updatedItem) => {
        axios
            .put(`http://localhost/api/items/${updatedItem.item_id}`, updatedItem)
            .then((response) => {
                setItems((prevItems) =>
                    prevItems.map((item) =>
                        item.item_id === updatedItem.item_id
                            ? response.data
                            : item
                    )
                );
                setEditingItem(null); // 編集終了
            })
            .catch(() => {
                alert("更新に失敗しました");
            });
    };

    // モーダルを閉じる
    const handleClose = () => {
        setEditingItem(null);
    };

    // ローディング状態
    if (loading) return <p>読み込み中...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <NewItemForm onItemAdded={handleItemAdded} />
            <h2>アイテム一覧</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.item_id}>
                        {item.item_name} - {item.category} - {item.purchase_day} - {item.purchase_place} - {item.purchase_price}JPY - {item.memory} - {item.heart_level}
                        <button onClick={() => handleEditClick(item)}>編集</button>
                        <button onClick={() => handleDelete(item.item_id)}>削除</button>
                    </li>
                ))}
            </ul>

            {/* 編集用モーダル */}
            {editingItem && (
                <EditItemForm
                    item={editingItem}
                    onUpdate={handleUpdate}
                    onClose={handleClose}
                />
            )}
        </div>
    );
};

export default ItemList;
