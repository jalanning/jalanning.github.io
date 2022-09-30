const pageTextAndPic = [
    ["Obviously, your love for reading (and reality TV). \n \n Aren't you glad I love you enough to notice and care about these things, and not just how healthy you encourage the kids to be?",'https://img.freepik.com/premium-photo/furious-angry-black-man-ginger-woman-have-dispute-yell-loudly-each-other-different-point-views_580432-236.jpg?w=400']
  ];
  
const pagesElement = document.getElementById("pages");
  
pageTextAndPic.forEach(([content, src], ix) => {
    // left page

    let numPage = document.createElement('div')
    numPage.setAttribute('class', 'page')
    // the number
    let num = document.createElement('p')
    num.innerText = `${ix + 1}.`
    numPage.appendChild(num)
    // the image
    let pic = document.createElement('img')
    pic.setAttribute('src', src)
    numPage.appendChild(pic)
    // add to pages
    pagesElement.appendChild(numPage)

    //right page
    let contentPage = document.createElement('div')
    contentPage.setAttribute('class', 'page')
    // the text
    let text = document.createElement('p')
    text.innerText = content
    contentPage.appendChild(text)
    // add to pages
    pagesElement.appendChild(contentPage)
});

let blankLastPage = document.createElement('div')
blankLastPage.setAttribute('class', 'page')
let text = document.createElement('p')
text.innerText = '❤️️'
blankLastPage.appendChild(text)
pagesElement.appendChild(blankLastPage)

var pages = document.getElementsByClassName('page');

for(var i = 0; i < pages.length; i++)
  {
    var page = pages[i];
    if (i % 2 === 0)
      {
        page.style.zIndex = (pages.length - i);
      }
  }

document.addEventListener('DOMContentLoaded', function(){
  for(var i = 0; i < pages.length; i++)
    {
      //Or var page = pages[i];
      pages[i].pageNum = i + 1;
      pages[i].onclick=function()
        {
          if (this.pageNum % 2 === 0)
            {
              this.classList.remove('flipped');
              this.previousElementSibling.classList.remove('flipped');
            }
          else
            {
              this.classList.add('flipped');
              this.nextElementSibling.classList.add('flipped');
            }
         }
      }
})