import { LitElement, html, css } from 'lit-element';  

class ToDoTask extends LitElement {    
	
	static get properties() {
                return {
                        tarea: {type: String}
                };
        }

	static get styles()
	{
		return csss `
			
		`;
	}


        constructor() {
                // Always calls super() first.
                super();
                this.tarea='';
        }
	
	// Properties code up here	   
	render() {

	return html`
		<li>
			${this.tarea}
		</li>
		`;
	}

}

customElements.define('to-do-task', ToDoTask)
