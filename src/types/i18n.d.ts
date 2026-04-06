// i18next type augmentation — intentionally uses string keys for flexibility
// Components with static keys benefit from autocomplete via the JSON import
import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    // Keeping keys as string for dynamic key support (runtime-computed keys from data arrays)
    resources: Record<string, Record<string, string>>;
  }
}
