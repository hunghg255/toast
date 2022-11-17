export default class ToastjsTiny {
  constructor(options: {
    text: string;
    autoClose?: number;
    position?: 'top-center' | 'top-right' | 'bottom-center' | 'bottom-right';
    onClose?: () => {};
    canClose?: boolean;
    showProgress?: boolean;
    pauseOnHover?: boolean;
    pauseOnFocusLoss?: boolean;
    type?: 'success' | 'error';
  }) {}
}
