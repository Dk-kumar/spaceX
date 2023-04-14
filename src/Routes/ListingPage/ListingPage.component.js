import { Link } from "react-router-dom";
import HeaderContainer from "../../Components/Header/Header.container";
import { dateConvertor } from "../../Utils/Convertor";
import { LAUNCHES, HISTORY, ROCKETS } from "../../Constants";
import "./ListingPage.style.scss";

const ListingPage = (props) => {
  const { page } = props;

  const renderPages = {
    [LAUNCHES]: {
      render: () => renderLaunches(),
    },
    [HISTORY]: {
      render: () => renderHistory(),
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
    const { listData = [] } = props;

    return (
      <>
        <div className="Card-Container">
          {listData.map((res) => {
            return (
              <>
                {res?.links?.patch?.small && res?.details && (
                  <Link to={`${res.id}`} key={res.id} className="Launches-Card">
                    {renderImages(res.links.patch.small)}
                    <span className="Title">{res.name}</span>
                    <div className="Details">{res.details}</div>
                  </Link>
                )}
              </>
            );
          })}
        </div>
      </>
    );
  };

  const renderHistory = () => {
    const { listData = [] } = props;

    return (
      <div className="History-Wrapper">
        {listData.map((historyRes) => {
          return (
            <a
              key={historyRes.id}
              className="History-Card"
              target="_blank"
              rel="noopener noreferrer"
              href={historyRes?.links?.article}
            >
              <div className="Top">
                <p className="Title">{historyRes?.title}</p>
                <div className="Date">
                  {dateConvertor(historyRes?.event_date_utc)}
                </div>
              </div>
              <div className="Details">{historyRes.details}</div>
            </a>
          );
        })}
      </div>
    );
  };

  const renderRockets = () => {
    const { listData = [] } = props;

    return (
      <div className="Card-Container">
        {listData.map((res) => {
          return (
            <>
              {res?.description && (
                <Link to={`${res.id}`} key={res.id} className="Rocket-Card">
                  {renderImages(res?.flickr_images[0])}
                  <div className="About-Wrapper">
                    <span className="Title">{res.name}</span>
                    <div className="Details">{res.description}</div>
                  </div>
                </Link>
              )}
            </>
          );
        })}
      </div>
    );
  };

  const renderDOM = () => {
    const { render } = renderPages[page];
    return <>{render()}</>;
  };

  return (
    <>
      <HeaderContainer page={page} />
      <div className="ListingPage-Conatiner">{renderDOM()}</div>
    </>
  );
};

export default ListingPage;
