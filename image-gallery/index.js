// declaration of variables

const navbar = document.getElementById('nav');
const brand = document.getElementById('brand');
const searchKey = document.getElementById('searchKey');
const searchBtn = document.getElementById('searchBtn');
const searchQuery = document.getElementById('searchQuery');
const column1 = document.getElementById('col-1');
const column2 = document.getElementById('col-2');
const column3 = document.getElementById('col-3');
const errorGrid = document.getElementById('errorGrid');

//APIs.
API_KEY = 'H000ATrovDdTKRmGFEiI0muXumM5nfexUG5htsd3Ud8';
apiUrl = "https://api.unsplash.com/photos/?client_id="+API_KEY+"&per_page=30&page=1";

imageURLS = [];

window.onload = (event) => {
  fetchData();
}

const fetchData = async () => {
  const response = await (fetch(apiUrl).catch(handleError));
  const myJson = await response.json();

  var imageArrays = myJson;
  
  imageArrays.forEach(element => {
    imageURLS.push(element.urls.regular);
  });

  displayImage();

}

var handleError = function(err) {
  console.warn(err);
  errorGrid.innerHTML = "<h4>Unable to fetch data "+err+"</h4>"; 
}

function displayImage() {
  if(imageURLS.length == 0) {
    errorGrid.innerHTML = "<h4>Unable to fetch data "+err+"</h4>"; 
    return;
  }

  column1.innerHTML = "";
  column2.innerHTML = "";
  column3.innerHTML = "";

  imageURLS.forEach((url, index)  => {

    // dynamic image tag
    let image = document.createElement('img');
    image.src = url;
    image.className="mt-3";
  
    if( (index + 1) % 3 == 0 ) {
      column1.appendChild(image);
    }
  
    if( (index + 2) % 3 == 0 ) {
      column2.appendChild(image);
    }
  
    if( (index + 3) % 3 == 0 ) {
      column3.appendChild(image);
    }
  
  });




}