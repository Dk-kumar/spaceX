import HeaderContainer from "../Header/Header.container";
import ElonMusk from "../../Shared/ElonMusk.webp";
import "./Home.style.scss";

const Home = (props) => {
  const { companyData = {} } = props;

  const renderImage = () => {
    return (
      <div className="Image-Wrapper">
        <img src={ElonMusk} alt="ceo" />
      </div>
    );
  };

  const companyDetails = () => {
    return (
      <div className="Company-Details">
        <div className="Details-Key">
          <p className="Ceo-Name">CEO: {companyData?.ceo}</p>
          <p className="Coo-Name">COO: {companyData?.coo}</p>
          <p className="Cto-Name">CTO: {companyData?.cto}</p>
          <p className="Founded">Founded: {companyData?.founded}</p>
          <p className="Headquarters">
            Headquarters: {companyData?.headquarters.city},{" "}
            {companyData?.headquarters.state}
          </p>
          <p className="Company">
            Website:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={companyData?.links.website}
            >
              {companyData?.links.website}
            </a>
          </p>
          <p className="Twitter">
            Twitter:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={companyData?.links.twitter}
            >
              {companyData?.links.twitter}
            </a>
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <HeaderContainer />
      {Object.keys(companyData).length > 0 && (
        <div className="Home-Container">
          <div className="Home-Wrapper">
            {renderImage()}
            {companyDetails()}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
