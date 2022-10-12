import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import loadingIcon from "./icons/loadingIcon";

const MapsComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isPaste, setIsPaste] = useState(false);
  const [isAPILoading, setIsAPILoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [maps, setMaps] = useState([]);
  const fetchData = () => {
    fetch("https://snazzymap-api.herokuapp.com/maps")
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
    setIsLoading(true);
    fetch("https://snazzymap-api.herokuapp.com/refresh")
      .then((response) => {
        setIsLoading(false);
        setIsFinished(true);
        console.log(response.json());
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

        {/* <button onClick={handleClick} className={`${styles.btnRefresh}`}>
          refresh
        </button> */}
        <div className={`${styles.icon} ${!isLoading ? styles.hide : ""}`}>
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
        <div
          className={`${styles.icon} ${styles.verify}  ${
            !isFinished ? styles.hide : ""
          }`}
        >
          <svg width="100%" height="100%" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M15.67 7.066l-1.08-1.34a1.5 1.5 0 0 1-.309-.77l-.19-1.698a1.51 1.51 0 0 0-1.329-1.33l-1.699-.19c-.3-.03-.56-.159-.78-.329L8.945.33a1.504 1.504 0 0 0-1.878 0l-1.34 1.08a1.5 1.5 0 0 1-.77.31l-1.698.19c-.7.08-1.25.63-1.33 1.329l-.19 1.699c-.03.3-.159.56-.329.78L.33 7.055a1.504 1.504 0 0 0 0 1.878l1.08 1.34c.17.22.28.48.31.77l.19 1.698c.08.7.63 1.25 1.329 1.33l1.699.19c.3.03.56.159.78.329l1.339 1.08c.55.439 1.329.439 1.878 0l1.34-1.08c.22-.17.48-.28.77-.31l1.698-.19c.7-.08 1.25-.63 1.33-1.329l.19-1.699c.03-.3.159-.56.329-.78l1.08-1.339a1.504 1.504 0 0 0 0-1.878zM6.5 12.01L3 8.51l1.5-1.5l2 2l5-5L13 5.56l-6.5 6.45z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
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
