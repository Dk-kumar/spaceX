import Header from "./Header.component";

const HeaderContainer = (props) => {
  const NavLink = [
    {
      id: 1,
      link: "history",
    },
    {
      id: 2,
      link: "launches",
    },
    {
      id: 3,
      link: "rockets",
    },
  ];

  const containerStates = {
    NavLink: NavLink,
  };
  return <Header {...containerStates} {...props} />;
};

export default HeaderContainer;
