import React, { useState, useRef } from "react";
import { Meta, StoryObj } from "@storybook/react";
import MultiStateButton from "./MultiStateButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MultiStateButtonProps, MultiStateButtonOption, MultiStateButtonElement } from "./MultiStateButton.types";

const meta: Meta<typeof MultiStateButton> = {
  component: MultiStateButton,
  title: "SyncComponents/MultiStateButton",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof MultiStateButton>;

const BUTTON_OPTIONS = {
  absent: {
    value: "absent",
    iconOrText: (
      <FontAwesomeIcon
        icon="ban"
        fixedWidth
        size="lg"
        style={{ fontWeight: "bolder" }}
      />
    ),
    class: "btn btn-secondary",
  },
  present: {
    value: "present",
    iconOrText: (
      <FontAwesomeIcon
        icon="check"
        fixedWidth
        size="lg"
        style={{ fontWeight: "bolder" }}
      />
    ),
    class: "btn btn-success",
  },
  excuse: {
    value: "excuse",
    iconOrText: (
      <FontAwesomeIcon
        icon="hand"
        fixedWidth
        size="lg"
        style={{ fontWeight: "bolder" }}
      />
    ),
    class: "btn btn-info",
  },
  cancel: {
    value: "cancel",
    iconOrText: <FontAwesomeIcon icon="xmark" size="lg" />,
    class: "btn btn-danger",
  },
};

const BUTTON_OPTIONS_TEXT = {
  absent: {
    color: "white",
    background: "rgb(255,0,0)",
    iconOrText: (
      <FontAwesomeIcon
        icon="ban"
        fixedWidth
        size="lg"
        style={{ fontWeight: "bolder" }}
      />
    ),
    class: "btn btn-danger",
  },
  present: {
    color: "white",
    background: "rgb(211,72,54)",
    iconOrText: (
      <FontAwesomeIcon
        icon="check-double"
        fixedWidth
        size="lg"
        style={{ fontWeight: "bolder" }}
      />
    ),
    class: "btn btn-warning",
  },
  excuse: {
    color: "white",
    background: "#f91",
    iconOrText: <div>Hello Guy</div>,
    class: "btn btn-danger",
  },
  done: {
    color: "white",
    background: "green",
    iconOrText: <FontAwesomeIcon icon="check" size="lg" />,
    class: "btn btn-success",
  },
};

export const NoLoopingButton: Story = (args) => (
  <MultiStateButton
    loop={false}
    options={BUTTON_OPTIONS}
    data-testId="InputField-id"
    {...args}
  />
);
NoLoopingButton.args = {
  preventClick: false,
  disabled: false,
  loop: false
};

export const RoundButton: Story = (args) => (
  <MultiStateButton
    round
    loop
    options={BUTTON_OPTIONS}
    data-testId="InputField-id"
    {...args}
  />
);
RoundButton.args = {
  preventClick: false,
  disabled: false,
  round: true,
  loop: true
};

export const LoopingButton: Story = (args) => (
  <MultiStateButton
    loop={true}
    options={BUTTON_OPTIONS}
    data-testId="InputField-id"
    {...args}
  />
);
LoopingButton.args = {
  preventClick: false,
  disabled: false,
  loop: true
};

// export const ExternalChangeStateButton: Story = (args) => (<>
// <button>Change State</button>
// <MultiStateButton round loop options={BUTTON_OPTIONS}  data-testId="InputField-id" {...args} />
// </>

// );
// ExternalChangeStateButton.args = {
//   primary: true,
//   disabled: false,
//   text: "Primary",
// };

export const ExternalChangeState = (args): any => {
  const ExampleApp = (): any => {
    const [currentOption, setCurrentOption] = useState<MultiStateButtonOption>(null);
    const [currentState, setCurrentState] = useState<string>(null);
   // const btn = React.useRef<MultiStateButtonElement | null>(null);
    let btn: MultiStateButtonElement | null;
   
    const handleChangeState = (args) => {
      if (btn.toggle) {
        console.log("Change state working")
        var option = btn.toggle();
        setCurrentOption(option)
      } else {
        console.log("Change state not working")
      }
    
    }

    return (
      <>
        <button onClick={handleChangeState} className="mb-4 btn btn-primary d-flex ">Toggle 
        </button>
        <MultiStateButton
          ref={n => {btn = n} }
          preventClick={true}
          onChange={(state, option) => {
            console.log(state, option, "StateOption")
            setCurrentOption(option)
            setCurrentState(state);
          }}
          //ref={theRef}
          className="mx-3 mb-3"
          round
          loop
          options={BUTTON_OPTIONS}
          data-testId="InputField-id"
          {...args}
        />
        <label>Current Option: {currentOption?.value}</label>
        <br/>
        <label>Current State: {currentState}</label>
      </>
    );
  };

  return <ExampleApp />;
};

ExternalChangeState.args = {
  // preventClick: true,
  disabled: false,
};

// export const Disabled: Story = (args) => (
//   <MultiStateButton options={BUTTON_OPTIONS} data-testId="InputField-id" {...args} />
// );
// Disabled.args = {
//   primary: false,
//   disabled: true,
//   text: "Disabled",
// };

// export const Small: Story = (args) => (
//   <MultiStateButton options={BUTTON_OPTIONS} data-testId="InputField-id" {...args} />
// );
// Small.args = {
//   primary: true,
//   disabled: false,
//   size: "small",
//   text: "Small",
// };

// export const Medium: Story = (args) => (
//   <MultiStateButton options={BUTTON_OPTIONS} data-testId="InputField-id" {...args} />
// );
// Medium.args = {
//   primary: true,
//   disabled: false,
//   size: "medium",
//   text: "Medium",
// };

// export const Large: Story = (args) => (
//   <MultiStateButton options={BUTTON_OPTIONS}  data-testId="InputField-id" {...args} />
// );
// Large.args = {
//   primary: true,
//   disabled: false,
//   size: "large",
//   text: "Large",
// };
