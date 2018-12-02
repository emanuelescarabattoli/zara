import React from "react";

import { formatNumber } from "../../utils/utils";

const Total = props => {
  return (
    <span className="total">
      {props.list.length === 0
        ? formatNumber(0)
        : props.list.length === 1
        ? formatNumber(props.list[0][props.column])
        : formatNumber(
            props.list.reduce((total, item) =>
              total[props.column] ? total[props.column] + item[props.column] : total + item[props.column]
            )
          )}{" "}
      &euro;
    </span>
  );
};

export default Total;
