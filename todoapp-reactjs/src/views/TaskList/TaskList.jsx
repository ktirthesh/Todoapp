import React from "react";
import { Col, Row } from "reactstrap";

export function TaskList(props) {
  return (
    <React.Fragment>
      <h1>List</h1>
      <Row>
        {props.Todolist.map((item, index) => (
          <React.Fragment key={index}>
            <Col xs="2" />
            <Col xs="8">
              <span>Task name:{item.title}</span>

              <span style={{ marginLeft: "20px" }}>
                iscompleted:
                <input
                  type="checkbox"
                  name="completed"
                  value={item.completed}
                  checked={item.completed}
                />
                {/* Task :{item.completed === true ? "True" : "False"} */}
              </span>
              <button onClick={() => props.deleterecord(item)}>delete</button>
            </Col>
            <Col xs="2" />
          </React.Fragment>
        ))}
      </Row>
    </React.Fragment>
  );
}
