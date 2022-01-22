import React from "react"
import { Headline } from "../components/projectComp/headline/headline";
import { Cta } from "../components/projectComp/cta/callToAction";
import { NavMenu } from "../components/projectComp/navMenu/navMenu";
import { BrianBot } from "../components/external/brian/brian";
import { Helmet } from "react-helmet";
import { Footer } from "../components/projectComp/footer/footer";
import { getAddresses } from "../Addresses";
import {TextSection} from "../components/projectComp/textSection/textSection";

/**
 * Index page markup
 * @returns react component
 */
const IndexPage: React.FC = (): React.ReactElement => {
	return (
		<div>
			<NavMenu header="Navigation" innerHeader="Pages" navLinks={ getAddresses(0) }></NavMenu>
			<div className="container py-5 bg-opacity-75">
				{/* bootstrap javascript and popper */}
				<Helmet>
					<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
				</Helmet>
				<div>
					<div className="row">
						<Headline text="My portfolio" hSize={1}></Headline>
					</div>
					<div>
						<TextSection 
							header="Welcome" 
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum orci ut nisl mattis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque volutpat tempus nibh, at aliquam turpis sodales id. Donec in urna ut magna sollicitudin mattis nec a massa. Integer massa enim, fermentum vel volutpat ac, dictum sit amet erat. Aliquam vitae rhoncus nunc. Ut eu nunc vitae odio consectetur efficitur. Morbi gravida at libero id volutpat. Aenean eu mauris auctor, blandit turpis ac, lobortis nunc. Donec dapibus leo lorem, in imperdiet felis convallis nec. Duis et egestas dolor. Nunc est dolor, rhoncus luctus tempus quis, aliquet sed lorem. In ac condimentum ligula. Pellentesque id ante ac orci blandit pulvinar nec in libero. Pellentesque a mi vitae augue tempus tempor in vitae est. Cras pellentesque, augue ut tincidunt iaculis, orci dolor dapibus metus, sit amet rhoncus lorem justo egestas urna. Integer justo dui, posuere ac odio vel, aliquam rutrum massa. Curabitur porttitor dictum lacinia. Praesent a tristique nunc, at pharetra tortor. Pellentesque eget suscipit magna, quis pulvinar leo. Morbi semper efficitur est sed mollis. Quisque quis magna lacus."
							headerSize={2}
							>
							<Cta text="Call to action" url="/"></Cta>
						</TextSection>
					</div>
				</div>
				<BrianBot></BrianBot>
				<Footer></Footer>
			</div>
		</div>
	)
}

export default IndexPage