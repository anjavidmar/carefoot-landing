var htmlSnippet = '<div><p>Furthermore, being <b>the first president of Footwear European Technology Platform,</b> he helped to promote and drive research and innovation towards business success in the footwear industry.</p></div><img src="./assets/images/main-img10.png" />';
var htmlSnippetTwo = '<img src="./assets/images/main-img12.png" /><div><p><i>"The shoe industry should offer different widths for every model. Because if the children\'s shoes don\'t fit properly, they can later develop a foot problem of some kind. It can affect their posture and cause knee, hip or back issues."</i><span>- Martin Kopač</span></p></div>'

var windowWidth = window.innerWidth;
var sections = document.querySelectorAll("main > section");
console.log(htmlSnippet);
console.log(windowWidth);
console.log(sections);

if (windowWidth > 599) {
  sections[5].innerHTML = htmlSnippet;
}


if (windowWidth > 515) {
  sections[8].innerHTML = htmlSnippetTwo;
}
