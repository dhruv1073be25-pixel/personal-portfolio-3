
  const hireBtn = document.querySelector(".btn");
  const nameHeading = document.getElementById("name");

  hireBtn.addEventListener("click", function () {
    alert("Thanks for showing interest! I will contact you soon.");
    nameHeading.style.color = "#00ffcc";
  });

  
  function changeName(newName) {
    document.getElementById("name").innerText = newName;
  }


  changeName("Dhruv Pathak ");

  
  function loadUserData() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(data => {
        document.getElementById("apiData").innerHTML =
          "Name: " + data.name + "<br>Email: " + data.email + "<br>Company: " + data.company.name;
      })
      .catch(error => {
        document.getElementById("apiData").innerText = "Error loading data";
        console.log(error);
      });
  }