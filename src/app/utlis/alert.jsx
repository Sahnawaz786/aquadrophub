import {toast} from 'sonner';

const message = (status,message) => {
    status==='success'
      ? toast.success(message, {
          position: 'top-center',
          duration: 1500,
        })
      : toast.error(message, {
          position: 'top-center',
          duration: 1500,
        });
};

export default message;