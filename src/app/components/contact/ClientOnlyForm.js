import React, { useState, useEffect, useId } from "react";
import dynamic from "next/dynamic";

// Constants for text sizes and styles
const HEADER_TEXT_SIZE = "text-lg";
const PLACEHOLDER_TEXT_SIZE = "text-sm";
const REQUIRED_FIELD_STYLE = "text-red-500";

import countries from "/data/countries.json";

const ClientOnlyForm = () => {
    const [isOtherChecked, setIsOtherChecked] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const otherInputId = useId();

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleOtherCheck = (event) => {
        setIsOtherChecked(event.target.checked);
    };

    return (
        <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div className="space-y-2">
                    <label
                        className={`${HEADER_TEXT_SIZE} font-semibold`}
                        htmlFor="firstName"
                    >
                        Your Name{" "}
                        <span className={REQUIRED_FIELD_STYLE}>*</span>
                    </label>
                    <div className="flex space-x-4 items-center">
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${PLACEHOLDER_TEXT_SIZE}`}
                            required
                        />
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${PLACEHOLDER_TEXT_SIZE}`}
                            required
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label
                        className={`${HEADER_TEXT_SIZE} font-semibold`}
                        htmlFor="email"
                    >
                        E-mail <span className={REQUIRED_FIELD_STYLE}>*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@example.com"
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${PLACEHOLDER_TEXT_SIZE}`}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label
                        className={`${HEADER_TEXT_SIZE} font-semibold`}
                        htmlFor="phoneNumber"
                    >
                        Phone Number{" "}
                        <span className={REQUIRED_FIELD_STYLE}>*</span>
                    </label>
                    <div className="lg:flex lg:space-x-3 lg:space-y-0 space-y-5 items-center">
                        <input
                            type="text"
                            id="countryCode"
                            name="countryCode"
                            placeholder="Country Code"
                            className={`lg:w-1/4 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${PLACEHOLDER_TEXT_SIZE}`}
                        />
                        <input
                            type="text"
                            id="areaCode"
                            name="areaCode"
                            placeholder="Area Code"
                            className={`lg:w-1/4 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${PLACEHOLDER_TEXT_SIZE}`}
                        />
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            className={`lg:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${PLACEHOLDER_TEXT_SIZE}`}
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label
                        className={`${HEADER_TEXT_SIZE} font-semibold`}
                        htmlFor="organizationName"
                    >
                        Your Organization Name{" "}
                        <span className={REQUIRED_FIELD_STYLE}>*</span>
                    </label>
                    <input
                        type="text"
                        id="organizationName"
                        name="organizationName"
                        placeholder="Your Organization Name"
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${PLACEHOLDER_TEXT_SIZE}`}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label
                        className={`${HEADER_TEXT_SIZE} font-semibold`}
                        htmlFor="country"
                    >
                        In which country will your equipment be used?{" "}
                        <span className={REQUIRED_FIELD_STYLE}>*</span>
                    </label>
                    <select
                        id="country"
                        name="country"
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${PLACEHOLDER_TEXT_SIZE}`}
                        required
                    >
                        <option value="">Select Country...</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country.code}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="space-y-2">
                    <label
                        className={`${HEADER_TEXT_SIZE} font-semibold`}
                        htmlFor="businessCategory"
                    >
                        Primary Business Category{" "}
                        <span className={REQUIRED_FIELD_STYLE}>*</span>
                    </label>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="traditionalLottery"
                                name="businessCategory"
                                value="Traditional Lottery"
                                className="form-checkbox h-5 w-5 text-blue-500 rounded"
                            />
                            <p>Traditional Lottery</p>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="onlineGaming"
                                name="businessCategory"
                                value="Online/iGaming"
                                className="form-checkbox h-5 w-5 text-blue-500 rounded"
                            />
                            <p>Online/iGaming</p>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="casino"
                                name="businessCategory"
                                value="Casino"
                                className="form-checkbox h-5 w-5 text-blue-500 rounded"
                            />
                            <p>Casino</p>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="bingo"
                                name="businessCategory"
                                value="Bingo"
                                className="form-checkbox h-5 w-5 text-blue-500 rounded"
                            />
                            <p>Bingo</p>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="fundraising"
                                name="businessCategory"
                                value="Fundraising"
                                className="form-checkbox h-5 w-5 text-blue-500 rounded"
                            />
                            <p>Fundraising</p>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="corporate"
                                name="businessCategory"
                                value="Corporate"
                                className="form-checkbox h-5 w-5 text-blue-500 rounded"
                            />
                            <p>Corporate</p>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="other"
                                name="businessCategory"
                                value="Other"
                                className="form-checkbox h-5 w-5 text-blue-500 rounded"
                                onChange={handleOtherCheck}
                            />
                            <p>Other</p>
                        </label>
                    </div>
                    {isClient && (
                        <div
                            className={
                                isOtherChecked
                                    ? ""
                                    : "opacity-50 pointer-events-none"
                            }
                        >
                            <input
                                type="text"
                                id={otherInputId}
                                name="otherBusinessCategory"
                                placeholder="Enter other business category"
                                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${PLACEHOLDER_TEXT_SIZE}`}
                                disabled={!isOtherChecked}
                            />
                        </div>
                    )}
                </div>
                <div className="space-y-2">
                    <label
                        className={`${HEADER_TEXT_SIZE} font-semibold`}
                        htmlFor="projectDetails"
                    >
                        Relevant details about your project . . .{" "}
                        <span className={REQUIRED_FIELD_STYLE}>*</span>
                    </label>
                    <textarea
                        id="projectDetails"
                        name="projectDetails"
                        placeholder="Enter relevant details about your project..."
                        rows="4"
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${PLACEHOLDER_TEXT_SIZE}`}
                        required
                    ></textarea>
                </div>
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md shadow-md transition duration-300"
            >
                Submit
            </button>
        </form>
    );
};

export default ClientOnlyForm;
