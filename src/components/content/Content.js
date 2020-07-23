import React from "react";
import classNames from "classnames";
import {
  Container,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  ButtonDropdown,
  Row,
} from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Example from "./DropDown";
import Topbar from "./Topbar";
import AllStudents from "./AllStudents";


const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}>
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
      <Route exact path="/" component={() => "Hello"} />
      <Route
        exact
        path="/home"
        component={() => (
          <div>
            <Row className="pl-3">
              <h4 className="pr-3">Glimpse - </h4>
              <Example />
            </Row>
            <hr style={{ visibility: "visible" }} />
          </div>
        )}
      />
      <Route exact path="/calendar" component={() => "Calendar"} />
      <Route
        exact
        path="/individualstudent"
        component={() => "Individual"}
      />
      <Route exact path="/allstudents" component={() => (<AllStudents />)} />
      <Route exact path="/uploads" component={() => "Uploads"} />
      <Route exact path="/requests" component={() => "Request"} />
      <Route exact path="/settings" component={() => "Settings"} />
      <Route exact path="/Page-1" component={() => "Page-1"} />
    </Switch>
  </Container>
);

export default Content;
