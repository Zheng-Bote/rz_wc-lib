const locale_en = "en";
const locale_de = "de";

const cookieText_de =
  'Auch diese Webseite mag Cookies...<small><a href="https://de.wikipedia.org/wiki/HTTP-Cookie" title="Wikipedia: https://de.wikipedia.org/wiki/HTTP-Cookie">Wikipedia</a></small>';
const cookieText_en =
  'This website also likes cookies...<small><a href="https://en.wikipedia.org/wiki/HTTP_cookie" title="Wikipedia: https://en.wikipedia.org/wiki/HTTP-Cookie">Wikipedia</a></small>';

const styleRules = `
.container {
	margin: 0 auto;
	color: rgb(255, 255, 255);
	background-color: rgb(178, 034, 034);
	padding: 1em 1.8em;
	width: 90%;
	font-family: Helvetica, Calibri, Arial, sans-serif;
}
.footer {
	//position: fixed;
	left: 0px;
	bottom:0px;
}
.button {
	color: rgb(255, 255, 255);
	background-color: transparent;
	border-color: rgb(255, 255, 255);
	padding: 5px; 40px;
	margin-right: 50px;
	cursor: pointer;
	float: right;
}
`;

function setCookie(cookieName, cookieValue, expirationDays) {
  var d = new Date();
  d.setTime(d.getTime() + expirationDays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

class RzCookieAlert extends HTMLElement {
  constructor() {
    super();
    this.locale_en = "en";
    this.locale_de = "de";
    this.language = localStorage.getItem("language") || locale_en;
    this.language === "en"
      ? (this._message = this.locale_en)
      : (this._message = this.locale_de); //_language;

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const cookiesAccepted = getCookie("CookieAlert"); //getSessionCookie("cookiesAccepted"); //
    if (cookiesAccepted === "y") {
      this.style.visibility = "hidden";
    } else {
      this.createComponent();
    }
  }

  disconnectedCallback() {
    this.shadowRoot
      .getElementById("clickableItem")
      .removeEventListener("click", this.handleClick);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === "message") {
        this._message = newValue;
        this.updateMessage();
      }
    }
  }

  static get observedAttributes() {
    return ["message"];
  }

  get message() {
    return this._message;
  }

  set message(value) {
    this._message = value;
    this.setAttribute("message", value);
    this.updateMessage();
  }

  updateMessage() {
    try {
      this.shadowRoot.querySelector("span").innerHTML = this._message;
    } catch (e) {}
  }

  createComponent() {
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(styleRules));
    this.shadowRoot.appendChild(style);

    const span = document.createElement("span");
    const div = document.createElement("div");
    div.classList.add("container", "footer");
    div.appendChild(span);

    const closeButton = document.createElement("button");
    closeButton.classList.add("button");
    closeButton.innerText = "Close";
    closeButton.addEventListener("click", () => {
      this.style.visibility = "hidden";
    });
    div.appendChild(closeButton);

    const acceptButton = document.createElement("button");
    acceptButton.classList.add("button");
    acceptButton.innerText = "Accept";
    acceptButton.addEventListener("click", () => {
      this.style.visibility = "hidden";
      setCookie("CookieAlert", "y", 90);
    });
    //acceptButton.addEventListener("click", ()=>{this.style.visibility = "hidden"; setSessionCookie("cookiesAccepted", "y");});

    div.appendChild(acceptButton);

    this.shadowRoot.appendChild(div);

    this.shadowRoot.addEventListener("mouseover", () => {
      div.style.backgroundColor = "rgb(35, 122, 152)";
    });
    this.shadowRoot.addEventListener("mouseout", () => {
      div.style.backgroundColor = "";
    });

    this.updateMessage();
  }
}
customElements.define("rz-cookie-alert", RzCookieAlert);
