"use strict"

// menu-burger
const iconBurger = document.querySelector('.menu__icon');  // получаем в константу иконку меню-бургер
const headerMenu = document.querySelector('.header__menu');  // получаем в константу весь блок с меню
const menuItem = document.querySelectorAll('.menu__item');  // получаем в константу все пункты меню


const actionHeader = document.querySelector('.header__action');  // получаем в константу блок с соц сетями и кнопкой

console.log(iconBurger);
iconBurger.addEventListener('click', function (e) {
  iconBurger.classList.toggle('menu-open');
  headerMenu.classList.toggle('_open');

  actionHeader.classList.toggle('_open');
 
  document.body.classList.toggle('_lock');
}
);

// всплывающее окно
const headerButton = document.querySelector(".header__button");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close");
const popupForm = document.querySelector(".popup__form");

// открываем окно
headerButton.addEventListener('click', function(){
popup.classList.add('open');
document.body.classList.add('_lock');
})
// закрываем окно
closePopup.addEventListener('click', function(){
popup.classList.remove('open');
document.body.classList.remove('_lock');
})

const thanksModal = document.querySelector('.thanks');        // окно благодарности
const closeThanks = document.querySelector(".thanks__close");  // крестик закрытия окна
const btnCloseThanks = document.querySelector(".thanks__button"); // кнопка возврата на сайт

// закрытие окна благодарности
closeThanks.addEventListener('click', function(){
  thanksModal.classList.remove('open');
})
btnCloseThanks.addEventListener('click', function(){
  thanksModal.classList.remove('open');
})


// Валидация формы(функция возвращает true || false )
function validation(form){

  function removeError(input){
    const parentInput = input.parentElement;
    if(parentInput.classList.contains("_error")){
      parentInput.querySelector("._error-label").remove(); // удаляем див с ошибкой
      parentInput.classList.remove('_error');
    }
  }

function createError(input, text){
  const parentInput = input.parentElement;
  parentInput.classList.add('_error');
  let errorLabel = document.createElement('div');
  errorLabel.textContent = text;
  errorLabel.classList.add('_error-label');
  parentInput.append(errorLabel);
}

let result = true;
form.querySelectorAll("input").forEach((input)=>{

  removeError(input); // очистка от ошибки

  if(input.dataset.minLength){
    
    if(input.value.length < Number(input.dataset.minLength)){
      removeError(input);
      console.log("errorinput");
      createError(input, `Поле не может быть менее ${input.dataset.minLength} символов`);
      result = false;
    }
  }

  if(input.dataset.required == 'true'){
    
      if(input.value == ""){
    removeError(input);
    console.log("errorinput");
    createError(input, "Поле не заполнено");
    result = false;
  } 
  }
})

return result
}

const myForm = document.getElementById('popupForm');
myForm.addEventListener("submit", function(event){
  event.preventDefault();

  if(validation(this) == true){

    // если валидация успешна, то сюда любой код
    thanksModal.classList.add('open'); // показываем окно с благодарностью
    popup.classList.remove('open'); // закрываем попап с формой
    document.body.classList.remove('_lock');
  }
  
})


// ТАБЫ tabs Блок "Для кого подходит VIP"
// const tabsFor = document.querySelectorAll('.for__tab-button'); // получаем в константу все табы-вкладки на странице
// const contentsFor = document.querySelectorAll('.for__tab-content');   // получаем в константу все блоки с контентом таба на странице

// // проходим циклом forEach по коллекции вкладок:
// tabsFor.forEach(function (tab, index) {
//   // по клику добавляем выбранному табу класс active:
//    tab.addEventListener("click", function () {
//     //ПРЕДВАРИТЕЛЬНО проходим по всем табам удаляем класс active у предыдущего активного таба:
//     tabsFor.forEach(function (tab) {
//       tab.classList.remove("active");
//     });
//     // и добавляем текущему
//     tab.classList.add("active");

//     //проходим по всем блокам с контентом и удаляем класс open у предыдущего активного блока:
//     contentsFor.forEach(function (item) {
//       item.classList.remove('open');
//     })
//     // для отображения содержимого в соответствии с выбранной вкладкой, добавляем блоку с контентом класс open (текущий индекс совпадает,
//     //  т.к. кол-во вкладок и кол-во блоков с контентом одинаково)
//     contentsFor[index].classList.add('open');
//   });
// })




// выпадающий список в контактах
// document.addEventListener('click', collapseFunction);
// function collapseFunction(event){
// 	if(!event.target.classList.contains('spoller-btn')) return
// 	const attr = event.target.getAttribute('data-collapse');// получаем значение дата атрибута кнопки
// 	const collapsedBody = document.getElementById(attr); // получаем связанный с кнопкой блок с id=data-collapsed
// 	collapsedBody.classList.toggle('open');
// 	event.target.classList.toggle('active');
// }




// назначаем обработчик на весь document
// document.addEventListener('click', function(e){
//   // если мы кликнули не на блок меню, то забираем у меню user-header класс .open и оно закрывается
// if(!e.target.closest('.user-header')){
//   user_menu.classList.remove('open');
// }
// })