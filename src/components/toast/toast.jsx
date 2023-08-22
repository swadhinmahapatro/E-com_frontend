import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ({ type, message }) => {
  if (type === 'warn') {
    toast.warn(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  } else if (type === 'success') {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  } else if (type === 'error') {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  }

  return null;
};

export default CustomToast;
