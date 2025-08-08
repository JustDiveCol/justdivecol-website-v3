export const ACTION_TYPES = ['internal', 'external', 'whatsapp'] as const;
export type ActionType = (typeof ACTION_TYPES)[number];

export const BUTTON_VARIANTS = [
  'primary',
  'secondary',
  'outline',
  'ghost',
] as const;
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

export const BUTTON_SIZES = ['default', 'sm', 'lg'] as const;
export type ButtonSize = (typeof BUTTON_SIZES)[number];

export const STATUS_TYPES = ['published', 'draft'] as const;
export type StatusType = (typeof STATUS_TYPES)[number];

export const SOCIAL = [
  {
    type: 'instagram',
    name: 'Instagram',
    path: 'https://www.instagram.com/justdivecol/',
  },
  {
    type: 'youtube',
    name: 'YouTube',
    path: 'https://www.tiktok.com/@just.dive.col',
  },
  {
    type: 'tiktok',
    name: 'TikTok',
    path: 'https://www.youtube.com/@JustDiveCol',
  },
] as const;
export type Social = (typeof SOCIAL)[number];
export type SocialType = Social['type'];
export type SocialName = Social['name'];
export type SocialPath = Social['path'];

export const IMAGE_VARIANTS = [
  'fullscreen',
  'header',
  'horizontal',
  'vertical',
  'square',
] as const;
export type ImageVariant = (typeof IMAGE_VARIANTS)[number];
