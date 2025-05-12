import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CandidatesBoard from "../Candidates/CandidatesBoard/CandidatesBoard";
import { CandidatesProvider } from "../../common/providers/CandidatesProvider";

import { LayoutWrapper, MainWrapper } from "./Layout.styled";

const Layout = () => {
  return (
    <CandidatesProvider>
      <LayoutWrapper>
        <Header />
        <MainWrapper>
          <CandidatesBoard />
        </MainWrapper>
        <Footer />
      </LayoutWrapper>
    </CandidatesProvider>
  );
};

export default Layout;
