
'use strict';

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
const optArticleTagsSelector = '.post-tags .list';
const optArticleAuthorSelector = '.post-author';
const optTagsListSelector = '.tags .list';
const optCloudClassCount = 5;
const optCloudClassPrefix = 'tag-size-';

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
  targetArticle.classList.add('active');

}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

// Left side titles

function generateTitleLinks(customSelector = '') {

  /* [DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* [DONE] for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  for (let article of articles){

    /* [DONE] get the article id */
    const articleId = article.getAttribute('id');

    /* [DONE] find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* [DONE] create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    titleList.innerHTML = titleList.innerHTML + linkHTML;

  }

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();


// LOOP END LOOP SUB MODULE 6.2
const calculateTagsParams = 'tags';

// Function calculateTagClass
function calculateTagClass(count, params){
const tag

}
//Function generateTags
function generateTags(){

  /* [DONE] find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* [DONE] START LOOP: for every article: */
  for (let article of articles){

    /* [DONE] find tags wrapper */
    const wrapper = article.querySelector(optArticleTagsSelector);
    /* [DONE] make html variable with empty string */
    let html = '';
    wrapper.innerHTML = '';

    /* [DONE] get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' '); //'test cat sport' -> ['test', 'cat', 'sport']
    /* START LOOP: for each tag */

    for (let tag of articleTagsArray){
      console.log(tag);
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      /* add generated code to html variable */
      html = html + linkHTML;
    }
    /* END LOOP: for each tag */
    /* insert HTML of all the links into the tags wrapper */
    wrapper.innerHTML = html;
  /* END LOOP: for every article: */
  }
}
/* [NEW] create a new variable allTags with an empty array */
let allTags = {};

/* find all articles */
const articles = document.querySelectorAll(optTagsListSelector);
/* START LOOP: for every article: */
for (let article of articles){
  /* find tags wrapper */
  const wrapper = article.getAttribute(articles);
  /* make html variable with empty string */
  let html = '';
  /* get tags from data-tags attribute */
  const tags = article.getAttribute('data-tags');
  /* split tags into array */
  const tagsSplit = tags.split(' ');
  /* START LOOP: for each tag */
  for (let tags of tagsSplit){
    /* generate HTML of the link */
    const linkHTML = '<li><a href="tags' + tags + '"><span>' + tags + '</span></a></li>';
    /* add generated code to html variable */
    html = html + linkHTML;
    /* [NEW] check if this link is NOT already in allTags */
    if(!allTags.hasOwnProperty(tags)){
      /* [NEW] add generated code to allTags array */
      allTags.tag = 1;
    }
    else {allTags[tags]++;}

    /* END LOOP: for each tag */
  }
  /* insert HTML of all the links into the tags wrapper */
  wrapper.innerHTML = html;
  /* END LOOP: for every article: */
}
/* [NEW] find list of tags in right column */
const tagList = document.querySelector('.tags');
/* Params */
const tagsParams = calculateTagsParams(allTags);
console.log('tagsParams:', tagsParams);
const params {max,min};
max = 0
min = 99999
return params;
console.log('params:', params);
for(let tag in tags){
  console.log(tag + ' is used ' + tags[tag] + ' times');
}
if(tags[tag] > params.max){
  params.max = tags[tag];
}

/* [NEW] create variable for all links HTML code */
let allTagsHTML = '';
/* [NEW] START LOOP: for each tag in allTags */
for (let tag of allTags){
  /* [NEW] generate code of link and add it to allTags */
  allTagsHTML += '<li><a class="" href="tag' + allTags[tag] + '"><span>' + allTags[tag] + '</span></a></li>';
/* [NEW] END LOOP: for each tag in allTags*/
}
/* [NEW] add html from allTags to tagList */
tagList.innerHTML = allTagsHTML;
generateTags();

//  Click Tag Action <----------------------------------

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('clickedElement:', 'href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', ''); //#tag-cat -> cat
  /* find all tag links with class active */
  const linksActive = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for (let linkActive of linksActive){
    /* remove class active */
    linkActive.classList.remove('active');
  /* END LOOP: for  each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */
  const hrefLinks = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for (let link of hrefLinks){
    /* add class active */
    link.classList.add('active');
  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
  const links = document.querySelectorAll('a[href^="#tag-"]');

  /* START LOOP: for each link */
  for(let link of links) {
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
  }
}

addClickListenersToTags();

// ADD Authors
function generateAuthors(){
// Find .post-author
  const articles = document.querySelectorAll(optArticleAuthorSelector);
  // Creating empty string
  for (let article of articles){
    const wrapper = article.querySelector(optArticleAuthorSelector);
    let html = '';
    wrapper.innerHTML = '';
    const authorTags = article.getAttribute('data-author');

    for (let tag of authorTags){
      console.log(tag);
      /* generate HTML of the link */
      const linkHTML = '<li><a href="author' + tag + '"><span>' + tag + '</span></a></li>';
      /* add generated code to html variable */
      html = html + linkHTML;
    }
    wrapper.innerHTML = html;
  }
}
generateAuthors();


function authorClickHandler(event){

  event.preventDefault();

  const clickedElement = this;

  const href = clickedElement.getAttribute('href');
  console.log('clickedElement:', 'href');

  const tag = href.replace('data-author', '');

  const linksActive = document.querySelectorAll('a.active[href^="data-author"]');

  for (let linkActive of linksActive){

    linkActive.classList.remove('active');

  }


  const hrefLinks = document.querySelectorAll('a[href="' + href + '"]');

  for (let link of hrefLinks){

    link.classList.add('active');

  }

  generateTitleLinks('[data-author="' + tag + '"]');
}

function addClickListenersToAuthor(){

  const links = document.querySelectorAll('a[href^="data-author"]');


  for(let link of links) {

    link.addEventListener('click', authorClickHandler);

  }
}

addClickListenersToAuthor();
