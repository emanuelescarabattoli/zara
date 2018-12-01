import React from "react";
import FieldText from "../../components/FieldText/FieldText";
import { Card, CardBody, CardHeader } from "../../components/Card/Card";
import TwoSections from "../../components/TwoSections/TwoSections";

const Detail = props => {
  return (
    <Card>
       <CardHeader>
        <TwoSections title="Counter detail"/>
      </CardHeader>
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
