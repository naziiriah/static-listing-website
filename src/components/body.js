import Main from "./main";
import HeadSection from "./header";
import Body from "../styles/body.styles";
// import Filtered from "./filteredBody";

const BodySection = () => {
  // let role = "Frontend"
  // let lang = ["JavaScript"]
    return (    
        <Body>
          <HeadSection/>
          <Main/>
          {/* <Filtered role = {role} languages = {lang}/> */}
        </Body>
    );
}
 
export default BodySection;