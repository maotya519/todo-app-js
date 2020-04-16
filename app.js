let TodoApp = {
    createListBtn: document.querySelector('.creatListBtn-area'),
    modal: document.querySelector('.modal'),
    canselModal: document.querySelector('.modal-cancel'),

}

TodoApp.createListBtn.addEventListener('click' , ()=> {
    TodoApp.modal.style.display = 'block';
    TodoApp.canselModal.addEventListener('click', ()=> {
        TodoApp.modal.style.display = 'none';
    },false);
},false);
