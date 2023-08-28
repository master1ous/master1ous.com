import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>root</User>@<WebsiteName>quack</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
