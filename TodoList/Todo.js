const todo=[{
    name:'make dinner',
    dueDate:'2025-05-1'
     
}


];
 rendertodo();


function rendertodo(){ 
    let todohtml='';
    for(let i=0;i<todo.length;i++){
        const tdobj=todo[i];
        // const name= tdobj.name;
        // const dueDate=tdobj.dueDate;
        const {name}=tdobj;
        const{dueDate}=tdobj;
        const html=
        
      ` <div>${name}</div>  
        <div>${dueDate}</div>  
        <button onclick="
        todo.splice(${i},1);
        rendertodo();"
        class="delete-todo-button">Delete</button> 
        `;
        todohtml+=html;
    }
   

    document.querySelector('.js-todo')
    .innerHTML=todohtml;
    }
function addTodo(){
    const input=document.querySelector('.js-name-input');
    const name=input.value;

    const dateinput= document.querySelector('.js-due-date');
    const duedate=dateinput.value;

    todo.push({
        name: name,
        dueDate: duedate,
    }
    );

        
    



    todo.push(name);
  

    input.value='';
    rendertodo();
}