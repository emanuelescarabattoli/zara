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
            <th>Id</th>
            <th>Title</th>
            <th />
          </thead>
          <tbody>
            {props.list.map(item => {
              return (
                <tr key={item.id}>
                  <td width="5%">{item.id}</td>
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
      <ButtonPlus link="/counter"/>
    </div>
  );
};

export default List;
