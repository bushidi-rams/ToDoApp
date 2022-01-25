
        class MyDoList {

            constructor(name, date) {
                this._name = name;
                this._date= date;
                this._completed=false;
                
            }
            get getCompleted(){
                return this._completed;
            }

            getCompleted() {
                this._completed=!this._completed;

            }

            static createElement = (item) => {
                return `<li class="activeTask task"> 
                            <span>${item._name}</span> - 
                            <span>${item._date}</span> -
                            <span>${item._completed}</span> -
                            
                        </li>`;
                        /* <button class="deleteBtn" onclick="deleteItem(event)">Delete</button> | */
            }

        }

        /*``-----Array to store objects----------*/
        
        
        

        //getting references to buttons
        const add = document.getElementById('input1B');
        const refresh = document.getElementById('refresh');
        const save = document.getElementById('save');
        const taskList = document.getElementById("taskList");

        //getting reference to div where content is displayed
        const entrypoint = document.getElementById('entry');

        /* --- functions --- */

        //Creates object using values of input fields
          function adding (){
            const mytask = new MyDoList(inputA.value,inputB.value);
            let todo = localStorage.getItem("todo");
            if (todo === null) {
             task = [];
            } else {
                task = JSON.parse(todo);
            }
            task.push(mytask);
            taskList.innerHTML += MyDoList.createElement(mytask); 
            inputA.value = "";
            inputB.value = "";

            localStorage.setItem("todo", JSON.stringify(task));
            //displayTodo();
        
        }

        function deleteItem(ind){
            let todo= localStorage.getItem("todo");
            task=JSON.parse(todo);
            task.splice(ind,1);
            taskList.innerHTML += MyDoList.createElement(mytask); 
            input2.value="";
            localStorage.setItem("todo", JSON.stringify(task));

        }
        function editItem(int){
            let todo= localStorage.getItem("todo");
            task=JSON.parse(todo);
            task[int]=input3.value;
            input3.value="";
            localStorage.setItem("todo", JSON.stringify(task));

            }
        function sortItem(){
            let todo= localStorage.getItem("todo");
            task=JSON.parse(todo);
            task.sort();
            localStorage.setItem("todo", JSON.stringify(task));

            }
        function AddingDate(){
            let todo = localStorage.getItem("todo");
            if (todo === null) {
                task = [];
            } else {
                task = JSON.parse(todo);
            }
            let date = document.getElementById("input6").value;
            let localDate = new Date(date);
            task.push(localDate);
            localStorage.setItem("todo", JSON.stringify(task));
            //console.log(localDate);

            }
            function Display(){
            let todo= localStorage.getItem("todo");
            task=JSON.parse(todo);

            let lt=task.length;
            let text="<ul>";
                for(let i=0;i<lt;i++){
                    text+="<li>"+task[i]+"</li>";
                }
                text +="</ul>";

            document.getElementById("ramsp").innerHTML=text;
            }

            function ClearItem(){
            let todo= localStorage.getItem("todo");
            task=JSON.parse(todo);
            task=[];
            localStorage.setItem("todo", JSON.stringify(task));
               

                }


  