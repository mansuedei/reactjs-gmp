import React from "react";
import styles from "./Test.module.scss";

const Test = () => {
  return (
    <>
      <div className={styles.test}>I'm the new test component</div>
      <img src="https://www.imagesjunction.com/images/img/cat_photos.jpg" alt=""/>
      <button onClick={() => console.log("Hi there!")}>Press me!</button>
    </>
  );
};

export default Test;
