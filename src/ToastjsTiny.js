const DEFAULT_OPTIONS = {
  autoClose: 3000,
  position: 'top-center',
  onClose: () => {},
  canClose: true,
  showProgress: false,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  type: 'success',
};

const IconSuccess = `
<svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.222 0.832031H9.7737C4.11107 0.832031 0.332031 4.88636 0.332031 10.692V24.3054C0.332031 30.1165 4.10098 34.1654 9.7737 34.1654H24.2204C29.8947 34.1654 33.6654 30.1165 33.6654 24.3054V10.692C33.6654 4.8812 29.895 0.832031 24.222 0.832031ZM9.7737 3.33203H24.222C28.4729 3.33203 31.1654 6.22364 31.1654 10.692V24.3054C31.1654 28.774 28.4727 31.6654 24.2204 31.6654H9.7737C5.5233 31.6654 2.83203 28.7742 2.83203 24.3054V10.692C2.83203 6.22932 5.5326 3.33203 9.7737 3.33203ZM23.8151 12.6598C23.3269 12.1717 22.5355 12.1717 22.0473 12.6598L15.0197 19.685L11.9482 16.6146L11.808 16.4936C11.3186 16.1306 10.6241 16.1711 10.1805 16.615C9.69241 17.1033 9.69258 17.8947 10.1808 18.3828L14.1375 22.3378L14.2777 22.4588C14.7671 22.8217 15.4614 22.7813 15.9051 22.3376L23.8151 14.4276L23.9361 14.2874C24.2992 13.798 24.2589 13.1036 23.8151 12.6598Z" fill="#099D5D"/>
</svg>
`;

const IconError = `
<svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.2259 0.832031H9.7776C4.11498 0.832031 0.335938 4.88636 0.335938 10.692V24.3054C0.335938 30.1165 4.10489 34.1654 9.7776 34.1654H24.2243C29.8986 34.1654 33.6693 30.1165 33.6693 24.3054V10.692C33.6693 4.8812 29.8989 0.832031 24.2259 0.832031ZM9.7776 3.33203H24.2259C28.4768 3.33203 31.1693 6.22364 31.1693 10.692V24.3054C31.1693 28.774 28.4766 31.6654 24.2243 31.6654H9.7776C5.5272 31.6654 2.83594 28.7742 2.83594 24.3054V10.692C2.83594 6.22932 5.5365 3.33203 9.7776 3.33203ZM12.1196 12.6024C12.5635 12.1587 13.2579 12.1184 13.7472 12.4815L13.8874 12.6026L16.9999 15.7157L20.1096 12.606C20.5978 12.1179 21.3892 12.1179 21.8774 12.606C22.3212 13.0498 22.3615 13.7442 21.9984 14.2336L21.8774 14.3738L18.7675 17.4837L21.8807 20.5976C22.3689 21.0858 22.3688 21.8772 21.8806 22.3653C21.4367 22.8091 20.7423 22.8493 20.253 22.4862L20.1128 22.3652L16.9997 19.2514L13.8907 22.3605C13.4026 22.8486 12.6111 22.8486 12.123 22.3605C11.6792 21.9167 11.6388 21.2222 12.0019 20.7329L12.123 20.5927L15.2322 17.4835L12.1195 14.3702C11.6314 13.8819 11.6314 13.0905 12.1196 12.6024Z" fill="#F41515"/>
</svg>
`;

function createContainer(position) {
  const container = document.createElement('div');
  container.classList.add('toast-container');
  container.dataset.position = position;
  document.body.append(container);
  return container;
}

class ToastjsTiny {
  #toastElem;
  #autoCloseInterval;
  #progressInterval;
  #removeBinded;
  #timeVisible = 0;
  #autoClose;
  #isPaused = false;
  #unpause;
  #pause;
  #visibilityChange;
  #shouldUnPause;

  constructor(options) {
    this.#toastElem = document.createElement('div');
    this.#toastElem.classList.add('toast');
    requestAnimationFrame(() => {
      this.#toastElem.classList.add('show');
    });
    this.#removeBinded = this.remove.bind(this);
    this.#unpause = () => (this.#isPaused = false);
    this.#pause = () => (this.#isPaused = true);
    this.#visibilityChange = () => {
      this.#shouldUnPause = document.visibilityState === 'visible';
    };
    this.update({ ...DEFAULT_OPTIONS, ...options });
  }

  set autoClose(value) {
    this.#autoClose = value;
    this.#timeVisible = 0;
    if (value === false) return;

    let lastTime;
    const func = (time) => {
      if (this.#shouldUnPause) {
        lastTime = null;
        this.#shouldUnPause = false;
      }
      if (lastTime == null) {
        lastTime = time;
        this.#autoCloseInterval = requestAnimationFrame(func);
        return;
      }
      if (!this.#isPaused) {
        this.#timeVisible += time - lastTime;
        if (this.#timeVisible >= this.#autoClose) {
          this.remove();
          return;
        }
      }

      lastTime = time;
      this.#autoCloseInterval = requestAnimationFrame(func);
    };

    this.#autoCloseInterval = requestAnimationFrame(func);
  }

  set position(value) {
    const currentContainer = this.#toastElem.parentElement;
    const selector = `.toast-container[data-position="${value}"]`;
    const container =
      document.querySelector(selector) || createContainer(value);
    container.append(this.#toastElem);
    if (currentContainer == null || currentContainer.hasChildNodes()) return;
    currentContainer.remove();
  }

  set text(value) {
    this.#toastElem.insertAdjacentHTML(
      'beforeend',
      `${
        this.type === 'success' ? IconSuccess : IconError
      }<span>${value}</span>`
    );
  }

  set canClose(value) {
    this.#toastElem.classList.toggle('can-close', value);
    if (value) {
      this.#toastElem.addEventListener('click', this.#removeBinded);
    } else {
      this.#toastElem.removeEventListener('click', this.#removeBinded);
    }
  }

  set showProgress(value) {
    this.#toastElem.classList.toggle('progress', value);
    this.#toastElem.style.setProperty('--progress', 1);

    if (value) {
      const func = () => {
        if (!this.#isPaused) {
          this.#toastElem.style.setProperty(
            '--progress',
            1 - this.#timeVisible / this.#autoClose
          );
        }
        this.#progressInterval = requestAnimationFrame(func);
      };

      this.#progressInterval = requestAnimationFrame(func);
    }
  }

  set pauseOnHover(value) {
    if (value) {
      this.#toastElem.addEventListener('mouseover', this.#pause);
      this.#toastElem.addEventListener('mouseleave', this.#unpause);
    } else {
      this.#toastElem.removeEventListener('mouseover', this.#pause);
      this.#toastElem.removeEventListener('mouseleave', this.#unpause);
    }
  }

  set pauseOnFocusLoss(value) {
    if (value) {
      document.addEventListener('visibilitychange', this.#visibilityChange);
    } else {
      document.removeEventListener('visibilitychange', this.#visibilityChange);
    }
  }

  update(options) {
    Object.entries(options).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  remove() {
    cancelAnimationFrame(this.#autoCloseInterval);
    cancelAnimationFrame(this.#progressInterval);
    const container = this.#toastElem.parentElement;
    this.#toastElem.classList.remove('show');
    this.#toastElem.addEventListener('transitionend', () => {
      this.#toastElem.remove();
      if (container.hasChildNodes()) return;
      container.remove();
    });
    this.onClose();
  }
}

export default ToastjsTiny;
