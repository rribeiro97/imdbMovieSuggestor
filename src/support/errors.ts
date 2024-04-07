export class HttpError extends Error {
  constructor({
    message,
    status = 500,
    title,
    detail,
    name,
    stack,
  }: {
    message: string;
    status?: number;
    title?: string;
    detail?: string;
    name: string;
    stack?: string;
  }) {
    super(message);

    this.message = message;
    this.title = title;
    this.status = status;
    this.detail = detail;
    this.name = name;
    this.stack = stack;
  }

  message: string;
  status: number;
  detail?: string | undefined;
  extra?: never;
  title?: string | undefined;
  name: string;
  stack?: string | undefined;
  cause?: never;
}
