import Head from "next/head";
import Image from "next/image";
import { userAgent } from "next/server";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [value, setValue] = useState("");
  const [snazyID, setSnazyID] = useState("");
  const [baseUrl, setBaseUrl] = useState(
    "https://snazzymaps.com/build-a-map/edit/"
  );
  const [isError, setError] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(snazyID);

    window.open(`${baseUrl}${snazyID}`);
  };

  const handleChange = (e) => {
    setSnazyID(e.target.value);
    setIsDisable(true);
    if (snazyID.length > 3) {
      if (Boolean(snazyID.match(/https:\/\/snazzymaps\.com\/embed\//gm))) {
        setSnazyID(snazyID.split("/")[snazyID.split("/").length - 1]);
        setIsDisable(false);
      } else if (Boolean(snazyID.match(/^[0-9]*$/gm)) === true) {
        setError(false);
        setIsDisable(false);
      } else {
        setError(true);
      }
    }
  };
  const handlePaste = (e) => {
    if (Boolean(e.target.value.match(/https:\/\/snazzymaps\.com/gm))) {
      setSnazyID(e.target.value);
    }
  };

  return (
    <div className={`${styles.container} ${styles.center}`}>
      <h1>Snazzy maps edit tool</h1>
      <div className={`${styles.spacer}`}></div>
      <div className={`${styles.halfC}`}>
        <h6>Please Provive last Digit Or Full Snazzy map url</h6>
        <input
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
          value={snazyID}
          onPaste={handlePaste}
        />
        <p
          className={`${styles.errorMessage} ${isError ? styles.visible : ""}`}
        >
          Please make sure to enter a embeded snazzy url or snazzy map id
        </p>
        <button
          className={`${styles.btn} ${isDisable ? styles.disable : ""}`}
          disabled={isDisable}
          onClick={handleClick}
        >
          Edit
        </button>
      </div>
      <div className={`${styles.tag}`}>Develop By: Juan Infante S8E8</div>
    </div>
  );
}
