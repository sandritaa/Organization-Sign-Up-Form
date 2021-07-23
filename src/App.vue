<template>
  <Chips v-model="value">
	<template #chip="slotProps">
		<div>
			<span>{{slotProps.value}} - (active) </span>
			<i class="pi pi-user-plus" style="font-size: 14px"></i>
		</div>
	</template>
</Chips>


</template>

<script>
export default {

}
</script>

<style>

</style>