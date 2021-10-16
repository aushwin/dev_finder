import BottomBanner from "./BottomBanner";
import RepoBanner from "./RepoBanner";
const Display = (props) => {
  console.log(
    "repoCount = " +
      props.repoCount +
      " followers = " +
      props.followers +
      " following = " +
      props.following +
      " html url = " +
      props.html_url
  );
  console.log(props.img);
  return (
    <div className="mt-4 h-80 dark:bg-bg_blue-light bg-white rounded-md text-gray-700 flex">
      <div className="rounded-md h-24 p-5">
        <img src={props.img} alt="" className="h-44 p-2 rounded-full " />
      </div>
      <div className="dark:text-white p-7 flex flex-grow flex-col gap-5">
        <div>
          <div className="text-xl font-bold tracking-widest">{props.title}</div>
          <a
            className="text-blue-700 text-xs"
            target="_blank"
            href={props.url}
            rel="noreferrer"
          >
            {props.url}
          </a>
        </div>
        <RepoBanner
          repoCount={props.repoCount}
          followerCount={props.followers}
          followingCount={props.following}
        />
        <BottomBanner
          location={props.location}
          org={props.org}
          url={props.url}
        />
      </div>
    </div>
  );
};

export default Display;
