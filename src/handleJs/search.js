let countClickIconSearch = 1;

const handleClickSearch = () => {
  countClickIconSearch++;
  const formSearch = document.querySelector(".search-form");
  const listResult = document.querySelector(".data-search");
  if (countClickIconSearch % 2 !== 1) {
    console.log(countClickIconSearch);
    if (listResult) listResult.style.display = "block";
    if (formSearch) formSearch.classList.add("active");
  } else {
    if (formSearch) formSearch.classList.remove("active");
    if (listResult) listResult.style.display = "none";
  }
};

// casch 2

// getBody.onclick = (e) => {
//   let iIconSearch = document.querySelector(".fa-magnifying-glass");
//   console.log(e.target.className);
//   if (
//     e.target.className == "fa-solid fa-magnifying-glass" ||
//     e.target.className == "search-box"
//   ) {
//     formSearch.classList.add("active");

//     iIconSearch.style.color = "#bd945f";
//   } else {
//     formSearch.classList.remove("active");
//     iIconSearch.style.color = "#000";
//   }
// };
export default handleClickSearch;
