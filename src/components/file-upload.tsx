"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { twMerge } from "tailwind-merge";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}
export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        console.log("Files: ", res);
        onChange(res?.[0].ufsUrl);
      }}
      onUploadError={(error: Error) => {
        console.log("Error in uploadthing file upload!", error);
      }}
      config={{ cn: twMerge }}
    />
  );
};
