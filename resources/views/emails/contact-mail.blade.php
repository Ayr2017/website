<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact-mail</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      font-family: 'Segoe UI', sans-serif;
    }
    main{
      min-height: 100%;
    }
    .container {
      background-color: #012;
      margin: 10px auto;
      padding:10px;
      width:500px;
    }
    .title{
      color:#abc;
    }
    .subheader{
      color:#def
    }
    .description{
      color:#daf
    }
    .info{
      color: rgb(121, 197, 248);
    }
  </style>
</head>

<body>
  <main>
    <div class="container">
      <h1 class="title">From Contact-Mail</h1>
      <h3 class="subheader">Новое письмо от {{$name}}</h3>
      <p class="description">{{$description}}</p>
      <hr>
      <h5 class="info">Телефон: {{$phone}}</h5>
      <h5 class="info">Email: {{$email}}</h5>
    </div>
  </main>
</body>

</html>