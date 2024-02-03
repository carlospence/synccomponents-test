import React, {useState, forwardRef, useImperativeHandle} from "react";
import styled, { css } from "styled-components";
import { MultiStateButtonProps, MultiStateButtonOption, MultiStateButtonOptions, MultiStateButtonElement } from "./MultiStateButton.types";
import {getOjectValue} from '../../utils/objectUtils'
import {isNonEmptyString} from '../../utils/stringUtils'

// const StyledMultiStateButton = styled.button<MultiStateButtonProps>`
//   border: 0;
//   line-height: 1;
//   font-size: 15px;
//   cursor: pointer;
//   font-weight: 700;
//   font-weight: bold;
//   border-radius: 3px;
//   display: inline-block;
//   padding: ${(props) =>
//     props.size === "small"
//       ? "7px 25px 8px"
//       : props.size === "medium"
//       ? "9px 30px 11px"
//       : "14px 30px 16px"};

//   opacity: ${(props) => (props.disabled ? 0.5 : 1)};
// `;

const StyledMultiStateButton = styled.button<MultiStateButtonProps>`
  border: 0;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  
  ${({ round, size }) => {
    if (round){
      switch (size) {
        case "small":
          return  css`
          height: 24px;
          width: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        `
          break;
        case "medium":
          return  css`
          height: 48px;
          width: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        `
        case "large":
          return  css`
          height: 56px;
          width: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        `
        default:
          return  css`
          height: 32px;
          width: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          
        `
          break;
      }
    }
  }
  }

 
`;


const MultiStateButton = React.forwardRef<MultiStateButtonElement, MultiStateButtonProps>(({
    size,
    disabled,
    options = {},
    defaultOptionKey = "",
    loop = true,
    preventClick = false,
    onChange,
    ...props
   }: MultiStateButtonProps, ref) => {

      const [currentState, setCurrentState] = useState(() => {
    if (!isNonEmptyString(defaultOptionKey)){
      var keys = Object.keys(options);
      return keys[0]
    }
    return defaultOptionKey;
  })

  const [currentOption, setCurrentOption] = useState(() => {
    var keys = Object.keys(options);
    if (keys.length > 0){
      return options[currentState as keyof MultiStateButtonOptions]
    }
    return null
  })

  const changeState = () => {
  
  var keys = Object.keys(options);
  if (keys.length > 0){
    let currentIndex = keys.indexOf(currentState);
    let nextIndex = currentIndex
    if( currentIndex < keys.length - 1){
      nextIndex = currentIndex + 1
    } else {
      if(loop) {
        nextIndex = 0
      }
    }
    var nextState = keys[nextIndex]
    let nextOption = options[nextState as keyof MultiStateButtonOptions];
    setCurrentOption(nextOption)
    setCurrentState(nextState);
    
    //this.setState({currentState: keys[nextIndex]})

    if (onChange) onChange(nextState, nextOption);
  }
}

  React.useImperativeHandle(ref, () => ({
    // start() has type inferrence here
    toggle(): MultiStateButtonOption | null {
      changeState();
      return currentOption;
    },
  }));

    return (
    <StyledMultiStateButton
      onClick={() => {
        if (!preventClick){
          changeState();
        }
      }}
      disabled={disabled}
     
      style={currentOption?.style}
      size={size}
      {...props}
      className={`${props.className} ${currentOption?.class}`} 
      >
      {options[currentState as keyof MultiStateButtonOptions].iconOrText}
     {/* Example */}
    </StyledMultiStateButton>
  );;
});



export default MultiStateButton;