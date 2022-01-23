import React, { useState, useEffect } from "react";
import "./fetchApi.css";
const FetchApi = () => {
  const [Images, setImages] = useState([]);
  const getApiData = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    let jsonData = await response.json();
    setImages(jsonData);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div className="div-container">
      {Images.map((item) => {
        return (
          <div>
            <a href={item.download_url}>
              <img src={item.download_url} alt="" />
            </a>
            <h4>{item.author}</h4>
            <p>
              Actual Height:{item.height}||Actual Width:{item.width}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FetchApi;
