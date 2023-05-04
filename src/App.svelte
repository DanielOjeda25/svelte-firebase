<script lang="ts">

let tasks = {
  title : '',
  description :''
}
</script>

<main>
  <div>Formulario de tareas</div> 
  <form>
    <label for="name">Titulo de la Tarea</label>
    <input type="text" id="name" placeholder="Escribe un titulo">

    <label for="description">Descripcion de la Tarea</label>
    <textarea id="description" placeholder="Escribe una descripcion" rows="3"></textarea>
  </form>
</main>

<style>
</style>
