import { useContext, useEffect } from "react";
import { UsageDiv } from "../styles/Output.styled";
import { termContext } from "../Terminal";
import { Wrapper } from "../styles/Output.styled";

const Sudo: React.FC = () => {
  const { arg } = useContext(termContext);
  return (
    <Wrapper>
    <b>sudo:</b> access denied.
    </Wrapper>
);
};

export default Sudo;
