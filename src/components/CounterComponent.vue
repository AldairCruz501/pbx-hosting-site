<script lang="ts" setup>
</script>

<template>
    <section class="counter-section">
		<div class="container">
			<div class="row">
				<div class="col-6 col-lg-3 text-center mb-4 mb-lg-0">
					<div class="counter">
                        <h2><span class="fw-bold display-4">100 Mills</span>+</h2>
                        <h4 class="mb-0">De minutos mensuales</h4>
                    </div>
				</div>
				<div class="col-6 col-lg-3 text-center mb-4 mb-md-0">
                    <div class="counter">
                        <h2><span class="fw-bold display-4">99.99</span>%</h2>
                        <h4 class="mb-0">Disponibilidad efectiva</h4>
                    </div>
                </div>
                <div class="col-6 col-lg-3 text-center">
                    <div class="counter">
                        <h2><span class="fw-bold display-4">10</span>+</h2>
                        <h4 class="mb-0">Años de experiencia</h4>
                    </div>
                </div>
                <div class="col-6 col-lg-3 text-center">
                    <div class="counter">
                        <h2><span class="fw-bold display-4">5k</span>+</h2>
                        <h4 class="mb-0">Clientes satisfechos</h4>
                    </div>
                </div>
			</div>
		</div>
	</section>
</template>

<style scoped>
    .counter-section {
		background: linear-gradient(12deg, rgba(252, 82, 76, 0.959) 40%, rgba(228, 55, 69, 0.95) 100%), url('/img/counter_bg.webp');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
	.counter {
		padding: 47px 0px;
		border-radius: 5px;
		border: 1px dashed rgba(255, 255, 255, 0.25);
	}
	.counter h2 {
		color: var(--default_color);
		margin-bottom: 20px;
	}
	.counter h4 {
		color: var(--default_color);
	}
</style>