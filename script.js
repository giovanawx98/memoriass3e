document.getElementById('comment-btn').addEventListener('click', function() {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value;

    if (commentText.trim() !== '') {
        const commentList = document.getElementById('comment-list');

        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = commentText;

        commentList.appendChild(commentDiv);
        commentInput.value = ''; // Limpa o campo de comentário
    }
});
