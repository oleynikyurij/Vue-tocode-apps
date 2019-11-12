<template>
  <!-- new note -->
  <div class="new-note">
    <label>Title</label>
    <input v-model="note.title" type="text" />
    <label>Description</label>
    <textarea v-model="note.descr"></textarea>
    <p class="importance__title">Setting importance</p>
    <div class="importance">
      <div class="importance__item">
        <label style= "color: #402caf;" for="st">standart</label>
        <input type="radio" name="importangs" id="st" v-model="note.importance" value="standart" />
      </div>
      <div class="importance__item">
        <label style= "color: #e4f314;" for="imp">important</label>
        <input type="radio" name="importangs" id="imp" v-model="note.importance" value="important" />
      </div>
      <div class="importance__item">
        <label style= "color: #d30d3f;" for="vimp">very important</label>
        <input
          type="radio"
          name="importangs"
          id="vimp"
          v-model="note.importance"
          value="veryImportant"
        />
      </div>
    </div>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    addNote() {
      this.$emit("addNote", this.note);
    }
  }
};
</script>

<style lang="scss">
.new-note {
  text-align: center;
}
.importance__title {
  margin: 20px 0 0;
}
.importance {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
	padding: 20px;

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    label {
      margin-bottom: 0;
      margin-right: 10px;
    }
    input {
      width: auto;
      margin-bottom: 0;
    }
	}
	@media screen and (max-width: 768px) {
		flex-direction: column;
		.importance__item {
			margin-bottom: 10px;
			justify-content: center;
		}
  }
}
</style>
