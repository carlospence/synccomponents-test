import { HTMLAttributes } from "react";

/** FieldDecoration */
export interface FieldDecorationBuilderProps {
    onFieldFocus: () => void;
    onFieldBlur: () => void;
  }
  
  export type FieldDecorationBuilder = (
    hooks: FieldDecorationBuilderProps
  ) => JSX.Element;
  
  export interface FieldDecorationProps
    extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
    label?: any;
    error?: any;
    helper?: any;
    disabled?: boolean;
    leading?: JSX.Element;
    trailing?: JSX.Element;
    children: FieldDecorationBuilder;
  }