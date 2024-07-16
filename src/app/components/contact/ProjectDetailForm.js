import React, { useState, useEffect, useId } from "react";
import dynamic from "next/dynamic";

// Constants for text sizes and styles
const HEADER_TEXT_SIZE = "text-lg";
const PLACEHOLDER_TEXT_SIZE = "text-sm";
const REQUIRED_FIELD_STYLE = "text-red-500";

// Dynamically import the form component with SSR disabled
const ClientOnlyForm = dynamic(() => import("./ClientOnlyForm"), {
    ssr: false,
});

const ProjectDetailForm = () => {
    return (
        <div className="max-w-[1000px] rounded">
            <div className="mx-auto max-w-[700px] md:px-8 lg:px-0 space-y-10">
                <ClientOnlyForm />
            </div>
        </div>
    );
};

export default ProjectDetailForm;
