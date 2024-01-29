import { HttpException } from '@nestjs/common';
import { ErrorResponseI } from './utils/util.interface';

class AppException extends HttpException {
  constructor(message: string, status: number, state: boolean = false) {
    super({ message, state, statusCode: status }, status);
  }
}

export const AppResponse = {
  success: (message: string, statusCode: number, data: object = {}) => {
    return {
      message,
      status: true,
      statusCode,
      data,
    };
  },
  error: (err: ErrorResponseI) => {
    let loc = err?.location ?? '';

    const message = err?.message
      ? err.message
      : `internal server error @ ${err?.location}`;

    throw new AppException(message, err?.status ?? 500);
  },
};
