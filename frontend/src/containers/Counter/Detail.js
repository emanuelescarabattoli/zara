import React from "react";
import FieldText from "../../components/FieldText/FieldText";
import { Card, CardBody, CardHeader } from "../../components/Card/Card";
import TwoSections from "../../components/TwoSections/TwoSections";
import Button from "../../components/Button/Button";

const Detail = props => {
  return (
    <Card>
      <CardHeader>
        <TwoSections title="Counter detail">
          <Button onClick={props.onSave}>Save</Button>
        </TwoSections>
      </CardHeader>
      <CardBody>
        <div>
          <FieldText
            name="title"
            description="Title"
            value={props.detail.title}
            helpText="Title of conter"
            onChange={value => props.onChange({ ...props.detail, title: value })}
            error={props.errors.find(error => error.field == "title")}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default Detail;
