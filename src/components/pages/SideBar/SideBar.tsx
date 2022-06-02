import "./SideBar.css";
// import SearchBar from "../../components/SearchBar/SearchBar";

const SideBar = () => {
  return (
    <div>
      <h1>Favorites &#128278;</h1>
      <div className="fav-searchbar">{/* <SearchBar /> */}</div>
      <hr />
      <div>List of Countries</div>
    </div>
  );
};

export default SideBar;
