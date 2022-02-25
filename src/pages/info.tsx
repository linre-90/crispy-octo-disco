import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {NavMenu} from "../components/projectComp/navMenu/navMenu";
import {getAddresses} from "../Addresses"
import {TextSection} from "../components/projectComp/textSection/textSection";
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

    const infoPageAnimationRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const element = infoPageAnimationRef.current;

        gsap.to(element.querySelector("#box0"), {
            x:"0", 
            opacity:1, 
            scrollTrigger:{
                trigger: element.querySelector("#box0"),
                start: "top center",
                end: "bottom top",
            }
        });

        gsap.to(element.querySelector("#box1"), {
            x:"0", 
            opacity:1, 
            scrollTrigger:{
                trigger: element.querySelector("#box1"),
                start: "top center",
                end: "bottom top",
                
            }
        });

        gsap.to(element.querySelector("#box2"), {
            opacity:1, 
            duration:1,
            scrollTrigger:{
                trigger: element.querySelector("#box2"),
                start: "top center",
                end: "bottom top",
            }
        });
    },[])


    return (
        <div ref={infoPageAnimationRef}>
            <CookieBanner></CookieBanner>

            <NavMenu header="Info" innerHeader="Info" navLinks={getAddresses(2)}></NavMenu>
            <div className="container py-5 bg-opacity-75 ">

                <div id="box0" className="animationLeftPositionX">
                    <TextSection 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum lorem sed dolor volutpat, eu ultrices nisi facilisis. Nam eget massa sed purus tempus imperdiet ac at ante. Nam et tristique leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut nunc libero, consectetur eu feugiat at, molestie id nisl. Mauris maximus et ex egestas vehicula. Vestibulum turpis velit, euismod ut lectus eget, tincidunt viverra velit. Mauris iaculis ullamcorper leo, in venenatis urna lacinia in."
                        header=""
                        headerSize={1}
                        flipChildOrder={true}
                    >
                        <CommonSpecialHeadline header="Who am i"></CommonSpecialHeadline>
                    </TextSection>
                </div>

                <Spacer></Spacer>

                <div id="box1" className="animationrigthPositionX">
                    <TextSection
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum lorem sed dolor volutpat, eu ultrices nisi facilisis. Nam eget massa sed purus tempus imperdiet ac at ante. Nam et tristique leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut nunc libero, consectetur eu feugiat at, molestie id nisl. Mauris maximus et ex egestas vehicula. Vestibulum turpis velit, euismod ut lectus eget, tincidunt viverra velit. Mauris iaculis ullamcorper leo, in venenatis urna lacinia in."
                        header=""
                        headerSize={2}     
                        flipChildOrder={true}  
                    >
                        <CommonSpecialHeadline header="Education"></CommonSpecialHeadline>
                        <a className="btn btn-danger btn-lg mb-4 mt-4" href={process.env.CV_ADDRESS} ><b className="text-primary">CV can be found here</b></a>         
                    </TextSection>
                </div>

                <Spacer></Spacer>

                <div id="box2" className="fromOpacityZero">
                    <TextSection 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum lorem sed dolor volutpat, eu ultrices nisi facilisis. Nam eget massa sed purus tempus imperdiet ac at ante. Nam et tristique leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut nunc libero, consectetur eu feugiat at, molestie id nisl. Mauris maximus et ex egestas vehicula. Vestibulum turpis velit, euismod ut lectus eget, tincidunt viverra velit. Mauris iaculis ullamcorper leo, in venenatis urna lacinia in."
                        header="Little more about me"
                        headerSize={2}
                        flipChildOrder={true}
                    ></TextSection>
                </div>
                <Footer></Footer>
                <BrianBot></BrianBot>
            </div>
        </div>
    );
}

export default Info;