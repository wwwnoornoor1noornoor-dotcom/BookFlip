
pdfjsLib.GlobalWorkerOptions.workerSrc =
"https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

async function convertPDF() {

const file = document.getElementById("pdfFile").files[0];

if (!file) {
alert("الرجاء اختيار ملف PDF أولاً.");
return;
}

const data = await file.arrayBuffer();

const pdf = await pdfjsLib.getDocument({data}).promise;

const page = await pdf.getPage(1);

const canvas = document.getElementById("pdfCanvas");

const ctx = canvas.getContext("2d");

const viewport = page.getViewport({scale:1.5});

canvas.width = viewport.width;
canvas.height = viewport.height;

await page.render({
canvasContext:ctx,
viewport:viewport
}).promise;

alert("تم عرض الصفحة الأولى بنجاح 🎉");
}

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
/*
async function loadPDF(){
alert("تم الضغط على زر التحويل");
    const file = fileInput.files[0];

    if(!file){
        alert("الرجاء اختيار ملف PDF");
        return;
    }

    const data = await file.arrayBuffer();

    pdfDoc = await pdfjsLib.getDocument({
        data:data
    }).promise;

    totalPages = pdfDoc.numPages;
    currentPage = 1;

    renderPage(currentPage);

}*/

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

}function previousPage(){

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


/* ===========================
   BookFlip 3.0
=========================== */
/*
pdfjsLib.GlobalWorkerOptions.workerSrc =
"https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

const fileInput = document.getElementById("pdfFile");
const convertBtn = document.getElementById("convertBtn");
const book = document.getElementById("book");
const pageInfo = document.getElementById("pageInfo");
const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");

let pageFlip = null;
let pdfDoc = null;

convertBtn.addEventListener("click", loadBook);

async function loadBook(){

    const file = fileInput.files[0];

    if(!file){
        alert("اختر ملف PDF أولاً");
        return;
    }

    const data = await file.arrayBuffer();

    pdfDoc = await pdfjsLib.getDocument({
        data:data
    }).promise;

    book.innerHTML = "";

    const pages = [];

    for(let i=1;i<=pdfDoc.numPages;i++){

        const page = await pdfDoc.getPage(i);

        const viewport = page.getViewport({
            scale:1.5
        });

        const canvas = document.createElement("canvas");

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
            canvasContext:canvas.getContext("2d"),
            viewport:viewport
        }).promise;

        const wrapper = document.createElement("div");

        wrapper.className = "page";

        wrapper.appendChild(canvas);

        book.appendChild(wrapper);

        pages.push(wrapper);

    }
   
    }

    if(pageFlip){
        pageFlip.destroy();
    }

    pageFlip = new St.PageFlip(book,{
        width:450,
        height:600,
        size:"stretch",
        minWidth:300,
        maxWidth:1000,
        minHeight:400,
        maxHeight:1400,
        showCover:false,
        mobileScrollSupport:true
    });

    pageFlip.loadFromHTML(
        document.querySelectorAll(".page")
    );

    pageInfo.textContent =
        "الصفحة 1 / " + pdfDoc.numPages;

    pageFlip.on("flip", function(e){

        pageInfo.textContent =
            "الصفحة " +
            (e.data + 1) +
            " / " +
            pdfDoc.numPages;

    });

}

prevBtn.addEventListener("click",function(){

    if(pageFlip){
        pageFlip.flipPrev();
    }

});

nextBtn.addEventListener("click",function(){

    if(pageFlip){
        pageFlip.flipNext();
    }

});*/
