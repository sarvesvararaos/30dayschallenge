const accordion = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function() {
    this.classList.toggle("active");

    document.querySelectorAll(".accordion").forEach(acc => {
      if (acc != this) {
        acc.classList.remove("active");
      }
    });
  };
}
