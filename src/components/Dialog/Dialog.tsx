import type { ToastContentProps } from "react-toastify";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

import styles from "./Dialog.module.css";

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>

        <div className={styles.buttonsContainer}>
          <button
            key="thumbsUP"
            className={styles.thumbsUp}
            onClick={() => closeToast(true)}
            aria-label="Confirmar ação e fechar"
            title="Confirmar ação e fechar"
          >
            <ThumbsUpIcon />
          </button>

          <button
            key="thumbsDown"
            className={styles.thumbsDown}
            onClick={() => closeToast(false)}
            aria-label="Confirmar ação e fechar"
            title="Cancelar ação e fechar"
          >
            <ThumbsDownIcon />
          </button>
        </div>
      </div>
    </>
  );
}
