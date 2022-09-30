const pageTextAndPic = [
    ["First and foremost, (this is a book afterall) your love for reading (and reality TV). \n \n Aren't you glad I love you enough to notice and care about these things, and not just how healthy you encourage the kids to be?",'https://img.freepik.com/premium-photo/furious-angry-black-man-ginger-woman-have-dispute-yell-loudly-each-other-different-point-views_580432-236.jpg?w=400'],
    ["You are an incredible chef and fellow pig. I love going to restuarants with you, cooking with you, no matter where we are, everything tastes better when I'm with you. Everyday I am grateful for your willingness to eat vegan with me. Nothing beats your chana masala!","https://thumbs.dreamstime.com/b/bowl-authentic-channa-masala-indian-cuisine-homemade-traditional-chole-chickpea-curry-famous-recipes-129894856.jpg"],
    ["You work so much harder than literally anyone else I know. How does so much drive and motivation come out of such a little body! Whether it be on the road, at work, or at home, you're always on top of your game, keeping things running as they should.","https://media0.giphy.com/media/7Ebk8dHTxEmvTWW20z/giphy.gif?cid=ecf05e4722msi7brvkpfirp0813i3ur15cgexd9r8elqif68&rid=giphy.gif&ct=g"],
    ["You have taken me on so many incredible near death experiences... I mean hikes! You are unstoppable on the trail. It's unreal watching you press on, as I huff and puff... and eat cookies. I cannot wait to join you for many, many more.","https://i.imgur.com/Jizyns4l.jpeg", "https://i.imgur.com/GXNKwEbl.jpg"],
    ["No one has better music taste than you. It's impossible to deny: the best era of pop music was the 2008-teens. You OWN that genre, 99% first chord song guess accuracy. I can't wait to see more concerts with you as well, as soon as Doja cat returns we're going!","https://i.imgur.com/qRdILIJ.jpg", "https://i.imgur.com/PqS4Ihr.jpg"],
    ["Traveling is in your blood. We will complete this map together, then onto the maps of other countries as well! Maybe we set up a real home base here in the D, maybe we don't, but we will never stop finding new places to explore.","https://i.imgur.com/SW8t3is.png"],
    ["TV is getting fun!! I never thought you'd convince me to enjoy reality TV, but boy does 'Are you the one?` get exciting! I can't wait for the next episode of Handmaids and to finish `Better Call Saul'. And let's not forget I owe you a date to the cinema!","https://64.media.tumblr.com/0c29e6c8170aa87f5fc0242fc7648360/tumblr_mq2f2w805G1rtd3oeo1_500.gifv"],
    ["You are just so adventerous and fun. Everyday on our trips you pushed us to make the most of it. And that goes beyond our trips! Weekends, evenings, I'm so happy and thankful I have you here to make sure I don't let life pass me by.","https://i.imgur.com/fUn8UNz.jpg"],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""]
  ];
  
const pagesElement = document.getElementById("pages");
  
pageTextAndPic.forEach(([content, ...srcs], ix) => {
    if (!content) return
    // left page

    let numPage = document.createElement('div')
    numPage.setAttribute('class', 'page')
    // the number
    let num = document.createElement('p')
    num.innerText = `${ix + 1}.`
    numPage.appendChild(num)
    // the image
    srcs.forEach((src) => {
      let pic = document.createElement('img')
      pic.setAttribute('src', src)
      numPage.appendChild(pic)
    })
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