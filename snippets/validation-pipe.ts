import { ValidationPipe } from '@nestjs/common';

/**
 * Apply strict global validation:
 * - whitelist: strip unknown properties
 * - forbidNonWhitelisted: reject unknown properties with 400
 * - transform: auto-transform payloads to DTO instances
 */
export const strictValidationPipe = new ValidationPipe({
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
});
