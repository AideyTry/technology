import React, { FC, useEffect, ChangeEvent, useRef } from "react";
import Axios from "axios";
import Button, { ButtonType } from "../Button/button";

export interface UploadProps {
  action?: string;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
}

const Upload: FC<UploadProps> = props => {
    const {action, onProgress, onSuccess, onError} = props
    const fileInput = useRef<HTMLInputElement>(null)
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log("files===", files);
    if (!files) {
        return
    }
    uploadFiles(files)
  };
  const uploadFiles = (file: FileList) => {
    
  }
  const handleClick = () => {
    if(fileInput.current){
        fileInput.current.click()
    }
  }
  return (
    <>
      <div>
        <Button btnType={ButtonType.Primary} onClick={handleClick}>Upload</Button>
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

export default Upload;
