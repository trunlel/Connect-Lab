import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "./Styled";

export const CheckBoxButton = (props) => {
  return (
    <CheckBoxWrapper>
      <CheckBox id="checkbox" type="checkbox" />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};
