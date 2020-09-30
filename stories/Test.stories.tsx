import styled from "@emotion/styled";
import React from "react";

import { Page } from "./Page";

const Container = styled.div({
  width: "100%",
  border: "1px solid black",
  padding: 4,
  boxSizing: "border-box",
});

interface IStyledDivProps {
  width: number;
  color: string;
}

const InnerDiv = styled.div<IStyledDivProps>(({ color, width }) => ({
  width: width,
  boxSizing: "border-box",
  border: `4px solid ${color}`,
  margin: 4,
  padding: 4,
}));

const StyledDiv = (props: IStyledDivProps) => (
  <InnerDiv {...props}>Width {props.width}px</InnerDiv>
);

export const TestWithOverflowingTable = () => {
  const [clientWidth, setClientWidth] = React.useState(
    document.body.clientWidth
  );

  React.useEffect(() => {
    const updateClientWidth = () => setClientWidth(document.body.clientWidth);

    window.addEventListener("resize", updateClientWidth);

    return () => window.removeEventListener("resize", updateClientWidth);
  }, []);

  return (
    <Container>
      <h1>Client width: {clientWidth}px</h1>
      <StyledDiv color="orange" width={300} />
      <StyledDiv color="green" width={400} />
      <StyledDiv color="blue" width={600} />
      <StyledDiv color="red" width={2000} />
    </Container>
  );
};

export default {
  title: "Example/Test",
  component: Page,
};
