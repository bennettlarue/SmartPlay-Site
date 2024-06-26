import React from "react";

import { PopupText } from "../PopupText";

export const Title = ({ text = "Title" }) => {
    return (
        <div className="text-center text-blue-950 lg:my-32 my-20">
            <h1 className="lg:text-7xl text-4xl font-bold flex justify-center">
                <PopupText text={text} delay={0.4} />
            </h1>
        </div>
    );
};
