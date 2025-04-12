class RzClock extends HTMLElement {
  constructor() {
    super();

    this.clock_width = "300";
    this.timezone = "Europe/Berlin";
    this.format = "de-DE";
    //this.title = "Berlin";

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["clock_width", "timezone", "format", "title"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const TITLE = this.getAttribute("title") || `${this.title}`;
    this.shadowRoot.innerHTML = this.getStyle();
    this.shadowRoot.innerHTML += `<div class="rz_clock"><div class="rz_title">${TITLE}</div>`;
    this.shadowRoot.innerHTML +=
      '<div class="Clock"><div class="hour"><div class="hr" id="hr"></div></div><div class="minute"><div class="min" id="min"></div></div><div class="second"><div class="sec" id="sec"></div></div></div>';
    this.shadowRoot.innerHTML += "</div>";
    const deg = 6;
    const hr = this.shadowRoot.querySelector("#hr");
    const min = this.shadowRoot.querySelector("#min");
    const sec = this.shadowRoot.querySelector("#sec");

    setInterval(() => {
      const myArray = this.getDateTime().split(":");
      let hh = myArray[0] * 30;
      let mm = myArray[1] * deg;
      let ss = myArray[2] * deg;

      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      min.style.transform = `rotateZ(${mm}deg)`;
      sec.style.transform = `rotateZ(${ss}deg)`;
    });
  }

  getDateTime() {
    const FORMAT = this.getAttribute("format") || `${this.format}`;
    const TZ = this.getAttribute("timezone") || `${this.timezone}`;
    this.options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
      timeZone: TZ,
    };

    const currentDate = new Date();
    const DT = new Intl.DateTimeFormat(FORMAT, this.options).format(
      this.currentDate
    );
    return DT;
  }

  getStyle() {
    const clock_width = this.getAttribute("clock_width") || "300";
    const hour = this.getAttribute("clock_width") / 1.4 || "100";
    const minute = this.getAttribute("clock_width") / 1.4 || "100";
    const second = this.getAttribute("clock_width") / 1.4 || "100";

    return `<style>
.rz_title {
width: 100%;
text-align: center;
}

    .Clock {
  width: ${clock_width}px;
  height: ${clock_width}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(img/rz-clock_bg.jpg);
  background-size: cover;
  border: 6px solid #3ac7e0;
  border-radius: 20px;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
    inset 0 -15px 15px rgba(255, 255, 255, 0.05), 0 15px 15px rgba(0, 0, 0, 0.3),
    inset 0 15px 15px rgba(0, 0, 0, 0.3);
}
.Clock:before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 50%;
  z-index: 10000;
}
.Clock .hour,
.Clock .minute,
.Clock .second {
  position: absolute;
}
.Clock .hour,
.hr {
  width: ${hour}px;
  height: ${hour}px;
}
.Clock .minute,
.min {
  width: ${minute}px;
  height: ${minute}px;
}
.Clock .second,
.sec {
  width: ${second}px;
  height: ${second}px;
}
.hr,
.min,
.sec {
  display: flex;
  justify-content: center;
  /*align-items: center;*/
  position: absolute;
  border-radius: 50%;
}
.hr:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 80px;
  background: #ff10a3;
  z-index: 10;
  border-radius: 6px 6px 0 0;
}
.min:before {
  content: "";
  position: absolute;
  width: 4px;
  height: 90px;
  background: rgb(26, 219, 245);
  z-index: 11;
  border-radius: 6px 6px 0 0;
}
.sec:before {
  content: "";
  position: absolute;
  width: 2px;
  height: 90px;
  background: rgb(248, 233, 15);
  z-index: 12;
  border-radius: 6px 6px 0 0;
}
  </style>
`;
  }
}

customElements.define("rz-clock", RzClock);
