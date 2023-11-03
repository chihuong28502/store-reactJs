function scrollToTop() {
  const scrollId = document.querySelector("#scroll-top");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollId.classList.add("active");
  } else {
    scrollId.classList.remove("active");
  }
}
window.onscroll = function () {
  scrollToTop();
};

const handleClickScrollIcon = () => {
  document.documentElement.scrollTop = 0;
};
export default handleClickScrollIcon;
