export function chosenTip(categ: string) {
  const howToCultivateLists = document.querySelectorAll(`.howToCultivate ul`);

  howToCultivateLists.forEach((item) => {
    item.classList.add("hidden");
  });

  const selectedList = document.querySelector(`.howToCultivate .${categ}`);

  if (selectedList) {
    selectedList.classList.add("grid");
    selectedList.classList.remove("hidden");
  }
}
