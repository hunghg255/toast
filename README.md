<p align="center">
<a href="https://www.npmjs.com/package/toastjs-tiny" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/material-symbols:circle-notifications.svg?color=%23b4b9fd" alt="logo" width='100'/></a>
</p>

<p align="center">
  A library to show toast notification on web
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/toastjs-tiny" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/csvs-parsers.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/toastjs-tiny" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/csvs-parsers.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=toastjs-tiny" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/toastjs-tiny" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/toastjs-tiny/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/toastjs-tiny/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/toastjs-tiny" alt="License" /></a>
</p>

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
