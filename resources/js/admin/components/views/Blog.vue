<template>
  <div class="container" v-if="blog">
    <h1>Blog</h1>
    <div class="accordion" id="accordionExample">
      <div class="card" v-for="n in items" :key="n.message">
        <div class="card-header" :id="'headingOne'+n.message">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              :data-target="'#collapseOne'+n.message"
              aria-expanded="true"
              :aria-controls="'collapseOne'+n.message"
            >Collapsible Group Item #1{{n.message}}</button>
          </h2>
        </div>

        <div
          :id="'collapseOne'+n.message"
          class="collapse"
          :aria-labelledby="'headingOne'+n.message"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <div class="card mb-3" style="max-width: 800px;">
              <div class="row no-gutters">
                <div class="col-md-4 d-flex flex-column justify-content-center">
                  <img
                    src="../../../../../public/assets/welcome-top.webp"
                    class="card-img"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p
                      class="card-text"
                    >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                      <small class="text-muted">
                        <a href="#" @click.prevent="ok(n.message)">edit...</a>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <EditPost v-else-if="post" />
</template>

<script>
import EditPost from "./EditPost.vue";
export default {
  components: {
    EditPost,
  },
  data: () => ({
    // blog: true,
    // post: false,
    items: [
      { message: "Foo" },
      { message: "Bar" },
      { message: "Baz" },
      { message: "Lop" },
    ],
  }),
  computed: {
    blog: {
      get() {
        return !Boolean(this.$route.params.id);
      },
      set() {},
    },
    post: {
      get() {
        return Boolean(this.$route.params.id);
      },
      set() {},
    },
  },
  methods: {
    ok(n) {
      this.$router.push(`/admin/blog/${n.toLowerCase()}`);
    },
  },
  watch: {
    $route(to, from) {
      if (this.$route.params.id) {
        this.blog = false;
        this.post = true;
      } else {
        this.blog = true;
        this.post = false;
      }
      console.log(this.$route.params);
    },
  },
  mounted() {},
};
</script>