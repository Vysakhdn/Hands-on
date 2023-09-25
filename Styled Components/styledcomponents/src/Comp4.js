import { Wrapper, StyledButton, DiffButton } from "./Comp4.style";
import GlobalStyles from "./Global";

const Comp2 = () => {
  return (
    <Wrapper>
      <GlobalStyles></GlobalStyles>
      <StyledButton variant="primary" width="full">
        My Button
      </StyledButton>
      <StyledButton variant="secondary">My Button</StyledButton>
      <DiffButton variant="primary" width="full">
        Diff Button
      </DiffButton>
    </Wrapper>
  );
};

export default Comp2;