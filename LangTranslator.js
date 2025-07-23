const selectTag = document.querySelectorAll("select");

selectTag.forEach((tag)=>{
   for(const countriesCode in countries){
   let option = `<option value="${countriesCode}">${countries[countriesCode]}</option>`;
   tag.insertAdjacentHTML("beforeend", option)
}
});
