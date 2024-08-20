import React from "react";
import { motion } from "framer-motion";

export const ProductCard = ({ name, imageLink, categories }) => {
    return (
        <div className="bg-white hover:bg-gray-100 cursor-pointer transition-all shadow border-2 rounded h-full p-4">
            <img
                src={imageLink}
                alt={name}
                className="h-[250px] rounded w-full object-cover"
            />
            <div className="pt-5">
                <div className="flex items-center specialFont text-lg">
                    <h1 className="font-medium hover:text-blue-800">{name}</h1>
                </div>

                <div className="mt-1">
                    <ul className="flex flex-wrap">
                        {categories.map((item) => (
                            <li
                                className="py-1 px-1.5 mr-2 bg-gray-200 w-fit mt-2 rounded-r"
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
