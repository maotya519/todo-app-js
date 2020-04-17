let TodoApp = {
    createListBtn: document.querySelector('.creatListBtn-area'),
    modal: document.querySelector('.modal'),
    canselModal: document.querySelector('.modal-cancel'),
    form: document.querySelector('.form'),
    addTask_tx: document.querySelector('.addTask_tx'),
    alert: document.querySelector('.alert'),
    addBtn: document.querySelector('.addBtn-wra'),
    todos_wra: document.querySelector('.ul'),
    delete: document.querySelectorAll('.delete'),
    count: 0,
    remainTask: document.querySelector('.remainText_alert'),
    searchForm: document.querySelector('.search-area input'),

    formCheck: function( task ) {
        //0　〜　16文字
        let checkTask = task;
        function innerCheckForm() {
            'use strict';
            if ( checkTask.length == 0 ) {
                console.log('文字を入力してください');
                TodoApp.alert.style.display = 'block';
            } else if( checkTask.length >= 16 ) {
                console.log('文字数oosugi');
                TodoApp.alert.style.display = 'none';
            } else {
                let countTask = TodoApp.addCount(0);
                if ( countTask >= 1) {
                   TodoApp.remainTask.style.display = 'none';
                }

                //チェックされた値が次の関数に渡されている。
                TodoApp.createTodoList(checkTask);
                TodoApp.alert.style.display = 'none';
                TodoApp.modal.style.display = 'none';

            }
        }
        return innerCheckForm();
    },
    createTodoList: function( checkTask ) {
        const html = `<li class="tast-item" ><p class="task_tx">${ checkTask }</p><i class="fas fa-trash-alt delete"></i></li>`;
        TodoApp.todos_wra.innerHTML += html;
        console.log( checkTask );
    },
    addCount: function( initCount ) {
        count = initCount;
        var innerFunc = function() {
            return ++TodoApp.count;
    };

    return innerFunc();
    },
    subtractionCount: function(initCount) {
        count = initCount;
        var innerFunc = function() {
            return --TodoApp.count;
        };
        return innerFunc();
    },
    filterTasks: function(term) {
        console.log( term );
        Array.from(TodoApp.todos_wra.children)
        //　フィルタリングの条件
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

        Array.from(TodoApp.todos_wra.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
    }
}


TodoApp.createListBtn.addEventListener('click' , ()=> {
    TodoApp.modal.style.display = 'block';
    TodoApp.canselModal.addEventListener('click', ()=> {
        TodoApp.modal.style.display = 'none';
        TodoApp.alert.style.display = 'none';
    },false);
},false);
TodoApp.addBtn.addEventListener('click', e => {
    const task = TodoApp.addTask_tx.value.trim();
    TodoApp.formCheck(task);
    TodoApp.form.reset();
},false);

TodoApp.todos_wra.addEventListener('click', e => {
    console.log( e.target.classList );
    if ( e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        let countTask = TodoApp.subtractionCount(0);
        if ( countTask == 0) {
            TodoApp.remainTask.style.display = 'block';
         }
    }
},false);

TodoApp.searchForm.addEventListener('keyup', ()=> {
    console.log( 'test');
    const term = TodoApp.searchForm.value.trim().toLowerCase();
    TodoApp.filterTasks(term);
},false);
