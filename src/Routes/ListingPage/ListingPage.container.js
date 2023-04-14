import { useEffect, useState, useCallback, useMemo } from "react";
import { getRequest } from "../../Utils/ApiRequests";
import { baseURL } from "../../Utils/EndPoints";
import pageFinder from "../../Utils/PageFinder";

import ListingPage from "./ListingPage.component";

const ListingPageContainer = (props) => {
  const [listData, setListData] = useState();
  const page = pageFinder(props);

  const apiUrl = useMemo(() => {
    return `${baseURL}${page}`;
  }, [page]);

  const fetchData = useCallback(async () => {
    const getData = await getRequest(apiUrl);
    setListData(getData);
  }, [apiUrl]);

  useEffect(() => {
    fetchData();
  }, [page, fetchData]);

  const componentStates = {
    listData,
    page,
  };

  return (
    <>
      <ListingPage {...componentStates} {...props} />
    </>
  );
};

export default ListingPageContainer;
