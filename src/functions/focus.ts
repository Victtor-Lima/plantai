export function focusEl(categ: string) {
  const green =
    "font-merriweather_sans font-bold text-lg mb-3 mr-2 px-4 py-2 md:px-8 md:py-3 bg-gradient-to-t from-lime-500 to-lime-400 rounded-full md:mr-3 lg:mr-4";
  const focus = `font-merriweather_sans font-bold text-lg mb-3 mr-2 px-4 py-2 md:px-8 md:py-3 bg-gradient-to-t from-[#499b7f] to-[#6AAC96] rounded-full`;

  const btnFoliage = document.querySelectorAll(`.howToCultivate button`);
  btnFoliage.forEach((item) => {
    item.className = green;
  });

  const selectedList = document.querySelector(`div #btn${categ}`);
  if (selectedList) {
    selectedList.className = focus;
  }
}
