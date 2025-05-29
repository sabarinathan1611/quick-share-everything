
declare global {
  function gtag(command: 'config' | 'consent', targetId: string, config?: any): void;
  function gtag(command: 'event', eventName: string, config?: any): void;
  function gtag(command: string, ...args: any[]): void;
}

export {};
