import { anchorMatterSelfHealing } from "./anchor-matter-self-healing";
import { entangledPhotonSmartwatch } from "./entangled-photon-smartwatch";
import { fasterThanLightConsistency } from "./faster-than-light-consistency";
import { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  entangledPhotonSmartwatch,
  fasterThanLightConsistency,
  anchorMatterSelfHealing,
];

export type { BlogPost } from "./types";
