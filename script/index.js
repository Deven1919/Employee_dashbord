const formEl = document.getElementById("myform");

// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const name = document.querySelector(".input-name").value;
//   const profile_img = document.querySelectorAll('input[name="prof-img"]');
//   console.log(profile_img);
//   let pf_img;
//   profile_img.forEach((curr) => {
//     if (curr.checked) {
//       pf_img = curr.value;
//     }
//   });
//   console.log(pf_img);
//   const radioButtons = document.getElementsByName("department");
//   console.log(radioButtons);
//   let dp_val;
//   for (let radio of radioButtons) {
//     if (radio.checked) {
//       dp_val = radio.value;
//     }
//   }
//   console.log(dp_val);
//   //////////////////////
//   const salary = document.querySelector("#salary").value;
//   const day = document.querySelector("#day").value;
//   const month = document.querySelector("#month").value;
//   const year = document.querySelector("#year").value;
//   const notes = document.querySelector("#notes").value;
//   if (
//     !name ||
//     !pf_img ||
//     !dp_val ||
//     !salary ||
//     !day ||
//     !month ||
//     !year ||
//     !notes
//   ) {
//     alert("All field are neccessary");
//     return;
//   }
//   const formData = new FormData(formEl);
//   const data = Object.fromEntries(formData);
//   console.log(data);
//   //   const userDetails = {
//   //     name,
//   //     profile_img: pf_img,
//   //     Department: dp_val,
//   //     Salary: salary,
//   //     Start_Date: `${day}-${month}-${year}`,
//   //     Notes: notes,
//   //   };
//   //   localStorage.setItem("key", JSON.stringify(userDetails));
//   const form = document.getElementById("myform");
//   form.reset();
// });

function addDetails() {
  const name = document.querySelector(".input-name").value;
  const profile_img = document.querySelectorAll('input[name="prof-img"]');
  console.log(profile_img);
  let pf_img;
  profile_img.forEach((curr) => {
    if (curr.checked) {
      pf_img = curr.value;
    }
  });
  console.log(pf_img);
  const radioButtons = document.getElementsByName("department");
  console.log(radioButtons);
  let dp_val;
  for (let radio of radioButtons) {
    if (radio.checked) {
      dp_val = radio.value;
    }
  }
  console.log(dp_val);
  //////////////////////
  const salary = document.querySelector("#salary").value;
  const day = document.querySelector("#day").value;
  const month = document.querySelector("#month").value;
  const year = document.querySelector("#year").value;
  const notes = document.querySelector("#notes").value;
  if (
    !name ||
    !pf_img ||
    !dp_val ||
    !salary ||
    !day ||
    !month ||
    !year ||
    !notes
  ) {
    alert("All field are neccessary");
    return;
  }

  const userDetails = {
    name,
    profile_img: pf_img,
    Department: dp_val,
    Salary: salary,
    Start_Date: `${day}-${month}-${year}`,
    Notes: notes,
  };
  localStorage.setItem("key", JSON.stringify(userDetails));
  const form = document.getElementById("myform");
  form.reset();
  //   Redirect();

  console.log(userDetails);
}

function Reset() {
  const reset_form = document.getElementById("myform");
  reset_form.reset();
}

function Redirect() {
  window.location.href = "../pages/dashboard.html";
}
