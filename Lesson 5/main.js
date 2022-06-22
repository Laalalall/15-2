// const list = [
//     {
//         id: 1,
//         text: "Learn JS!"
//     },
//     {
//         id:2,
//         text: "test"
//     }
// ];
// function render() {
//     const mainDiv = document.createElement('div')
//     mainDiv.setAttribute('class','list')
//
//     for (let i=0; i < list.length; i++){
//         const div = document.createElement('div')
//         div.setAttribute('class','todoBlock')
//         const p =document.createElement('p')
//         p.innerText = list[i].text;
//         div.append(p)
//
//         const button =document.createElement('div');
//         button.setAttribute('class','actions');
//         const changeButton = document.createElement('button');
//         changeButton.setAttribute('class','change');
//         changeButton.innerText ="change";
//         const deleteButton =document.createElement('button');
//         deleteButton.setAttribute('class','delete');
//         deleteButton.innerText = "delete";
//
//         button.append(changeButton,deleteButton);
//         div.append(button);
//         mainDiv.append(div);
//     }
//         const form = document.querySelector('.form')
//         form.append(mainDiv)
//
// }
// render()
const list = [
    {
        id: 1,
        text: "Learn JS!"
    },
    {
        id: 2,
        text: "test"
    }

];

const addButton = document.getElementById('button')
const input = document.getElementById('input')

function render() {
    const mainDiv = document.createElement('div')
    mainDiv.setAttribute('class', 'list')

    for(let i = 0; i < list.length; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'todoBlock')
        const p = document.createElement('p');
        p.innerText = list[i].text;
        div.append(p)

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'actions');
        const changeButton = document.createElement('button');
        changeButton.setAttribute('class', 'change');
        changeButton.innerText = "change";
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'delete');
        deleteButton.innerText = "delete";

        buttons.append(changeButton, deleteButton);
        div.append(buttons);
        mainDiv.append(div);

    }

    const form = document.querySelector('.form');
    div.remove()
    form.append(mainDiv)
}
addButton.onclick = function () {
    const obj ={
        id: list.length+1,
        text: input.value
    }
    list.push(obj)
    render();
};


