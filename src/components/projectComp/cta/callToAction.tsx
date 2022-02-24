import React, { ReactElement, useEffect, useRef } from "react";
import { Link } from "gatsby";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";



/**
 * Call to action props
 */
interface CTAProps{
    text: string
    url: string
}

/**
 * Call to action button component
 * @param props - url: Url of the link
 * @param props - text: link text
 * @returns React component
 */
export const Cta: React.FC<CTAProps> = (props: CTAProps): ReactElement => {

    const ctaAnimationRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to( ctaAnimationRef.current, {
            scale: 1,
            duration: 5,
            scrollTrigger:{
                trigger: ctaAnimationRef.current,
            }
        });
    },[])


    return(
        <div className="col">
            <Link ref={ctaAnimationRef} type="button" className="btn btn-warning btn-lg rounded-0 animationFromZeroScale" to={props.url}>
                <span className="text-primary"><b>{props.text}</b></span>
            </Link>
        </div>
    );
}

