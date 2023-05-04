<script lang="ts">
  import { doc, addDoc, collection } from "firebase/firestore";
  import { DB } from "../firebase";

  export let tasks = {
    title: "",
    description: "",
  };

  export async function handleSubmit() {
    try {
      await addDoc(collection(DB, "tasks"), tasks);
      alert("tarea subida");
    } catch (error) {
      console.error("No fue posible subir la tarea");
      alert("Error al subir la tarea");
    }
  };
</script>

<main>
  <div>Formulario de tarea</div>
  <form on:submit|preventDefault={handleSubmit}>
    <label>Title</label>
    <input
      bind:value={tasks.title}
      type="text"
      name=""
      placeholder="Escribe un titulo"
    />

    <label for="description">Description</label>
    <textarea
      bind:value={tasks.description}
      id="description"
      placeholder="Escribe una descripcion"
      rows="3"
    />
    <button>Guardar Tarea</button>
  </form>
</main>

<style>
</style>
