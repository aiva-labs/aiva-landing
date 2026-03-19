import { Switch, Route } from "wouter";
import LandingPage from "./pages/landing";

// Use cases
import PersonalPage from "./pages/usecases/personal";
import BusinessPage from "./pages/usecases/business";
import DeveloperPage from "./pages/usecases/developer";
import StudentPage from "./pages/usecases/student";
import TraderPage from "./pages/usecases/trader";

// Blockchain
import BasePage from "./pages/blockchain/base";
import BridgePage from "./pages/blockchain/bridge";
import ContractsPage from "./pages/blockchain/contracts";
import HistoryPage from "./pages/blockchain/history";
import WalletPage from "./pages/blockchain/wallet";

// Resources
import BlogPage from "./pages/resources/blog";
import ChangelogPage from "./pages/resources/changelog";
import CommunityPage from "./pages/resources/community";
import DocsPage from "./pages/resources/docs";
import HelpPage from "./pages/resources/help";
import TutorialsPage from "./pages/resources/tutorials";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />

      <Route path="/usecases/personal" component={PersonalPage} />
      <Route path="/usecases/business" component={BusinessPage} />
      <Route path="/usecases/developer" component={DeveloperPage} />
      <Route path="/usecases/student" component={StudentPage} />
      <Route path="/usecases/trader" component={TraderPage} />

      <Route path="/blockchain/base" component={BasePage} />
      <Route path="/blockchain/bridge" component={BridgePage} />
      <Route path="/blockchain/contracts" component={ContractsPage} />
      <Route path="/blockchain/history" component={HistoryPage} />
      <Route path="/blockchain/wallet" component={WalletPage} />

      <Route path="/resources/blog" component={BlogPage} />
      <Route path="/resources/changelog" component={ChangelogPage} />
      <Route path="/resources/community" component={CommunityPage} />
      <Route path="/resources/docs" component={DocsPage} />
      <Route path="/resources/help" component={HelpPage} />
      <Route path="/resources/tutorials" component={TutorialsPage} />
    </Switch>
  );
}
