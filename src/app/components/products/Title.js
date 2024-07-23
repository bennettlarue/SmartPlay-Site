import React from "react";

import { PopupText } from "../PopupText";
import { FadeInText } from "../FadeInText";

export const Title = ({ text = "Title" }) => {
    return (
        <div className="text-center text-blue-950 lg:my-18 my-20">
            <h1 className="lg:text-6xl text-4xl font-bold flex justify-center">
                <FadeInText text={text} delay={0.2} />
            </h1>
        </div>
    );
};
