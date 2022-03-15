
function changeYear() {
  const footerElm = window.document.querySelector(".app-footer");
  let year = new Date().getFullYear(); 
  footerElm.innerHTML = `©Corpus ${year}`;
}

changeYear();