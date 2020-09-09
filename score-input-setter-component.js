var scoreInputSetterComponent = {
	data() {
		return {
		  context:null,
		  title: 'notSet',
		  step: 1,
		  value: 0,
		  isActive: false
		}
	},
	methods :{
		show(context, title, defaultValue,step=1) {
			this.context = context;
			this.title = title;
			this.value = defaultValue;
			this.step = step;
			this.isActive = true;
		},
		set(value = this.value) {
			this.value = value;
			this.isActive = false;
			this.$emit('value-changed', this)
		}
	},
	template: `	
	<div class="modal" :class="{ 'is-active': isActive }">
	  <div class="modal-background"></div>
	     <div class="modal-card">
			<header class="modal-card-head">
			  <p class="modal-card-title">{{title}}</p>
			  <button class="delete is-large" aria-label="close" @click="isActive = false"></button>
			</header>
			<section class="modal-card-body">
				<div class="field has-addons has-addons-centered">
					<p class="control" @click="value-=step">
						<a class="button"> - </a>
					</p>
					<div class="control">
						<input v-model="value" class="input has-text-centered" :placeholder="title" type="number" :step="step" min="0" max="30"/>
					</div>
					<p class="control" @click="value+=step">
						<a class="button"> + </a>
					</p>
				</div>
			</section>
			<footer class="modal-card-foot">
			  <button class="button is-light" @click="set(false)">Reinitialiser</button>
			  <button class="button is-danger is-light" @click="set(0)">Barrer</button>
			  <button class="button is-info" @click="set()">Sauver</button>
			</footer>
		  </div> 
	  </div>`
}