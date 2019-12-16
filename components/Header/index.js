// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    let myHeader = document.createElement("div");
    myHeader.classList = "header";

    let myDate = document.createElement("span");
    myDate.classList = "date";
    myDate.textContent = "SMARCH 28, 2019";
    myHeader.appendChild(myDate);

    let title = document.createElement("h1");
    title.textContent = "Lambda Times";
    myHeader.appendChild(title);

    let temperature = document.createElement("span");
    temperature.classList = "temp";
    temperature.textContent = "98°";
    myHeader.appendChild(temperature);

    return myHeader;
}

document.querySelector(".header-container").appendChild(Header());
