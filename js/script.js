'use strict';

function titleClickHandler(event){
    event.preventDefault();
    const clickedElement = this;
  console.log('Link was clicked!');
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
   /* [DONE] add class 'active' to the clicked link  */
    
   clickedElement.classList.add('active');
   console.log('clickedElement:', clickedElement);
    
   /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  /* [DONE] get 'href' attribute from the clicked link */

const href =  clickedElement.getAttribute('href');


  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
const targetArticle = document.querySelector(href);
  /* [DONE] add class 'active' to the correct article */ 
targetArticle.classList.add('active')

}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

// Left side titles

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){
 const clickedElement = this;
  /* remove contents of titleList */
  
  function clearMessages(){
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    

  
  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles){
    
    console.log('innerHTML:', innerHTML);
  }
  }
    /* get the article id */
    const articleId = clickedElement.getAttribute('id');
    
    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    
    
    /* get the title from the title element */
    const title = clickedElement.getAttribute(articleTitle);
    console.log('clickedElement:', title);
    /* create HTML of the link */
 
   

const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
console.log(linkText);






/* insert link into titleList */
  
let html = html + document.getElementById(linkHTML);
html.insertAdjacentHTML('afterend', html);

debugger;
    const links = document.querySelectorAll('.titles a');

    for(let link of links){
        link.addEventListener('click', titleClickHandler);

}
}
generateTitleLinks();