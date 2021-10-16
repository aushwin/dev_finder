const RepoBanner = (props) => {
  return (
    <div className=" flex dark:text-white w-6/6 gap-20 p-5 rounded-md dark:bg-bg_blue-dark bg-green-200 shadow-lg ">
      <div>
        <div className="text-xs ">Repos</div>
        <div className="text-center font-bold">{props.repoCount}</div>
      </div>
      <div>
        <div className="text-xs">Followers</div>
        <div className="text-center font-bold">{props.followerCount}</div>
      </div>
      <div>
        <div className="text-xs">Following</div>
        <div className="text-center font-bold">{props.followingCount}</div>
      </div>
    </div>
  );
};

export default RepoBanner;
