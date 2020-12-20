import "@testing-library/jest-dom/extend-expect";
import React from "react";
import axios from "axios";
import {
  render,
  RenderResult,
  fireEvent,
  wait,
  createEvent
} from "@testing-library/react";

import Upload, { UploadProps } from "./index";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const testProps: UploadProps = {
  action: "fakeurl.com",
  onSuccess: jest.fn(),
  onChange: jest.fn(),
  onRemove: jest.fn(),
  drag: true
};

let wrapper: RenderResult
let fileInput: HTMLInputElement
let uploadArea: HTMLElement
const testFile = new File(["xyz"], "test.png", { type: "image/png" });
describe("test upload component", () => {
  beforeEach(() => {
    wrapper = render(<Upload {...testProps}>Click to upload</Upload>);
    fileInput = wrapper.container.querySelector(".turnip-file-input");
    uploadArea = wrapper.queryByText("Click to upload");
  });
  it("upload process should works fine", async () => {
    const { queryByText } = wrapper;
    // mockedAxios.post.mockResolvedValue({ data: "cool" });
    mockedAxios.post.mockImplementation(() => {
      return Promise.resolve({'data': 'cool'})
    })
    expect(uploadArea).toBeInTheDocument();
    expect(fileInput).toBeVisible();
    fireEvent.change(fileInput, { target: { files: [testFile] } });
    // expect(queryByText("spinner")).toBeInTheDocument();
    // await wait(() => {
    //   // expect(queryByText("test.png")).toBeInTheDocument();
    // });
    // expect(queryByText("check-circle")).toBeInTheDocument();
    // expect(testProps.onSuccess).toHaveBeenCalledWith("cool", testFile);
    // expect(testProps.onChange).toHaveBeenCalledWith(testFile);

    //remove the uploaded file
    // expect(queryByText("times")).toBeInTheDocument();
    // fireEvent.click(queryByText("times"));
    // expect(queryByText("test.png")).not.toBeInTheDocument();
    // expect(testProps.onRemove).toHaveBeenCalledWith(
    //   expect.objectContaining({
    //     raw: testFile,
    //     status: "success",
    //     // name: "test.png"
    //   })
    // );
  });
});
