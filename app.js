const commentForm = document.getElementById("comment_form");
const commentContainer = document.getElementById("comment_container");

commentForm.addEventListener('submit', event => {
    event.preventDefault()

    let comment = Object.fromEntries(new FormData(commentForm)).comment;

    createComment(comment)
});

function createComment(comment) {
    let commentDiv = document.createElement('div');
    let commentP = document.createElement('p');
    let commentDate = document.createElement('p');
    let commentDelete = document.createElement('span');

    commentDiv.classList.add('comment')

    commentP.innerText = comment;

    commentDelete.classList.add('bi-x-circle');
    commentDelete.addEventListener('click', () => {
        deleteComment(commentDiv);
    })

    commentDate.classList.add('comment-date')
    commentDate.innerText = `Comentado el: ${new Date().toLocaleString()}`;

    commentDiv.appendChild(commentP);
    commentDiv.appendChild(commentDate);
    commentDiv.appendChild(commentDelete);
    
    commentContainer.appendChild(commentDiv);
}

function deleteComment(comment) {
    comment.remove()
}