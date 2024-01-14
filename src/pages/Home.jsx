import React, { useEffect, useState } from "react";
import Leftbar from "../components/Leftbar";
import Mainbar from "../components/Mainbar";
import Tags from "../components/Tags";
import axios from "axios";

function Home() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "https://api.stackexchange.com/2.3/questions",
          {
            params: {
              order: "desc",
              sort: "activity",
              site: "stackoverflow",
              filter: "withbody", 
            },
          }
        );
        setQuestions(response.data.items);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);
  return (
    <>
      <div className="flex h-full gap-3 px-5 ">
        <div className="w-[15%]  h-[88vh] ">
          <Leftbar/>
        </div>
        <div className="w-[60%] px-2  h-[88vh] overflow-y-auto overflow-hidden py-4"><Mainbar questions={questions}/></div>
        <div className="w-[25%]  h-[88vh] py-2 px-2"><Tags questions={questions}/> </div>
      </div>
    </>
  );
}

export default Home;
