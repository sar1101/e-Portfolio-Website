document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("commentInput");
  const comment = input.value.trim();
  if (comment) {
    const li = document.createElement("li");
    li.textContent = comment;
    document.getElementById("commentList").appendChild(li);
    input.value = "";
  }
});
