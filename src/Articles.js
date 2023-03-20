import { useWebsiteContext, useWebsiteDispatchContext } from './WebsiteContext.js';
import SubArticle from './SubArticle.js'

export default function Title() {
  const articlesContext = useWebsiteContext().articles
  const dispatch = useWebsiteDispatchContext();
  const articlesPositionContext = useWebsiteContext().articlesPosition
  return (
    <div className={`${articlesPositionContext.position} w-100`}>
    {articlesContext.map(article => (
      <Article article={article}/>
    ))}
      <button onClick={() => dispatch({
        type: 'editBar',
        editBar: {
          articlesContext
        }
      })}>
      Click me
    </button>
    </div>
  )
}

function Article({article}) {
  const dispatch = useWebsiteDispatchContext();
  const editBar = useWebsiteContext().editBar
  let articleContent;
  if(editBar.type === 'article' && editBar.article.id === article.id)
    {
      articleContent = (
        <div className={`active ${article.width} ${article.height}`} key={article.id}>
          <div className={`${article.ArticleTitlePosition}`}>
            <textarea
              rows="2"
              cols="50"
              className={`${article.color} ${article.weight} ${article.size}`}
              value={article.text}
              onChange={e => {
                dispatch({
                  type: 'ArticleParameter',
                  article: {
                    ...article,
                    text: e.target.value
                  }
                });
              }} />
          </div>
          <div className={`${article.position} ${article.justifyContent}`}>
            {article.subArticles.map(subArticle => (
              <SubArticle key={subArticle.id} parentId={article.id} subArticle={subArticle} />
            ))}
          </div>
        </div>
      );
    }
  else
    {
      articleContent = (
        <div className={`${article.width}  ${article.height}`} key={article.id}>
          <div className={`${article.ArticleTitlePosition}`}>
            <p className={`${article.color} ${article.weight} ${article.size}`} onDoubleClick={() => {
              dispatch({
                type: 'editBar',
                editBar: {
                  type: 'article',
                  article
                }
              })
            }}>
              {article.text}
            </p>
          </div>
          <div className={`${article.position} ${article.justifyContent}`}>
            {article.subArticles.map(subArticle => (
              <SubArticle key={subArticle.id} parentId = {article.id} subArticle = {subArticle}/>
            ))}
          </div>
        </div>
      )
    }
  return (
    <div id={`article-${article.id}`} className={`${article.ArticlePosition} article`}>
      {articleContent}
    </div>
  )
}
