
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

