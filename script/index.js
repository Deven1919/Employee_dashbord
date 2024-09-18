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
/////////////////////////////////////////////////////////////////////////////////////////
//  const url = new URL(window.location.search);
// const params = url.searchParams;

// const userId = params.get('id'); // '123'
// console.log(userId);
// const optionalParam = params.get('optionalParam'); // 'value' (or null if it doesn't exist)
// console.log(userId)
// console.log(optionalParam);
///////////////////////////////

  const url = window.location.search.replace(
    /[=+\-*/%^&|<>!?~`#@$(){}[\]:;,."'\\]/g,
    ""
  );
  console.log(url);
//////////////////////////////////////
async function addDetails() {
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
  // const url = window.location.search.replace("?", "");
  // console.log(typeof url);
  const details = await fetch(`http://localhost:9000/questions/${url ? url : ""}`, {
    method:url ? "PATCH" :"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  });

  const form = document.getElementById("myform");
  form.reset();
    Redirect();
  console.log(userDetails);
  console.log(details);
}

function Reset() {
  const reset_form = document.getElementById("myform");
  reset_form.reset();
}

function Redirect() {
  window.location.href = "../pages/dashboard.html";
}
