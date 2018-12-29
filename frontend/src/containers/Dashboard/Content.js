import React from "react";
import { PieChart, Pie, Legend, Cell } from "recharts";

import { Card, CardHeader, CardBody } from "../../components/Card/Card";
import TwoSections from "../../components/TwoSections/TwoSections";
import { COLORS } from "../../utils/utils";

const Content = props => {
  return (
    <div>
      <div className="grid">
        {props.list.map(item => {
          return (
            <div className="col-6">
              <Card>
                <CardHeader>
                  <TwoSections title={item.title} />
                </CardHeader>
                <CardBody>
                  <div className="horizontal-align-center ">
                    <PieChart width={300} height={300}>
                      <Pie data={item.data} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="red">
                        {item.data.map((entry, index) => (
                          <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Legend />
                    </PieChart>
                  </div>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
