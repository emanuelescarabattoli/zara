import React from "react";

import { Card, CardBody } from "../../components/Card/Card";
import Delete from "../../components/Delete/Delete"

const List = props => {
  return (
    <Card>
      <CardBody>
        <table>
          <thead>
            <th>Id</th>
            <th>Title</th>
            <th />
          </thead>
          <tbody>
            {props.list.map(item => {
              return (
                <tr>
                  <td width="5%">{item.id}</td>
                  <td>{item.title}</td>
                  <td><Delete onClick={() => props.onDelete(item.id)} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default List;
