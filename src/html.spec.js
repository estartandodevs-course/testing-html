import "@testing-library/jest-dom/extend-expect";
import { fireEvent, getByText } from "@testing-library/dom";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.join(__dirname, "./index.html"), "utf8");

describe("html", () => {
  let dom;
  let container;
  beforeEach(() => {
    dom = new JSDOM(html);
    container = dom.window.document.body;
  });
  it("testing html", () => {
    expect(container.querySelector("p")).toHaveTextContent("Hello World");
  });
});
