import React, { ReactElement, useRef, useEffect } from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

/**
 * Special props for frontpagespecial
 */
type frontPageSpecialProps = {
    words: string[]
}


/**
 * Stateless react component.
 * @param props frontPageSpecialProps
 * @returns Headline component 12 cols wide, text centered.
 */
export const FrontPageSpecial : React.FC<frontPageSpecialProps> = (wordArray: frontPageSpecialProps):ReactElement => {
    
    // animation refs
    const frontPageAnimationWrapper = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    // Animation hook
    useEffect(() => {
        const element = frontPageAnimationWrapper.current;

        gsap.timeline()
            .to(element.querySelector("#head0"), { scaleX: "1" })
            .to(element.querySelector("#head1"), { scaleX: "1" })
            .to(element.querySelector("#head2"), { scaleX: "1" })
        ;
        gsap.to(element.querySelector("#head3"), {
            scaleX: "1", 
            ease: "bounce",
            scrollTrigger: {
                trigger: element.querySelector("#head3"),
                start: "top center",
                end: "bottom top",
            },
        });
        gsap.to(element.querySelector("#head4"), {
            scaleX: "1", 
            scrollTrigger: {
                trigger: element.querySelector("#head4"),
                start: "top center",
                end: "bottom top",
            },
        })
    },[]);

    

    return(
        <div className="pb-3" ref={frontPageAnimationWrapper}>
                <p id="head0" className="frontPageSpecial animationFromXHalf">{wordArray.words[0]}</p>
                <p id="head1" className="frontPageSpecial animationFromXHalf">{wordArray.words[1]}</p>   
                <p id="head2" className="frontPageSpecial text-center animationFromXHalf">{wordArray.words[2]}</p>    
                <p id="head3" className="frontPageSpecial animationFromXHalf">{wordArray.words[3]}</p>    
                <p id="head4" className="frontPageSpecial text-end animationFromXZero">{wordArray.words[4]}</p>       
        </div>
    );
}