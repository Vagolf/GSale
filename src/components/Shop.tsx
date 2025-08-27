import { useState } from "react";

type SaleItem = {
    id: number;
    name: string;
    price: number;
    image: string;
};

const saleItems: SaleItem[] = [
    {
        id: 1,
        name: "Laptop",
        price: 1200,
        image: "https://via.placeholder.com/150?text=Laptop",
    },
    {
        id: 2,
        name: "Keyboard",
        price: 80,
        image: "https://via.placeholder.com/150?text=Keyboard",
    },
    {
        id: 3,
        name: "Monitor",
        price: 300,
        image: "https://via.placeholder.com/150?text=Monitor",
    },
];

export default function Shop() {
    const [counts, setCounts] = useState<{ [key: number]: number }>({});

    const handlePlus = (id: number) => {
        setCounts((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1,
        }));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">IT Sale Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {saleItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-32 h-32 object-cover mb-4 rounded"
                        />
                        <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                        <p className="text-lg text-blue-600 mb-4">${item.price}</p>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-700">Count:</span>
                            <span className="font-bold">{counts[item.id] || 0}</span>
                            <button
                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                onClick={() => handlePlus(item.id)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

