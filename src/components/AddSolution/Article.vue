<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.15.2/dist/sweetalert2.all.min.js"></script>
<script src="/public/js/site.js?v=1637055474"></script>
<script src="/src/assets/js/site.js?v=1637059735"></script>
<script src="/src/assets/js/add-content.js"></script>

<template>
  <div id="app">
    <ckeditor :editor="editor" :disabled="editorDisabled"></ckeditor>
  </div>
</template>

<script src="./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js"></script>
<script>
/* eslint-disable */
import CKEditor from "@ckeditor/ckeditor5-vue2";

export default {
  name: "Article",

  data: () => ({
    editor: CKEditor,
  }),

  mounted() {},

  methods: {
    alert: function () {
      alert();
    }
  },

  computed: {},
};
</script>
