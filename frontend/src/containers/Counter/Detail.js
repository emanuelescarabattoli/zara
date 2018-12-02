import React from "react";
import { Link } from "react-router-dom";

import FieldText from "../../components/FieldText/FieldText";
import { Card, CardBody, CardHeader, CardSection } from "../../components/Card/Card";
import TwoSections from "../../components/TwoSections/TwoSections";
import Button from "../../components/Button/Button";
import Delete from "../../components/Delete/Delete";
import { formatNumber } from "../../utils/utils";

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
      <CardSection>
        <TwoSections title="Rows" />
      </CardSection>
      <table>
        <thead>
          <th>Id</th>
          <th>Description</th>
          <th>Date</th>
          <th>Period</th>
          <th className="align-right">Amount</th>
          <th />
        </thead>
        <tbody>
          {props.list.map(item => {
            return (
              <tr key={item.id}>
                <td width="5%">{item.id}</td>
                <td>
                  <Link to={"/counter/" + item.id}>{item.description}</Link>
                </td>
                <td>{item.date}</td>
                <td>{item.period}</td>
                <td className="align-right">{formatNumber(item.amount)} &euro;</td>
                <td>
                  <Delete onClick={() => props.onDelete(item.id)} />
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className="align-right total">
              {formatNumber(props.list.reduce((total, item) => (total.amount ? total.amount + item.amount : total + item.amount)))} &euro;
            </td>
            <td colSpan={1} />
          </tr>
        </tfoot>
      </table>
    </Card>
  );
};

export default Detail;
