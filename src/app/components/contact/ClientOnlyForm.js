import React, { useState, useEffect, useId } from "react";
import countries from "/data/countries.json";
import emailjs from "@emailjs/browser";

// Constants for text sizes and styles
const SECTION_TITLE_SIZE =
    "text-lg font-bold text-blue-950 border-b-2 border-b-blue-950";
const HEADER_TEXT_SIZE = "text-[16px] font-medium";
const PLACEHOLDER_TEXT_SIZE = "text-sm";
const REQUIRED_FIELD_STYLE = "text-red-500";

const serviceID = "service_cj36z9q";
const templateID = "template_s1rjmdg";
const userID = "0i-nrgDo-0A58LNMx";

const ClientOnlyForm = () => {
    const [isOtherChecked, setIsOtherChecked] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);
    const otherInputId = useId();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "",
        areaCode: "",
        phone: "",
        organizationName: "",
        country: "",
        businessCategory: [],
        otherBusinessCategory: "",
        projectDetails: "",
    });

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleOtherCheck = (event) => {
        setIsOtherChecked(event.target.checked);
    };

    const handlePrivacyPolicyCheck = (event) => {
        setPrivacyPolicyChecked(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!privacyPolicyChecked) {
            alert("Please accept the privacy policy before submitting.");
            return;
        }
        console.log(JSON.stringify(formData, null, 2));
        const templateParams = {
            user_name: "test",
            user_email: "test",
            user_message: "test",
        };
        emailjs.send(serviceID, templateID, formData, userID).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Your mail is sent!");
            },
            (error) => {
                console.log("FAILED...", error);
                alert("Oops... " + JSON.stringify(error));
            }
        );
    };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === "checkbox") {
            if (checked) {
                setFormData((prevData) => ({
                    ...prevData,
                    businessCategory: [...prevData.businessCategory, value],
                }));
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    businessCategory: prevData.businessCategory.filter(
                        (category) => category !== value
                    ),
                }));
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div className="space-y-6">
                    <h2 className={SECTION_TITLE_SIZE}>Personal Information</h2>
                    <div className="space-y-2">
                        <label
                            className={`${HEADER_TEXT_SIZE}`}
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
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${PLACEHOLDER_TEXT_SIZE}`}
                                required
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label
                            className={`${HEADER_TEXT_SIZE}`}
                            htmlFor="email"
                        >
                            E-mail{" "}
                            <span className={REQUIRED_FIELD_STYLE}>*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@example.com"
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${PLACEHOLDER_TEXT_SIZE}`}
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            className={`${HEADER_TEXT_SIZE}`}
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
                                value={formData.countryCode}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                id="areaCode"
                                name="areaCode"
                                placeholder="Area Code"
                                className={`lg:w-1/4 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${PLACEHOLDER_TEXT_SIZE}`}
                                value={formData.areaCode}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Phone Number"
                                className={`lg:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${PLACEHOLDER_TEXT_SIZE}`}
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="space-y-6 mt-5">
                    <h2 className={SECTION_TITLE_SIZE}>Project Information</h2>
                    <div className="space-y-2">
                        <label
                            className={`${HEADER_TEXT_SIZE}`}
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
                            value={formData.organizationName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            className={`${HEADER_TEXT_SIZE}`}
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
                            value={formData.country}
                            onChange={handleChange}
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
                            className={`${HEADER_TEXT_SIZE}`}
                            htmlFor="businessCategory"
                        >
                            Primary Business Category{" "}
                            <span className={REQUIRED_FIELD_STYLE}>*</span>
                        </label>

                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 text-sm">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="traditionalLottery"
                                    name="businessCategory"
                                    value="Traditional Lottery"
                                    className="form-checkbox h-5 w-5 text-blue-500 rounded"
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                />
                                <p>Fundraising</p>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="sportsBetting"
                                    name="businessCategory"
                                    value="Sports Betting"
                                    className="form-checkbox h-5 w-5 text-blue-500 rounded"
                                    onChange={handleChange}
                                />
                                <p>Sports Betting</p>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="other"
                                    name="businessCategory"
                                    value="Other"
                                    className="form-checkbox h-5 w-5 text-blue-500 rounded"
                                    onChange={(event) => {
                                        handleChange(event);
                                        handleOtherCheck(event);
                                    }}
                                />
                                <p>Other</p>
                            </label>
                            {isOtherChecked && (
                                <div className="flex space-x-2 items-center">
                                    <label
                                        htmlFor={otherInputId}
                                        className="sr-only"
                                    >
                                        Other Business Category
                                    </label>
                                    <input
                                        type="text"
                                        id={otherInputId}
                                        name="otherBusinessCategory"
                                        placeholder="Specify other category"
                                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${PLACEHOLDER_TEXT_SIZE}`}
                                        value={formData.otherBusinessCategory}
                                        onChange={handleChange}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="space-y-2 mt-5">
                    <h2 className={SECTION_TITLE_SIZE}>Project Details</h2>
                    <div className="space-y-2">
                        <label
                            className={`${HEADER_TEXT_SIZE}`}
                            htmlFor="projectDetails"
                        >
                            Tell us about your project{" "}
                            <span className={REQUIRED_FIELD_STYLE}>*</span>
                        </label>
                        <textarea
                            id="projectDetails"
                            name="projectDetails"
                            rows="4"
                            placeholder="Please describe your project here..."
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${PLACEHOLDER_TEXT_SIZE}`}
                            required
                            value={formData.projectDetails}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="space-y-4 mt-6">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="privacyPolicy"
                            name="privacyPolicy"
                            className="form-checkbox h-5 w-5 text-blue-500 rounded"
                            checked={privacyPolicyChecked}
                            onChange={handlePrivacyPolicyCheck}
                            required
                        />
                        <span className={PLACEHOLDER_TEXT_SIZE}>
                            I have read and agree to the{" "}
                            <a
                                href="/privacy-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Privacy Policy
                            </a>
                            <span className={REQUIRED_FIELD_STYLE}> *</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-950 text-white font bold rounded-md hover:bg-blue-900 transition-colors disabled:bg-blue-300"
                    disabled={!privacyPolicyChecked}
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ClientOnlyForm;
