import { LitElement, html, css } from 'lit-element';  

class ToDo extends LitElement {    
	
	//Bind
	static get properties() {		
		return {
			title:{type:String},			
			tareas:{type:Array}
		};
	}	

	static get styles()	
	{
		return css `

			ul{list-style-type:none; padding:0px;}

			li
			{
			   width:100%;
			   height:30px;
			   line-height:30px;	 	
			   border-bottom:1px solid #ccc;			
			}
			
			li:hover{ background:#999; color:#fff;}
		`;
	}

	
	constructor() {
		// Always calls super() first.
		super();

		this.title="";
		this.tareas=[]; //[{'texto':'Pasear el perro','prioridad':1}];
	}

	// Properties code up here	   
	render() {
	
	return html`
		<div>
			<h3>${this.title}</h3>
			<ul>
			${this.tareas.sort(function(t1,t2)
				{
					return t1.prioridad-t2.prioridad; 
				
				}).map(
				function(tarea)
				{
					return html `<li>${tarea.texto}-${tarea.prioridad}</li>`;

				}
			)}
			</ul>
		</div>
		`;
	}

}

customElements.define('to-do', ToDo);

