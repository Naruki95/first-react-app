import Title from './Title.js';
import Articles from './Articles.js'
import { useWebsiteContext } from './WebsiteContext.js';
import EditBar from './EditBar.js';
import NavBar from './NavBar.js';
import Footer from './footer.js';

export default function MainContent() {
  const body = useWebsiteContext().body
  return (
    <div className={`${body.bodyBackgroundColor} body-height`}>
        <EditBar/>
      <div className={`${body.width} ${body.position} ${body.contentBackgroundColor} content-height`}>
        <NavBar/>
        <Title/>
        <Articles/>
        <Footer/>
      </div>
    </div>
  )
}
