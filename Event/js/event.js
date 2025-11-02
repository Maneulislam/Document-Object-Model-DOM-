// Option : 2
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// option : 3
const makeBlue = document.getElementById('make-blue');
makeBlue.onclick = function () {
    document.body.style.backgroundColor = 'blue';
}


// Option : 4   Add Event Listener

document.getElementById('make-green').addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
})

document.getElementById('make-green').addEventListener('mouseover', function () {
    let sectionCreate = document.createElement('section');

    sectionCreate.innerHTML = `
    <h3>Add Event Listener Added</h3>
    `;
    document.body.appendChild(sectionCreate);
})



// -------------------------------------
// -------------------------------------


document.getElementById('btn-update').addEventListener('click', function () {
    const inputField = document.getElementById('update-input-field');
    let inputValue = inputField.value;

    document.getElementById('h3-update').innerText = inputValue;
})


// -------------------------------------
// -------------------------------------


document.getElementById('btn-post').addEventListener('click', function () {

    const comment = document.getElementById('comment-textarea');
    const newComment = comment.value;

    const commentContainer = document.getElementById('post-container');

    const createP = document.createElement('p');

    createP.innerText = newComment;

    commentContainer.appendChild(createP);

    createP.classList.add('comment');

    comment.value = ' ';


})