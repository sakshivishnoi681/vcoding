
import GiphyService from './giphyService';

var grid = document.getElementById('grid');
var search = document.getElementById('search');


function setGridData(imgData) {
  
    for (let data of imgData)
    {
     
        let stillURL = data.images.fixed_height_still.url; // still url 
        let gifURL = data.images.fixed_height.url; // moving url
        let title = data.title;
        let img = document.createElement('IMG');
        setAttributes(img, {"src": stillURL, "data-src": gifURL, "title": title});
        let node = document.createElement("div");
        setAttributes(node, {'class': 'play'});
        grid.appendChild(node).appendChild(img);
        
        
    }
}

search.addEventListener("keyup", event => {  
  event.preventDefault();
  if (event.keyCode === 13) {
    removeGallery();
    GiphyService.getSearchData(event.target.value).then((respnsoe) => setGridData(respnsoe.data)).catch(error => console.error(error));
  }
});

grid.addEventListener('click',event=>{
    
    let target = event.target;
    if (target.tagName != 'IMG') return;
    target.parentElement.classList.toggle("play");
    let src = target.getAttribute('src');
    target.setAttribute('src',target.getAttribute('data-src'));
    target.setAttribute('data-src',src);
     
});

function removeGallery() {
  while (grid.hasChildNodes()) {
    grid.removeChild(grid.lastChild);
  }
}

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
