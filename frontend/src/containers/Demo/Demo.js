import React, { Component } from "react";

import Page from "../../components/Page/Page";
import { Card, CardBody, CardHeader } from "../../components/Card/Card";
import TwoSections from "../../components/TwoSections/TwoSections";

import "./Demo.css";

class Counters extends Component {
  render() {
    return (
      <Page title="Demo">
        <Card>
          <CardHeader>
            <button className="button">Save</button>
          </CardHeader>
          <table>
            <thead>
              <th>aaa</th>
              <th>bbb</th>
              <th />
            </thead>
            <tbody>
              <tr>
                <td>
                  <a>aaa</a>
                </td>
                <td>bbb</td>
                <td>
                  <a>
                    <i class="fas fa-trash-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>aaa</a>
                </td>
                <td>bbb</td>
                <td>
                  <a>
                    <i class="fas fa-trash-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>aaa</a>
                </td>
                <td>bbb</td>
                <td>
                  <a>
                    <i class="fas fa-trash-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>aaa</a>
                </td>
                <td>bbb</td>
                <td>
                  <a>
                    <i class="fas fa-trash-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>aaa</a>
                </td>
                <td>bbb</td>
                <td>
                  <a>
                    <i class="fas fa-trash-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>aaa</a>
                </td>
                <td>bbb</td>
                <td>
                  <a>
                    <i class="fas fa-trash-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>aaa</a>
                </td>
                <td>bbb</td>
                <td>
                  <a>
                    <i class="fas fa-trash-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>aaa</a>
                </td>
                <td>bbb</td>
                <td>
                  <a>
                    <i class="fas fa-trash-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>aaa</a>
                </td>
                <td>bbb</td>
                <td>
                  <a>
                    <i class="fas fa-trash-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>aaa</a>
                </td>
                <td>bbb</td>
                <td>
                  <a>
                    <i class="fas fa-trash-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>aaa</a>
                </td>
                <td>bbb</td>
                <td>
                  <a>
                    <i class="fas fa-trash-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>aaa</a>
                </td>
                <td>bbb</td>
                <td>
                  <a>
                    <i class="fas fa-trash-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>aaa</a>
                </td>
                <td>bbb</td>
                <td>
                  <a>
                    <i class="fas fa-trash-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>aaa</a>
                </td>
                <td>bbb</td>
                <td>
                  <a>
                    <i class="fas fa-trash-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>aaa</a>
                </td>
                <td>bbb</td>
                <td>
                  <a>
                    <i class="fas fa-trash-alt" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
        <button className="button button-plus">
          <i className="fas fa-plus" />
        </button>
        <div className="modal">
          <div>
            <TwoSections title="Add a counter row"><i class="fas fa-times" /></TwoSections>
          </div>
        </div>
      </Page>
    );
  }
}

export default Counters;
