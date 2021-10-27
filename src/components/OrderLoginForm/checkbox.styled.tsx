import styled from "styled-components";
import React from "react";

const CheckboxContainer = styled.div`
  margin-top: 10px;
  display: inline-block;
  vertical-align: middle;
  
`;

const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: cyan;
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px skyblue;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")}
  }
`;

interface IProps {
    className?: string;
    checked: boolean;
    value: any;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    labelWrap?: boolean;
  }
  
  const Checkbox: React.FC<IProps> = ({
    className,
    value,
    checked,
    labelWrap = true,
    ...props
  }) => {
    const content = (
      <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
    );
  
    return labelWrap ? <label>{content}</label> : <>{content}</>;
  };
  
  export default Checkbox;