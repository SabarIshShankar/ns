const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `<link rel="stylesheet" href="/style.css">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.4/tailwind.min.css">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">

<style>
	.fontnav,
	h2,
	h4,
	h5, .contactf {
		font-family: Inter;
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

	.button2 {
		background-color: blue;
		color: white;
		padding: 16px 20px;		border-radius: 4px;
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


	<div class="w3-container w3-padding-64 w3-theme-l5 px-4" id="contact">
  <div class="w3-row">
    <div class="w3-col m5">
    <div class="w3-padding-16"><span class="w3-xlarge  "><h2>Contact Us<h2></span></div>
      <h4>+91 9003911953</h4>
      <h4>email id</h4>
      <h4><i class="fa fa-map-marker w3-text-teal w3-xlarge"></i>Kaniam Poondi, Tiruppur, TamilNadu</h4>
      <h4><i class="fa fa-phone w3-text-teal w3-xlarge"></i>South India</h4>
      <h4><i class="fa fa-envelope-o w3-text-teal w3-xlarge"></i></h4>
    </div>
    <div class="w3-col m7 contactf">
      <form class="w3-container  w3-padding-16 w3-white" action="https://formspree.io/f/mqkgwvpn" method="POST" target="_blank">
      <div class="w3-section">      
        <label>Name</label>
        <input class="w3-input" type="text" name="Name" required>
      </div>
      <div class="w3-section">      
        <label>Email</label>
        <input class="w3-input" type="text" name="Email" required>
      </div>
      <div class="w3-section">      
        <label>Message</label>
        <input class="w3-input" type="text" name="Message" required>
      </div>  

      <button type="submit" class="w3-right button2">Send</button>
      </form>
    </div>
  </div>
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


class Footer extends HTMLElement{
	constructor(){
		super();
	}
	connectedCallback(){
		const shadowRoot = this.attachShadow({
			mode: 'open'
		});
		shadowRoot.appendChild(footerTemplate.content);
	}
}

customElements.define('footer-component', Footer);