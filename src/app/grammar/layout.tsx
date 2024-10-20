import React from "react";
import type { Metadata } from "next";

import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Grammar Trainer | VocApp App",
  description: "Grammar Trainer | VocApp App",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <p className={styles.heading}>Grammar Trainer</p>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
