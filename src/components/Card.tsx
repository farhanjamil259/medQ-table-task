import React, { ReactElement } from "react";

const Card = ({ children }: { children: ReactElement | ReactElement[] }) => {
  return <div>{children}</div>;
};

export default Card;
