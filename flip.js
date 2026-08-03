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

    if(typeof St === "undefined"){
        alert("مكتبة PageFlip لم يتم تحميلها");
        return;
    }

    alert("مكتبة PageFlip جاهزة ✅");

}
