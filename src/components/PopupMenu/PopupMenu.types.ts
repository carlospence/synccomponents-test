/** PopupMenu */

export type PopupMenuFunctionChild = (closePopup: () => void) => any;

export type PopupMenuChild = string | JSX.Element | PopupMenuFunctionChild;

export interface PopupMenuProps {
  children: PopupMenuChild | Array<PopupMenuChild>;
}