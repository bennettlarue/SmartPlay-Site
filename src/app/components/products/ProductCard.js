import React from "react";
import { motion } from "framer-motion";

export const ProductCard = ({ name, imageLink, categories }) => {
    return (
        <div className="bg-gray-200 rounded h-full">
            <img
                src={imageLink}
                alt={name}
                className="h-[300px] w-full object-cover rounded-t"
            />
            <div className="p-4">
                <div className="min-h-[70px] flex items-center">
                    <h1 className="font-bold text-2xl">{name}</h1>
                </div>

                <div className="mt-1">
                    <ul className="flex flex-wrap">
                        {categories.map((item) => (
                            <li
                                className="p-2 mr-3 bg-white w-fit rounded-xl shadow mt-4"
                                key={item.title}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
