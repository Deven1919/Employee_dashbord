const input = document.querySelector("input");
input.addEventListener("click", function () {
  const section = document.querySelector(".section-header-right");
  section.style.width = "300px";
  input.style.width = "150px";
});

let listEl = document.querySelector("ul");

fetch(`http://localhost:9000/questions`)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((curr) =>
      listEl.insertAdjacentHTML(
        "beforeend",
        `    

        
            <li style="display: flex; justify-content: space-evenly;">
                <span>${curr.name}</span>
                     <span>${curr.gender}</span>
                          <span>${curr.Department}</span>
                               <span>${curr.Salary}</span>
                                <span >${curr.Start_Date}</span>
                               <div class="actions">
                <button  >   <i class="fa fa-trash"  style='font-size:25px;' id="delete" onclick=getId('${curr.id}')></i></button>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24" id="edit" onclick="edit(${curr.id})">
    <path d="M 18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979687 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.292969 6.8789062 L 17.121094 5.7070312 L 18.414062 4.4140625 z M 15.707031 7.1210938 L 16.878906 8.2929688 L 6.171875 19 L 5 19 L 5 17.828125 L 15.707031 7.1210938 z"></path>
</svg>
    </div>
  </li> `
      )
    );
  });

////////// Delete
async function getId(id) {
  console.log(id);
  if (id) {
    const remove = await fetch(`http://localhost:9000/questions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(remove);
  }
}

///////////////////// Edit
function edit(id) {
  console.log(id);
  window.location.href = `http://127.0.0.1:5500/pages/index.html?${id}`;
}
function myFunction() {
  let input, filter, ul, li, span, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.querySelector("ul");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    span = li[i].getElementsByTagName("span")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
