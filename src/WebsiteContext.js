import { createContext, useContext, useReducer } from 'react';

// const initialState = {
//   navBar: [],
//   body: {text:'hehe'},
//   editBar: {type: null},
//   title: { text: 'Enter your title here', position: '', color: '', size: ''},
//   articlesPosition: { position: ''},
//   articles: [
//     {id: 1, text: 'article 1', subArticles: []},
//     {id: 2, text: 'article 2', subArticles: []}
//   ]
// };

const dumpState = { "navBar": [{ "id": 1, "articleId": 2, "text": "My Story", "tag": "#article-2" }, { "id": 2, "articleId": 4, "text": "Skills", "tag": "#article-4" }], "editBar": { "type": null }, "body": { "width": "w-1200", "position": "main-content-center", "contentBackgroundColor": "body-background-color-white" }, "title": { "text": "My dummy Portfolio", "position": "h1-center", "color": "gray", "size": "" }, "articlesPosition": { "position": "" }, "articles": [{ "id": 1, "text": "", "subArticles": [{ "id": 1, "text": "Hi There! I'm Julien Nguyen Junior fullstack developper! Open to work!  Here are my projects", "imageUrl": null, "heightPosition": "sub-article-height-center", "color": "gray", "size": "medium", "weight": "bold", "width": "w-30" }, { "id": 2, "text": "Julien", "imageUrl": "https://media.licdn.com/dms/image/D4E35AQGVzZBE7qg4xw/profile-framedphoto-shrink_400_400/0/1672916388529?e=1679850000&v=beta&t=T7Tl6yhnuMEGXnpAZZU_1tL3hCLHkZpWWLkY23CrH7k", "height": "img-height-200", "width": "img-width-200", "imgRadius": "img-round" }], "position": "elements_by_side", "justifyContent": "space-around", "width": "w-100", "ArticlePosition": "article-box-position-center", "ArticleTitlePosition": "sub-article-height-center" }, { "id": 2, "text": "_____________________________________________________________________________________________", "subArticles": [], "ArticleTitlePosition": "sub-article-height-center" }, { "id": 3, "text": "My Story", "subArticles": [{ "id": 1, "text": "I worked as quality engineer for 4 years at Horiba. As long as I am learning new stuffs I enjoyed my life. At the end, I was able to know everything about my job and I am getting bored at this moment.. And the pandemic arrived, I felt like my life became more redundant and emptier. I remembered I enjoyed having computing lessons at School, and I really like solving problems and do things very interesting!", "imageUrl": null, "heightPosition": "sub-article-height-center", "weight": "bold", "size": "medium", "color": "gray", "width": "w-70", "widthPosition": "sub-article-width-center" }, { "id": 2, "text": "I left my job to start a new life to become a fullstack web developper with \"Le Wagon\". I learned how to code entirely a website by using Ruby on Rails for the back-end, Stimulus for the front-end.", "imageUrl": null, "color": "gray", "size": "medium", "weight": "bold", "width": "w-70", "heightPosition": "sub-article-height-center", "widthPosition": "sub-article-width-center" }, { "id": 3, "text": "Now I'm learning some new techs to be more versatile as React, Redux/React and I am hoping getting a job soon!", "imageUrl": null, "color": "gray", "size": "medium", "weight": "bold", "widthPosition": "sub-article-width-center", "heightPosition": "sub-article-height-center" }, { "id": 4, "text": "My dream would be to become a software engineer! I will do my best to reach my goal!", "imageUrl": null, "color": "gray", "size": "medium", "weight": "bold", "widthPosition": "sub-article-width-center", "heightPosition": "sub-article-height-center" }], "ArticleTitlePosition": "sub-article-height-center", "weight": "bold", "size": "larger", "color": "gray" }, { "id": 4, "text": "_____________________________________________________________________________________________", "subArticles": [], "ArticleTitlePosition": "sub-article-height-center" }, { "id": 5, "text": "Skills", "subArticles": [{ "id": 1, "text": "Rails", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png", "height": "img-height-200", "width": "img-width-200", "imgRadius": "img-radius-10" }, { "id": 2, "text": "Ruby", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg", "height": "img-height-200", "width": "img-width-200", "fit": "" }, { "id": 3, "text": "React", "imageUrl": "https://www.tekoway.com/wp-content/uploads/2017/05/react-logo.png", "height": "img-height-200", "width": "img-width-200", "imgRadius": "img-radius-10" }, { "id": 4, "text": "JS", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", "height": "img-height-200", "width": "img-width-200", "fit": "", "imgRadius": "img-radius-10" }, { "id": 5, "text": "HTML", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", "height": "img-height-200", "width": "img-width-200", "imgRadius": "img-radius-10" }, { "id": 6, "text": "CSS", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", "height": "img-height-200", "width": "img-width-200", "imgRadius": "img-radius-10" }, { "id": 7, "text": "Node JS", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", "height": "img-height-200", "width": "img-width-200" }, { "id": 8, "text": "Postgresql", "imageUrl": "https://wiki.postgresql.org/images/9/9a/PostgreSQL_logo.3colors.540x557.png", "height": "img-height-200", "width": "img-width-200" }, { "id": 9, "text": "MySQL", "imageUrl": "https://www.mysql.com/common/logos/logo-mysql-170x115.png", "height": "img-height-200", "width": "img-width-200" }, { "id": 10, "text": "Docker", "imageUrl": "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png", "height": "img-height-200", "width": "img-width-200" }, { "id": 11, "text": "GH", "imageUrl": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", "height": "img-height-200", "width": "img-width-200" }], "color": "gray", "weight": "bold", "size": "larger", "ArticleTitlePosition": "sub-article-height-center", "position": "elements_by_side", "justifyContent": "space-center", "width": "w-90", "ArticlePosition": "article-box-position-center" }, { "id": 6, "text": "new article with ID: 6", "subArticles": [] }] };
const WebsiteContext = createContext(null);
const WebsiteDispatchContext = createContext(null)

function storage() {
  if(window.localStorage.length === 0)
  {
    return dumpState
  }
  else
  {
    return JSON.parse(window.localStorage.template)
  }
}

export function AppContext({ children }) {
  const state = storage()
  const [elements, dispatch] = useReducer(websiteReducer, state)
  return (
    <WebsiteContext.Provider value={elements}>
      <WebsiteDispatchContext.Provider value={dispatch}>
        {children}
      </WebsiteDispatchContext.Provider>
    </WebsiteContext.Provider>
  );
}

export function useWebsiteContext() {
  return useContext(WebsiteContext);
}

export function useWebsiteDispatchContext() {
  return useContext(WebsiteDispatchContext);
}

function websiteReducer(elements, action) {
  switch (action.type) {

    case 'saveUserTemplate': {
      window.localStorage.setItem('template', JSON.stringify(elements))
      return elements
    }

    case 'template':{
      return action.template
    }

    case 'initOldTemplate': {
      window.localStorage.clear()
      return {
        ...dumpState,
        editBar: {type: null}
      }
    }

    case 'editBar':{
      return {
        navBar: elements.navBar,
        editBar: action.editBar,
        body: elements.body,
        title: elements.title,
        articlesPosition: elements.articlesPosition,
        articles: elements.articles
      }
    }

    //Main Content reducer

    case 'BodyParameter':{
      return {
        ...elements,
        body: action.body
      };
    }

    //Title reducer

    case 'TitleParameter': {
      return {
        navBar: elements.navBar,
        editBar: {type: 'title', title: action.title},
        body: elements.body,
        title: action.title,
        articlesPosition: elements.articlesPosition,
        articles: elements.articles
      };
    }

    //Article reducer

    case 'addArticle': {
      return {
        ...elements,
        articles: [...elements.articles, {
          id: elements.articles.length + 1,
          text: `new article with ID: ${elements.articles.length + 1}`,
          subArticles: []
        }]
      }
    }
    case 'addSubArticle': {
      return {
        navBar: elements.navBar,
        editBar: { type: 'article', article: action.article },
        body: elements.body,
        title: elements.title,
        articlesPosition: elements.articlesPosition,
        articles: elements.articles.map(article => {
          if (article.id === action.article.id) {
            return action.article
          } else {
            return article;
          }
        })
      }
    }
    case 'addImageForArticle': {
      return {
        navBar: elements.navBar,
        editBar: { type: 'article', article: action.article },
        body: elements.body,
        title: elements.title,
        articlesPosition: elements.articlesPosition,
        articles: elements.articles.map(article => {
          if (article.id === action.article.id) {
            return action.article
          } else {
            return article;
          }
        })
      }
    }
    case 'ArticleParameter': {

      return {
        navBar: elements.navBar,
        editBar: { type: 'article' , article: action.article},
        body: elements.body,
        title: elements.title,
        articlesPosition: elements.articlesPosition,
        articles: elements.articles.map(t => {
          if (t.id === action.article.id) {
            return action.article;
          } else {
            return t;
          }
        })
      }
    }

    case 'sizeArticle': {
      return {
        navBar: elements.navBar,
        editBar: elements.editBar,
        body: elements.body,
        title: elements.title,
        articlesPosition: elements.articlesPosition,
        articles: elements.articles.map(t => {
          if (t.id === action.article.id) {
            return action.article;
          } else {
            return t;
          }
        })
      }
    }

    // Sub-article reducer

    case 'subArticleEdit': {

      return {
        navBar: elements.navBar,
        editBar: { type: 'subArticle', subArticle: action.subArticle, parentId: action.parentId },
        body: elements.body,
        title: elements.title,
        articlesPosition: elements.articlesPosition,
        articles: elements.articles.map(t => {
          if (t.id === action.parentId) {
            let subArticleResult = [];
            t.subArticles.map(sub => {
              if (sub.id === action.subArticle.id)
              {
                return subArticleResult.push(action.subArticle)
              }
              else
              {
                return subArticleResult.push(sub)
              }
            })
            return {
              ...t,
              subArticles: subArticleResult
            };
          } else {
            return t;
          }
        })
      }
    }
    case 'deleted': {
      return {
        navBar: elements.navBar,
        editBar: elements.editBar,
        body: elements.body,
        title: elements.title,
        articlesPosition: elements.articlesPosition,
        articles: elements.articles.filter(t => t.id !== action.id)
      }
    }
    case 'deleteSubArticle': {
      return {
        navBar: elements.navBar,
        editBar: { type: null },
        body: elements.body,
        title: elements.title,
        articlesPosition: elements.articlesPosition,
        articles: elements.articles.map(t => {
          if (t.id === action.parentId) {
            return {
              ...t,
              subArticles: t.subArticles.filter(f => f.id !== action.id)
            };
          } else {
            return t;
          }
        })
      }
    }
    case 'addTagInNavBar': {
      return {
        ...elements,
        navBar: action.navBar
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
