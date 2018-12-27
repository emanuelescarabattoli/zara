import React from "react";
import { Link } from "react-router-dom";

import { Card, CardHeader } from "../../components/Card/Card";
import Delete from "../../components/Delete/Delete";
import TwoSections from "../../components/TwoSections/TwoSections";
import ButtonPlus from "../../components/ButtonPlus/ButtonPlus";

const List = props => {
  return (
    <div>
      <Card>
        <CardHeader>
          <TwoSections title="Your counters" />
        </CardHeader>
        <table>
          <thead>
            <tr>
              <th width="5%">Id</th>
              <th>Title</th>
              <th width="60px" />
            </tr>
          </thead>
          <tbody>
            {props.list.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <Link to={"/counter/" + item.id}>{item.title}</Link>
                  </td>
                  <td>
                    <Delete onClick={() => props.onDelete(item.id)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
      <ButtonPlus link="/counter" />
    </div>
  );
};

export default List;
