import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/DeclutterList.css";

const DeclutterList = ({ refreshSignal }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchDeclutterList = () => {
        axios
            .get("http://localhost/api/declutter-lists")
            .then((response) => {
                setItems(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("断捨離リストの取得に失敗しました");
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchDeclutterList();
    }, [refreshSignal]); // 親コンポーネントからのシグナルで更新

    if (loading) return <p>読み込み中...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>断捨離リスト</h2>
            {items.length === 0 ? (
                <p>断捨離するアイテムはありません。</p>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item.item_id}>
                            {item.item_id} - {item.item_name} - {item.category}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DeclutterList;



// const DeclutterList = () => {
//     const [items, setItems] = useState([]); // 断捨離リスト
//     const [loading, setLoading] = useState(true); // ローディング状態
//     const [error, setError] = useState(""); // エラー状態

//     // 断捨離リストの取得
//     const fetchDeclutterList = () => {
//         axios
//             .get("http://localhost/api/declutter-lists")
//             .then((response) => {
//                 setItems(response.data);
//                 setLoading(false);
//             })
//             .catch(() => {
//                 setError("断捨離リストの取得に失敗しました");
//                 setLoading(false);
//             });
//     };

//     // 初期化時にデータを取得
//     useEffect(() => {
//         fetchDeclutterList();
//     }, []);

//     if (loading) return <p>読み込み中...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//         <div>
//             <h2>断捨離リスト</h2>
//             {items.length === 0 ? (
//                 <p>断捨離するアイテムはありません。</p>
//             ) : (
//                 <ul>
//                     {items.map((item) => (
//                         <li key={item.item_id}>
//                             {item.item_name} - {item.category}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default DeclutterList;
