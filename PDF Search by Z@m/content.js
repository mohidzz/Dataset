const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Enter search query";
document.body.appendChild(searchInput);

const searchButton = document.createElement("button");
searchButton.innerHTML = "Search";
document.body.appendChild(searchButton);

searchButton.addEventListener("click", function() {
  const query = searchInput.value;
  if (!query) {
    return;
  }

  const findController = document.getElementsByName("FIND_CONTROLLER")[0];
  findController.highlightAll(query, true, true);
});
