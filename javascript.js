
//setting up placeholder text field

const inputFieldText = document.getElementById('txt-gif');
const placeholderText = ["new girl", "dog funny", "friends", "the office", "nature", "person laughing", "end of the world", "this is fine", "relatable", "meme", "this is us"];
let currentIndex = 0;


inputFieldText.placeholder = placeholderText[currentIndex];
inputFieldText.style.transition="opacity 0.5s ease";


//inputFieldText.addEventListener('keydown', function(event) {
  //if (event.key === 'Enter') {
   // event.preventDefault();
   // inputFieldText.submit();
  //}
//});

function changeInputText() {
  
  inputFieldText.style.transition="none";
  inputFieldText.placeholder = placeholderText[currentIndex];

  setTimeout (()=> {
    inputFieldText.style.transition="opacity 0.5s ease";
    inputFieldText.placeholder = placeholderText[currentIndex];
  }, 100);
  currentIndex = (currentIndex + 1) % placeholderText.length;
}
setInterval(changeInputText, 1000);


async function getSyncData () {
  let apiKey = 'qTw8jNR6LSFy07BRPSsQH980j3kopXE7';

  let myInput = document.getElementById('txt-gif').value;
  let info = null;

  console.log('Requesting info...');
  
  let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${myInput}&limit=24`)

  console.log('Completed...');



  info = await response.json();
  let gifContainer = document.getElementById("js-gifContainer");
  if (!gifContainer) {
    console.log('Failed to load gif container');
    return;
  }

  gifContainer.innerHTML = ""; //clears old results

  for (let i=0; i<info.data.length; i++) {
    let imgElement = document.createElement("img");
    imgElement.src = info.data[i].images.original.url;
    gifContainer.appendChild(imgElement);
    console.log(info.data[i].embed_url);
}}


function showOnScroll() {
  const elementShow = document.getElementById('return');
  const scrollPosition = window.scrollY;
  const triggerPosition = 500;

  if(scrollPosition > triggerPosition) {
    elementShow.style.display = 'block';
  } else {
    elementShow.style.display = 'none';
  }
  };
  window.addEventListener('scroll', showOnScroll);


function ScrolltoTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}


