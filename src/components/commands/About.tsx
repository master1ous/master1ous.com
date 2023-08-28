import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hello! I am <HighlightSpan>Masterious</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack discord bot developer</HighlightAlt>, currently learning HTML, and REACTJS!
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing applications that are useful and cool. <br />
        This site was coded proudly by <HighlightAlt>terminal.satnaing.dev</HighlightAlt>!
      </p>
    </AboutWrapper>
  );
};

export default About;
