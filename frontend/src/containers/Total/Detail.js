import React from "react";
import { PieChart, Pie, Legend, Cell } from "recharts";

import { formatNumber } from "../../utils/utils";
import FieldText from "../../components/FieldText/FieldText";
import FieldSelect from "../../components/FieldSelect/FieldSelect";
import { Card, CardBody, CardHeader, CardSection } from "../../components/Card/Card";
import TwoSections from "../../components/TwoSections/TwoSections";
import Button from "../../components/Button/Button";
import Delete from "../../components/Delete/Delete";
import Total from "../../components/Total/Total";
import Modal from "../../components/Modal/Modal";
import { COLORS } from "../../utils/utils";

const Detail = props => {
  return (
    <div>
      <div className="grid">
        <div className="col-7">
          <Card>
            <CardHeader>
              <TwoSections title="Total detail">
                <Button onClick={props.onSave}>Save</Button>
              </TwoSections>
            </CardHeader>
            <CardBody>
              <div>
                <FieldText
                  name="title"
                  description="Title"
                  value={props.detail.title}
                  helpText="Title of total"
                  onChange={props.onChange}
                  error={props.errors.find(error => error.field === "title")}
                />
              </div>
            </CardBody>
            <CardSection>
              <TwoSections title="Rows">
                <Button disabled={props.buttonAddDisabled} onClick={props.clickAdd}>
                  Add
                </Button>
              </TwoSections>
            </CardSection>
            <table>
              <thead>
                <tr>
                  <th width="5%">Id</th>
                  <th>Counter</th>
                  <th className="align-right">Amount</th>
                  <th width="60px" />
                </tr>
              </thead>
              <tbody>
                {props.list &&
                  props.list.map(item => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                          <button onClick={() => props.clickEdit(item.id)}>{item.title}</button>
                        </td>
                        <td className="align-right">{formatNumber(item.amount)} &euro;</td>
                        <td>
                          <Delete onClick={() => props.clickDelete(item.id)} />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3} className="align-right">
                    <Total list={props.list} column="amount" />
                  </td>
                  <td colSpan={1} />
                </tr>
              </tfoot>
            </table>
          </Card>
        </div>
        <div className="col-5">
          <Card>
            <CardHeader>
              <TwoSections title="Chart" />
            </CardHeader>
            <CardBody>
              <div className="horizontal-align-center ">
                <PieChart width={300} height={300}>
                  <Pie data={props.chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="red">
                    {props.chartData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <Modal
        title="Add a total row"
        isVisible={props.modalVisible}
        onCloseModal={props.closeModal}
        onValidate={props.onSaveRow}
      >
        <div className="grid">
          <div className="col-6">
            <FieldSelect
              name="counter"
              description="Counter"
              value={props.rowDetail.counter.id}
              options={props.counterList}
              helpText="Counter"
              onChange={props.onChangeRow}
              error={props.rowErrors.find(error => error.field === "date")}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Detail;
