import { useState } from "react";
import styles from "../styles/Home.module.css";

const EditSection = () => {
  const [snazyID, setSnazyID] = useState("");
  const [baseUrl, setBaseUrl] = useState(
    "https://snazzymaps.com/build-a-map/edit/"
  );
  const [isError, setError] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [isPaste, setIsPaste] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(snazyID);

    window.open(`${baseUrl}${snazyID}`);
  };

  const handleChange = (e) => {
    if (isPaste) {
    } else {
      setIsPaste(false);
      setSnazyID(e.target.value);
    }
    setIsPaste(false);
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

  return (
    <div className={`${styles.container} ${styles.center}`}>
      <h1>Snazzy maps edit tool</h1>
      <div className={`${styles.spacer}`}></div>
      <div className={`${styles.halfC}`}>
        <h6>Please Provive last Digit Or Full Snazzy map url</h6>
        <input
          type="text"
          onInput={(e) => {
            handleChange(e);
          }}
          value={snazyID}
          onPaste={(e) => {
            setError(false);
            setIsPaste(true);
            setSnazyID(e.clipboardData.getData("Text"));
          }}
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
};

export default EditSection;
