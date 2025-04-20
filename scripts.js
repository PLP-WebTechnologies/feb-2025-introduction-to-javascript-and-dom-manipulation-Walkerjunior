// Change text content dynamically
function changeText() {
    const para = document.getElementById("text-paragraph");
    para.textContent = "🎉 The text has been updated using JavaScript!";
  }
  
  // Modify CSS styles
  function toggleStyle() {
    const title = document.getElementById("main-title");
    title.classList.toggle("highlight");
  }
  
  // Add or remove an element
  function addOrRemove() {
    const container = document.getElementById("container");
    const existing = document.getElementById("dynamicElement");
  
    if (existing) {
      container.removeChild(existing);
    } else {
      const newEl = document.createElement("p");
      newEl.textContent = "✅ This paragraph was added via JavaScript!";
      newEl.id = "dynamicElement";
      container.appendChild(newEl);
    }
  }
  