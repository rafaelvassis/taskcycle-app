import { toast } from "react-toastify";
import { Dialog } from '../components/Dialog/Dialog';

const CONFIRM_TOAST_ID = "confirm-dialog";

export const showMessage = {
  success: (msg: string) => toast.success(msg),
  error: (msg: string) => toast.error(msg),
  warn: (msg: string) => toast.warn(msg),
  warning: (msg: string) => toast.warning(msg),
  info: (msg: string) => toast.info(msg),

  dismiss: () => toast.dismiss(),

  confirm: (data: string, onClosing: (confirmation: boolean) => void) => {
    if (toast.isActive(CONFIRM_TOAST_ID)) return;

    toast(Dialog, {
      toastId: CONFIRM_TOAST_ID,
      data,
      onClose: (confirmation) => {
        onClosing(Boolean(confirmation));
      },
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      draggable: false,
    });
  },
};