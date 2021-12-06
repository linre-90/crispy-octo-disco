import * as React from "react"
import Headline from "../components/stateless/headline/headline";
import CTA from "../components/stateless/cta/callToAction";
import {NavMenu, navMenuLinkData} from "../components/stateless/navMenu/navMenu";
import BrianBot from "../components/statefull/brian/brian";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Backdrop from "../components/stateless/backdrop/Backdrop";
import { useState } from "react";
import {Helmet} from "react-helmet"; 


/**
 * Index page markup
 * @returns react component
 */
const IndexPage: React.FC = (): React.ReactElement => {

  const navData:navMenuLinkData[] = [
    {text: "Home", active:true, url:"#"},
    {text: "Contact", active:false, url:"#"},
    {text: "info", active:false, url:"#"},
    {text: "Work", active:false, url:"#"}
  ];

  const chatbotref = React.useRef(null);
  const [backdropActive, setbackdropActive] = useState(false);

  return (
    <div className="container mt-5">
      {backdropActive && <Backdrop></Backdrop>}
      {/* bootstrap javascript and popper */}
      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
      </Helmet>
      <NavMenu header="Navigation" innerHeader="Pages" navLinks={navData}></NavMenu>
      <div className="row">
        <Headline text="My portfolio" hSize={1}></Headline>
      </div>
      <div className="row">
        <Headline text="Welcome" hSize={3}></Headline>
      </div>
      <div className="row">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum orci ut nisl mattis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque volutpat tempus nibh, at aliquam turpis sodales id. Donec in urna ut magna sollicitudin mattis nec a massa. Integer massa enim, fermentum vel volutpat ac, dictum sit amet erat. Aliquam vitae rhoncus nunc. Ut eu nunc vitae odio consectetur efficitur. Morbi gravida at libero id volutpat. Aenean eu mauris auctor, blandit turpis ac, lobortis nunc. Donec dapibus leo lorem, in imperdiet felis convallis nec. Duis et egestas dolor. Nunc est dolor, rhoncus luctus tempus quis, aliquet sed lorem. In ac condimentum ligula. Pellentesque id ante ac orci blandit pulvinar nec in libero. Pellentesque a mi vitae augue tempus tempor in vitae est. Cras pellentesque, augue ut tincidunt iaculis, orci dolor dapibus metus, sit amet rhoncus lorem justo egestas urna. Integer justo dui, posuere ac odio vel, aliquam rutrum massa. Curabitur porttitor dictum lacinia. Praesent a tristique nunc, at pharetra tortor. Pellentesque eget suscipit magna, quis pulvinar leo. Morbi semper efficitur est sed mollis. Quisque quis magna lacus.
        </p>
      </div>
      <div className="row">
        <CTA text="Call to action" url="http://localhost:8000"></CTA>
      </div>
      <div id="brianWrapper">
        <BrianBot></BrianBot>
        <div ref={chatbotref}></div>
      </div>
      <div className="chatbotButton">
        <button
          className="btn btn-primary btn-floating mb-0 mt-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={() => {
            chatbotref.current?.scrollIntoView({ behavior: "smooth" });
            setbackdropActive(!backdropActive);
          }}
        >
          <h5>
              <FontAwesomeIcon icon={faRobot}></FontAwesomeIcon>  Brian
          </h5>
      </button>
      </div>
  </div>
  )
}

export default IndexPage


