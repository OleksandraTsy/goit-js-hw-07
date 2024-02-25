const list = document.querySelectorAll(".item");
//console.dir(list);
console.log(`Number of categories: ${list.length}`);

const categoriesAll = document.querySelectorAll("h2")
//console.dir(categoriesAll);

categoriesAll.forEach(function (category) {
    const categoryName = category.textContent;
    console.log(`Category: ${categoryName}`);
    const categoriesEl = category.parentElement.querySelectorAll("ul > li");
    console.log(`Elements: ${categoriesEl.length}`);
});



