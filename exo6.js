function changeItems(){
    this.classList.toggle("border")
}
firstName.addEventListener("focus", changeItems)
email.addEventListener("focus", changeItems)
firstName.addEventListener("blur", changeItems)
email.addEventListener("blur", changeItems)