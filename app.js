let speedmph = (val) => val / 1.60934;
let speedkmph = (val) => val * 1.60934;

function speedConverter() {
  let input = document.getElementById("input").value;
  console.log(typeof input);
  let modified_input = Number(input.split(" ")[0]);
  let unit = input.split(" ")[1];
  let output_unit = unit == "mph" ? "kmph" : "mph";
  let result =
    unit == "mph" ? speedkmph(modified_input) : speedmph(modified_input);

  document.getElementById("output").innerHTML = result.toFixed(3) + output_unit;
}
