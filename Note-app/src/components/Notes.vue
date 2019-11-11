<template>
  <!-- note list -->
  <div class="notes">
    <div class="note" :class="{ full: !grid }" v-for="(note, index) in notes" :key="note.id">
      <div class="note-header" :class="{ full: !grid }">
				<input type="text"
				v-if="note.edit"
				v-model="note.title"
				@keyup.enter= "saveNote(index)"
				@keyup.esc= "abortEdit()"
				 />
        <div style="display:flex; justify-content: space-between; width: 100%;" v-else>
        	<p
					:class="note.importance"
					@click=" !editOneNote ? editNote(index): '' ">
					{{ note.title }}
					</p>
	        <p style="cursor: pointer;" @click="removeNote(index)">x</p>
        </div>


      </div>

      <div class="note-body">
        <textarea v-if="note.edit" v-model="note.descr" ></textarea>
        <p v-else>{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			editOneNote: false,
			tempNote: null
		}
	},
  props: {
    notes: {
      type: Array,
      required: true
    },
    grid: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    removeNote(index) {
      console.log(`Note id - ${index} removed`);
      this.$emit("remove", index);
    },
    editNote(index) {
				// изменяем флаг для запрета редактирования при
			this.editOneNote = true
			// сохраняем исходные значения перед началом редактирования
			this.tempNote = Object.assign({}, this.notes[index])
			// разрешаем редактирование выбранного элемента
			this.notes[index].edit = true

		},
		saveNote(index) {

			this.notes[index].date = new Date(Date.now()).toLocaleString()
			// отправляем в родительский компонент отредактированные данные
			this.$emit('editNote', this.notes[index] )
			// разрешаем редактирование следующего элемента
			this.editOneNote = false
		},
		abortEdit() {
			// отправляем в родительский компонент сохранённые данные
			this.$emit('editNote', this.tempNote )
			// сбрасываем сохранённые данные
			this.tempNote = null
			// разрешаем редактирование следующего элемента
			this.editOneNote = false
		}

  }
};
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
  &.full {
    width: 100%;
    text-align: center;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 22px;
    &:first-child {
      cursor: pointer;
    }
  }
  .standart {
    color: #402caf;
  }
  .important {
    color: #e4f314;
  }
  .veryImportant {
    color: #d30d3f;
  }
  svg {
    margin-right: 12px;
    color: #999999;
    &.active {
      color: #402caf;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &.full {
    justify-content: center;
    p {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: 0 10px;
    .wrapper__search {
      margin: 10px 0;
      input {
        min-width: 340px;
      }
    }
  }
}
.note-body {
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999999;
  }
}
</style>
