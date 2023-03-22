import { useWebsiteContext, useWebsiteDispatchContext } from './WebsiteContext.js';
import { useState } from 'react';

export default function EditBar() {
  const article = useWebsiteContext().editBar
  console.log(article)
  return (
    < EditBarContent/>
  )
}


function EditBarContent() {
  const editBar = useWebsiteContext().editBar;
  const body = useWebsiteContext().body;
  const navBarContext = useWebsiteContext().navBar
  const dispatch = useWebsiteDispatchContext();
  const [urlImage, setUrlImage] = useState('');
  const [navBar, setNavBar] = useState('')
  const [alt, setAlt] = useState('');
  let editContent;
  if (editBar.type === null)
  {
    editContent = (
      <>
        <div className={'side'}>
          <div className='main-content'>
            <fieldset>
              <legend>Main content:</legend>
              <div className='side-elements'>
                <fieldset>
                  <legend>Width:</legend>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'BodyParameter',
                        body: {
                          ...body,
                          width: 'w-500'
                        }
                      })}
                      type="radio"
                      id="w-500"
                      name="width"
                      value="w-500"
                    />
                    <label for="w-500">w-500</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'BodyParameter',
                        body: {
                          ...body,
                          width: 'w-700'
                        }
                      })}
                      type="radio"
                      id="w-700"
                      name="width"
                      value="w-700"
                    />
                    <label for="w-700">w-700</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'BodyParameter',
                        body: {
                          ...body,
                          width: 'w-800'
                        }
                      })}
                      type="radio"
                      id="w-800"
                      name="width"
                      value="w-800"
                    />
                    <label for="w-800">w-800</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'BodyParameter',
                        body: {
                          ...body,
                          width: 'w-1200'
                        }
                      })}
                      type="radio"
                      id="w-1200"
                      name="width"
                      value="w-1200"
                    />
                    <label for="w-1200">w-1200</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'BodyParameter',
                        body: {
                          ...body,
                          width: 'w-100'
                        }
                      })}
                      type="radio"
                      id="100%"
                      name="width"
                      value="100%"
                    />
                    <label for="100%">100%</label>
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Position:</legend>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'BodyParameter',
                        body: {
                          ...body,
                          position: ''
                        }
                      })}
                      type="radio"
                      id="left"
                      name="position"
                      value="left"
                    />
                    <label for="left">Left</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'BodyParameter',
                        body: {
                          ...body,
                          position: 'main-content-center'
                        }
                      })}
                      type="radio"
                      id="center"
                      name="position"
                      value="center"
                    />
                    <label for="center">Center</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'BodyParameter',
                        body: {
                          ...body,
                          position: 'main-content-right'
                        }
                      })}
                      type="radio"
                      id="right"
                      name="position"
                      value="right"
                    />
                    <label for="right">Right</label>
                  </div>
                </fieldset>
              </div>
            </fieldset>
          </div>

          <div className='block-colors'>
            <fieldset>
              <legend>Background body color:</legend>
              <div className='side'>
                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'BodyParameter',
                      body: {
                        ...body,
                        bodyBackgroundColor: 'body-background-color-blue'
                      }
                    })}
                    type="radio"
                    id="b-blue"
                    name="body Background Color"
                    value="blue"
                  hidden/>
                  <label className='color body-background-color-blue' for="b-blue"></label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'BodyParameter',
                      body: {
                        ...body,
                        bodyBackgroundColor: 'body-background-color-green'
                      }
                    })}
                    type="radio"
                    id="b-green"
                    name="body Background Color"
                    value="green"
                  hidden/>
                  <label className='color body-background-color-green' for="b-green"></label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'BodyParameter',
                      body: {
                        ...body,
                        bodyBackgroundColor: 'body-background-color-red'
                      }
                    })}
                    type="radio"
                    id="b-red"
                    name="body Background Color"
                    value="red"
                  hidden/>
                  <label className='color body-background-color-red' for="b-red"></label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'BodyParameter',
                      body: {
                        ...body,
                        bodyBackgroundColor: 'body-background-color-gray'
                      }
                    })}
                    type="radio"
                    id="b-grey"
                    name="body Background Color"
                    value="grey"
                    hidden />
                  <label className='color body-background-color-gray' for="b-grey"></label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'BodyParameter',
                      body: {
                        ...body,
                        bodyBackgroundColor: 'body-background-color-white'
                      }
                    })}
                    type="radio"
                    id="b-white"
                    name="body Background Color"
                    value="white"
                    hidden />
                  <label className='color body-background-color-white' for="b-white"></label>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Background content color:</legend>
              <div className='side'>
                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'BodyParameter',
                      body: {
                        ...body,
                        contentBackgroundColor: 'body-background-color-blue'
                      }
                    })}
                    type="radio"
                    id="c-blue"
                    name="Background content color"
                    value="blue"
                  hidden/>
                  <label className='color body-background-color-blue' for="c-blue"></label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'BodyParameter',
                      body: {
                        ...body,
                        contentBackgroundColor: 'body-background-color-green'
                      }
                    })}
                    type="radio"
                    id="c-green"
                    name="Background content color"
                    value="green"
                  hidden/>
                  <label className='color body-background-color-green' for="c-green"></label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'BodyParameter',
                      body: {
                        ...body,
                        contentBackgroundColor: 'body-background-color-red'
                      }
                    })}
                    type="radio"
                    id="c-red"
                    name="Background content color"
                    value="red"
                  hidden/>
                  <label className='color body-background-color-red' for="c-red"></label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'BodyParameter',
                      body: {
                        ...body,
                        contentBackgroundColor: 'body-background-color-gray'
                      }
                    })}
                    type="radio"
                    id="c-grey"
                    name="Background content color"
                    value="grey"
                    hidden />
                  <label className='color body-background-color-gray' for="c-grey"></label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'BodyParameter',
                      body: {
                        ...body,
                        contentBackgroundColor: 'body-background-color-white'
                      }
                    })}
                    type="radio"
                    id="c-white"
                    name="Background content color"
                    value="c-white"
                    hidden />
                  <label className='color body-background-color-white' for="c-white"></label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className='block-colors'>
            <fieldset>
              <legend>New Elements</legend>
              <AddNewArticle/>
              <br></br>
              <button onClick={() => {
                dispatch({
                  type: 'editBar',
                  editBar: {type: "hide"}
                });
              }}>
                Hide edit bar
              </button>
            </fieldset>
          </div>

          <div className='main-content block-colors'>
            <fieldset>
              <legend>Template:</legend>
              <div>
                <button onClick={() => {
                  dispatch({
                    type: 'saveUserTemplate',
                  });
                }}>
                  Save your template
                </button>

                <br></br>

                <button onClick={() => {
                  dispatch({
                    type: 'template',
                    template: {
                      navBar: [],
                      body: {},
                      editBar: { type: null },
                      title: { text: 'Enter your title here', position: '', color: '', size: '' },
                      articlesPosition: { position: '' },
                      articles: [
                        { id: 1, text: 'article 1', subArticles: [] },
                        { id: 2, text: 'article 2', subArticles: [] }
                      ]
                    }
                  });
                }}>
                  Reset from sratch
                </button>
                <br></br>
                <button onClick={() => {
                  dispatch({
                    type: 'initOldTemplate',
                  });
                }}>
                  Init old template
                </button>
              </div>
            </fieldset>
          </div>
        </div>
      </>
    )
  }
  else if(editBar.type === 'article')
  {
    let article = editBar.article
    editContent = (
      <div key={article.id}>
        <div className={'side'}>
          <div className='main-content block-colors'>
            <fieldset>
              <legend>Article text:</legend>
              <div className='side-elements'>
                <fieldset>
                  <legend>Color:</legend>
                  <div className='side-elements'>
                    <div>
                      <input
                        onClick={() => dispatch({
                          type: 'ArticleParameter',
                          article: {
                            ...article,
                            color: 'blue'
                          }
                        })}
                        type="radio"
                        id="t-blue"
                        name="color"
                        value="blue"
                        hidden />
                      <label className='color text-blue' for="t-blue"></label>
                    </div>

                    <div>
                      <input
                        onClick={() => dispatch({
                          type: 'ArticleParameter',
                          article: {
                            ...article,
                            color: 'green'
                          }
                        })}
                        type="radio"
                        id="t-green"
                        name="color"
                        value="green"
                        hidden />
                      <label className='color text-green' for="t-green"></label>
                    </div>

                    <div>
                      <input
                        onClick={() => dispatch({
                          type: 'ArticleParameter',
                          article: {
                            ...article,
                            color: 'red'
                          }
                        })}
                        type="radio"
                        id="t-red"
                        name="color"
                        value="red"
                        hidden />
                      <label className='color text-red' for="t-red"></label>
                    </div>

                    <div>
                      <input
                        onClick={() => dispatch({
                          type: 'ArticleParameter',
                          article: {
                            ...article,
                            color: 'gray'
                          }
                        })}
                        type="radio"
                        id="t-gray"
                        name="color"
                        value="gray"
                        hidden />
                      <label className='color text-gray' for="t-gray"></label>
                    </div>

                    <div>
                      <input
                        onClick={() => dispatch({
                          type: 'ArticleParameter',
                          article: {
                            ...article,
                            color: 'black'
                          }
                        })}
                        type="radio"
                        id="t-black"
                        name="color"
                        value="black"
                        hidden />
                      <label className='color text-black' for="t-black"></label>
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Font weight:</legend>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          weight: 'lighter'
                        }
                      })}
                      type="radio"
                      id="lighter"
                      name="weight"
                      value="lighter"
                    />
                    <label for="lighter">Ligther</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          weight: 'normal'
                        }
                      })}
                      type="radio"
                      id="normal"
                      name="weight"
                      value="normal"
                    />
                    <label for="normal">Normal</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          weight: 'bold'
                        }
                      })}
                      type="radio"
                      id="bold"
                      name="weight"
                      value="bold"
                    />
                    <label for="bold">Bold</label>
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Font Size:</legend>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          size: 'small'
                        }
                      })}
                      type="radio"
                      id="small"
                      name="size"
                      value="small"
                    />
                    <label for="small">Small</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          size: 'medium'
                        }
                      })}
                      type="radio"
                      id="medium"
                      name="size"
                      value="medium"
                    />
                    <label for="medium">Medium</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          size: 'larger'
                        }
                      })}
                      type="radio"
                      id="larger"
                      name="size"
                      value="larger"
                    />
                    <label for="larger">Larger</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          size: ''
                        }
                      })}
                      type="radio"
                      id="default"
                      name="size"
                      value="default"
                    />
                    <label for="default">Default</label>
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Position:</legend>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          ArticleTitlePosition: ''
                        }
                      })}
                      type="radio"
                      id="left"
                      name="ArticleTitlePosition"
                      value="left"
                    />
                    <label for="left">Left</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          ArticleTitlePosition: 'sub-article-height-center'
                        }
                      })}
                      type="radio"
                      id="center"
                      name="ArticleTitlePosition"
                      value="center"
                    />
                    <label for="center">Center</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          ArticleTitlePosition: 'article-position-right'
                        }
                      })}
                      type="radio"
                      id="right"
                      name="ArticleTitlePosition"
                      value="right"
                    />
                    <label for="right">Right</label>
                  </div>
                </fieldset>
              </div>
            </fieldset>
          </div>

          <div className='main-content block-colors'>
            <fieldset>
              <legend>Article box:</legend>
              <div className='side-elements'>
                <fieldset className='editBarTemplate'>
                  <legend>Width:</legend>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          width: 'w-10'
                        }
                      })}
                      type="radio"
                      id="10%"
                      name="width"
                      value="10%"
                    />
                    <label for="10%">10%</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          width: 'w-20'
                        }
                      })}
                      type="radio"
                      id="20%"
                      name="width"
                      value="20%"
                    />
                    <label for="20%">20%</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          width: 'w-30'
                        }
                      })}
                      type="radio"
                      id="30%"
                      name="width"
                      value="30%"
                    />
                    <label for="30%">30%</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          width: 'w-40'
                        }
                      })}
                      type="radio"
                      id="40%"
                      name="width"
                      value="40%"
                    />
                    <label for="40%">40%</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          width: 'w-50'
                        }
                      })}
                      type="radio"
                      id="50%"
                      name="width"
                      value="50%"
                    />
                    <label for="50%">50%</label>
                  </div>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          width: 'w-60'
                        }
                      })}
                      type="radio"
                      id="60%"
                      name="width"
                      value="60%"
                    />
                    <label for="60%">60%</label>
                  </div>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          width: 'w-70'
                        }
                      })}
                      type="radio"
                      id="70%"
                      name="width"
                      value="70%"
                    />
                    <label for="70%">70%</label>
                  </div>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          width: 'w-80'
                        }
                      })}
                      type="radio"
                      id="80%"
                      name="width"
                      value="80%"
                    />
                    <label for="80%">80%</label>
                  </div>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          width: 'w-90'
                        }
                      })}
                      type="radio"
                      id="90%"
                      name="width"
                      value="90%"
                    />
                    <label for="90%">90%</label>
                  </div>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          width: 'w-100'
                        }
                      })}
                      type="radio"
                      id="100%"
                      name="width"
                      value="100%"
                    />
                    <label for="100%">100%</label>
                  </div>
                </fieldset>

                <fieldset className='editBarTemplate'>
                  <legend>Height:</legend>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          height: 'h-10'
                        }
                      })}
                      type="radio"
                      id="h-10%"
                      name="height"
                      value="10%"
                    />
                    <label for="h-10%">10%</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          height: 'h-20'
                        }
                      })}
                      type="radio"
                      id="h-20%"
                      name="height"
                      value="20%"
                    />
                    <label for="h-20%">20%</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          height: 'h-30'
                        }
                      })}
                      type="radio"
                      id="h-30%"
                      name="height"
                      value="30%"
                    />
                    <label for="h-30%">30%</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          height: 'h-40'
                        }
                      })}
                      type="radio"
                      id="h-40%"
                      name="height"
                      value="40%"
                    />
                    <label for="h-40%">40%</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          height: 'h-50'
                        }
                      })}
                      type="radio"
                      id="h-50%"
                      name="height"
                      value="50%"
                    />
                    <label for="h-50%">50%</label>
                  </div>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          height: 'h-60'
                        }
                      })}
                      type="radio"
                      id="h-60%"
                      name="height"
                      value="60%"
                    />
                    <label for="h-60%">60%</label>
                  </div>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          height: 'h-70'
                        }
                      })}
                      type="radio"
                      id="h-70%"
                      name="height"
                      value="70%"
                    />
                    <label for="h-70%">70%</label>
                  </div>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          height: 'h-80'
                        }
                      })}
                      type="radio"
                      id="h-80%"
                      name="height"
                      value="80%"
                    />
                    <label for="h-80%">80%</label>
                  </div>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          height: 'h-90'
                        }
                      })}
                      type="radio"
                      id="h-90%"
                      name="height"
                      value="90%"
                    />
                    <label for="h-90%">90%</label>
                  </div>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          height: 'h-100'
                        }
                      })}
                      type="radio"
                      id="h-100%"
                      name="height"
                      value="100%"
                    />
                    <label for="h-100%">100%</label>
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Position:</legend>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          ArticlePosition: ''
                        }
                      })}
                      type="radio"
                      id="article-box-left"
                      name="ArticlePosition"
                      value="left"
                    />
                    <label for="article-box-left">Left</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          ArticlePosition: 'article-box-position-center'
                        }
                      })}
                      type="radio"
                      id="article-box-center"
                      name="ArticlePosition"
                      value="center"
                    />
                    <label for="article-box-center">Center</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          ArticlePosition: 'article-box-position-right'
                        }
                      })}
                      type="radio"
                      id="article-box-right"
                      name="ArticlePosition"
                      value="right"
                    />
                    <label for="article-box-right">Right</label>
                  </div>
                </fieldset>
              </div>
            </fieldset>
          </div>

          <div className='main-content block-colors'>
            <fieldset>
              <legend>Article's elements:</legend>
              <div className='side-elements'>
                <fieldset>
                  <legend>Position:</legend>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          position: 'elements_by_side'
                        }
                      })}
                      type="radio"
                      id="side"
                      name="position"
                      value="side"
                    />
                    <label for="side">Side</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          position: 'block'
                        }
                      })}
                      type="radio"
                      id="row"
                      name="position"
                      value="row"
                    />
                    <label for="row">Row</label>
                  </div>
                </fieldset>

                <fieldset className='editBarTemplate'>
                  <legend>Position type:</legend>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          justifyContent: 'space-around'
                        }
                      })}
                      type="radio"
                      id="article-elements-around"
                      name="justify-Content"
                      value="around"
                    />
                    <label for="article-elements-around">Around</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          justifyContent: 'space-between'
                        }
                      })}
                      type="radio"
                      id="article-elements-between"
                      name="justify-Content"
                      value="between"
                    />
                    <label for="article-elements-between">Between</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          justifyContent: 'space-center'
                        }
                      })}
                      type="radio"
                      id="article-elements-center"
                      name="justify-Content"
                      value="center"
                    />
                    <label for="article-elements-center">Center</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'ArticleParameter',
                        article: {
                          ...article,
                          justifyContent: ''
                        }
                      })}
                      type="radio"
                      id="article-elements-default"
                      name="justify-Content"
                      value="default"
                    />
                    <label for="article-elements-default">Default</label>
                  </div>
                </fieldset>
              </div>
            </fieldset>
          </div>

          <div className='main-content'>
            <fieldset>
              <legend>Article new elements:</legend>
              <div className='side-elements'>
                <fieldset className='block'>
                  <legend>New element</legend>
                  <div className='block'>
                    <button onClick={() => {
                      dispatch({
                        type: 'addSubArticle',
                        article: {
                          ...article,
                          subArticles: [...article.subArticles, { id: article.subArticles.length + 1, text: 'new Sub Article', imageUrl: null }]
                        }
                      });
                    }}>
                      New sub article
                    </button>
                  </div>
                </fieldset>

                <fieldset className='editBarTemplate'>
                  <legend>Image:</legend>
                  <label for='imageUrl'>
                    Image Url:
                  </label>
                  <input
                    id='imageUrl'
                    value={urlImage}
                    onChange={e => {
                      setUrlImage(e.target.value);
                    }}
                  />
                  <label for='alt'>
                    Alt:
                  </label>
                  <input
                    id='alt'
                    value={alt}
                    onChange={e => {
                      setAlt(e.target.value);
                    }}
                  />
                  <button onClick={() => {
                    setUrlImage('')
                    setAlt('')
                    dispatch({
                      type: 'addImageForArticle',
                      article:{
                        ...article,
                        subArticles: [...article.subArticles, { id: article.subArticles.length + 1, text: alt, imageUrl: urlImage }]
                      }
                      })
                  }}>
                    Add Image
                  </button>
                </fieldset>

                <fieldset className='editBarTemplate'>
                  <legend>Nav-bar:</legend>
                  <label for='imageUrl'>
                    nav-bar tag:
                  </label>
                  <input
                    id='navBar'
                    value={navBar}
                    onChange={e => {
                      setNavBar(e.target.value);
                    }}
                  />
                  <button onClick={() => {
                    setNavBar('')
                    dispatch({
                      type: 'addTagInNavBar',
                      navBar:[
                        ...navBarContext,
                        { id: navBarContext.length + 1 ,articleId: editBar.article.id, text: navBar, tag: `#article-${editBar.article.id}`}
                      ]
                      })
                  }}>
                    Add article in nav-bar
                  </button>

                  <button onClick={() => {
                    dispatch({
                      type: 'addTagInNavBar',
                      navBar: navBarContext.filter(t => t.articleId !== editBar.article.id)
                    });
                  }}>
                    Delete nav-bar Tag
                  </button>
                </fieldset>
              </div>
            </fieldset>
          </div>

          <div className='main-content block-colors'>
            <fieldset>
              <legend>Article:</legend>
              <button onClick={() => {
                dispatch({
                  type: 'editBar',
                  editBar: {
                    type: null,
                  }
                });
              }}>
                Save article
              </button>

              <br></br>

              <button onClick={() => {
                dispatch({
                  type: 'deleted',
                  id: article.id
                });
              }}>
                Delete article
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    )
  }
  else if(editBar.type === 'title'){
    let title = editBar.title;
    editContent = (
      <div className=''>
        <div className='side-elements'>
          <div className='main-content'>
            <fieldset>
              <legend>Title:</legend>
              <div className='side-elements'>
                <fieldset>
                  <legend>Color:</legend>
                  <div className='side-elements'>
                    <div>
                      <input
                        onClick={() => dispatch({
                          type: 'TitleParameter',
                          title: {
                            ...title,
                            color: 'blue'
                          }
                        })}
                        type="radio"
                        id="t-blue"
                        name="color"
                        value="blue"
                      hidden/>
                      <label className='color text-blue' for="t-blue"></label>
                    </div>

                    <div>
                      <input
                        onClick={() => dispatch({
                          type: 'TitleParameter',
                          title: {
                            ...title,
                            color: 'green'
                          }
                        })}
                        type="radio"
                        id="t-green"
                        name="color"
                        value="green"
                        hidden/>
                      <label className='color text-green' for="t-green"></label>
                    </div>

                    <div>
                      <input
                        onClick={() => dispatch({
                          type: 'TitleParameter',
                          title: {
                            ...title,
                            color: 'red'
                          }
                        })}
                        type="radio"
                        id="t-red"
                        name="color"
                        value="red"
                        hidden/>
                      <label className='color text-red' for="t-red"></label>
                    </div>

                    <div>
                      <input
                        onClick={() => dispatch({
                          type: 'TitleParameter',
                          title: {
                            ...title,
                            color: 'gray'
                          }
                        })}
                        type="radio"
                        id="t-gray"
                        name="color"
                        value="gray"
                        hidden />
                      <label className='color text-gray' for="t-gray"></label>
                    </div>

                    <div>
                      <input
                        onClick={() => dispatch({
                          type: 'TitleParameter',
                          title: {
                            ...title,
                            color: 'black'
                          }
                        })}
                        type="radio"
                        id="t-black"
                        name="color"
                        value="black"
                        hidden />
                      <label className='color text-black' for="t-black"></label>
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Position:</legend>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'TitleParameter',
                        title: {
                          ...title,
                          position: 'h1-left'
                        }
                      })}
                      type="radio"
                      id="h1-left"
                      name="position"
                      value="h1-left" />
                    <label for="h1-left">Left</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'TitleParameter',
                        title: {
                          ...title,
                          position: 'h1-center'
                        }
                      })}
                      type="radio"
                      id="h1-center"
                      name="position"
                      value="h1-center" />
                    <label for="h1-center">Center</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'TitleParameter',
                        title: {
                          ...title,
                          position: 'h1-right'
                        }
                      })}
                      type="radio"
                      id="h1-right"
                      name="position"
                      value="h1-right" />
                    <label for="h1-right">Right</label>
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Font size:</legend>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'TitleParameter',
                        title: {
                          ...title,
                          size: 'small'
                        }
                      })}
                      type="radio"
                      id="small"
                      name="size"
                      value="small" />
                    <label for="small">Small</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'TitleParameter',
                        title: {
                          ...title,
                          size: 'medium'
                        }
                      })}
                      type="radio"
                      id="medium"
                      name="size"
                      value="medium" />
                    <label for="medium">Medium</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'TitleParameter',
                        title: {
                          ...title,
                          size: 'larger'
                        }
                      })}
                      type="radio"
                      id="larger"
                      name="size"
                      value="larger" />
                    <label for="larger">Larger</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'TitleParameter',
                        title: {
                          ...title,
                          size: ''
                        }
                      })}
                      type="radio"
                      id="default"
                      name="size"
                      value="default" />
                    <label for="default">Default</label>
                  </div>
                </fieldset>
              </div>
            </fieldset>
          </div>

          <div className='main-content block-colors'>
            <fieldset>
              <legend>Title:</legend>
              <div>
                <button onClick={() => {
                  dispatch({
                    type: 'editBar',
                    editBar: {
                      type: null,
                    }
                  });
                }}>
                  Save title
                </button>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    )
  }
  else if(editBar.type === 'subArticle'){
    let subArticle = editBar.subArticle;
    if (subArticle.imageUrl === null)
    {
      editContent = (
        <div className={'side'}>
          <div className='main-content block-colors'>
            <fieldset>
              <legend>Sub-article text:</legend>
              <div className='side-elements'>
                <fieldset>
                  <legend>Color:</legend>
                  <div className='side-elements'>
                    <div>
                      <input
                        onClick={() => dispatch({
                          type: 'subArticleEdit',
                          parentId: editBar.parentId,
                          subArticle: {
                            ...subArticle,
                            color: 'blue'
                          }
                        })}
                        type="radio"
                        id="sa-blue"
                        name="color"
                        value="blue"
                        hidden />
                      <label className='color text-blue' for="sa-blue"></label>
                    </div>

                    <div>
                      <input
                        onClick={() => dispatch({
                          type: 'subArticleEdit',
                          parentId: editBar.parentId,
                          subArticle: {
                            ...subArticle,
                            color: 'green'
                          }
                        })}
                        type="radio"
                        id="sa-green"
                        name="color"
                        value="green"
                        hidden />
                      <label className='color text-green' for="sa-green"></label>
                    </div>

                    <div>
                      <input
                        onClick={() => dispatch({
                          type: 'subArticleEdit',
                          parentId: editBar.parentId,
                          subArticle: {
                            ...subArticle,
                            color: 'red'
                          }
                        })}
                        type="radio"
                        id="sa-red"
                        name="color"
                        value="red"
                        hidden />
                      <label className='color text-red' for="sa-red"></label>
                    </div>

                    <div>
                      <input
                        onClick={() => dispatch({
                          type: 'subArticleEdit',
                          parentId: editBar.parentId,
                          subArticle: {
                            ...subArticle,
                            color: 'gray'
                          }
                        })}
                        type="radio"
                        id="sa-gray"
                        name="color"
                        value="gray"
                        hidden />
                      <label className='color text-gray' for="sa-gray"></label>
                    </div>

                    <div>
                      <input
                        onClick={() => dispatch({
                          type: 'subArticleEdit',
                          parentId: editBar.parentId,
                          subArticle: {
                            ...subArticle,
                            color: 'black'
                          }
                        })}
                        type="radio"
                        id="sa-black"
                        name="color"
                        value="black"
                        hidden />
                      <label className='color text-black' for="sa-black"></label>
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Font size:</legend>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          size: 'small'
                        }
                      })}
                      type="radio"
                      id="small"
                      name="size"
                      value="small" />
                    <label for="small">Small</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          size: 'medium'
                        }
                      })}
                      type="radio"
                      id="medium"
                      name="size"
                      value="medium" />
                    <label for="medium">Medium</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          size: 'larger'
                        }
                      })}
                      type="radio"
                      id="larger"
                      name="size"
                      value="larger" />
                    <label for="larger">Larger</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          size: ''
                        }
                      })}
                      type="radio"
                      id="default"
                      name="size"
                      value="default" />
                    <label for="default">Default</label>
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Font weight:</legend>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          weight: 'lighter'
                        }
                      })}
                      type="radio"
                      id="lighter"
                      name="weight"
                      value="lighter"
                    />
                    <label for="lighter">Ligther</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          weight: 'normal'
                        }
                      })}
                      type="radio"
                      id="normal"
                      name="weight"
                      value="normal"
                    />
                    <label for="normal">Normal</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          weight: 'bold'
                        }
                      })}
                      type="radio"
                      id="bold"
                      name="weight"
                      value="bold"
                    />
                    <label for="bold">Bold</label>
                  </div>
                </fieldset>
              </div>
            </fieldset>
          </div>

          <div className='main-content block-colors'>
            <fieldset>
              <legend>Sub-article box:</legend>
              <div className='side-elements'>
                <fieldset className='editBarTemplate'>
                  <legend>Sub-article width:</legend>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          width: 'w-10'
                        }
                      })}
                      type="radio"
                      id="10%"
                      name="width"
                      value="10%"
                    />
                    <label for="10%">10%</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          width: 'w-20'
                        }
                      })}
                      type="radio"
                      id="20%"
                      name="width"
                      value="20%"
                    />
                    <label for="20%">20%</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          width: 'w-30'
                        }
                      })}
                      type="radio"
                      id="30%"
                      name="width"
                      value="30%"
                    />
                    <label for="30%">30%</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          width: 'w-40'
                        }
                      })}
                      type="radio"
                      id="40%"
                      name="width"
                      value="40%"
                    />
                    <label for="40%">40%</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          width: 'w-50'
                        }
                      })}
                      type="radio"
                      id="50%"
                      name="width"
                      value="50%"
                    />
                    <label for="50%">50%</label>
                  </div>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          width: 'w-60'
                        }
                      })}
                      type="radio"
                      id="60%"
                      name="width"
                      value="60%"
                    />
                    <label for="60%">60%</label>
                  </div>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          width: 'w-70'
                        }
                      })}
                      type="radio"
                      id="70%"
                      name="width"
                      value="70%"
                    />
                    <label for="70%">70%</label>
                  </div>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          width: 'w-80'
                        }
                      })}
                      type="radio"
                      id="80%"
                      name="width"
                      value="80%"
                    />
                    <label for="80%">80%</label>
                  </div>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          width: 'w-90'
                        }
                      })}
                      type="radio"
                      id="90%"
                      name="width"
                      value="90%"
                    />
                    <label for="90%">90%</label>
                  </div>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          width: 'w-100'
                        }
                      })}
                      type="radio"
                      id="100%"
                      name="width"
                      value="100%"
                    />
                    <label for="100%">100%</label>
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Sub-article width position:</legend>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          widthPosition: 'sub-article-width-center'
                        }
                      })}
                      type="radio"
                      id="w-center"
                      name="height Position"
                      value="center"
                    />
                    <label for="w-center">Center</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          widthPosition: ''
                        }
                      })}
                      type="radio"
                      id="default"
                      name="height Position"
                      value="default" />
                    <label for="default">Default</label>
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Elements position:</legend>
                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          heightPosition: 'sub-article-height-center'
                        }
                      })}
                      type="radio"
                      id="center"
                      name="height Position"
                      value="center"
                    />
                    <label for="center">Center</label>
                  </div>

                  <div>
                    <input
                      onClick={() => dispatch({
                        type: 'subArticleEdit',
                        parentId: editBar.parentId,
                        subArticle: {
                          ...subArticle,
                          heightPosition: ''
                        }
                      })}
                      type="radio"
                      id="default"
                      name="height Position"
                      value="default" />
                    <label for="default">Default</label>
                  </div>
                </fieldset>
              </div>
            </fieldset>
          </div>

          <div className='main-content block-colors'>
            <fieldset>
              <legend>Sub-article:</legend>
              <div>
                <button onClick={() => {
                  dispatch({
                    type: 'editBar',
                    editBar: {
                      type: null,
                    }
                  });
                }}>
                  Save sub-article
                </button>
                <br></br>
                <button onClick={() => {
                  dispatch({
                    type: 'deleteSubArticle',
                    parentId: editBar.parentId,
                    id: subArticle.id
                  });
                }}>
                  Delete sub-article
                </button>
              </div>
            </fieldset>
          </div>

        </div>
      )
    }
    else
    {
      editContent = (
        <div className='side'>
          <div className='main-content block-colors'>
            <fieldset className='side'>
              <legend>Image</legend>
              <fieldset>
                <legend>Height:</legend>
                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        height: 'img-height-50'
                      }
                    })}
                    type="radio"
                    id="img-height-50"
                    name="height"
                    value="img-height-50" />
                  <label for="img-height-50">Small</label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        height: 'img-height-200'
                      }
                    })}
                    type="radio"
                    id="img-height-200"
                    name="height"
                    value="img-height-200" />
                  <label for="img-height-200">Middle</label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        height: 'img-height-300'
                      }
                    })}
                    type="radio"
                    id="img-height-300"
                    name="height"
                    value="img-height-300" />
                  <label for="img-height-300">Large</label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        height: ''
                      }
                    })}
                    type="radio"
                    id="default-height"
                    name="height"
                    value="100px" />
                  <label for="default-height">Default</label>
                </div>
              </fieldset>

              <fieldset>
                <legend>Width:</legend>
                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        width: 'img-width-50'
                      }
                    })}
                    type="radio"
                    id="img-width-50"
                    name="width"
                    value="img-width-50" />
                  <label for="img-width-50">Small</label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        width: 'img-width-200'
                      }
                    })}
                    type="radio"
                    id="img-width-200"
                    name="width"
                    value="img-width-200" />
                  <label for="img-width-200">Middle</label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        width: 'img-width-300'
                      }
                    })}
                    type="radio"
                    id="img-width-300"
                    name="width"
                    value="img-width-300" />
                  <label for="img-width-300">Large</label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        width: ''
                      }
                    })}
                    type="radio"
                    id="default-width"
                    name="width"
                    value="100px" />
                  <label for="default-width">Default</label>
                </div>
              </fieldset>

              <fieldset>
                <legend>Image width position:</legend>
                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        widthPosition: 'image-width-position'
                      }
                    })}
                    type="radio"
                    id="w-center"
                    name="width Position"
                    value="center"
                  />
                  <label for="w-center">Center</label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        widthPosition: ''
                      }
                    })}
                    type="radio"
                    id="default"
                    name="width Position"
                    value="default" />
                  <label for="default">Default</label>
                </div>
              </fieldset>

              <fieldset>
                <legend>Fit:</legend>
                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        fit: 'img-fill'
                      }
                    })}
                    type="radio"
                    id="img-fill"
                    name="fit"
                    value="img-fill" />
                  <label for="img-fill">Fill</label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        fit: 'img-contain'
                      }
                    })}
                    type="radio"
                    id="img-contain"
                    name="fit"
                    value="img-contain" />
                  <label for="img-contain">Contain</label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        fit: 'img-cover'
                      }
                    })}
                    type="radio"
                    id="img-cover"
                    name="fit"
                    value="img-cover" />
                  <label for="img-cover">Cover</label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        fit: ''
                      }
                    })}
                    type="radio"
                    id="default-cover"
                    name="fit"
                    value="default-cover" />
                  <label for="default-cover">Default</label>
                </div>
              </fieldset>

              <fieldset>
                <legend>Border Radius:</legend>
                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        imgRadius: 'img-radius-5'
                      }
                    })}
                    type="radio"
                    id="img-radius-5"
                    name="img-radius"
                    value="img-radius-5" />
                  <label for="img-radius-5">Radius 5px</label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        imgRadius: 'img-radius-10'
                      }
                    })}
                    type="radio"
                    id="img-radius-10"
                    name="img-radius"
                    value="img-radius-10" />
                  <label for="img-radius-10">Radius 10px</label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        imgRadius: 'img-radius-25'
                      }
                    })}
                    type="radio"
                    id="img-radius-25"
                    name="img-radius"
                    value="img-radius-25" />
                  <label for="img-radius-25">Radius 25%</label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        imgRadius: 'img-round'
                      }
                    })}
                    type="radio"
                    id="img-radius-50"
                    name="img-radius"
                    value="img-radius-50" />
                  <label for="img-radius-50">Radius 50%</label>
                </div>

                <div>
                  <input
                    onClick={() => dispatch({
                      type: 'subArticleEdit',
                      parentId: editBar.parentId,
                      subArticle: {
                        ...subArticle,
                        imgRadius: ''
                      }
                    })}
                    type="radio"
                    id="default-radius"
                    name="img-radius"
                    value="default-radius" />
                  <label for="default-radius">Default</label>
                </div>
              </fieldset>

              <fieldset>
                <legend>Setting</legend>
                <button onClick={() => {
                  dispatch({
                    type: 'editBar',
                    editBar: {
                      type: null,
                    }
                  });
                }}>
                  Save
                </button>
                <br></br>
                <button onClick={() => {
                  dispatch({
                    type: 'deleteSubArticle',
                    parentId: editBar.parentId,
                    id: subArticle.id
                  });
                }}>
                  Delete
                </button>
              </fieldset>


            </fieldset>

          </div>
        </div>
      )
    }
  }
  else
  {
    editContent=''
  }
  return(
    <div className='ediBarPosition'>
      { editContent }
    </div>
  )
}

function AddNewArticle() {
  const dispatch = useWebsiteDispatchContext();
  return (
    <button onClick={() => {
      dispatch({
        type: 'addArticle',
      })
    }}>
      Add new article
    </button>
  )
}
