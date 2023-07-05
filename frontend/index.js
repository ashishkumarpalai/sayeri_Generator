async function generateSayeri() {
    const keywordInput = document.getElementById("keyword");
    const keyword = keywordInput.value;
  
    if (!keyword) {
      alert("Please enter a keyword");
      return;
    }
  
    const sayeriContainer = document.getElementById("sayeri");
    const loader = document.createElement("div");
    loader.className = "loader";
    sayeriContainer.innerHTML = "";
    sayeriContainer.appendChild(loader);
  
    try {
      const response = await fetch(`https://sayeri-generator.onrender.com/sayeri?keyword=${keyword}`);
    //   http://localhost:8080/sayeri?keyword=love
      const dataReceived = await response.json();
      sayeriContainer.textContent = dataReceived.sayeri;
    } catch (error) {
        sayeriContainer.textContent = "Failed to fetch sayeri. Please try again later.";
    }
  }