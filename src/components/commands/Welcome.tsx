import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {
     `
     ##     ##    ###     ######  ######## ######## ########  ####  #######  ##     ##  ######  
     ###   ###   ## ##   ##    ##    ##    ##       ##     ##  ##  ##     ## ##     ## ##    ## 
     #### ####  ##   ##  ##          ##    ##       ##     ##  ##  ##     ## ##     ## ##       
     ## ### ## ##     ##  ######     ##    ######   ########   ##  ##     ## ##     ##  ######  
     ##     ## #########       ##    ##    ##       ##   ##    ##  ##     ## ##     ##       ## 
     ##     ## ##     ## ##    ##    ##    ##       ##    ##   ##  ##     ## ##     ## ##    ## 
     ##     ## ##     ##  ######     ##    ######## ##     ## ####  #######   #######   ######  
     
     `
  }
        </PreName>
        <PreWrapper>

        </PreWrapper>
        <div>Welcome to my portfolio</div>
        <Seperator>----</Seperator>
        <div>
          Please check out{" "}
          <Link href="https://github.com/azuryindustry">
            our GitHub
          </Link>
          {" "}profile.
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ██████████                                  
                     ██░░░░░░░░░░██                                
                   ██░░░░░░░░░░░░░░██                              
                 ██░░░░░░░░████░░██████████                      
     ██          ██░░░░░░░░████░░██▒▒▒▒▒▒██                      
   ██░░██        ██░░░░░░░░░░░░░░██▒▒▒▒▒▒██                      
  ██░░░░██      ██░░░░░░░░░░░░░░████████                        
██░░░░░░░░██      ██░░░░░░░░░░░░██                              
██░░░░░░░░████████████░░░░░░░░██                                
██░░░░░░░░██░░░░░░░░░░░░░░░░░░░░██                              
██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██                            
██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██                            
██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██                            
██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██                            
██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██                            
  ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██                              
    ██░░░░░░░░░░░░░░░░░░░░░░░░░░██                                
      ██████░░░░░░░░░░░░░░░░████                                  
            ████████████████
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
