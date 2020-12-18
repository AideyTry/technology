import React, { FC, useState, useEffect, ChangeEvent, useRef } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Button, { ButtonType } from "../Button/button";

export type UploadFileStatus = "ready" | "uploading" | "success" | "error";
export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}
export interface UploadProps {
  action: string;
  defaultFileList?: UploadFile[];
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  onChange?: (file: File) => void;
}

const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    defaultFileList,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
  } = props;
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || []);
  const fileInput = useRef<HTMLInputElement>(null);
  const updateFileList = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>
  ) => {
    setFileList((prevList) => {
      return prevList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        } else {
          return file;
        }
      });
    });
  };
  const post = (file: File) => {
    let _file: UploadFile = {
      uid: uuidv4().replace(/-/g, ""),
      status: "ready",
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    setFileList((prevList) => {
      console.log("prevList=", prevList);
      return [_file, ...prevList];
    });
    const formData = new FormData();
    formData.append(file.name, file);
    Axios.post(action, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (e) => {
        console.log("e=====", e);
        let percentage = Math.round((e.loaded * 100) / e.total) || 0;
        if (percentage < 100) {
          updateFileList(_file, { percent: percentage, status: "uploading" });
          if (onProgress) {
            onProgress(percentage, file);
          }
        }
      },
    })
      .then((res) => {
        updateFileList(_file, { status: "success", response: res.data });
        setFileList(prevList => {
          console.log("sucess prevList=", prevList);
          return [...prevList]
        });
        if (onSuccess) {
          onSuccess(res, file);
        }
        if (onChange) {
          onChange(file);
        }
      })
      .catch((err) => {
        if (onError) {
          onError(err, file);
        }
        if (onChange) {
          onChange(file);
        }
      });
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    uploadFiles(files);
    if (fileInput.current) {
      fileInput.current.value = "";
    }
  };
  const uploadFiles = (files: FileList) => {
    const postFiles = Array.from(files);
    postFiles.forEach((file) => {
      if (!beforeUpload) {
        post(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then((processedFile) => post(processedFile));
        } else if (result !== false) {
          post(file);
        }
      }
    });
  };
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };
  return (
    <>
      <div>
        <Button btnType={ButtonType.Primary} onClick={handleClick}>
          Upload
        </Button>
        <input
          ref={fileInput}
          style={{ display: "none" }}
          type="file"
          name="myFile"
          onChange={handleFileChange}
        />
      </div>
    </>
  );
};

Upload.defaultProps = {
  action: "",
};

export default Upload;
