import React, { useEffect, useState } from "react";
import PollingContext from "./PollingContext";
import axios from "axios";
export default function PollingState({ children }: any) {
  let [pollingData, setPollingData] = useState([{}]);
  let [pageNum, setPageNum] = useState(1);
  let [incNum, setIncNum] = useState(0);

  function prevPage() {
    if (pageNum > 1) {
      setPollingData([]);
      setPageNum(pageNum - 1);
    }
  }
  function pageNext() {
    setPollingData([]);
    if (pageNum < 49) {
      setPageNum(pageNum + 1);
    }
  }

  async function pollingApi() {
    let res = await axios.get(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageNum}`
    );
    let data = res.data;
    setPollingData((prev) => [...prev, data.hits[incNum]]);
  }
  useEffect(() => {
    // pollingApi();
    let s = setInterval(() => {
      setIncNum(incNum + 1);
    }, 1000);
    return () => {
      clearInterval(s);
    };
  }, [incNum, pageNum]);
  return (
    <PollingContext.Provider value={{ pollingData, prevPage, pageNext }}>
      {children}
    </PollingContext.Provider>
  );
}
