const pageFinder = (props) => {
  const { router: { location: { pathname = "" } } = {} } = props;
  const filterKey = pathname?.slice(pathname.lastIndexOf("/") + 1);
  
  return filterKey;
};

export default pageFinder;
