import React, { Component } from "react";

import Page from "../../components/Page/Page";
import { Card, CardBody } from "../../components/Card/Card";

import "./Demo.css";

class Counters extends Component {
  render() {
    return (
      <Page title="Demo">
        <Card>
          <CardBody>
            <table>
              <thead>
                <th>aaa</th>
                <th>bbb</th>
                <th></th>
              </thead>
              <tbody>
                <tr>
                  <td><a>aaa</a></td>
                  <td>bbb</td>
                  <td><a><i class="fas fa-trash-alt"></i></a></td>
                </tr>
                <tr>
                  <td><a>aaa</a></td>
                  <td>bbb</td>
                  <td><a><i class="fas fa-trash-alt"></i></a></td>
                </tr>
                <tr>
                  <td><a>aaa</a></td>
                  <td>bbb</td>
                  <td><a><i class="fas fa-trash-alt"></i></a></td>
                </tr>
                <tr>
                  <td><a>aaa</a></td>
                  <td>bbb</td>
                  <td><a><i class="fas fa-trash-alt"></i></a></td>
                </tr>
                <tr>
                  <td><a>aaa</a></td>
                  <td>bbb</td>
                  <td><a><i class="fas fa-trash-alt"></i></a></td>
                </tr>
                <tr>
                  <td><a>aaa</a></td>
                  <td>bbb</td>
                  <td><a><i class="fas fa-trash-alt"></i></a></td>
                </tr>
                <tr>
                  <td><a>aaa</a></td>
                  <td>bbb</td>
                  <td><a><i class="fas fa-trash-alt"></i></a></td>
                </tr>
                <tr>
                  <td><a>aaa</a></td>
                  <td>bbb</td>
                  <td><a><i class="fas fa-trash-alt"></i></a></td>
                </tr>
                <tr>
                  <td><a>aaa</a></td>
                  <td>bbb</td>
                  <td><a><i class="fas fa-trash-alt"></i></a></td>
                </tr>
                <tr>
                  <td><a>aaa</a></td>
                  <td>bbb</td>
                  <td><a><i class="fas fa-trash-alt"></i></a></td>
                </tr>
                <tr>
                  <td><a>aaa</a></td>
                  <td>bbb</td>
                  <td><a><i class="fas fa-trash-alt"></i></a></td>
                </tr>
                <tr>
                  <td><a>aaa</a></td>
                  <td>bbb</td>
                  <td><a><i class="fas fa-trash-alt"></i></a></td>
                </tr>
                <tr>
                  <td><a>aaa</a></td>
                  <td>bbb</td>
                  <td><a><i class="fas fa-trash-alt"></i></a></td>
                </tr>
                <tr>
                  <td><a>aaa</a></td>
                  <td>bbb</td>
                  <td><a><i class="fas fa-trash-alt"></i></a></td>
                </tr>
                <tr>
                  <td><a>aaa</a></td>
                  <td>bbb</td>
                  <td><a><i class="fas fa-trash-alt"></i></a></td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
        <button className="plus-button"><i className="fas fa-plus" /></button>
      </Page>
    );
  }
}

export default Counters;
