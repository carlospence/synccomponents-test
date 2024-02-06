import React, {useState, useEffect, forwardRef, useImperativeHandle} from "react";
import styled, { css } from "styled-components";
import { MultiStateButtonProps, MultiStateButtonOption, MultiStateButtonOptions, MultiStateButtonElement,
 isMultiStateButtonOption} from "./MultiStateButton.types";
import {getOjectValue, isEmpty} from '../../utils/objectUtils'
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
  
  ${({ round, size}) => {
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
  ${({ visible}) => {
    if (visible === undefined || visible === true ){
      return  css`
      
    `
    }
    if (visible === false ){
      return  css`
      display: none !important;
    `
    }
  }
  }
 
`;


const MultiStateButtonNext = React.forwardRef<MultiStateButtonElement, MultiStateButtonProps>(({
    size,
    disabled,
    options = {},
    selectedOption = {},
    defaultOptionKey = "",
    loop = true,
    readonly = false,
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
    
    if (!isEmpty(selectedOption)){
      if (isMultiStateButtonOption(selectedOption)){
        return selectedOption;
      }
    }
    
    var keys = Object.keys(options);
    if (keys.length > 0){
      return options[currentState as keyof MultiStateButtonOptions]
    }
  
    return null
  })

  useEffect(() => {
    if (!isEmpty(selectedOption)){
      if (isMultiStateButtonOption(selectedOption)){
        // console.log("I have changed")
        setCurrentOption(selectedOption)
      }
    }
  }, [selectedOption])

  const changeState = () => {
  
  var keys = Object.keys(options);
  if (keys.length > 0){
    let currentIndex = keys.indexOf(currentState);
    if (!isEmpty(selectedOption)){
      // console.log("Got here 0")
      if (isMultiStateButtonOption(selectedOption)){
        // console.log("Got here 1")
        if (selectedOption?.value !== undefined){
          currentIndex = keys.indexOf(selectedOption?.value);
          // console.log("Got here 2")
        }
        
      }
    }
    // console.log(currentIndex, "Current Index")
    let nextIndex = currentIndex
    if( currentIndex < keys.length - 1){
      nextIndex = currentIndex + 1
    } else {
      if(loop) {
        nextIndex = 0
      }
    }
    // console.log(nextIndex, "Next Index")
    var nextState = keys[nextIndex]
    let nextOption = options[nextState as keyof MultiStateButtonOptions];
    if (onChange) {
      // console.log("Throwing Onchange Event")
      onChange(nextState, nextOption)
    };

    if (isEmpty(selectedOption)){
      setCurrentOption(nextOption)
      setCurrentState(nextState);
    }
   
    // console.log(nextOption, "Next Option", nextState, "Next State")
    return nextOption;
    //this.setState({currentState: keys[nextIndex]})

  }
}

  React.useImperativeHandle(ref, () => ({
    // start() has type inferrence here
    toggle(): MultiStateButtonOption | null {
      var result =  changeState();
      if (result != undefined){
        return result;
      }
      return currentOption;
    },
  }));

    return (
    <StyledMultiStateButton
      onClick={() => {
        if (!readonly){
          changeState();
        }
      }}
      disabled={disabled}
     
      style={!isEmpty(selectedOption) && isMultiStateButtonOption(selectedOption) ? selectedOption.style : currentOption?.style}
      size={size}
      {...props}
      className={`${props.className} ${!isEmpty(selectedOption) && isMultiStateButtonOption(selectedOption) ? selectedOption.class: currentOption?.class}`} 
      >
      {!isEmpty(selectedOption) && isMultiStateButtonOption(selectedOption) ? selectedOption.iconOrText 
      : 
      options[currentState as keyof MultiStateButtonOptions].iconOrText}  
      {/* {selectedOption.iconOrText } */}
      {/* {options[currentState as keyof MultiStateButtonOptions].iconOrText} */}
     {/* Example */}
    </StyledMultiStateButton>
  );;
});



export default MultiStateButtonNext;