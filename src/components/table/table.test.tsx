import React from "react";
import Table from "./table.container";
import { Props } from "../shared-props/findings";
import renderer from 'react-test-renderer';

const testFindings = [
  {
    "type": "absolute",
    "x": 10,
    "y": 20,
    "label": "Finding 1",
    "note": "Lorem ipsum dolor sit amet"
  },
  {
    "type": "absolute",
    "x": 45,
    "y": 20,
    "label": "Finding 2",
    "note": "Duis aute irure dolor in reprehenderit"
  }
];

const renderTable = () => {
  const defaultProps: Props = {
    findings: testFindings,
    selectedFinding: 2,
    itemSelectedHandler: () => {}
  };
  return <Table {...defaultProps}/>;
}

describe("Table testing", () => {
  test("Basic display render of table", async () => {
    const tree = renderer
      .create(renderTable())
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});