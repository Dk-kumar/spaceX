import React from "react";
import { Route, Routes } from "react-router-dom";
import { withRouter } from "../Utils/WithRouter";
import HomeContainer from "../Components/Home/Home.container";
import ListingPageContainer from "./ListingPage/ListingPage.container";
import DetailsPageContainer from "./DetailsPage/DetailsPage.container";

const AppRouter = (props) => {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/:page" element={<ListingPageContainer {...props} />} />
      <Route path="/:page/:id" element={<DetailsPageContainer {...props} />} />
    </Routes>
  );
};
export default withRouter(AppRouter);
