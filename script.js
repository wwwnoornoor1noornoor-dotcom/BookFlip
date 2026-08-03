/* ===========================
   BookFlip 2.0
   script.js
=========================== */

pdfjsLib.GlobalWorkerOptions.workerSrc =
"https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

let pdfDoc = null;
let currentPage = 1;
let totalPages = 0;

const fileInput = document.getElementById("pdfFile");
const convertBtn = document.getElementById("convertBtn");
const canvas = document.getElementById("pdfCanvas");
const ctx = canvas.getContext("2d");

const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");
const pageInfo = document.getElementById("pageInfo");

convertBtn.addEventListener("click", loadPDF);
prevBtn.addEventListener("click", previousPage);
nextBtn.addEventListener("click", nextPage);

async function loadPDF(){

    alert("1");

    const file = fileInput.files[0];

    if(!file){
        alert("الرجاء اختيار ملف PDF");
        return;
    }

    alert("2");

    const data = await file.arrayBuffer();

    alert("3");

    pdfDoc = await pdfjsLib.getDocument({
        data:data
    }).promise;

    alert("4");

    totalPages = pdfDoc.numPages;
    currentPage = 1;

    renderPage(currentPage);

}

async function renderPage(pageNumber){

    const page = await pdfDoc.getPage(pageNumber);

    const viewport = page.getViewport({
        scale:1.5
    });

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({
        canvasContext:ctx,
        viewport:viewport
    }).promise;

    pageInfo.textContent =
    "الصفحة " + pageNumber + " / " + totalPages;

}
function previousPage(){

    if(!pdfDoc) return;

    if(currentPage <= 1){
        return;
    }

    currentPage--;

    renderPage(currentPage);

}

function nextPage(){

    if(!pdfDoc) return;

    if(currentPage >= totalPages){
        return;
    }

    currentPage++;

    renderPage(currentPage);

}

document.addEventListener("keydown",function(e){

    if(e.key==="ArrowLeft"){
        nextPage();
    }

    if(e.key==="ArrowRight"){
        previousPage();
    }

});
if(window.St){
    alert("StPageFlip تم تحميلها بنجاح ✅");
}else{
    alert("StPageFlip لم يتم تحميلها ❌");
}

