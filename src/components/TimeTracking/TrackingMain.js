import axios from "axios";
import Bg from "./Bg";

const TrackingMain = () => {
  const onClickHandler = async () => {
    var API_KEY = "3803b65a-d625-4b07-9b7a-d298498d3177";
    const response = await axios.get(
      `https://wakatime.com/api/v1/users/current/summaries?start=2021-11-12&end=2021-11-18#?api_key=${API_KEY}`,
      {
        headers: {
          "Access-Control-Allow-Origin": true,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  };
  return (
    <Bg>
      <div className="flex h-2/5   ">
        <div className="bg-red-500  flex-grow">s</div>
        <div className=" w-2/5 flex flex-col justify-start items-end">
          <div className="w-3/5 h-4/5 flex flex-col justify-start items-end m-10">
            <div className="text-sm tracking-widest text-gray-500">
              TOTAL TIME
            </div>
            <div className="text-3xl tracking-widest text-black">2 Hours</div>
            <div>
              <button onClick={onClickHandler}>hello</button>
            </div>
          </div>
        </div>
      </div>
    </Bg>
  );
};

export default TrackingMain;
