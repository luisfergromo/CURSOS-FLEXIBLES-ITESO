// Obtén el elemento con el id "right-side-wrapper"
var rightSideWrapper = document.getElementById("right-side-wrapper");

// Crea un nuevo elemento div
var newDiv = document.createElement("div");

// Define el contenido HTML del nuevo div
newDiv.innerHTML = '<div style="font-size:12px;text-align:center"><a href="#teacher_feedback" target="_blank"><button type="button" id="help-link" class="Button button-sidebar-wide" style="background-color:#900;color:white;width:240px">&nbsp;24/7 Canvas Chat Support</button></a><br>....or call 1-833-566-3347 (staff/faculty)<br>1-877-399-4090 (students)</div>';

// Agrega el nuevo div como hijo del elemento con id "right-side-wrapper"
rightSideWrapper.appendChild(newDiv);
