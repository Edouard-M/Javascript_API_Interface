

const text = document.querySelector("#get_text");

const text_container = document.querySelector("#text_container");

document.querySelector('#get_button').onclick = function(){

  let datas = null;

  text_container.innerText = null;
  
  const request = new Request("http://127.0.0.1:8000/notes/", {
    method: "GET",
    //body: '{"foo": "bar"}',
  });

  fetch(request)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Something went wrong on API server!");
      }
    })
    .then((response) => {
      console.debug(response);
      console.log(response);
      datas = response;
      text.innerText = datas.length + " Note(s)";

      datas.forEach(function(data){
        const new_text = document.createElement("p");
        new_text.innerText = data.title;
        text_container.append(new_text);
      });

    })
    .catch((error) => {
      console.error(error);
    });
}



const h2_test = document.querySelector("#h2_test");
const test_text = document.querySelector("#test_text");

document.querySelector("#test_button").onclick = function () {
  const text = test_text.value;
  h2_test.innerText = text;
}



function test_func(p1, p2){
  return p1 + p2;
} 

console.log(test_func(1,2))

