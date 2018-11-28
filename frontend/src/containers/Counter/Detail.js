import React from "react";
import FieldText from "../../components/FieldText/FieldText";
import { Card, CardBody } from "../../components/Card/Card";

const Detail = props => {
  return (
    <Card>
      <CardBody>
        <div>
          <FieldText
            name="title"
            description="Title"
            value={props.detail.title}
            helpText="Title of conter"
            onChange={value => props.onChange({ ...props.detail, title: value })}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default Detail;
