

/**
 * Data to pass for single link
 * @param text - Link text
 * @param url - Link url
 * @param active - Is this the active page?
 */
 type navMenuLinkData = {
    text: string,
    url: string,
    active: boolean,
}

/**
 * Returns all addresses page will have. In order:
 * - home
 * - contact
 * - info
 * - portfolio
 * - blog
 * @param activeindex - index of active page
 * @returns navMenuLinkData array
 */
function getAddresses(activeindex:number): navMenuLinkData[]{
    const navData: navMenuLinkData[] = [
		{ text: "Home", active: false, url: "/" },
		{ text: "Contact", active: false, url: "/contact" },
		{ text: "Info", active: false, url: "/info" },
		{ text: "Portfolio", active: false, url: "/portfolio" },
		{ text: "Blog", active:false, url:"/blog"}
	];

    navData[activeindex].active = true;
    navData[activeindex].url = "#";
    return navData;
}


export {getAddresses, navMenuLinkData}