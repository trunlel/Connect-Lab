import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "./Styled";

export const CheckBoxButton = (props) => {
  const { id, type, htmlFor } = props;
  return (
    <CheckBoxWrapper>
      <CheckBox id="checkbox" type="checkbox" />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};
