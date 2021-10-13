const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `<link rel="stylesheet" href="/style.css">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.4/tailwind.min.css">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">

<style>
	body,
	h1,
	h2,
	h3,
	h4,
	p,
	h5,
	textarea,
	button,
	form {
		font-family: Inter;
		font-weight: 400;
	}

	/*body,h1,h2,h3,h4,p,h5,textarea,button,form{
			font-family: Inter var, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
			font-colour: white;*/
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		font-size: 16px;
	}

	.w3-half img {
		margin-bottom: -6px;
		margin-top: 16px;
		opacity: 0.8;
		cursor: pointer
	}

	.button2 {
		background-color: black;
		color: white;

		font-family: Work Sans;
		font-weight: light;
		border-radius: 3px;

	}

	.button {
		width: 200px;
		background-color: #006aff;
		/* Green */
		border: none;
		color: white;
		padding: 16px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		transition-duration: 0.4s;
		cursor: pointer;
	}

	.button2:hover {
		background-color: white;
		color: black;

	}

	.w3-half img:hover {
		opacity: 1
	}

	.w3-button {
		background-color: white;
		border: none;
		color: black;
		padding: 16px 32px;
		text-align: center;
		font-size: 16px;
		margin: 4px 2px;
		opacity: 0.6;
		transition: 0.3s;
	}

	.boldtext, .font-semibold {
		font-family: 'Work Sans';
		font-weight: 500;
	}
	html{
		scroll-behavior: smooth;
	}
	.center {
  margin: auto;
	text-align: center;
}
.large-text{
	font-size: 30px;
}
.east{
	font-family: DM Serif Display;
}



.int li {
  font-size: 2rem;
  margin: auto;
}
.int li a {
	font-size: 1.2rem;
  color: #000000;
  transition: 0.1s border linear;
}
.int li a:hover {
	font-size: 1.2rem;
  border-bottom: blue 4px solid;
}

.menu{
	transition: 0.3s;
}
::selection {
  color: black;
  background: #8E92FA;
}
h4{
	font-weight: 500
}


</style>


	<div class="relative mb-5 md:flex">

		<nav class="nav flex flex-wrap items-center justify-between px-4">
  <div class=" flex flex-no-shrink items-center py-3 text-grey-darkest ">
	<a href="/index.html">
	<div  class="center large-text east">
		
NextStage


			</div>
			</a>
  </div>



  <input class="menu-btn hidden" type="checkbox" id="menu-btn">
  <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
    
		
		<span class="navicon bg-grey-darkest flex items-center relative"></span>
		
  </label>

  <ul class="menu md:border-none flex justify-end list-reset m-0 w-full md:w-auto right bg-white int">
    
    <li class=" md:border-none">
      <a href="/about" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">About</a>
    </li>
		<li class=" md:border-none">
      <a href="/services" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Our services</a>
    </li>
		<li class=" md:border-none">
      <a href="/work" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Work</a>
    </li>
		<li class=" md:border-none">
      <a href="/contact" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Contact</a>
    </li>
		<li class=" md:border-none">
		<div class="flex flex-wrap md:w-auto w-full md:mb-0 mb-4">


              
            </div>
						</li>
    
  </ul>
</nav>
</div>



	<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"></script>
	<script>
	// grab everything we need
const btn = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar");

// add our event listener for the click
btn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});

</script>
`


class Header extends HTMLElement{
	constructor(){
		super();
	}
	connectedCallback(){
		const shadowRoot = this.attachShadow({
			mode: 'open'
		});
		shadowRoot.appendChild(headerTemplate.content);
	}
}

customElements.define('header-component', Header);