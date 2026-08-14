import { PRODUCT_TELEMETRY_ENABLED } from '@open-design/contracts/analytics';

const DEFAULT_TELEMETRY_ENV = 'development';

/** Tests only. Production and tools-dev never set this. */
export const FORCE_TELEMETRY_ENV = 'OD_FORCE_TELEMETRY';

export function isProductTelemetryDisabled(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  if (env[FORCE_TELEMETRY_ENV] === '1' || process.env[FORCE_TELEMETRY_ENV] === '1') {
    return false;
  }
  return !PRODUCT_TELEMETRY_ENABLED;
}

export function readTelemetryEnvironment(
  env: NodeJS.ProcessEnv = process.env,
): string {
  const explicit =
    env.OD_TELEMETRY_ENV?.trim() ||
    env.OPEN_DESIGN_ENV?.trim() ||
    env.POSTHOG_ENV?.trim() ||
    env.LANGFUSE_ENVIRONMENT?.trim();
  if (explicit) return explicit;
  if (env.NODE_ENV === 'production') return 'production';
  return DEFAULT_TELEMETRY_ENV;
}
