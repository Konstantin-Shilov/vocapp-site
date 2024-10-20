"use client";

import React from 'react';
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import styles from "./Link.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
}

export const Link = ({ href, children }: Props) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NextLink
      href={href}
      className={clsx(styles.link, {
        [styles.active]: isActive,
      })}
    >
      {children}
    </NextLink>
  );
}
