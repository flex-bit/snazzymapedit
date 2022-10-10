import Head from "next/head";
import Image from "next/image";
import { userAgent } from "next/server";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import EditSection from "../comps/editSection";
import MapsComponent from "../comps/MapsComponent";

export default function Home() {
  return (
    <>
      <EditSection />
      <div className={`${styles.sMap}`}>
        <MapsComponent />
      </div>
    </>
  );
}
