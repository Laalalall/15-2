const blocks = document.getElementsByClassName('block')
const block3 = document.getElementById('block3')
block3.classList ="changeClass"
block3.classList.add("newClass")
block3.classList.remove("block")

console.log(block3.classList)
block3.onclick =()=>{
    block3.classList.toggle("path")
}
const block2 = document.getElementById('button')
const input =document.getElementById('block')
tag.setAttribute('class', 'block')

button.onclick =()=> {
    const tag =document.createAttribute('div')
    const deleteButton =document.createElement('button')
    deleteButton.innerText ="delete";
    deleteButton.innerText =()=>{
        tag.remove()
    }
    tag.setAttribute('class','block')
    tag.innerText = input.value;
    tag.append(deleteButton)
    document.body.append(tag);
    input
}