import React from "react";

import TwoSections from "../TwoSections/TwoSections";
import Button from "../Button/Button";

const Modal = props => {
  return (
    <div className={props.isVisible ? "modal" : "modal hidden"}>
      <div>
        <TwoSections title={props.title}>
          <span className="pointer" onClick={props.onCloseModal}>
            <i class="fas fa-times" />
          </span>
        </TwoSections>
        <div>{props.children}</div>
        <Button onClick={props.onValidate}>Save</Button>
      </div>
    </div>
  );
};

export default Modal;
