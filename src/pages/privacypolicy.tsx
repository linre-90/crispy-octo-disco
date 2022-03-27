import React from "react";
import {NavMenu} from "../components/projectComp/navMenu/navMenu";
import {getAddresses} from "../Addresses";
import {TextSection} from "../components/projectComp/textSection/textSection";
import {Footer} from "../components/projectComp/footer/footer";
import {BrianBot} from "../components/external/brian/brian";
import { CookieBanner } from "../components/projectComp/cookie/cookie";
import {useStaticQuery, graphql} from "gatsby";
import { Helmet } from "react-helmet";

/**
 * Privacy policy page
 * @returns privacy policy page
 */
const PrivacyPolicy = () => {
    
    const privacyTexts = useStaticQuery(graphql`
        query privacyTexts {
            privacyJson {
                box0 {
                    head
                    text
                }
                box1 {
                    head
                    text
                }
            }
        }
    `);
    
    return (
        <div>
            <Helmet>
                <title>JL - Portfolio privacy policy</title>
                <meta 
                    name="description" 
                    content="JL portfolio privacy policy."
                />
            </Helmet>

            <CookieBanner></CookieBanner>
            <NavMenu header="Privacy policy" innerHeader="Privacy policy" navLinks={getAddresses(5)}></NavMenu>
            <div className="container py-5 bg-opacity-75">
                <TextSection 
                    text={ privacyTexts.privacyJson.box0.text }
                    header={ privacyTexts.privacyJson.box0.head }
                    headerSize={1}
                ></TextSection>
                <TextSection 
                    text= { privacyTexts.privacyJson.box1.text }
                    header={ privacyTexts.privacyJson.box1.head }
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

