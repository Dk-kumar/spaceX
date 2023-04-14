import React from "react";
import { useCallback, useEffect, useState } from "react";
import { getRequest } from "../../Utils/ApiRequests";
import { endPoints } from "../../Utils/EndPoints";
import Home from "./Home.component";

const HomeContainer = () => {
  const [companyData, setCompanyData] = useState(null);

  const callApi = useCallback(async () => {
    const getData = await getRequest(endPoints.aboutCompanyApi);
    setCompanyData(getData);
  }, []);

  useEffect(() => {
    callApi();
  }, [callApi]);

  const componentStates = {
    companyData: companyData,
  };
  return <Home {...componentStates} />;
};

export default HomeContainer;
