import { useEffect, useState, useCallback, useMemo } from "react";
import { getRequest } from "../../Utils/ApiRequests";
import { baseURL } from "../../Utils/EndPoints";
import { DetailsPage } from "./DetailsPage.component";
import { useLocation } from "react-router-dom";

const DetailsPageContainer = (props) => {
  const [detailsData, setDetailsData] = useState();
  const { pathname } = useLocation();

  const apiUrl = useMemo(() => {
    return `${baseURL}${pathname.slice(1)}`;
  }, [pathname]);

  const fetchData = useCallback(async () => {
    const getData = await getRequest(apiUrl);
    setDetailsData(getData);
  }, [apiUrl]);

  useEffect(() => {
    fetchData();
  }, [pathname, fetchData]);

  const componentStates = {
    detailsData,
    pathname,
  };
  return <DetailsPage {...componentStates} {...props} />;
};

export default DetailsPageContainer;
