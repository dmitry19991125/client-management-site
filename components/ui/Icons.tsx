import React from "react";
import SendRounded from "@mui/icons-material/SendRounded";
import ChatBubbleRounded from "@mui/icons-material/ChatBubbleRounded";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import WarningAmberRounded from "@mui/icons-material/WarningAmberRounded";
import GroupRounded from "@mui/icons-material/GroupRounded";
import CreditCardRounded from "@mui/icons-material/CreditCardRounded";
import CloudUploadRounded from "@mui/icons-material/CloudUploadRounded";
import VisibilityRounded from "@mui/icons-material/VisibilityRounded";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import DeleteRounded from "@mui/icons-material/DeleteRounded";
import MailRounded from "@mui/icons-material/MailRounded";

export type IconProps = {
  size?: number;
  className?: string;
  color?: string;
  titleAccess?: string;
};

function withSize(Comp: React.ElementType) {
  const WrappedComponent: React.FC<IconProps> = ({
    size = 16,
    className,
    color,
    titleAccess,
  }) => {

    return (
      <Comp
        style={{ fontSize: size }}
        color={color || "inherit"}
        className={!className ? "w-4 h-4" : className}
        titleAccess={!titleAccess ? "titleAccess" : titleAccess}
      />
    );
  };
  // WrappedComponent.displayName = `withSize(${
  //   typeof Comp === "string"
  //     ? Comp
  //     : Comp.displayName || Comp.name || "Component"
  // })`;
  return WrappedComponent;
}

export const IconSend = withSize(SendRounded);
export const IconMessageCircle = withSize(ChatBubbleRounded);
export const IconFileText = withSize(DescriptionRounded);
export const IconAlertTriangle = withSize(WarningAmberRounded);
export const IconUsers = withSize(GroupRounded);
export const IconCreditCard = withSize(CreditCardRounded);
export const IconUpload = withSize(CloudUploadRounded);
export const IconEye = withSize(VisibilityRounded);
export const IconDownload = withSize(DownloadRounded);
export const IconTrash = withSize(DeleteRounded);
export const IconMail = withSize(MailRounded);
