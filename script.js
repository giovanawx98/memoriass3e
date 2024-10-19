function addComment(photoId) {
    const commentBox = document.querySelector(`#comments-${photoId}`);
    const textArea = commentBox.previousElementSibling.previousElementSibling;
    const commentText = textArea.value.trim();

    if (commentText !== "") {
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentBox.appendChild(newComment);
        textArea.value = ""; 
    } else {
        alert("Por favor, insira um comentário.");
    }
}
