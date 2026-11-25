
import { CheckCircle, X } from "lucide-react";

function ToastNotification({
  message,
  visible,
  onClose,
}) {
  if (!visible) {
    return null;
  }

  return (
    <div className="toast-notification">
      <CheckCircle size={20} />

      <span>{message}</span>

      <button
        onClick={onClose}
        aria-label="Close notification"
      >
        <X size={18} />
      </button>
    </div>
  );
}

export default ToastNotification;
