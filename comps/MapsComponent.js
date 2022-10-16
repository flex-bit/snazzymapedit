import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import loadingIcon from "./icons/loadingIcon";

const MapsComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isPaste, setIsPaste] = useState(false);
  const [isAPILoading, setIsAPILoading] = useState(true);
  const [isBotLoading, setIsBotLoading] = useState(false);
  const [isBotCompleted, setIsBotCompleted] = useState(false);
  const [maps, setMaps] = useState([]);
  const fetchData = () => {
    fetch("http://snazzymap-api.ddns.net:3000/maps")
      .then((response) => {
        setIsAPILoading(false);
        return response.json();
      })
      .then((data) => {
        setMaps(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    if (isPaste) {
    } else {
      setIsPaste(false);
      setSearchTerm(e.target.value);
    }
  };

  const handleClick = () => {
    setIsBotLoading(true);
    fetch("http://snazzymap-api.ddns.net:3000/refresh")
      .then((response) => {
        setIsBotLoading(false);
        setIsBotCompleted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2>OR</h2>
      <div className={`${styles.searchContainer}`}>
        <label htmlFor="" className={`${styles.searchLabel}`}>
          Search for a map
        </label>
        <input
          type="text"
          onChange={handleChange}
          onPaste={(e) => {
            setIsPaste(true);
            setSearchTerm(e.clipboardData.getData("Text"));
          }}
        />
        <p className={`${styles.smallP}`}>
          can't find your map? click on the refresh button
        </p>
        <button onClick={handleClick} className={`${styles.btnRefresh}`}>
          refresh
        </button>
        <div className={`${styles.icon} ${!isBotLoading ? styles.hide : ""}`}>
          <svg width="100%" height="100%" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M20 4h-2V3h2.5c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5H20v1h-1V5h1V4m-1 5h1V8h-1v1m-2-6h-1v4h1V3m6 12v3c0 .55-.45 1-1 1h-1v1c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2v-1H2c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1c0-3.87 3.13-7 7-7h1V5.73c-.6-.34-1-.99-1-1.73c0-1.1.9-2 2-2s2 .9 2 2c0 .74-.4 1.39-1 1.73V7h1c.34 0 .67.03 1 .08V10h4.74A6.94 6.94 0 0 1 21 14h1c.55 0 1 .45 1 1m-13 .5a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 0 5 0m9 0a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 0 5 0M17 8h-1v1h1V8Z"
            ></path>
          </svg>
        </div>

        <h4 className={`${!isBotLoading ? styles.hide : ""}`}>
          Hey seem like you requested a refresh!!! let me go get that new map
          for you please go take a coffe brake this may take a minute or two..
        </h4>
        <div className={`${styles.icon} ${!isBotLoading ? styles.hide : ""}`}>
          <svg width="100%" height="100%" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              strokeDasharray="15"
              strokeDashoffset="15"
              strokeLinecap="round"
              strokeWidth="2"
              d="M12 3C16.9706 3 21 7.02944 21 12"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.3s"
                values="15;0"
              ></animate>
              <animateTransform
                attributeName="transform"
                dur="1.5s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              ></animateTransform>
            </path>
          </svg>
        </div>
        <div className={`${styles.icon} ${!isBotCompleted ? styles.hide : ""}`}>
          <svg width="100%" height="100%" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22 14h-1c0-3.87-3.13-7-7-7h-1V5.73A2 2 0 1 0 10 4c0 .74.4 1.39 1 1.73V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1M8.68 17.04L7.5 15.86l-1.18 1.18l-1.18-1.18L7.5 13.5l2.36 2.36l-1.18 1.18m9 0l-1.18-1.18l-1.18 1.18l-1.18-1.18l2.36-2.36l2.36 2.36l-1.18 1.18Z"
            ></path>
          </svg>
        </div>
        <h4 className={`${!isBotCompleted ? styles.hide : ""}`}>
          COMPLETED!!!
        </h4>
        <h4 className={`${!isBotCompleted ? styles.hide : ""}`}>
          RELOAD THE PAGE TO SEE NEW MAPS
        </h4>
      </div>
      <div className={`${styles.icon} ${!isAPILoading ? styles.hide : ""}`}>
        <h4>Loading...</h4>
        <svg width="100%" height="100%" viewBox="0 0 24 24">
          <circle cx="12" cy="2" r="0" fill="currentColor">
            <animate
              attributeName="r"
              begin="0"
              calcMode="spline"
              dur="1s"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
              repeatCount="indefinite"
              values="0;2;0;0"
            ></animate>
          </circle>
          <circle
            cx="12"
            cy="2"
            r="0"
            fill="currentColor"
            transform="rotate(45 12 12)"
          >
            <animate
              attributeName="r"
              begin="0.125s"
              calcMode="spline"
              dur="1s"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
              repeatCount="indefinite"
              values="0;2;0;0"
            ></animate>
          </circle>
          <circle
            cx="12"
            cy="2"
            r="0"
            fill="currentColor"
            transform="rotate(90 12 12)"
          >
            <animate
              attributeName="r"
              begin="0.25s"
              calcMode="spline"
              dur="1s"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
              repeatCount="indefinite"
              values="0;2;0;0"
            ></animate>
          </circle>
          <circle
            cx="12"
            cy="2"
            r="0"
            fill="currentColor"
            transform="rotate(135 12 12)"
          >
            <animate
              attributeName="r"
              begin="0.375s"
              calcMode="spline"
              dur="1s"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
              repeatCount="indefinite"
              values="0;2;0;0"
            ></animate>
          </circle>
          <circle
            cx="12"
            cy="2"
            r="0"
            fill="currentColor"
            transform="rotate(180 12 12)"
          >
            <animate
              attributeName="r"
              begin="0.5s"
              calcMode="spline"
              dur="1s"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
              repeatCount="indefinite"
              values="0;2;0;0"
            ></animate>
          </circle>
          <circle
            cx="12"
            cy="2"
            r="0"
            fill="currentColor"
            transform="rotate(225 12 12)"
          >
            <animate
              attributeName="r"
              begin="0.625s"
              calcMode="spline"
              dur="1s"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
              repeatCount="indefinite"
              values="0;2;0;0"
            ></animate>
          </circle>
          <circle
            cx="12"
            cy="2"
            r="0"
            fill="currentColor"
            transform="rotate(270 12 12)"
          >
            <animate
              attributeName="r"
              begin="0.75s"
              calcMode="spline"
              dur="1s"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
              repeatCount="indefinite"
              values="0;2;0;0"
            ></animate>
          </circle>
          <circle
            cx="12"
            cy="2"
            r="0"
            fill="currentColor"
            transform="rotate(315 12 12)"
          >
            <animate
              attributeName="r"
              begin="0.875s"
              calcMode="spline"
              dur="1s"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
              repeatCount="indefinite"
              values="0;2;0;0"
            ></animate>
          </circle>
        </svg>
      </div>
      <div className={`${styles.mapCards}`}>
        {maps
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((loc) => {
            return (
              <a
                key={loc._id}
                target="_blank"
                href={`https://snazzymaps.com${loc.link}`}
                className={`${styles.card}`}
              >
                <img
                  src={`${loc.imageLink}`}
                  className={`${styles.mapImage}`}
                />
                <div className={`${styles.mapName}`}>{loc.title}</div>
              </a>
            );
          })}
      </div>
    </>
  );
};

export default MapsComponent;
