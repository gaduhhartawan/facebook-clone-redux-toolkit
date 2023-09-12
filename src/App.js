import LeftSidebar from "./components/LeftSidebar";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";

import { styled } from "styled-components";
import ChangeProfile from "./components/ChangeProfile";
import { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

function App() {
  const [showProfile, setShowProfile] = useState(false);

  showProfile ? disableBodyScroll(document) : enableBodyScroll(document);
  return (
    <div className="App">
      <Navbar setShowProfile={setShowProfile} showProfile={showProfile} />
      <MainContent>
        <LeftSidebar />
        <Main />
        <RightSidebar />
        {showProfile && <ChangeProfile setShowProfile={setShowProfile} />}
      </MainContent>
    </div>
  );
}

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 20px;
  position: relative;
  /* width: 100%; */

  @media (max-width: 768px) {
    display: block;
    padding: 0;
  }
`;

export default App;
