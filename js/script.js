document.addEventListener("keydown", e =>) {
  if (e.ctrlkey && e.key === "u"){
    alert("El administrador no permite ver informacion confidencial");
    e.preventDefault();
  }
})
