const navbar = document.getElementById('nav');
const brand = document.getElementById('brand');
const searchKey = document.getElementById('searchKey');
const searchBtn = document.getElementById('searchBtn');
const column1 = document.getElementById('col-1');
const column2 = document.getElementById('col-2');
const column3 = document.getElementById('col-3');
const errorGrid = document.getElementById('errorGrid');
const modalBody = document.getElementById('modalBody');
const imageViewLink = document.getElementById('imageViewLink');
const clearBtn = document.getElementById('clearBtn');
const searchForm = document.querySelector('form');

const API_KEY = 'H000ATrovDdTKRmGFEiI0muXumM5nfexUG5htsd3Ud8';
const apiUrl = "https://api.unsplash.com/photos/?client_id=" + API_KEY + "&per_page=30&page=1";
const searchUrl = "https://api.unsplash.com/search/photos/?client_id=" + API_KEY + "&per_page=30&page=1&query=";

let imageURLS = [];

// Функция для загрузки данных при загрузке страницы
window.onload = function(event) {
  fetchData();
}

// Функция для загрузки данных с Unsplash
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const myJson = await response.json();

    // Очистка массива
    imageURLS = [];

    myJson.forEach(element => {
      imageURLS.push(element.urls.regular);
    });

    displayImages();

  } catch (err) {
    handleFetchError(err);
  }
}

// Функция для отображения изображений на странице
function displayImages() {
  errorGrid.innerHTML = "";

  if (imageURLS.length === 0) {
    errorGrid.innerHTML = "<h4>Невозможно получить данные</h4>";
    return;
  }

  // Очистка колонок перед добавлением новых изображений
  column1.innerHTML = "";
  column2.innerHTML = "";
  column3.innerHTML = "";

  imageURLS.forEach((url, index) => {
    let image = document.createElement('img');
    image.src = url;
    image.className = "mt-3";
    image.setAttribute("width", "100%");
    image.onclick = function() {
      displayFullImage(this.src);
    };

    // Распределение изображений по колонкам
    if ((index + 1) % 3 === 0) {
      column1.appendChild(image);
    } else if ((index + 2) % 3 === 0) {
      column2.appendChild(image);
    } else {
      column3.appendChild(image);
    }
  });
}


// Функция для выполнения поиска
async function fetchSearchData(key) {
  try {
    const response = await fetch(searchUrl + key);
    const myJson = await response.json();

    // Очистка массива
    imageURLS = [];

    myJson.results.forEach(element => {
      imageURLS.push(element.urls.regular);
    });

    displayImages();
  } catch (err) {
    handleFetchError(err);
  }
}

// Функция для обработки ошибок
function handleFetchError(err) {
  console.warn(err);
  errorGrid.innerHTML = "<h4>Невозможно получить данные: " + err + "</h4>";
}


// Функция для отображения картинок 
function displayImage() {
  // Очистка блока с ошибками
  errorGrid.innerHTML = "";

  // Проверка наличия изображений в массиве
  if (imageURLS.length === 0) {
    // Отображение сообщения об ошибке в случае неудачи
    errorGrid.innerHTML = "<h4>Невозможно получить данные</h4>";
    return;
  }

  // очистка колонок
  column1.innerHTML = "";
  column2.innerHTML = "";
  column3.innerHTML = "";

  imageURLS.forEach((url, index) => {
    let image = document.createElement('img');
    image.src = url;
    image.className = "mt-3";
    image.setAttribute("width", "100%");
    image.setAttribute("onclick", "displayFullImage(this.src)");

    // распределение изображений по колонкам
    if ((index + 1) % 3 === 0) {
      column1.appendChild(image);
    } else if ((index + 2) % 3 === 0) {
      column2.appendChild(image);
    } else {
      column3.appendChild(image);
    }
  });
}

// полноразмерные изображения
function displayFullImage(src) {

  let image = document.createElement('img');
  image.src = src;
  image.className = "mt-3";
  image.setAttribute("width", "100%");

  modalBody.innerHTML = "";
  modalBody.appendChild(image);

  imageViewLink.href = src;

  // модальное окно
  const myModal = new bootstrap.Modal(document.getElementById('modal'), {});
  myModal.show();
}

// кнопка поиска
searchBtn.addEventListener('click', function() {
  if (searchKey.value !== '') {
    fetchSearchData(searchKey.value);
  }
});

// Функция для выполнения поиска
async function fetchSearchData(key) {
  imageURLS = [];

  try {
    // Отправка запроса к апи по ключевому слову
    const response = await fetch(searchUrl + key);
    const myJson = await response.json();

    myJson.results.forEach(element => {
      imageURLS.push(element.urls.regular);
    });

    displayImage();
  } catch (error) {
    // Обработка ошибок при выполнении запроса
    console.error("Ошибка при получении данных: ", error);
  }
}

// очищаем строку поиска
clearBtn.addEventListener('click', function() {
  searchKey.value = '';
  clearBtn.style.display = 'none';
});


//отображаем или скрываем крестик
searchKey.addEventListener('input', function() {
  if (searchKey.value.length > 0) {
    clearBtn.style.display = 'flex';
  } else {
    clearBtn.style.display = 'none';
  }
});



// Добавляем поведение при нажатии на энтер
searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if (searchKey.value.trim() !== '') {
    fetchSearchData(searchKey.value);
  }
});

