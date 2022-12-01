import React from "react";
import TestRenderer from "react-test-renderer";
import { TextInput } from "react-native";

import { MpInput } from "./MpInput";

describe("MpInput", () => {
  test("renders correctly", () => {
    const tree = TestRenderer.create(<MpInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
