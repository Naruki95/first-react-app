import { useWebsiteContext, useWebsiteDispatchContext } from './WebsiteContext.js';

export default function SubArticle({ parentId, subArticle }) {
  const dispatch = useWebsiteDispatchContext();
  const editBar = useWebsiteContext().editBar

  let subArticleContent;

  if (editBar.type === 'subArticle' && editBar.subArticle.id === subArticle.id && editBar.parentId === parentId)
  {
    if (subArticle.imageUrl === null)
    {
      subArticleContent = (
        <div className={`sub-article active w-100`}>
          <textarea
            rows="5"
            className={`${subArticle.color} ${subArticle.size} ${subArticle.weight}`}
            value = {subArticle.text}
            onChange={e => {
              dispatch({
                type: 'subArticleEdit',
                parentId: parentId,
                subArticle: {
                  ...subArticle,
                  text: e.target.value
                }
              })
            }}
          />
        </div>
      )
    }
    else
    {
      subArticleContent = (
        <>
          <img className={`img-selected ${subArticle.height} ${subArticle.width} ${subArticle.fit} ${subArticle.imgRadius}`} src={subArticle.imageUrl} alt={subArticle.text}>
          </img>
        </>
      )
    }
  }
  else
  {
    if (subArticle.imageUrl === null)
    {
      subArticleContent = (
        <div className={``}>
          <p className={`subarticles ${subArticle.color} ${subArticle.size} ${subArticle.weight}`} onDoubleClick={() => dispatch({
            type: 'editBar',
            editBar: {
              type: 'subArticle',
              parentId: parentId,
              subArticle
            }
          }) }>
            {subArticle.text}
          </p>
        </div>
      )
    }
    else
    {
      subArticleContent = (
        <>
          <img className={`${subArticle.height} ${subArticle.width} ${subArticle.fit} ${subArticle.imgRadius}`} src={subArticle.imageUrl} alt={subArticle.text} onDoubleClick={() => dispatch({
            type: 'editBar',
            editBar: {
              type: 'subArticle',
              parentId: parentId,
              subArticle
            }
          })}>
          </img>
        </>
      )
    }
  }
  return (
    <div className={`sub-article ${subArticle.width} ${subArticle.heightPosition} ${subArticle.widthPosition}`}>
      {subArticleContent}
    </div>
  )
}
