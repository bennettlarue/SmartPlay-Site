import React from "react";

export const ProductCard = ({ name, imageLink, gameType, features }) => {
    return (
        <div className="w-[300px] bg-gray-200 rounded">
            <img
                src={imageLink}
                alt={name}
                className="w-full bg-cover rounded-t"
            />
            <div className="p-4">
                <h1 className="font-bold text-xl">{name}</h1>

                <div>
                    <ul className="flex space-x-2">
                        <h2>Game Type:</h2>

                        {gameType.map((type) => (
                            <li>{type}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul className="flex space-x-2">
                        <h2>Features:</h2>

                        {features.map((feature) => (
                            <li>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
