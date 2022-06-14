function updateSvg() {
    var code = document.getElementById("svgCode");
    var preview = document.getElementById("svgOutput");
    var preview2 = document.getElementById("svgOutput2");

    preview.innerHTML = code.value;
    preview2.innerHTML = code.value;
}

function crop() {
    var svg = document.getElementsByTagName("svg")[0];
    var bbox = svg.getBBox();
    var viewBox;

    var output = document.getElementById("svgOutput");
    var output2 = document.getElementById("svgOutput2");

    if (bbox.width > bbox.height) {
        viewBox = [bbox.x, bbox.y - (bbox.width - bbox.height) / 2, bbox.width, bbox.width].join(" ")
    } else if (bbox.width < bbox.height) {
        viewBox = [bbox.x - (bbox.height - bbox.width) / 2, bbox.y, bbox.height, bbox.height].join(" ")
    } else {
        viewBox - [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
    }
    svg.setAttribute("viewBox", viewBox);
    output.innerHTML = svg.outerHTML;
    output2.innerHTML = svg.outerHTML;
    svgCodeOutput.innerHTML = svg.outerHTML;

    createDownload();
}

function createDownload() {
    var newSvg = document.getElementById("svgOutput");
    var downloadLink = document.getElementById("downloadDiv");

    var test = newSvg.innerHTML;

    //const svgBlob = test => new Blob([test]);
    var svgBlob = new Blob([test]);
    var blobUrl = URL.createObjectURL(svgBlob);

    var link = document.createElement("a"); // Or maybe get it from the current document
    link.href = blobUrl;
    link.download = "resized.svg";
    link.innerHTML = "Click here to download the file";
    downloadLink.appendChild(link);
}