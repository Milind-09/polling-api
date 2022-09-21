import React, { useEffect, useState } from "react";
import PollingContext from "./PollingContext";
import axios from "axios";
export default function PollingState({ children }: any) {
  let [pageNum, setPageNum] = useState(1);
  let [showRawData, setShowRawData] = useState([]);
  const [apiData, setapidata] = useState<any[]>([]);
  function prevPage() {
    if (pageNum > 1) {
      setapidata([]);
      setPageNum(pageNum - 1);
    }
  }
  function pageNext() {
    if (pageNum < 49) {
      setapidata([]);
      setPageNum(pageNum + 1);
    }
  }
  function detailData(id: any) {
    let myRawData: any = apiData.filter((ele: any) => {
      return id === ele.objectID;
    });
    setShowRawData(myRawData);
  }

  async function fetchdata() {
    try {
      let res = await fetch(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageNum}`
      );
      let data = await res.json();
      let pollingData = data.hits;
      setapidata([...apiData, ...pollingData]);
      console.log(apiData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (apiData?.length === 0) {
      fetchdata();
      setPageNum((pageNum) => pageNum + 1);
    } else {
      const timer = setInterval(() => {
        setPageNum((pageNum) => pageNum + 1);
        fetchdata();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [apiData]);

  return (
    <PollingContext.Provider
      value={{ apiData, prevPage, pageNext, detailData, showRawData }}
    >
      {children}
    </PollingContext.Provider>
  );
}
