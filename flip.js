/*
pdfjsLib.GlobalWorkerOptions.workerSrc =
"https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

const fileInput = document.getElementById("pdfFile");
const convertBtn = document.getElementById("convertBtn");
const book = document.getElementById("book");

convertBtn.addEventListener("click", loadPDF);

async function loadPDF(){

    alert("بدأ التحويل");

}
*/
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
            height:600
        }
    );

    const pages = [];

    for(let i=1;i<=6;i++){

        const div = document.createElement("div");

        div.innerHTML =
        "<h2 style='text-align:center;margin-top:250px;'>الصفحة "+i+"</h2>";

        pages.push(div);

    }

    flipBook.loadFromHTML(pages);

}
/*async function loadPDF(){

    if(typeof St === "undefined"){
        alert("مكتبة PageFlip لم يتم تحميلها");
        return;
    }*/

    alert("مكتبة PageFlip جاهزة ✅");

}
