import axios from "axios";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = (props) => {
  const [userInput, setUserInput] = useState("");
  const inputChangeHandler = async (event) => {
    setUserInput(event.target.value);
    // searchApi();
  };

  const searchApi = async () => {
    var response;
    try {
      response = await axios.get(
        `https://api.github.com/search/users?q=${userInput}`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    return response.data;
  };
  const onSubmitHandler = async () => {
    const response = await searchApi();

    props.onFetchedData(response);
  };
  return (
    <div className="dark:bg-bg_blue-light bg-white rounded-md">
      <div className="flex p-2 gap-2 dark:text-red-50 items-center">
        <FaSearch className="ml-2" />
        <input
          className="text-xs dark:bg-bg_blue-light outline-none flex-grow"
          type="text"
          placeholder="Search Github Username"
          value={userInput}
          onChange={inputChangeHandler}
        />
        <button
          className="px-5 h-10 dark:bg-blue-500 bg-green-200 dark:text-white text-gray-700 rounded-md text-sm"
          onClick={onSubmitHandler}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
