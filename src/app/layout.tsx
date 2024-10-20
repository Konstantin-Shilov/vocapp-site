import React from "react";
import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

import { Sidebar } from "@/widgets/Sidebar";
import { LangSelector } from "@/widgets/LangSelector";
import { Tutor } from "@/widgets/Tutor";

import styles from "./layout.module.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "VocApp App",
  description: "VocApp App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{`${metadata.title}`}</title>
        <link rel="icon" href="/favicon.ico" sizes="any"/>

        <ColorSchemeScript />
      </head>
      <body>
      <MantineProvider>
        <main className={styles.layout}>
          <Sidebar/>
          {children}
          <Tutor/>
          <LangSelector/>
        </main>
      </MantineProvider>
      </body>
    </html>
  );
}
