import React from "react";

import { SumProps } from "./Sum.types";

const Sum: React.FC<SumProps> = ({ a, b }) => {
  const sum = a + b;
  return (
    <div className="">
      {a} + {b} = {sum}
    </div>
  );
};

export default Sum;
