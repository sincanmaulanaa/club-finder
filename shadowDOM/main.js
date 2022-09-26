// Shadow Host
const divElement = document.createElement("div");

// element yang berada didalam shadow DOM
const headingElement = document.createElement("h1");
headingElement.innerText = "Ini merupakan konten didalam shadow DOM";

// melampirkan shadow root pada shadow host
// mengatur mode shadow dengan nilai open
const shadowRoot = divElement.attachShadow({ mode: "open" });

// memasukkan element heading ke dalam root;
shadowRoot.appendChild(headingElement);

// memasukkan element shadow host ke reguler DOM
document.body.appendChild(divElement);

// menambahkan styling shadow DOM
shadowRoot.innerHTML += `
	<style>
		h1 {
			color: green;
		}
	</style>
`;
