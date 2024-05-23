// https://jsonplaceholder.typicode.com/posts

async function readPosts(){
  const postArea = document.querySelector('.posts');
  postArea.innerHTML='Carregando ...';

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await response.json();

  if(json.length > 0){
    postArea.innerHTML = '';

    for(const i in json){
      const postHtml = `<div><h1>${json[i].title}</h1>${json[i].title}</div> <hr>`;
      postArea.innerHTML += postHtml;

    }

  }else{
    postArea.innerHTML = 'Nenhum post para exibir';
  }
}

async function addNewPost(title, body){
  await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      method: 'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        body: body,
        userid: 2
      }),
    }
  );
  // limpa os campos
  document.querySelector('#titleFild').value = '';
  document.querySelector('#bodyFild').value = '';
  
  readPosts()
}

document.querySelector('#insertButton').addEventListener('click', () =>{
  const title = document.querySelector('#titleFild').value;
  const body = document.querySelector('#bodyFild').value;

  if(title && body){
    addNewPost(title,body);
  }else{
    alert('Preencha todos os campos');
  }

});
readPosts();