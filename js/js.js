
const formContainer = document.getElementById("div-add");
function send() {
    let arr = document.getElementsByTagName('input')
    let a = document.getElementById('error')
    if(arr[0].checked || arr[1].checked){
        document.getElementById('question').style = 'color: black';
        document.getElementById('question').innerHTML = '1. it is necessary to you';
    }else {
        a.innerText="";
        a.innerText="PLEASE FILL ALL REQUEST REQUIREMENT(*)";
        a.style = 'color: red';
        document.getElementById('question').style = 'color: red';
        document.getElementById('question').innerHTML = '1. it is necessary to you*';
    }

    if(arr[2].checked || arr[3].checked){
        document.getElementById('question2').style = 'color: black';
        document.getElementById('question2').innerHTML = '2. often pass polls';
    }else {
        a.innerText="PLEASE FILL ALL REQUEST REQUIREMENT(*)";
        a.style = 'color: red';
        document.getElementById('question2').style = 'color: red';
        document.getElementById('question2').innerHTML = '2. often pass polls*';
    }

    if (arr[4].checked || arr[5].checked){
        document.getElementById('question3').style = 'color: black';
        document.getElementById('question3').innerHTML = '3. How old are you';
    }else {
        a.innerText="PLEASE FILL ALL REQUEST REQUIREMENT(*)";
        a.style = 'color: red';
        document.getElementById('question3').style = 'color: red';
        document.getElementById('question3').innerHTML = '3. How old are you*';
    }
}

function retain() {
    let arr = document.getElementsByClassName('a');
    let b = document.getElementsByClassName("err");
    console.log(b);
    for(let a in arr){
        if(arr[a].value === ''){
            b[a].innerText= arr[a].getAttribute('placeholder');
            b[a].style='color: red';
            arr[a].classList.add('error')
        }
    }
}

// let counterClick = 0;
// function addNewForm() {
//     console.log("Dit me m")
//     counterClick = counterClick + 1;
//
//     let newForm = document.createElement('div');
//     newForm.id = "firstForm" + counterClick;
//     let hr = document.createElement("hr");
//     newForm.appendChild(hr);
//
//     const newDivInput1 = document.createElement("div")
//     let newInput1 = document.createElement("input");
//     newInput1.classList.add('form-control');
//     newInput1.classList.add('a');
//     newInput1.placeholder = "Enter your questions";
//     newInput1.type = 'text';
//     let p1 = document.createElement("p");
//     p1.classList.add("err");
//     newDivInput1.appendChild(newInput1);
//     newDivInput1.appendChild(p1)
//     newForm.appendChild(newDivInput1);
//
//     let checkbox1 = document.createElement("input");
//     checkbox1.type = 'checkbox'
//     let label1 = document.createElement('label')
//     label1.textContent = 'Mandatory';
//     newForm.appendChild(checkbox1);
//     newForm.appendChild(label1)
//
//     let br = document.createElement('br')
//     newForm.appendChild(br)
//
//     let checkbox2 = document.createElement("input");
//     checkbox2.type = 'checkbox'
//     let label2 = document.createElement('label')
//     label2.textContent = 'you can select mutiple options';
//     newForm.appendChild(checkbox2);
//     newForm.appendChild(label2)
//
//     let groupInput = document.createElement("div");
//     groupInput.classList.add("group" + counterClick);
//     groupInput.id = "group" + counterClick;
//     newForm.appendChild(groupInput);
//
//
//     let newDivInput3 = document.createElement("div");
//     newDivInput3.classList.add("input-group");
//
//     let newInput3 = document.createElement("input");
//     newInput3.classList.add('form-control');
//     newInput3.classList.add('a');
//     newInput3.placeholder = "Type your answers";
//     newInput3.type = 'text';
//     newDivInput3.appendChild(newInput3);
//
//
//     let newInput4 = document.createElement("input");
//     newInput4.classList.add('input-group-append'+counterClick);
//     newInput4.classList.add('btn');
//     newInput4.classList.add('btn-primary');
//     newInput4.type = 'button';
//     newInput4.value = "+";
//
//     newInput4.addEventListener('click', function add1() {
//         console.log('Dit cu m')
//         let newDiv = document.createElement("div");
//         newDiv.id ='newDiv'+counterClick;
//         let groupInput = document.getElementById("group" + counterClick);
//         groupInput.appendChild(newDiv);
//
//         let newInputAddToGroup = document.createElement("input");
//         newInputAddToGroup.classList.add('form-control');
//         newInputAddToGroup.classList.add('a');
//         newInputAddToGroup.classList.add('b'+counterClick)
//         newInputAddToGroup.placeholder = "Type your answers";
//         newInputAddToGroup.type = 'text';
//         let getNewDiv = document.getElementById("newDiv" + counterClick);
//         getNewDiv.appendChild(newInputAddToGroup);
//
//         let p1 = document.createElement("p");
//         p1.classList.add("err");
//         getNewDiv.appendChild(p1);
//
//     })
//     newDivInput3.appendChild(newInput4);
//
//     let p3 = document.createElement("p");
//     p3.classList.add("err");
//     newForm.appendChild(newDivInput3);
//     newForm.appendChild(p3)
//
//
//     let divAdd = document.getElementById("div-add");
//     divAdd.appendChild(newForm);
//     console.log(newForm);
// }

// function add() {
//     let input = document.createElement("input");
//     input.placeholder = 'Type your answers';
//     input.className = 'form-control a';
//     input.name = "Type your answers";
//
//     let p = document.createElement("p");
//     p.className = 'err';
//
//     document.getElementById('gruop').appendChild(input);
//     document.getElementById('gruop').appendChild(p);
// }

function addNewForm() {
    const formContainer = document.getElementById("div-add");
    console.log(formContainer);
    let newQuestion = `
        <div id="firstForm">
            <hr>
            <div>
                <input type="text" class="form-control a" name="Enter your questions" placeholder="Enter your questions">
                <p class="err"></p>
            </div>

            <div>
                <input type="checkbox" class="">Mandatory
            </div>

            <div>
                <input type="checkbox" class="">you can select mutiple options
            </div>

            <div class="group" id="group">
                <div class="input-group ">
                    <input type="text" class="form-control a" name="Type your answers" placeholder="Type your answers">
                    <input type="button" class="input-group-append btn btn-primary" value="+">
                </div>
                <p class="err"></p>
            </div>
        </div>
    `;
    formContainer.innerHTML += newQuestion;
}

formContainer.addEventListener('click', function(e){

    if(e.target.classList.contains("input-group-append")){
        const parentGroup = e.target.parentElement.parentElement;
        parentGroup.innerHTML += `
            <div class="input-group ">
                <input type="text" class="form-control a" name="Type your answers" placeholder="Type your answers">
                
            </div>
            <p class="err"></p>
        `
        // console.log(e.target.parentElement.parentElement);
    }
})

function validateForm() {
    return false
}