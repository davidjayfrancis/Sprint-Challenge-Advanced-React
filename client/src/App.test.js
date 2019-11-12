import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PlayerList from "./components/PlayerList.js";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
  const wrapper = rtl.render(<App />);
});

it("has 'Alex Morgan' in the text", () => {
  async () => {
    try {
      const wrapper = await rtl.render(<PlayerList />);
      const textSnippet = wrapper.queryByText("Alex Morgan");
    } catch (err) {
      console.log(err);
    }
  };
});
