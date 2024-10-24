let candies = [
    {
        name: "Twix",
        type: "Chocolate"
    },
    {
        name: "Snickers",
        type: "Chocolate"
    },
    {
        name: "Candy Corn",
        type: "Chewy"
    }
];

let pos = 0;

window.onload = function() {
    displayCandy(0)
    document.getElementById("btnPrev").disabled = true;
}

function displayCandy(i) {
    let dsp = document.getElementById("candy");
    dsp.innerHTML = "";
    let p = document.createElement("p");
    p.textContent = candies[i].name;
    dsp.appendChild(p);
    p = document.createElement("p");
    p.textContent = candies[i].type;
    dsp.appendChild(p);
}

document.getElementById("btnNext").onclick = function() {
    pos++;
    if(pos > candies.length - 1) {
        document.getElementById("btnNext").disabled = true;
    }
    displayCandy(pos);
    document.getElementById("btnPrev").disabled = false;
}

document.getElementById("btnPrev").onclick = function() {
    pos--;
    if(pos <= 0) {
        document.getElementById("btnPrev").disabled = true;
    }
    displayCandy(pos);
    document.getElementById("btnNext").disabled = false;
}

document.getElementById("btnSubmit").onclick = function() {
    let cname = document.getElementById("txtName").value;
    let cType = document.getElementById("txtType").value;
    let obj = {
        name: cname, 
        type: cType
    }
    candies.push(obj)
    pos = candies.length  - 1;
    displayCandy(pos);
    document.getElementById("btnNext").disabled = true;
    document.getElementById("btnPrev").disabled = false;
}