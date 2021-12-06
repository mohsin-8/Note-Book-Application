var box = document.getElementById('box');
// console.log(box);

function addNotes() {
    var noteTitle = document.getElementById('title');
    // console.log(noteTitle);
    var noteDescription = document.getElementById('description');
    // console.log(noteDescription);

    if (noteTitle.value.length > 2 && noteDescription.value.length > 2) {
        // Create Notes Box //
        var noteBox = document.createElement('div');
        noteBox.setAttribute('class', 'animate__animated animate__fadeInDown pt-5');

        var sections = document.createElement("section");
        sections.setAttribute('class', 'notesList card');
        noteBox.appendChild(sections);

        var headingForTitle = document.createElement('h4');
        headingForTitle.setAttribute('class', 'h4Title ml-5');

        var nodeHeadingForTile = document.createTextNode(noteTitle.value);

        headingForTitle.appendChild(nodeHeadingForTile);

        sections.appendChild(headingForTitle);
        // console.log(sections);

        var paragraph = document.createElement('p');
        var paragraphText = document.createTextNode(noteDescription.value);
        paragraph.setAttribute('class', 'paraDesc ml-5');
        // paragraphText.className = ('paraDesc');
        paragraph.appendChild(paragraphText);

        sections.appendChild(paragraph);

        var h6 = document.createElement("h6");
        h6.innerHTML = "<i onclick='delSingleNotes(this)' class='fas fa-minus-circle delete pr-3 ml-5'></i><i onclick='editSingleNote(this)' class='fas fa-edit edit ml-5'></i>";
        sections.appendChild(h6);

        // console.log(h6);
        box.appendChild(noteBox);
        // box.className = ('notesList')
        noteDescription.value = "";
        noteTitle.value = "";

    } else {
        alert('Enter Valid Value');
    }
}

function delNotes() {
    box.innerHTML = "";
}

// console.log(box);



// Delete Single Notes

function delSingleNotes(e) {
    e.parentNode.parentNode.parentNode.remove();
}



function editSingleNote(e) {
    // console.log(e.parentNode.parentNode.firstChild.nextSibling);
    var value = e.parentNode.parentNode.firstChild.innerHTML;
    var editNoteTile = prompt('Edit Title: ', value);

    e.parentNode.parentNode.firstChild.innerHTML = editNoteTile;

    var valueDesc = e.parentNode.parentNode.firstChild.nextSibling.innerHTML;
    var editNoteDesc = prompt('Edit Description: ', valueDesc);
    e.parentNode.parentNode.firstChild.nextSibling.innerHTML = editNoteDesc;
}