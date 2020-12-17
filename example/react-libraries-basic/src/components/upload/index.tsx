import React, { FC, useEffect, ChangeEvent, useRef } from "react";
import Axios from "axios";
import Button, { ButtonType } from "../Button/button";

export interface UploadProps {
  action?: string;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
}

const Upload: FC<UploadProps> = (props) => {
  const { action, onProgress, onSuccess, onError } = props;
  const fileInput = useRef<HTMLInputElement>(null);
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
      const formData = new FormData();
      formData.append(file.name, file);
      Axios.post(action, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (e) => {
            console.log('e=====', e)
            let percentage = Math.round((e.loaded * 100) / e.total) || 0;
            if(percentage < 100){
                if(onProgress){
                    onProgress(percentage, file)
                }
            }
        },
      }).then(res => {
          if(onSuccess){
            onSuccess(res, file)
          }
      }).catch(err => {
          if(onError){
            onError(err, file)
          }
      })
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
    action: ''
}

export default Upload;
