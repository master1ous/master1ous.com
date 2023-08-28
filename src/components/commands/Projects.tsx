import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Some of the word I hold the most dearest are below <br />
        Here are some of my projects you shouldn't want to miss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Azury Industries",
    desc: "My discord server based on coding projects such as bots, websites, or software.",
    url: "https://dsc.gg/azuryindustry",
  },
  {
    id: 2,
    title: "Aprex Discord Bot",
    desc: "Aprex is a discord bot that has many features such as moderation, fun, and utility.",
    url: "https://discord.com/api/oauth2/authorize?client_id=1096194520032485579&permissions=8&scope=applications.commands%20bot",
  },
  {
    id: 3,
    title: "Watcher Discord Bot",
    desc: "Watcher is a discord bot that allows you to host your own server tracking bot.",
    url: "https://discord.com/api/oauth2/authorize?client_id=851537757981114389&permissions=14337&scope=bot%20applications.commands",
  },
];

export default Projects;
