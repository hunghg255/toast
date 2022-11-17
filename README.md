# A tiny Toast

## Import css

```css
@import 'toastjs-tiny/dist/styles.css';
```

## Using

```ts
interface IToast {
  text: string;
  autoClose?: number;
  position?: 'top-center' | 'top-right' | 'bottom-center' | 'bottom-right';
  onClose?: () => {};
  canClose?: boolean;
  showProgress?: boolean;
  pauseOnHover?: boolean;
  pauseOnFocusLoss?: boolean;
  type?: 'success' | 'error';
}

new ToastjsTiny(options: IToast);

new ToastjsTiny({
  text: 'Update new password is successfullyUpdate new password is successfullyUpdate new password is successfullyUpdate new password is successfully',
  type: 'error',
});
```
