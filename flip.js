
pdfjsLib.GlobalWorkerOptions.workerSrc =
"https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

const fileInput = document.getElementById("pdfFile");
const convertBtn = document.getElementById("convertBtn");
const book = document.getElementById("book");

convertBtn.addEventListener("click", loadPDF);
async function loadPDF(){
    const flipBook = new St.PageFlip(
    document.getElementById("book"),
    {
        width:450,
        height:600,
        size:"stretch",
        autoSize:false,
        minWidth:315,
        maxWidth:1000,
        minHeight:420,
        maxHeight:1350,
        showCover:true,
        mobileScrollSupport:false,
        usePortrait:false
    
    }
);
  let data;

const savedPDF = sessionStorage.getItem("bookPDF");

if(savedPDF){

    data = new Uint8Array(JSON.parse(savedPDF)).buffer;

}else{

    const file = fileInput.files[0];

    if(!file){
        alert("اختر ملف PDF أولاً");
        return;
    }

    data = await file.arrayBuffer();

}  
  /*  
const file = fileInput.files[0];

if(!file){
    alert("اختر ملف PDF أولاً");
    return;
}
*/
/*const data = await file.arrayBuffer();*/

const pdf = await pdfjsLib.getDocument({
    data:data
}).promise;

alert("عدد صفحات الملف: " + pdf.numPages);
const pages = [];

for(let i = 0; i < pdf.numPages; i++){

    const page = document.createElement("div");

    page.className = "page";

    const canvas = document.createElement("canvas");

page.appendChild(canvas);

const pdfPage = await pdf.getPage(i + 1);

const viewport = pdfPage.getViewport({
    scale:1
});

canvas.width = viewport.width;
canvas.height = viewport.height;

await pdfPage.render({
    canvasContext: canvas.getContext("2d"),
    viewport: viewport
}).promise;

    pages.push(page);

}

flipBook.loadFromHTML(pages);


    
}
function checkOrientation(){

    if(window.innerHeight > window.innerWidth){

        document.getElementById("rotateMessage").style.display = "flex";

        document.querySelector(".container").style.display = "none";

    }else{

        document.getElementById("rotateMessage").style.display = "none";

        document.querySelector(".container").style.display = "block";

    }

}

window.addEventListener("resize", checkOrientation);

window.addEventListener("load", checkOrientation);

