export type Navigation = {
  itemId: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onSelect?: () => void;
  onSoftLeft?: () => void;
  onSoftRight?: () => void;
};
