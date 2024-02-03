import { MouseEventHandler, ReactNode } from "react";

export interface MultiStateButtonProps {
  disabled?: boolean;
  size?: "normal" | "small" | "medium" | "large";
  options?: MultiStateButtonOptions;
  defaultOptionKey?: string;
  onChange?: (newState: string, newOption: MultiStateButtonOption) => void;
  round?: boolean;
  loop?: boolean;
  preventClick?: boolean;
  className?: string;
 
  //onClick?: MouseEventHandler<HTMLButtonElement>;
}


export interface MultiStateButtonOption {
  color?:      string;
    background?: string;
    iconOrText?: string | ReactNode;
    style?: object;
    class?: string;
    value?: string;

}

export type MultiStateButtonOptions = {
  [name: string]: MultiStateButtonOption;
}

export type MultiStateButtonElement =  {
  toggle: () => MultiStateButtonOption | null ;
};
