"use strict";

// Edit neon text
const editableText = document.getElementById("editable-text");
if (localStorage.getItem("savedText")) {
  editableText.textContent = localStorage.getItem("savedText");
}

editableText.addEventListener("input", function () {
  localStorage.setItem("savedText", this.textContent);
});

// Google Search
const searchBtn = document.getElementById("image-button");
searchBtn.addEventListener("click", function () {
  const searchText = document.getElementById("search").value.trim();
  if (searchText) {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      searchText
    )}`;
    window.open(searchUrl, "_blank");
  }
});

// Google Image Search
const imageSearchBtn = document.getElementById("image-search-button");
imageSearchBtn.addEventListener("click", function () {
  const searchText = document.getElementById("search").value.trim();
  if (searchText) {
    const searchUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
      searchText
    )}`;
    window.open(searchUrl, "_blank");
  }
});

// Google Voice Search
const voiceSearchBtn = document.getElementById("mic-button");
voiceSearchBtn.addEventListener("click", function () {
  const searchBox = document.getElementById("search");
  let recognition;

  if (!recognition) {
    recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onstart = function () {
      voiceSearchBtn.querySelector("i").classList.add("listening");
      searchBox.value = "";
    };

    recognition.onresult = function (event) {
      const transcript = event.results[event.results.length - 1][0].transcript;
      searchBox.value += transcript;
    };

    recognition.onend = function () {
      voiceSearchBtn.querySelector("i").classList.remove("listening");
      performVoiceSearch();
    };
  }

  recognition.start();
});

function performVoiceSearch() {
  const searchText = document.getElementById("search").value.trim();
  if (searchText) {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      searchText
    )}`;
    window.open(searchUrl, "_blank");
  }
}
