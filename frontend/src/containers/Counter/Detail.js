import React from "react";
import { Link } from "react-router-dom";

import { formatNumber } from "../../utils/utils";
import FieldText from "../../components/FieldText/FieldText";
import { Card, CardBody, CardHeader, CardSection } from "../../components/Card/Card";
import TwoSections from "../../components/TwoSections/TwoSections";
import Button from "../../components/Button/Button";
import Delete from "../../components/Delete/Delete";
import Total from "../../components/Total/Total";
import Modal from "../../components/Modal/Modal";

const Detail = props => {
  return (
    <div>
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
          <TwoSections title="Rows">
            <Button onClick={props.clickAdd}>Add</Button>
          </TwoSections>
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
            {props.list &&
              props.list.map(item => {
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
              <td colSpan={5} className="align-right">
                <Total list={props.list || []} column="amount" />
              </td>
              <td colSpan={1} />
            </tr>
          </tfoot>
        </table>
      </Card>
      <Modal title="Add a counter row" isVisible={props.modalVisible} closeModal={props.closeModal}>
        <div className="grid">
          <div className="col-6">
            <FieldText name="description" description="Description" />
          </div>
          <div className="col-2">
            <FieldText type="date" name="date" description="Date" />
          </div>
          <div className="col-2">
            <FieldText name="period" description="Period" />
          </div>
          <div className="col-2">
            <FieldText name="amount" description="Amount" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Detail;
