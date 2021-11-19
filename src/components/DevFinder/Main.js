import axios from "axios";
import { useContext, useState } from "react";
import { ThemeContext } from "../../store/theme-context";
import Display from "./Display";
import SearchBar from "./SearchBar";
import Title from "./Title";

const Main = () => {
  const themeCtx = useContext(ThemeContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [userData, setUserData] = useState(null);
  const [repoCount, setRepoCount] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [org, setOrg] = useState("");
  const [location, setLocation] = useState("");
  let getRepoCount, getFollowers, getFollowing, organisation, getLocation;
  const fetchedDataHandler = async (user) => {
    console.log(user);
    if (user.items.length > 0) {
      setErrorMessage(null);
      try {
        getRepoCount = await fetchApiCount(user.items[0].repos_url);
        setRepoCount(getRepoCount);
        getFollowers = await fetchApiCount(user.items[0].followers_url);
        setFollowers(getFollowers);
        let followingUrl = user.items[0].following_url;
        followingUrl = followingUrl.substring(0, followingUrl.length - 13);

        getFollowing = await fetchApiCount(followingUrl);
        setFollowing(getFollowing);
        getLocation = await fetchApi(user.items[0].location);
        setLocation(getLocation);

        organisation = await fetchApi(user.items[0].organizations_url);
        setOrg(organisation);

        setUserData(user.items[0]);
      } catch (error) {
        console.log(error);
        setErrorMessage("User not found !");
      }
    } else {
      setErrorMessage("User not found !");
    }
  };

  const fetchApiCount = async (url) => {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });
    return response.data.length;
  };

  const fetchApi = async (url) => {
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      });
      if (response.data.length === 0) {
        return "Not in any Org";
      } else {
        return response.data[0].login;
      }
    } catch (error) {
      console.log("not found \n" + error.message);
      return "Not Provided";
    }
  };
  return (
    <div className={themeCtx.mode}>
      <div className="dark:bg-bg_blue-dark bg-green-200 h-screen w-full flex items-center justify-center">
        <div className=" w-1/2 ">
          <Title />
          <SearchBar onFetchedData={fetchedDataHandler} />
          {userData && errorMessage == null && (
            <Display
              img={userData.avatar_url}
              title={userData.login}
              bio={"This profile has no bio"}
              url={userData.html_url}
              followers={followers}
              following={following}
              repoCount={repoCount}
              org={org}
              location={location}
            />
          )}
          {errorMessage && (
            <div className="text-red-500 font-thin  tracking-widest">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
