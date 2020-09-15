<template>
  <div class="container">
    <h1>Edit post</h1>
    <div class="row">
      <div class="col-sm-12 col-lg-6 col-md-6">
        One of three columns
        <img
          src="../../../../../public/assets/welcome-top.webp"
          alt="..."
          class="img-thumbnail"
        />
      </div>
    </div>
    <div class="row">
      <form method="POST" class="col-sm-12 col-md-12 col-lg-8">
        <div class="input-group my-3">
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
            />
            <label class="custom-file-label" for="inputGroupFile01">Выберите файл</label>
          </div>
        </div>
        <div class="my-3">
          <label for="validationTextarea">Заголовок</label>
          <input
            type="text"
            class="form-control"
            placeholder="Введите название заголовка"
            aria-label="Recipient's username with two button addons"
            aria-describedby="button-addon4"
          />
        </div>
        <div class="my-3">
          <label for="validationTextarea">Текст</label>
          <textarea
            class="form-control"
            id="validationTextarea"
            placeholder="Введите текст поста"
            style="min-height:200px"
            required
          ></textarea>
          <div class="invalid-feedback">Please enter a message in the textarea.</div>
        </div>
        <div class="d-flex">
          <router-link to="/admin/blog" class="ml-auto">
            <button type="submit" class="btn btn-danger ">Отменить</button>
          </router-link>
          <button type="submit" class="btn btn-primary ml-3">Сохранить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>