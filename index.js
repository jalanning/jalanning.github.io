const pageText = [
    "Obviously, your love for reading (and reality TV). \n \n Aren't you glad I love you enough to notice and care about these things, and not just how healthy you encourage the kids to be?",
  ];
  
const pagesElement = document.getElementById("pages");
  
pageText.forEach((content, ix) => {
    let numPage = document.createElement('div')
    numPage.setAttribute('class', 'page')
    let num = document.createElement('p')
    num.innerText = `${ix + 1}.`
    numPage.appendChild(num)
    pagesElement.appendChild(numPage)

    let contentPage = document.createElement('div')
    contentPage.setAttribute('class', 'page')
    let text = document.createElement('p')
    text.innerText = content
    contentPage.appendChild(text)
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