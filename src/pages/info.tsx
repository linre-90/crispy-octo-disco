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
import { graphql, useStaticQuery } from "gatsby";


/**
 * Info page component
 * 
 * @returns 
 */
const Info:React.FC = ():React.ReactElement => {

    const infoPageAnimationRef = useRef(null);
    
    const infoTexts = useStaticQuery(graphql`
    query infoPageTexts {
        infoJson {
            box0 {
              head
              text
            }
            box1 {
              head
              text
              cta
            }
            box2 {
              head
              text
            }
          }
      }
    `);
      console.log(infoTexts);

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
                        text={ infoTexts.infoJson.box0.text }
                        header=""
                        headerSize={1}
                        flipChildOrder={true}
                    >
                        <CommonSpecialHeadline header={infoTexts.infoJson.box0.head}></CommonSpecialHeadline>
                    </TextSection>
                </div>

                <Spacer></Spacer>

                <div id="box1" className="animationrigthPositionX">
                    <TextSection
                        text={ infoTexts.infoJson.box1.text }
                        header=""
                        headerSize={2}     
                        flipChildOrder={true}  
                    >
                        <CommonSpecialHeadline header={ infoTexts.infoJson.box1.head }></CommonSpecialHeadline>
                        <a className="btn btn-danger btn-lg mb-4 mt-4" href={process.env.CV_ADDRESS} ><b className="text-primary">CV can be found here</b></a>         
                    </TextSection>
                </div>

                <Spacer></Spacer>

                <div id="box2" className="fromOpacityZero">
                    <TextSection 
                        text={ infoTexts.infoJson.box2.text }
                        header={ infoTexts.infoJson.box2.head }
                        headerSize={2}
                    ></TextSection>
                </div>
                <Footer></Footer>
                <BrianBot></BrianBot>
            </div>
        </div>
    );
}

export default Info;