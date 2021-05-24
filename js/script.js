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

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  function clearMessages(){
    document.getElementById(titleList).innerHTML = '';
    document.getElementById('.list .titles').innerHTML = '';

  
  /* for each article */
  document.getElementById(optArticleSelector).innerHTML = '';
  }
    /* get the article id */
    document.getElementById
    /* find the title element */
    const titleElement = document.querySelector(optArticleSelector)
    /* get the title from the title element */
    for(let titleElement of titleList)
    /* create HTML of the link */
const link = document.createElement('link');
const linkText = document.createTextNode("Article");
link
    /* insert link into titleList */
  
}

generateTitleLinks();

