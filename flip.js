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
const file = fileInput.files[0];

if(!file){
    alert("اختر ملف PDF أولاً");
    return;
}

const data = await file.arrayBuffer();

const pdf = await pdfjsLib.getDocument({
    data:data
}).promise;

alert("عدد صفحات الملف: " + pdf.numPages);

}

