<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact-mail</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color:#3F51B5;
      font-family: 'Segoe UI', sans-serif;
      min-height:100vh;
    }
    main{
      min-height: 100vh;
    }
    .container {
      display: flex;
      flex-direction: column;
      background-color: #1A237E;
      margin: 10px auto;
      padding:10px;
      flex-basis:500px;
      max-width: 800px;
    }
    .title{
      color:#abc;
      border-bottom: 1px solid #304FFE;
    }
    .subheader{
      color:#def
    }
    .description{
      color:#8C9EFF;
    }
    .info{
      color: #C5CAE9;
    }
  </style>
</head>

<body>
  <main>
    <div class="container">
      <h1 class="title">From Contact-Mail</h1>
      <h3 class="subheader">Новое письмо от {{$name}}</h3>
      <p class="description">{{$description}} </p>
      <span style="width: 100%;"><hr></span>
      
      <h5 class="info">Телефон: {{$phone}}</h5>
      <h5 class="info">Email: {{$email}}</h5>
    </div>
  </main>
</body>

</html>