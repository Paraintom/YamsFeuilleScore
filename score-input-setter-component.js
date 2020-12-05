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
		show(context, title, defaultValue,step=1, max = 30) {
			this.context = context;
			this.title = title;
			this.value = defaultValue;
			this.step = step;
			this.max = max;
			this.isActive = true;
		},
		set(value = this.value) {
			this.value = value > this.max ? this.max : value;
			this.value = value;
			this.isActive = false;
			this.$emit('value-changed', this)
		},
		stepUpOrDown(isUp) {			
			this.value = isUp ? this.value + this.step : this.value - this.step;
			if(this.value <0)
				this.value = 0;
			if(this.value > this.max)
				this.value = this.max;
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
					<p class="control" @click="stepUpOrDown(false)">
						<a class="button" style="padding: 0px 2.5em;"> - </a>
					</p>
					<div class="control">
						<input v-model="value" class="input has-text-centered" :placeholder="title" type="number" :step="step" min="0" :max="max"/>
					</div>
					<p class="control" @click="stepUpOrDown(true)">
						<a class="button" style="padding: 0px 2.5em;"> + </a>
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