import { Bounce, ToastContainer } from "react-toastify";

type MessagesConteinerProps = {
  children: React.ReactNode;
};

export function MessagesContainer({ children }: MessagesConteinerProps) {
  return (
    <>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}
