import { useState, useEffect } from "react";
export default function useFetch(url, value, type) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetchData().then((res) => setDataList(res[type]));
  }, [value]);
  const fetchData = async () => {
    const check = sessionStorage.getItem(value);
    if (check) {
      return JSON.parse(check);
    }
    const res = await fetch(url);
    const data = await res.json();
    sessionStorage.setItem(value, JSON.stringify(data));
    return data;
  };
  return dataList;
}
