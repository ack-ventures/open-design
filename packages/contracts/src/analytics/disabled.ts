/**
 * This fork never ships product telemetry. Official nexu CI builds bake
 * POSTHOG_KEY / OPEN_DESIGN_TELEMETRY_RELAY_URL into the installer; those
 * ingest paths are compiled off here so a leaked env var cannot phone home.
 *
 * Daemon/packaged tests may set OD_FORCE_TELEMETRY=1 to exercise the
 * still-present pipeline code without changing this constant.
 */
export const PRODUCT_TELEMETRY_ENABLED = false;
