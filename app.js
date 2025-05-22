const video = document.getElementById("preview");
const result = document.getElementById("result");
const SHEET_URL = "https://script.google.com/macros/s/AKfycbwmIpxffPQ0Sz8E79Rybw3x2_0ZoQzom2IU92oNMZ_EilW_3DA1biwMvxm_WfmRKnFG/exec"; // Replace this with your actual URL

const scanner = new QrScanner(video, async (content) => {
  result.textContent = "Scanned: " + content;

  // Send to Google Sheets
  await fetch(SHEET_URL, {
    method: "POST",
    body: JSON.stringify({ qrData: content }),
    headers: { "Content-Type": "application/json" },
  });

  scanner.stop();
}, { returnDetailedScanResult: true });

scanner.start();

// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
