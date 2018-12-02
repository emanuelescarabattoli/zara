import React from "react";

import TwoSections from "../TwoSections/TwoSections";

const Modal = props => {
  return (
    <div className="modal" hidden={!props.isVisible}>
      <div>
        <TwoSections title={props.title}>
          <i class="fas fa-times" />
        </TwoSections>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
