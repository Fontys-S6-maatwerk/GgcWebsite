<script>
/* eslint-disable */
</script>

<template>
<div class="page-header flex align-center py-sm-0 py-lg-60 py-md-20 py-120">
	<img class="circles circles-header-left" data-src="../../assets/images/circles/circles.png" alt src="../../assets/images/circles/circles.png"/>
	<img class="circles circles-header-right rotate-190" data-src="../../assets/images/circles/circles.png" alt src="../../assets/images/circles/circles.png"/>
	<div class="container py-sm-40">
		<div class="content">
			<div class="row">
				<div class="col-md-10">
					<h1 class="mb-md-20 mb-40">{{sdg.id}}. {{sdg.name}}</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-xl-6 col-lg-8"><p class="">{{sdg.description}}</p></div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
/* eslint-disable */

export default {

props: ['sdg']
};
</script>


<style>
</style>
