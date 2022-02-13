import React from "react";
import {NavMenu} from "../components/projectComp/navMenu/navMenu";
import {getAddresses} from "../Addresses";
import {TextSection} from "../components/projectComp/textSection/textSection";
import {Footer} from "../components/projectComp/footer/footer";
import {BrianBot} from "../components/external/brian/brian";
import { CookieBanner } from "../components/projectComp/cookie/cookie";

/**
 * Privacy policy page
 * @returns privacy policy page
 */
const PrivacyPolicy = () => {
    return (
        <div>
            <CookieBanner></CookieBanner>
            <NavMenu header="Privacy policy" innerHeader="Privacy policy" navLinks={getAddresses(5)}></NavMenu>
            <div className="container py-5 bg-opacity-75">
                <TextSection 
                    text="Your data is not shared for third parties. I do not store, share or distribute your personal information for third parties. Any personal data like email address submitted in contact form is used only for communication and will not be used for marketing. Any information submitted through form is preserved only for lifespan of communication, after that data is permanently deleted."
                    header="Privacy policy"
                    headerSize={1}
                ></TextSection>
                <TextSection 
                    text="This site does not track users or visitors. Any cookies served are only stricktly necessary for site functionality. These cookies do not track users personal data. How ever i cannot remove previous cookies set from other sites and cannot be held responsible about those."
                    header="Cookies"
                    headerSize={2}
                ></TextSection>         
                <TextSection 
                    text="Updated 13.02.2022"
                    header=""
                    headerSize={2}
                ></TextSection>               
                <Footer></Footer>
                <BrianBot></BrianBot>
            </div>
        </div>
    )
}

export default PrivacyPolicy;

