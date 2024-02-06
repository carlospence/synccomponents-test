import { MouseEventHandler, ReactNode } from "react";

export interface MultiStateButtonProps {
  disabled?: boolean;
  size?: "normal" | "small" | "medium" | "large";
  options?: MultiStateButtonOptions;
  defaultOptionKey?: string;
  selectedOption?: MultiStateButtonOption;
  onChange?: (newState: string, newOption: MultiStateButtonOption) => MultiStateButtonOption | null;
  round?: boolean;
  loop?: boolean;
  readonly?: boolean;
  className?: string;
  visible?: boolean;
 
  //onClick?: MouseEventHandler<HTMLButtonElement>;
}


export interface MultiStateButtonOption {
    iconOrText?: string | ReactNode;
    style?: object;
    class?: string;
    value?: string;
    extraData?: string | object
}

export type MultiStateButtonOptions = {
  [name: string]: MultiStateButtonOption;
}

export type MultiStateButtonElement =  {
  toggle: () => MultiStateButtonOption | null ;
};


export const isMultiStateButtonOption = (obj: MultiStateButtonOption): obj is MultiStateButtonOption => {
  if (obj.iconOrText && obj.value)
    return true
  else
    return false;
}