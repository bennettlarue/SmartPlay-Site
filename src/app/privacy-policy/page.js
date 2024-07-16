"use client";

import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { Title } from "@/app/components/products/Title";

const sectionStyle = "mb-6";
const headingStyle = "text-xl font-bold mb-2";
const paragraphStyle = "mb-2";
const listStyle = "list-disc list-inside ml-4 mb-2";

export default function Contact() {
    return (
        <div className="App">
            <Nav />
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                    src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/10/globe.jpg"
                    alt="Customer Service"
                    className="w-full h-full object-cover -translate-y-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
            </div>

            <Title text="Privacy Policy" />
            <div className="bg-white">
                <div className="mx-auto max-w-[1300px] p-8">
                    <p className={headingStyle}>Updated 24 SEPTEMBER 2020</p>

                    <p className={paragraphStyle}>
                        Smartplay International is committed to safeguarding
                        your privacy. Contact us if you have any questions or
                        problems regarding the use of your Personal Data and we
                        will gladly assist you.
                    </p>

                    <p className={paragraphStyle}>
                        By using this site or/and our services, you consent to
                        the Processing of your Personal Data as described in
                        this Privacy Policy.
                    </p>

                    <div className={sectionStyle}>
                        <h2 className={headingStyle}>Table of Contents</h2>
                        <ul className={listStyle}>
                            <li>Definitions used in this Policy</li>
                            <li>Data protection principles we follow</li>
                            <li>
                                What rights do you have regarding your Personal
                                Data
                            </li>
                            <li>What Personal Data we gather about you</li>
                            <li>How we use your Personal Data</li>
                            <li>Who else has access to your Personal Data</li>
                            <li>How we secure your data</li>
                            <li>Information about cookies</li>
                            <li>Contact information</li>
                        </ul>
                    </div>

                    <div className={sectionStyle}>
                        <h2 className={headingStyle}>Definitions</h2>
                        <ul className={listStyle}>
                            <li>
                                <strong>Personal Data:</strong> any information
                                relating to an identified or identifiable
                                natural person.
                            </li>
                            <li>
                                <strong>Processing:</strong> any operation or
                                set of operations which is performed on Personal
                                Data or on sets of Personal Data.
                            </li>
                            <li>
                                <strong>Data subject:</strong> a natural person
                                whose Personal Data is being Processed.
                            </li>
                            <li>
                                <strong>Child:</strong> a natural person under
                                16 years of age.
                            </li>
                            <li>
                                <strong>We/us:</strong> Smartplay International
                            </li>
                        </ul>
                    </div>

                    <div className={sectionStyle}>
                        <h2 className={headingStyle}>
                            Data Protection Principles
                        </h2>
                        <p className={paragraphStyle}>
                            We promise to follow the following data protection
                            principles:
                        </p>
                        <ul className={listStyle}>
                            <li>Processing is lawful, fair, transparent.</li>
                            <li>Processing is limited to the purpose.</li>
                            <li>Processing is done with minimal data.</li>
                            <li>Processing is limited with a time period.</li>
                            <li>
                                We will do our best to ensure the accuracy of
                                data.
                            </li>
                            <li>
                                We will do our best to ensure the integrity and
                                confidentiality of data.
                            </li>
                        </ul>
                    </div>

                    <div className={sectionStyle}>
                        <h2 className={headingStyle}>Data Subject's rights</h2>
                        <p className={paragraphStyle}>
                            The Data Subject has the following rights:
                        </p>
                        <ul className={listStyle}>
                            <li>
                                Right to information – meaning you have to right
                                to know whether your Personal Data is being
                                processed; what data is gathered, from where it
                                is obtained and why and by whom it is processed.
                            </li>
                            <li>
                                Right to access – meaning you have the right to
                                access the data collected from/about you. This
                                includes your right to request and obtain a copy
                                of your Personal Data gathered.
                            </li>
                            <li>
                                Right to rectification – meaning you have the
                                right to request rectification or erasure of
                                your Personal Data that is inaccurate or
                                incomplete.
                            </li>
                            <li>
                                Right to erasure – meaning in certain
                                circumstances you can request for your Personal
                                Data to be erased from our records.
                            </li>
                            <li>
                                Right to restrict processing – meaning where
                                certain conditions apply, you have the right to
                                restrict the Processing of your Personal Data.
                            </li>
                            <li>
                                Right to object to processing – meaning in
                                certain cases you have the right to object to
                                Processing of your Personal Data, for example in
                                the case of direct marketing.
                            </li>
                            <li>
                                Right to object to automated Processing –
                                meaning you have the right to object to
                                automated Processing, including profiling; and
                                not to be subject to a decision based solely on
                                automated Processing. This right you can
                                exercise whenever there is an outcome of the
                                profiling that produces legal effects concerning
                                or significantly affecting you.
                            </li>
                            <li>
                                Right to data portability – you have the right
                                to obtain your Personal Data in a
                                machine-readable format or if it is feasible, as
                                a direct transfer from one Processor to another.
                            </li>
                            <li>
                                Right to lodge a complaint – in the event that
                                we refuse your request under the Rights of
                                Access, we will provide you with a reason as to
                                why. If you are not satisfied with the way your
                                request has been handled please contact us.
                            </li>
                            <li>
                                Right for the help of supervisory authority –
                                meaning you have the right for the help of a
                                supervisory authority and the right for other
                                legal remedies such as claiming damages.
                            </li>
                            <li>
                                Right to withdraw consent – you have the right
                                withdraw any given consent for Processing of
                                your Personal Data.
                            </li>
                        </ul>
                    </div>
                    <div className={sectionStyle}>
                        <h2 className={headingStyle}>Data we gather</h2>

                        <h3 className="font-semibold mt-4 mb-2">
                            Information you have provided us with
                        </h3>
                        <p className={paragraphStyle}>
                            This might be your e-mail address, name, billing
                            address, home address etc – mainly information that
                            is necessary for delivering you a product/service or
                            to enhance your customer experience with us. We save
                            the information you provide us with in order for you
                            to comment or perform other activities on the
                            website. This information includes, for example,
                            your name and e-mail address.
                        </p>

                        <h3 className="font-semibold mt-4 mb-2">
                            Information automatically collected about you
                        </h3>
                        <p className={paragraphStyle}>
                            This includes information that is automatically
                            stored by cookies and other session tools. For
                            example, your shopping cart information, your IP
                            address, your shopping history (if there is any)
                            etc. This information is used to improve your
                            customer experience. When you use our services or
                            look at the contents of our website, your activities
                            may be logged.
                        </p>

                        <h3 className="font-semibold mt-4 mb-2">
                            Publicly available information
                        </h3>
                        <p className={paragraphStyle}>
                            We might gather information about you that is
                            publicly available.
                        </p>
                    </div>

                    <div className={sectionStyle}>
                        <h2 className={headingStyle}>
                            How we use your Personal Data
                        </h2>

                        <p className={paragraphStyle}>
                            We use your Personal Data in order to:
                        </p>
                        <ul className={listStyle}>
                            <li>
                                provide our service to you. This includes, for
                                example, registering your account; developing a
                                project quotation or proposal; providing you
                                with other products and services that you have
                                requested; providing you with promotional items
                                at your request and communicating with you in
                                relation to those products and services;
                                communicating and interacting with you; and
                                notifying you of changes to any services.
                            </li>
                            <li>enhance your customer experience;</li>
                            <li>fulfill an obligation under law or contract</li>
                        </ul>

                        <p className={paragraphStyle}>
                            We use your Personal Data on legitimate grounds
                            and/or with your Consent.
                        </p>

                        <p className={paragraphStyle}>
                            On the grounds of entering into a contract or
                            fulfilling contractual obligations, we Process your
                            Personal Data for the following purposes:
                        </p>
                        <ul className={listStyle}>
                            <li>to identify you;</li>
                            <li>
                                to provide you a service or to send/offer you a
                                product;
                            </li>
                            <li>
                                to communicate either for sales or invoicing
                            </li>
                        </ul>

                        <p className={paragraphStyle}>
                            On the ground of legitimate interest, we Process
                            your Personal Data for the following purposes:
                        </p>
                        <ul className={listStyle}>
                            <li>to send you personalized offers*</li>
                            <li>
                                to administer and analyze our client base
                                (purchasing behavior and history) in order to
                                improve the quality, variety, and availability
                                of products/ services offered/provided;
                            </li>
                            <li>
                                to conduct questionnaires concerning client
                                satisfaction
                            </li>
                        </ul>

                        <p className={paragraphStyle}>
                            As long as you have not informed us otherwise, we
                            consider offering you products/services that are
                            similar or same to your purchasing history/browsing
                            behavior to be our legitimate interest.
                        </p>

                        <p className={paragraphStyle}>
                            With your consent we Process your Personal Data for
                            the following purposes:
                        </p>
                        <ul className={listStyle}>
                            <li>
                                to send you newsletters and campaign offers
                                (from us and/or our carefully selected
                                partners);
                            </li>
                            <li>
                                for other purposes, we have asked your consent
                                for
                            </li>
                        </ul>

                        <p className={paragraphStyle}>
                            We Process your Personal Data in order to fulfill
                            obligation rising from the law and/or use your
                            Personal Data for options provided by law. We
                            reserve the right to anonymize Personal Data
                            gathered and to use any such data. We will use data
                            outside the scope of this Policy only when it is
                            anonymized. We save your billing information and
                            other information gathered about you for as long as
                            needed for accounting purposes or other obligations
                            deriving from the law.
                        </p>

                        <p className={paragraphStyle}>
                            We might process your Personal Data for additional
                            purposes that are not mentioned here but are
                            compatible with the original purpose for which the
                            data was gathered. To do this, we will ensure that:
                        </p>
                        <ul className={listStyle}>
                            <li>
                                the link between purposes, context, and nature
                                of Personal Data is suitable for further
                                Processing;
                            </li>
                            <li>
                                the further Processing would not harm your
                                interests and
                            </li>
                            <li>
                                there would be an appropriate safeguard for
                                Processing.
                            </li>
                        </ul>

                        <p className={paragraphStyle}>
                            We will inform you of any further Processing and
                            purposes.
                        </p>
                    </div>

                    <div className={sectionStyle}>
                        <h2 className={headingStyle}>
                            Who else can access your Personal Data
                        </h2>
                        <p className={paragraphStyle}>
                            We do not share your Personal Data with strangers.
                            Personal Data about you is in some cases provided to
                            our trusted partners in order to either make
                            providing the service to you possible or to enhance
                            your customer experience. We share data with the
                            following partners:
                        </p>
                        <ul className={listStyle}>
                            <li>
                                <a
                                    href="https://www.cloudways.com/en/terms.php#privacy"
                                    className="text-blue-500 hover:underline"
                                >
                                    Cloudways Hosting
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.zoho.com/privacy.html"
                                    className="text-blue-500 hover:underline"
                                >
                                    Zoho.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.knack.com/privacy/"
                                    className="text-blue-500 hover:underline"
                                >
                                    Knack.com
                                </a>
                            </li>
                        </ul>
                        <p className={paragraphStyle}>
                            We only work with Processing partners who are able
                            to ensure an adequate level of protection to your
                            Personal Data. We disclose your Personal Data to
                            third parties or public officials when we are
                            legally obliged to do so. We might disclose your
                            Personal Data to third parties if you have consented
                            to it or if there are other legal grounds for it.
                        </p>
                    </div>

                    <div className={sectionStyle}>
                        <h2 className={headingStyle}>
                            How we secure your data
                        </h2>
                        <p className={paragraphStyle}>
                            We do our best to keep your Personal Data safe. We
                            use safe protocols for communication and
                            transferring data (such as HTTPS). We use
                            anonymising and pseudonymising where suitable. We
                            monitor our systems for possible vulnerabilities and
                            attacks through additional software monitoring.
                        </p>
                        <p className={paragraphStyle}>
                            Even though we try our best we can not guarantee the
                            security of information. However, we promise to
                            notify suitable authorities of data breaches. We
                            will also notify you if there is a threat to your
                            rights or interests. We will do everything we
                            reasonably can to prevent security breaches and to
                            assist authorities should any breaches occur.
                        </p>
                        <p className={paragraphStyle}>
                            If you have an account with us, note that you have
                            to keep your username and password secret.
                        </p>
                    </div>

                    <div className={sectionStyle}>
                        <h2 className={headingStyle}>Children</h2>
                        <p className={paragraphStyle}>
                            We do not intend to collect or knowingly collect
                            information from children. We do not target children
                            with our services.
                        </p>
                    </div>

                    <div className={sectionStyle}>
                        <h2 className={headingStyle}>
                            Cookies and Other Technologies
                        </h2>
                        <p className={paragraphStyle}>
                            We use cookies and/or similar technologies to
                            analyze customer behavior, administer the website,
                            track users' movements, and to collect information
                            about users. This is done in order to personalise
                            and enhance your experience with us.
                        </p>
                        <p className={paragraphStyle}>
                            A cookie is a tiny text file stored on your
                            computer. Cookies store information that is used to
                            help make sites work. Only we can access the cookies
                            created by our website. You can control your cookies
                            at the browser level. Choosing to disable cookies
                            may hinder your use of certain functions.
                        </p>
                        <p className={paragraphStyle}>
                            We use cookies for the following purposes:
                        </p>
                        <ul className={listStyle}>
                            <li>
                                <strong>Necessary cookies:</strong> these
                                cookies are required for you to be able to use
                                some important features on our website, such as
                                logging in. These cookies don't collect any
                                personal information.
                            </li>
                            <li>
                                <strong>Functionality cookies:</strong> these
                                cookies provide functionality that makes using
                                our service more convenient and makes providing
                                more personalised features possible. For
                                example, they might remember your name and
                                e-mail in comment forms so you don't have to
                                re-enter this information next time when
                                commenting.
                            </li>
                            <li>
                                <strong>Analytics cookies:</strong> these
                                cookies are used to track the use and
                                performance of our website and services
                            </li>
                            <li>
                                <strong>Advertising cookies:</strong> these
                                cookies are used to deliver advertisements that
                                are relevant to you and to your interests. In
                                addition, they are used to limit the number of
                                times you see an advertisement. They are usually
                                placed to the website by advertising networks
                                with the website operator's permission. These
                                cookies remember that you have visited a website
                                and this information is shared with other
                                organisations such as advertisers. Often
                                targeting or advertising cookies will be linked
                                to site functionality provided by the other
                                organisation.
                            </li>
                        </ul>
                        <p className={paragraphStyle}>
                            You can remove cookies stored in your computer via
                            your browser settings. Alternatively, you can
                            control some 3rd party cookies by using a privacy{" "}
                            <a
                                href="https://optout.aboutads.info"
                                className="text-blue-600 hover:underline"
                            >
                                optout.aboutads.info
                            </a>
                            . For more information about cookies, visit{" "}
                            <a
                                href="https://www.youronlinechoices.com"
                                className="text-blue-600 hover:underline"
                            >
                                youronlinechoices.com
                            </a>
                            . For more information about cookies, visit{" "}
                            <a
                                href="allaboutcookies.org"
                                className="text-blue-600 hover:underline"
                            >
                                allaboutcookies.org
                            </a>
                            .
                        </p>
                        <p className={paragraphStyle}>
                            We use Google Analytics to measure traffic on our
                            website. Google has their own Privacy Policy which
                            you can review{" "}
                            <a
                                href="https://support.google.com/analytics/answer/6004245"
                                className="text-blue-600 hover:underline"
                            >
                                here
                            </a>
                            . If you'd like to opt out of tracking by Google
                            Analytics, visit the{" "}
                            <a
                                className="text-blue-600 hover:underline"
                                href="https://tools.google.com/dlpage/gaoptout"
                            >
                                Google Analytics opt-out page.
                            </a>
                        </p>
                    </div>

                    <div className={sectionStyle}>
                        <h2 className={headingStyle}>Origin Portal Users</h2>
                        <p className={paragraphStyle}>
                            ORIGIN PORTAL USERS, REVIEW THE GOOGLE PRIVACY
                            POLICY{" "}
                            <a
                                href="https://policies.google.com/privacy?hl=en-US"
                                className="text-blue-600 hover:underline"
                            >
                                HERE
                            </a>
                        </p>
                        <p className={paragraphStyle}>
                            To revoke Origin Portal access to your YouTube data,
                            click{" "}
                            <a
                                href="https://myaccount.google.com/connections?filters=3,4&hl=en"
                                className="text-blue-600 hover:underline"
                            >
                                here
                            </a>
                            .
                        </p>
                    </div>

                    <div className={sectionStyle}>
                        <h2 className={headingStyle}>Contact Information</h2>
                        <h3 className="font-semibold mt-4 mb-2">
                            Supervisory Authority
                        </h3>
                        <p className={paragraphStyle}>
                            <a
                                href="http://www.ada.lt/"
                                className="text-blue-600 hover:underline"
                            >
                                http://www.ada.lt/
                            </a>
                            <br />
                            <a
                                href="mailto:ada@ada.lt"
                                className="text-blue-600 hover:underline"
                            >
                                ada@ada.lt
                            </a>
                            <br />+ 370 5 279 14 45
                        </p>
                    </div>

                    <div className={sectionStyle}>
                        <h2 className={headingStyle}>
                            Changes to this Privacy Policy
                        </h2>
                        <p className={paragraphStyle}>
                            We reserve the right to make changes to this Privacy
                            Policy.
                        </p>
                        <p className={paragraphStyle}>
                            Last modification was made 9/30/2020.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
