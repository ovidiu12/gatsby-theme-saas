import React from "react";
import styled from "styled-components";
import Button from "../ui/button";
import { Container } from "../grid";

const Root = styled.div`
  margin-bottom: ${props => props.theme.utils.em("120px")};
`;
const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-weight: 800;
  text-align: center;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonsWrapper = styled.div`
  align-self: center;
`;

const CallToAction = ({ title, cta_button1, cta_button2 }) => {
  return (
    <Root>
      <Container>
        <ContentWrapper>
          <Title>{title}</Title>
          <ButtonsWrapper>
            <Button primary>{cta_button1}</Button>
            <Button secondary>{cta_button2}</Button>
          </ButtonsWrapper>
        </ContentWrapper>
      </Container>
    </Root>
  );
};

export default CallToAction;
