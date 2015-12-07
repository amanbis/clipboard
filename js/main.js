//Save the unordered list elements
var list = document.getElementById('current');
var completed = document.getElementById('completed');
var tasks = [];
var done= [];
var id = 0;

function newTask() {
	//Initialize checkbox
	var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.name = "name";
	checkbox.value = "value";
	checkbox.id = "id";

	//Initialize label to hold checkbox and description
	var label = document.createElement('label');
	label.htmlFor = "id";

	//Get string from input and assign it to description
	var description = document.getElementById('itemInput').value;

	//Append checkbox and description to label
	label.appendChild(checkbox);
	label.appendChild(document.createTextNode(description));
    
    //Create new html list element
    var entry = document.createElement('li');

    //Append item to entry
    entry.appendChild(label)
    //Push entry to tasks array
    tasks.push([id, entry]);
    console.log("Number of tasks: " + tasks.length);
    checkbox.id = id;
    label.htmlFor = id;
    id++;
	//list.appendChild(entry);
	//Reset input to default value
    document.getElementById('itemInput').value = '';

    checkbox.onclick = function() {
	    if(checkbox.checked === true) {
            console.log("Congrats for finishing the task!");
            
            console.log("checkbox id: " + parseInt(checkbox.id));
            for(var i = 0; i < tasks.length; i++) {
	            if(parseInt(checkbox.id) === tasks[i][0]) {
	            	console.log("Index at tasks: " + i);
	            	list.removeChild(tasks[i][1]);
	            	completed.appendChild(tasks[i][1])
	            	done.push(tasks[i]);
	            	tasks.splice(i , 1);
	            	updateNumTask();
	            }
	        }
            
            /*list.removeChild(entry);
            completed.appendChild(entry);*/
	    } else if(checkbox.checked === false) {
	    	console.log("Added task back.");

	    	console.log("checkbox id: " + parseInt(checkbox.id));
            for(var j = 0; j < done.length; j++) {
	            if(parseInt(checkbox.id) === done[j][0]) {
	            	console.log("Index at done: " + j);
	            	completed.removeChild(done[j][1]);
	            	list.appendChild(done[j][1])
	            	tasks.push(done[j]);
	            	done.splice(j , 1);
	            	updateNumTask();
	            }
	        }

        	/*completed.removeChild(entry);
        	list.appendChild(entry);*/
	    }

	}
}

function printTask() {
	for(var i = 0; i < tasks.length; i++) {
		list.appendChild(tasks[i][1]);
		updateNumTask();
	}
}

function updateNumTask() {
	if(tasks.length === 0) {
		document.getElementById('numTask').innerHTML = "No";
	} else {
		document.getElementById('numTask').innerHTML = tasks.length;
	}

	if(done.length === 0) {
		document.getElementById('numDone').innerHTML = "No";
	} else {
		document.getElementById('numDone').innerHTML = done.length;
	}
}

document.getElementById("itemInput").onkeypress = function handle(e){
    if(e.keyCode === 13) {
    	newTask();
    	printTask();
    	return false;
    }
};