<script setup lang="ts">
const task = ref("");
const tasks = ref<Array<string>>([]);

const focusInput = () => {
  const input = document.querySelector(".taskInput") as HTMLInputElement;
  if (!input) return;
  input.focus();
};

const addTask = () => {
  tasks.value.unshift(task.value);
  task.value = "";
  const li = document.querySelector(".liCool");
  if (!li) {
    focusInput();
    return;
  }
  li.classList.add("liCool-enter-active");
  li.addEventListener("animationend", () => {
    li.classList.remove("liCool-enter-active");
  });
  focusInput();
};
</script>

<template>
  <div
    class="w-full min-h-screen bg-slate-900 flex items-center justify-center"
  >
    <div class="h-full w-full flex flex-col gap-10 justify-center items-center">
      <div class="flex text-slate-100">
        <h1 class="text-7xl lg:text-9xl font-bold">TODO</h1>
        <span class="lg:text-5xl font-light">APP</span>
      </div>

      <div
        class="flex w-[90%] md:w-2/4 flex-col lg:flex-row items-center gap-3"
      >
        <textarea
          v-model="task"
          placeholder="Nueva tarea"
          class="taskInput w-full"
          autofocus
        >
        </textarea>

        <button @click="addTask" class="addButton coolEffect">Agregar</button>
      </div>

      <div class="w-full flex flex-col justify-center items-center">
        <div class="w-full flex items-center justify-center">
          <ul
            class="flex mx-5 flex-wrap gap-3 p-5 items-center overflow-y-auto overscroll-x-none w-full"
          >
            <li v-for="(task, i) in tasks" :key="i" class="liCool">
              <div class="w-full h-full flex justify-between">
                <span>{{ task }}</span>
              </div>
            </li>

            <li class="liCool">
              <div
                class="w-full h-full flex justify-between items-center text-center"
              >
                <p class="text-center w-full">My first Task ✅</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");

body {
  font-family: "Montserrat", sans-serif;
}

.addButton {
  @apply w-full md:max-w-[200px] px-16 p-3 bg-yellow-600 text-white rounded-md;
}

.taskInput {
  @apply px-4 p-3 bg-white text-slate-800 rounded-md shadow-md;

  &:focus {
    @apply outline-none ring-2 ring-yellow-600;
  }
}

.liCool {
  @apply w-full md:w-44 h-48 bg-slate-800 text-white px-4 p-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out;

  &:hover {
    @apply transform scale-105 brightness-125 border border-yellow-600;
  }

  span {
    @apply w-full h-full flex justify-between items-center text-center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.coolEffect {
  transition: all 0.3s ease-in-out;

  &:hover {
    @apply transform scale-105 brightness-125 border border-yellow-600;
  }
}

.liCool-enter-active {
  animation: animateKeyframw 0.3s ease-in-out;
}

@keyframes animateKeyframw {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  @apply bg-yellow-500 rounded-full;
}

::-webkit-scrollbar-thumb {
  @apply bg-yellow-600 rounded-full;
}
</style>
