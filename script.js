

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
