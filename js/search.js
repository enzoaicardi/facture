
var cct = task.concat(gtask);
var calcType = "tasks";
var presType = "dep";
var factType = "f";

function Search(e){
    var t = e.currentTarget;
    var v = t.value;

    SearchTask(v);
}

function SearchTask(v){

    var main = document.querySelector('.search > main');
    main.innerHTML = '';

    if(v && v !== ''){

        var array = scoreIt(v, cct, {path: ['nom']});
        
        for(var i=0; i<array.length; i++){

            if(array[i].score < 50){i=array.length;continue;}

            var s = array[i].obj.sub;
            ul = '', g = '';
            if(s){
                ul = subTasks(s)
                g = 'group';
            }

            let p = array[i].obj.prix;
            let n = array[i].obj.nom;
            let id = array[i].id
            let h = currentTasks[id] ? 'h' : '';
            let e = currentTasks[id] ? '' : `onclick="addTask(${id});"`;

            var template = 
            `<div class="task ${g} ${h}" ${e}>
                <div class="title">
                    <h4>${n}</h4>
                    <p>${p}${typeof p === 'number' ? devise : ''}</p>
                </div>
                ${ul}
            </div>`

            main.insertAdjacentHTML('beforeend', template);

        }

    }

}

function addTask(id){

    // update in current active tasks
    closeSearch();

    var exist = currentTasks[id];

    if(!exist){
        
        var main = document.querySelector('.formulaire .bloc.task .task_list');
        var t = cct[id];

        var p = t.prix;
        var s = t.sub, ul = '';

        currentTasks[id] = typeof p === 'number' ? p : 0;
        updatePrice();

        if(s){
            ul = subTasks(s)
        }

        var template =
        `<section data-id="${id}">
            <div class="desc">
                <div class="title">
                    <h4>${t.nom}</h4>
                    <p>${p}${typeof p === 'number' ? devise : ''}</p>
                </div>
                ${ul}
            </div>
            <button onclick="delTask(${id});">
                <svg><use xlink:href="#icon-delete"></use></svg>
            </button>
        </section>`;

        main.insertAdjacentHTML('beforeend', template);

    }

}

function delTask(id){

    currentTasks[id] = false;
    var main = document.querySelector('.formulaire .bloc.task .task_list');
    var child = main.querySelector('[data-id="'+id+'"]')

    main.removeChild(child);
    updatePrice();

}

function subTasks(array){

    var li = '';

    for(var i=0; i<array.length; i++){
        li+= '<li>'+task[array[i]].nom+'</li>';
    }

    return '<ul>'+li+'</ul>';

}

function closeSearch(){
    var search = document.querySelector('.search');
    search.classList.add('h');
}

function updatePrice(){

    var b = document.querySelector('.formulaire .task .total b');
    var total = 0;
    var v = 0;

    if(calcType === 'tasks'){

        for(var key in currentTasks){
            var r = currentTasks[key];
            if(r){
                total += r;
            }
        }

    }
    
    else if(calcType === 'hours'){

        var input = document.querySelector('.formulaire .task .total input');
        v = input.value;

        total = heure * v;

    }

    b.textContent = total + devise;
    return {total: total, h: v};

}