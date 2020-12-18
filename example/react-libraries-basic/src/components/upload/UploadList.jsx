import React, { FC } from "react";
import { UploadFile } from "./index";
import Progress from "../Progress/index";

interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

export const UploadList: FC<UploadListProps> = (props) => {
  const { fileList, onRemove } = props;
  return (
    <ul className="turnip-upload-list">
      {fileList.map((item) => {
        return (
          <li key={item.uid} className="turnip-upload-list-item">
            <span className={`file-name file-name-${item.status}`}>
              {item.name}
            </span>
            <span className="file-status">
              {(item.status === "uploading" || item.status === "ready") && (
                <span>spinner</span>
              )}
              {item.status === "success" && <span>success</span>}
              {item.status === "error" && <span>error</span>}
            </span>
            <span className="file-actions">
              <span onClick={() => onRemove(item)}>remove</span>
            </span>
            {item.status === "uploading" && (
              <Progress percent={item.percent || 0} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default UploadList;
