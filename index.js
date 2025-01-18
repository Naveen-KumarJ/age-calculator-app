const input = document.getElementById("dob");
const btn = document.querySelector("button");
const yearSpan = document.getElementById("years-result");
const monthSpan = document.getElementById("months-result");
const daySpan = document.getElementById("days-result");
btn.addEventListener("click", function () {
  if (input.value == "") {
    alert("Enter DOB on Input");
    yearSpan.innerText = "- - ";
    monthSpan.innerText = "- - ";
    daySpan.innerText = "- - ";
    return;
  }
  const dob = new Date(input.value);
  const todayDate = new Date();

  if (dob>todayDate ) {
    alert("Enter Valid Date");
    yearSpan.innerText = "- - ";
    monthSpan.innerText = "- - ";
    daySpan.innerText = "- - ";
    return;
  } else{
        let yearsDiff = todayDate.getFullYear()-dob.getFullYear();
        let monthsDiff = todayDate.getMonth()-dob.getMonth();
        let daysDiff = todayDate.getDate()-dob.getDate();
        if (daysDiff < 0) {
            monthsDiff--;
            const prevMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0).getDate();
            daysDiff += prevMonth;
        }
        
        if (monthsDiff < 0) {
            yearsDiff--;
            monthsDiff += 12;
        }
        yearSpan.innerText = yearsDiff;
        monthSpan.innerText = monthsDiff;
        daySpan.innerText = daysDiff;
  }
});
