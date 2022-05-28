import "./SideBar.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const SideBar = () => {
  return (
    <div>
      <h1>Favorites</h1>
      <div className="fav-searchbar">
        <SearchBar />
      </div>
      <hr />
      <div>List of Countrys</div>
    </div>
  );
};

export default SideBar;
