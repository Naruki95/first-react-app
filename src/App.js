import { AppContext } from './WebsiteContext';
import MainContent from './MainContent.js';

export default function TaskApp() {
  return (
    <AppContext>
      <MainContent/>
    </AppContext>
  );
}
