import { Logger } from '@nestjs/common';

// Create a dedicated logger for a given context/module
export const logger = new Logger('AppContext');

export function logPretty(payload: unknown, level: 'log' | 'warn' | 'error' = 'log') {
  const msg = JSON.stringify(payload, null, 2);
  if (level === 'warn') return logger.warn(msg);
  if (level === 'error') return logger.error(msg);
  return logger.log(msg);
}

// Example usage:
// logPretty({ message: 'service started', port: 3000 });
