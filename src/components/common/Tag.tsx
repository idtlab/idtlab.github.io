import clsx from "clsx";
import React from "react";

import styles from "./Tag.module.css";

type TagProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
  maxWidth?: number;
};

export default function Tag({ children, className, maxWidth = 150, ...rest }: TagProps) {
  return (
    <span {...rest} className={clsx("badge", styles.tag, className)} style={{ maxWidth }}>
      {children}
    </span>
  );
}
