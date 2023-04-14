import { LAUNCHES, ROCKETS } from "../../Constants";
import HeaderContainer from "../../Components/Header/Header.container";
import "./DetailsPage.style.scss";
import { dateConvertor } from "../../Utils/Convertor";

export const DetailsPage = (props) => {
  const { pathname } = props;
  const path = pathname.slice(1, pathname.lastIndexOf("/"));

  const renderPages = {
    [LAUNCHES]: {
      render: () => renderLaunches(),
    },
    [ROCKETS]: {
      render: () => renderRockets(),
    },
  };

  const renderImages = (imageSrc) => {
    return (
      <div className="Image-Wrapper">
        <img src={imageSrc} alt={imageSrc} />
      </div>
    );
  };

  const renderLaunches = () => {
    const { detailsData = {} } = props;

    const {
      links: { patch: { large = "" } = {}, wikipedia = "", webcast = "" } = {},
      name = "",
      date_local = "",
      success = false,
      details = "",
    } = detailsData;

    return (
      <>
        <div className="Launch-Card">
          <div className="Left-Side">{renderImages(large)}</div>

          <div className="Right-Side">
            <p className="Name">{name}</p>

            <div className="About-Launches">
              <span className="Launch-Date">
                Launch Date: {dateConvertor(date_local)}
              </span>
              <span className={success ? "Success" : "Faliure"}>
                {success ? "Successful" : "Faliure"}
              </span>
            </div>

            <p className="Details">{details}</p>

            <div className="Artical-Wrapper">
              <a
                className="Wikipedia"
                rel="noreferrer"
                href={wikipedia}
                target="_blank"
              >
                {"Wikipedia"}
              </a>
              <a
                className="YouTube"
                rel="noreferrer"
                href={webcast}
                target="_blank"
              >
                {"You Tube"}
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderRockets = () => {
    const { detailsData = {} } = props;

    const {
      flickr_images = [],
      name = "",
      description = "",
      type = "",
      first_flight = "",
      cost_per_launch = "",
      wikipedia = "",
    } = detailsData;

    return (
      <>
        <div className="Rocket-Card">
          <div className="Left-Side">{renderImages(flickr_images[0])}</div>
          <div className="Right-Side">
            <span className="Name">{name}</span>
            <p className="Type">Type: {type}</p>
            <p className="First-Flight">First Flight: {first_flight}</p>
            <p className="Cost-Launch">Cost per launch: {cost_per_launch}</p>
            <div className="Details">{description}</div>
            <div className="Artical-Wrapper">
              <a
                className="Wikipedia"
                rel="noreferrer"
                href={wikipedia}
                target="_blank"
              >
                {"Wikipedia"}
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderDOM = () => {
    const { detailsData = {} } = props;

    const { render } = renderPages[path];
    return <>{Object.keys(detailsData).length > 0 && render()}</>;
  };

  return (
    <>
      <HeaderContainer page={path} />
      <div className="Details-Wrapper">{renderDOM()}</div>;
    </>
  );
};
