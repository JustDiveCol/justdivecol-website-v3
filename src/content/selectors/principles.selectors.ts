import type { PrincipleCardData } from '../../components/sections/home/types';
import { toAssetUrl } from '../../constants/assets.schema';
import type { PrinciplesPageContent } from '../pages/principles/types';

export function principlesToHomeCards(
  items: PrinciplesPageContent['principles']
): PrincipleCardData[] {
  return items.map((p) => ({
    id: p.id,
    imageUrl: toAssetUrl(p.imageData.backgroundImage),
    titleKey: p.titleKey,
    descriptionKey: p.descriptionKey,
    photoCredit: p.imageData.photoCredit,
    complementaryLogo: p.imageData.complementaryLogo,
  }));
}
