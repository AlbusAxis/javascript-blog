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
  /* [DONE] remove contents of titleList */

  function clearMessages(){
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';



  /* [DONE] for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles){

    console.log('innerHTML:', innerHTML);
  }
  }
    /* [DONE] get the article id */
    const articleId = clickedElement.getAttribute('id');

    /* [DONE] find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;


    /* [DONE] get the title from the title element */
    const title = clickedElement.getAttribute(articleTitle);
    console.log('clickedElement:', title);
    /* [DONE] create HTML of the link */



const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
console.log(linkText);






/* [DONE] insert link into titleList */

let html = html + document.getElementById(linkHTML);
html.insertAdjacentHTML('afterend', html);

debugger;
    const links = document.querySelectorAll('.titles a');

    for(let link of links){
        link.addEventListener('click', titleClickHandler);

}
}
generateTitleLinks();


// LOOP END LOOP SUB MODULE 6.2                       <-------- Proszę o sprawdzenie ------------->
const optArticleTagsSelector = '.post-tags .list';

function generateTags(){
  /* [DONE] find all articles */
    const articles = document.querySelectorAll(optArticleTagsSelector);
  /* [DONE] START LOOP: for every article: */
    for (let article of articles){
    /* [DONE] find tags wrapper */
    const wrapper = article.querySelector(optArticleTagsSelector);
    /* [DONE] make html variable with empty string */
    let html = '';
    wrapper.innerHTML = '';
    /* [DONE] get tags from data-tags attribute */
    const articleTags = document.getAttribute(optArticleTagsSelector);
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray){
    console.log(tag);
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      /* add generated code to html variable */
        html = html + linkHTML;
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    wrapper.innerHTML = html
  /* END LOOP: for every article: */
    }
}

generateTags();

// AKCJA KLIKNIECIE W TAG <----------------------------------

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href =  clickedElement.querySelectorAll('href');
  console.log('clickedElement:', 'href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = document.getAttribute(href);
  /* find all tag links with class active */
  const linksActive = tag.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for (let linksActive of active){
    /* remove class active */
  const activeLink = linksActive.getAttribute.remove('active');
  /* END LOOP: for  each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();
