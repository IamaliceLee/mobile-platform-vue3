//js错误捕获（未被捕获的其他错误）
window.onerror = (
  message: Event | string,
  source?: string,
  lineno?: number,
  colno?: number,
  error?: Error
) => {
  console.error('main.ts window onerror', message, source, error);
};

window.onunhandledrejection = (event: PromiseRejectionEvent) => {
  console.error('main.ts window onunhandledrejection', event.reason);
};

export {};
