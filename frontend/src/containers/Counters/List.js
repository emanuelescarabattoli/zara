import React from "react";

import { Card, CardHeader } from "../../components/Card/Card";
import Delete from "../../components/Delete/Delete";
import TwoSections from "../../components/TwoSections/TwoSections";

const List = props => {
  return (
    <Card>
      <CardHeader>
        <TwoSections title="Your counters"/>
      </CardHeader>
      <table>
        <thead>
          <th>Id</th>
          <th>Title</th>
          <th />
        </thead>
        <tbody>
          {props.list.map(item => {
            return (
              <tr key={item.id}>
                <td width="5%">{item.id}</td>
                <td><a>{item.title}</a></td>
                <td>
                  <Delete onClick={() => props.onDelete(item.id)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default List;
