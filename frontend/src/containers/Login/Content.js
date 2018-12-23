import React from "react";

import { Card, CardHeader, CardBody, CardButtons } from "../../components/Card/Card";
import TwoSections from "../../components/TwoSections/TwoSections";
import Button from "../../components/Button/Button";
import FieldText from "../../components/FieldText/FieldText";

const List = props => {
  return (
    <div className="login-container">
      <div className="login">
        <Card>
          <CardHeader>
            <TwoSections title="Login" />
          </CardHeader>
          <CardBody>
            <FieldText
              name="username"
              description="Username"
              helpText="Username"
              value={props.username}
              onChange={props.onChange}
            />
            <FieldText
              type="password"
              name="password"
              description="Password"
              helpText="Password"
              value={props.password}
              onChange={props.onChange}
            />
          </CardBody>
          <CardButtons>
            <Button onClick={props.onLogin}>Login</Button>
          </CardButtons>
        </Card>
      </div>
    </div>
  );
};

export default List;
