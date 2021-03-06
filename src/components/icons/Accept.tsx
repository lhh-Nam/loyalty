import { SvgIcon, SvgIconProps } from "@material-ui/core";
import React from "react";

const Accept = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      style={{ width: "24px", height: "24px" }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M16.24 3.65039H7.76004C5.29004 3.65039 3.29004 5.66039 3.29004 8.12039V17.5304C3.29004 19.9904 5.30004 22.0004 7.76004 22.0004H16.23C18.7 22.0004 20.7 19.9904 20.7 17.5304V8.12039C20.71 5.65039 18.7 3.65039 16.24 3.65039Z"
        fill="white"
      />
      <path
        d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z"
        fill="white"
      />
      <path
        d="M10.81 16.9496C10.62 16.9496 10.43 16.8796 10.28 16.7296L8.78 15.2296C8.49 14.9396 8.49 14.4596 8.78 14.1696C9.07 13.8796 9.55 13.8796 9.84 14.1696L10.81 15.1396L14.28 11.6696C14.57 11.3796 15.05 11.3796 15.34 11.6696C15.63 11.9596 15.63 12.4396 15.34 12.7296L11.34 16.7296C11.2 16.8796 11 16.9496 10.81 16.9496Z"
        fill="white"
      />
    </SvgIcon>
  );
};

export default Accept;
