export const FormStatus = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  warning: 'warning',
  info: 'info',
  error: 'error',
} as const;

export type FormStatusType = (typeof FormStatus)[keyof typeof FormStatus];
