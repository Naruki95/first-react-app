import { useWebsiteContext} from './WebsiteContext.js';

export default function NavBar() {
  const navBarContext = useWebsiteContext().navBar
  return (
    <div className={`navbar`}>
      {navBarContext.map(tag => (
        <div key={tag.id}>
          <a href={tag.tag}>{tag.text}</a>
        </div>
      ))}
    </div>
  )
}
