import { useWebsiteContext, useWebsiteDispatchContext } from './WebsiteContext.js';

export default function Title() {
  const titleContext = useWebsiteContext().title
  return(
    <Titre title={titleContext}/>
  )
}

function Titre({ title }) {
  const editBar = useWebsiteContext().editBar
  const dispatch = useWebsiteDispatchContext();
  let titleContent;
  if (editBar.type === 'title') {
    titleContent = (
      <>
        <div className={`side ${title.position}`}>
          <textarea
            className={`active-h1 ${title.color} ${title.size}`}
            value={title.text}
            onChange={e => dispatch({
              type: 'TitleParameter',
              title: {
                ...title,
                text: e.target.value
              }
            })}
          />
        </div>
      </>
    );
  } else {
    titleContent = (
      <div className={`side ${title.position}`}>
        <h1 className={`${title.color} ${title.size}`} onDoubleClick={() => {
          dispatch({
            type: 'editBar',
            editBar: {
              type: 'title',
              title
            }
          })
        }}>
          {title.text}
        </h1>
      </div>
    );
  }
  return (
    <div>
      {titleContent}
    </div>
  );
}
