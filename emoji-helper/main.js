console.log("Script loaded");

/**
 * fetch emoji
 *
 */
let listOfEmoji;
function emojiFetch() {
  const url =
    "https://raw.githubusercontent.com/amio/emoji.json/master/emoji.json";
  fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      listOfEmoji = json;
      renderEmoji(listOfEmoji);
    });
}

function renderEmoji(listOfEmoji) {
  const emojiList = document.querySelector("#emoji_list");
  emojiList.innerHTML = "";
  listOfEmoji.forEach(emoji => {
    const emojiName = document.createElement("li");
    emojiName.addEventListener("click", () => {
      console.log("test");
      writeToClipboardOnPermission(emoji.name);
    });
    emojiName.innerHTML = emoji.char;
    emojiList.appendChild(emojiName);
  });
}

const inputSearch = document.getElementById("input_search");
console.log(inputSearch);
console.log(inputSearch.value);
inputSearch.addEventListener("keyup", () => {
  const searchItem = listOfEmoji.filter(emoji =>
    convertToLowerCase(emoji.name).includes(
      convertToLowerCase(inputSearch.value)
    )
  );
  console.log(searchItem);
  renderEmoji(searchItem);
});

function convertToLowerCase(string) {
  return string.trim().toLocaleLowerCase();
}

function cateagoryOfEmoji(){
    const selectCategry = document.querySelector("#emoji_category");
    const category = listOfEmoji.map(emoji => emoji.category);
    console.log(category);
    const b = category.filter((item, index) => category.indexOf(item) === index);
    console.log(b);
}

emojiFetch();
cateagoryOfEmoji();
