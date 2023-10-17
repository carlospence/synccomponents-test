import { FieldHelperProps, FieldInputProps, FieldMetaProps } from "formik";
import {
    HTMLAttributes,
    ButtonHTMLAttributes,
    InputHTMLAttributes,
    SelectHTMLAttributes
  } from "react";
  
/** CustomField */
export type CustomFieldBuilder = (
    options: FieldMetaProps<any> & FieldInputProps<any> & FieldHelperProps<any>
  ) => any;
  
  export type CustomFieldErrorBuilder = (originalError: any) => string;
  
  export interface CustomFieldProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "children"> {
    errorBuilder?: CustomFieldErrorBuilder;
    children: CustomFieldBuilder;
  }