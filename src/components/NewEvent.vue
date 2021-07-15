<template>
  <div class="new-event">
    <span>categories: {{ event.category }}</span>
    <br>
    <span>organizer: {{ event.organizer }}</span>
  </div>
</template>

<script>
export default {
  name: "NewEvent",
  props:{
    event:{
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>
.new-event {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: right;
}

.new-event:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>