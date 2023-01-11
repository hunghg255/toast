# A tiny Toast

[![npm version](https://badge.fury.io/js/toastjs-tiny.svg)](https://badge.fury.io/js/toastjs-tiny) [![npm](https://img.shields.io/npm/dt/toastjs-tiny.svg?logo=npm)](https://www.npmjs.com/package/toastjs-tiny) [![npm](https://img.shields.io/bundlephobia/minzip/toastjs-tiny)](https://www.npmjs.com/package/toastjs-tiny)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors-)

[Live Demo](https://hunghg255.github.io/toast/demo/index.html)

## Installation

[![NPM](https://nodei.co/npm/toastjs-tiny.png?compact=true)](https://nodei.co/npm/toastjs-tiny/)

#### To install the latest stable version:

```
npm install --save toastjs-tiny

or

yarn add toastjs-tiny
```

#### Basic usage:

```css
@import 'toastjs-tiny/dist/styles.css';
```

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
