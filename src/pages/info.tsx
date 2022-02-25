import React from "react";
import {NavMenu} from "../components/projectComp/navMenu/navMenu";
import {getAddresses} from "../Addresses"
import {TextSection} from "../components/projectComp/textSection/textSection";
import {Cta} from "../components/projectComp/cta/callToAction";
import {Footer} from "../components/projectComp/footer/footer";
import {BrianBot} from "../components/external/brian/brian";
import { CookieBanner } from "../components/projectComp/cookie/cookie";
import {CommonSpecialHeadline} from "../components/projectComp/headline/commonSpecialHeader";
import {Spacer} from "../components/projectComp/spacer/spacer";


/**
 * Info page component
 * 
 * @returns 
 */
const Info:React.FC = ():React.ReactElement => {
    return (
        <div>
            <CookieBanner></CookieBanner>

            <NavMenu header="Info" innerHeader="Info" navLinks={getAddresses(2)}></NavMenu>
            <div className="container py-5 bg-opacity-75">
                <TextSection 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum lorem sed dolor volutpat, eu ultrices nisi facilisis. Nam eget massa sed purus tempus imperdiet ac at ante. Nam et tristique leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut nunc libero, consectetur eu feugiat at, molestie id nisl. Mauris maximus et ex egestas vehicula. Vestibulum turpis velit, euismod ut lectus eget, tincidunt viverra velit. Mauris iaculis ullamcorper leo, in venenatis urna lacinia in."
                    header=""
                    headerSize={1}
                    flipChildOrder={true}
                >
                    <CommonSpecialHeadline header="Who am i"></CommonSpecialHeadline>
                </TextSection>

                <Spacer></Spacer>
                
                <TextSection
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum lorem sed dolor volutpat, eu ultrices nisi facilisis. Nam eget massa sed purus tempus imperdiet ac at ante. Nam et tristique leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut nunc libero, consectetur eu feugiat at, molestie id nisl. Mauris maximus et ex egestas vehicula. Vestibulum turpis velit, euismod ut lectus eget, tincidunt viverra velit. Mauris iaculis ullamcorper leo, in venenatis urna lacinia in."
                    header="Education and motives"
                    headerSize={2}       
                >
                    <a className="btn btn-danger btn-lg" href={process.env.CV_ADDRESS} ><b className="text-primary">CV can be found here</b></a>         
                </TextSection>

                <Spacer></Spacer>

                <TextSection 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum lorem sed dolor volutpat, eu ultrices nisi facilisis. Nam eget massa sed purus tempus imperdiet ac at ante. Nam et tristique leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut nunc libero, consectetur eu feugiat at, molestie id nisl. Mauris maximus et ex egestas vehicula. Vestibulum turpis velit, euismod ut lectus eget, tincidunt viverra velit. Mauris iaculis ullamcorper leo, in venenatis urna lacinia in."
                    header="Little more about me"
                    headerSize={2}
                    flipChildOrder={true}
                ></TextSection>
                <Footer></Footer>
                <BrianBot></BrianBot>
            </div>
        </div>
    );
}

export default Info;