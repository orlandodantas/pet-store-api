declare namespace NodeJS {
  export interface Error {
    statusCode?: number;
  }
}

declare global {
  interface Error {
    statusCode?: number;
  }
}