
import { toast } from 'react-toastify';

export const handleError = (message) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
    pauseOnHover: true,
  });
};

export const handleSuccess = (message) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    pauseOnHover: true,
  });
};
