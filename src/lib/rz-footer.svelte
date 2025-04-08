<svelte:options customElement="rz-footer" /> 

<script lang="ts">

export let url_left:string = "/contact.html";
export let url_left_title:string = "Contact";
export let url_middle:string = "/about.html";
export let url_middle_title:string = "about";
export let url_right:string = "/legal.html";
export let url_right_title:string = "Legal Notice";
export let name:string = "ZHENG Robert";
export let year:string = "2023";
export let version:string = "0.2.0";

function getYearString() {
    const DATE = new Date();
    const FULLYEAR = DATE.getFullYear();
    let years = "";

    Number(year) == FULLYEAR
      ? (years = year)
      : (years = year + "-" + FULLYEAR);

    return years;
  }
</script>


<footer id="footer">
  <div class="footer-item-left" id="footer_item_left">
        <a href="{url_left}" title="{url_left_title}" >
          <img
            src="img/icons/mail-open-outline.svg"
            width="15px"
            alt="{url_left_title}"
            title="{url_left_title}"
          />
          {url_left_title}
        </a>
      </div>
      <div class="footer-item-middle" id="footer_item_middle">
        <a href="{url_middle}" title="{url_middle_title}">
        &copy; {getYearString()} {name} v{version}
        </a>
        </div>
      <div class="footer-item-right" id="footer_item_right">
        <a href="{url_right}" title="{url_right_title}">
          <img
            src="img/icons/information-outline.svg"
            width="15px"
            alt="{url_right_title}"
            title="{url_right_title}"
            id="information"
          />
          {url_right_title}
        </a>
      </div>
</footer>


<style>
  footer{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "left middle right";
    
    width: 100%;
    height: 25px;

  background-color: var(--background-color-footer);
  color: var(--font-color-footer);

    /*padding: 5px;*/
    font-size: var(--font-size-small);
    
    position: fixed;
    bottom: 0;

    & a:link,
    a:active,
    a:visited {
      color: var(--font-color);
      /*font-style: italic;*/
      text-decoration: none;
    }
    & a:hover {
      text-decoration: underline;
      text-decoration-style: solid;
      /* text-decoration-thickness: 0.1em; */
      text-decoration-color: light-dark(blue, lightblue);
    }

    & img {
        vertical-align: middle;
      }

    & .footer-item-left,.footer-item-middle,.footer-item-right {
      display: block;
      align-content: center;
      text-align: center;
      opacity: 0.5;
    }
       
    & .footer-item-left {
      grid-area: left;

    }
    & .footer-item-middle {
      grid-area: middle;

    }
    & .footer-item-right {
      grid-area: right;

    }
  }

</style>