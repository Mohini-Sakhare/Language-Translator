const selectTag = document.querySelectorAll("select");
const translateBtn = document.querySelector("#Translator")
const fromText = document.querySelector("#fromText");
const toText = document.querySelector("#toText");

selectTag.forEach((tag,id)=>{
   for(const countriesCode in countries){
    let selected ;
    if(id == 0 && countriesCode == "en-IN"){
        selected= "selected";
    }else if(id == 1 && countriesCode == "hi-IN"){
        selected= "selected";
    }
   let option = `<option value="${countriesCode}" ${selected}>${countries[countriesCode]}</option>`;
   tag.insertAdjacentHTML("beforeend", option)
}
});

translateBtn.addEventListener(("click"), ()=>{
   let Text = fromText.value,
   translateFrom = selectTag[0].value,
   translateTo = selectTag[1].value;

   let URL =` https://api.mymemory.translated.net/get?q=${Text}!&langpair=${translateFrom}|${translateTo}`;

   fetch(URL).then(res => res.json()).then(data =>{

   })
});


