import React from "react";
import ClientCarousel from "./ClientCarousel";

const Clients = () => {
    return (
        <div className="mt-24">
            <div className="w-[1000px] text-center mx-auto ">
                <div className="flex justify-center">
                    <h1 className="text-3xl font-bold"> Our Clients</h1>
                </div>
                <div className=" w-36 mx-auto border-b-4 border-b-blue-950 my-2 mb-4"></div>
                <p className="text-xl p-2">
                    Smartplay International preserves drawing integrity for
                    lottery and gaming organizations in 126 countries. We design
                    and manufacture the most advanced traditional and digital
                    lottery drawing systems available, with more than 5,000
                    systems deployed worldwide since 1993.
                </p>
            </div>

            <div className="pt-5 mt-5 h-[200px] bg-slate-200">
                <ClientCarousel />
            </div>
        </div>
    );
};

export default Clients;
