<svelte:options customElement="rz-modal" /> 

<script lang="ts">
  import { onMount,  onDestroy } from "svelte";

  export let title: string = "Salute";
  export let body: string ="Hello World 你好世界 Hola Mundo Привет мир Hallo Welt!";
  export let footer: string = "";
  export let color: string = "";
  export let do_open: string = "close";

//let showModal: boolean = false;


function closeModal() {
  const modal = document.getElementById('rzmodal');
  if (modal) {
    const dialog = modal.shadowRoot.querySelector("#rz_modal");
    dialog.close();
  }
}

function showModal() {
  const modal = document.getElementById('rzmodal');
  if (modal) {
    const dialog = modal.shadowRoot.querySelector("#rz_modal");
    dialog.showModal({ backdrop: true });
  }
}

onMount(() => {
  closeModal();
});

onDestroy(() => {
	closeModal();
});


</script>

<!-- <button id="rz_modal_button" class="rz_modal_button" onclick={showModal}>
  Open Modal</button> -->

<span class="rz-modal" id="rz-modal">
  <dialog id="rz_modal" class="rz_modal" {do_open}>
    <div id="rz_modal_content" class="rz_modal_content">
      <div id="rz_modal_header" class="rz_modal_header {color}">
        <span onclick="{closeModal}" aria-hidden="true" id="rz_modal_close" class="rz_modal_close {color}">&times;</span> 
        <span>{title}</span>         
      </div>
      <div id="rz_modal_body" class="rz_modal_body">
        <p>{body}</p>
      </div>
      <div id="rz_modal_footer" class="rz_modal_footer {color}">
        <span>{footer}</span>
      </div>
    </div>
  </dialog>
</span>


<style>

@scope (.rz-modal){

  --border-color: oklch(86.69% 0 0);

  dialog {
   /* border: 1px solid var(--border-color);
    border-radius: 10px; */
    border: none;
    background: none;

    min-width: 200px;
    min-height: 100px;
    max-width:400px;
    max-height: 300px;

    margin: auto;
    overflow: auto;
  }
  dialog:not([open]) {
    display: none;
  }
  dialog::backdrop {
    /*background-color: oklch(100% 0 0 / 90%); */
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }

  .rz_modal_close {
    background: var(--background-color);
    color: black;
    float: right;
    /*font-size: 28px;*/
    font-weight: bold;
    padding-right: 5px;
    border-radius: var(--border-radius);
  }
  .rz_modal_close:hover,
  .rz_modal_close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  .rz_modal {
    overflow: auto; /* Enable scroll if needed */
  }
  .rz_modal_content {
    margin: auto;
    padding: 0;
    border: 1px solid var(--transparency);
    border-radius: 10px;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .rz_modal_header, .rz_modal_footer {
    height: fit-content;
    text-align:center;
    align-items: center;

    background-color: var(--background-color);
    color: black;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    
    padding: 5px;
  }
    .rz_modal_body {
    /*padding: 2px 16px;*/
    flex: 1;
    align-items: center;

    height: 100%;
    padding: 5px;
    background-color: var(--background-color);
    text-wrap: pretty;
  }
  .rz_modal_footer {
    background-color: var(--background-color);
    border-top: 1px solid var(--transparency);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    color: var(--color);
    font-size: 0.8rem;
  }
  .rz_modal_footer > span {
    font-size: 0.8rem;
  }

.info{
  background: var(--info-color);
}
.red{
    background: var(--red-color);
}
.yellow{
    background: var(--yellow-color);
    color: var(--color);
}
.green {
    background: var(--green-color);
}
}
</style>
