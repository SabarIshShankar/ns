const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `<link rel="stylesheet" href="/style.css">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.4/tailwind.min.css">


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
		font-family: Arial;
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



.int li {
  font-size: 1rem;
  text-transform: uppercase;
  margin: auto;
}
.int li a {
	font-size: 1rem;
  color: #000000;
  transition: 0.1s border linear;
}
.int li a:hover {
	font-size: 1rem;
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
	<div  class="center large-text">
		
<svg width="60" height="60" viewBox="0 0 240 117" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M123 24H216.021" stroke="#0007A6" stroke-width="47" stroke-linecap="round"/>
<path d="M24 93H123.005" stroke="#0007A6" stroke-width="47" stroke-linecap="round"/>
</svg>


			</div>
  </div>



  <input class="menu-btn hidden" type="checkbox" id="menu-btn">
  <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
    
		
		<span class="navicon bg-grey-darkest flex items-center relative"></span>
		
  </label>

  <ul class="menu md:border-none flex justify-end list-reset m-0 w-full md:w-auto right bg-white int">
    
    <li class=" md:border-none">
      <a href="/business" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">BUSINESS</a>
    </li>
		<li class=" md:border-none">
      <a href="/case-studies" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">CASE STUDIES</a>
    </li>
		<li class=" md:border-none">
      <a href="/research" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">RESEARCH</a>
    </li>
		<li class=" md:border-none">
      <a href="/journal" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">JOURNAL</a>
    </li>
		<li class=" md:border-none">
		<div class="flex flex-wrap md:w-auto w-full md:mb-0 mb-4">


              <div class="flex sm:w-auto sm:mt-0 mt-4 sm:mb-0 mb-2 w-full sm:justify-start justify-center">

              <a href="#" class="text-gray-600">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169.063 169.063">
                <path d="M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z"/>
                <path d="M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zM129.921 28.251c-2.89 0-5.729 1.17-7.77 3.22-2.051 2.04-3.23 4.88-3.23 7.78 0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z"/>
              </svg>
            </a>
             </div>
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