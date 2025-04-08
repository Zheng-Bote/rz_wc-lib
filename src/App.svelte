<script lang="ts">

  import Counter from './lib/Counter.svelte'
  import RzHeader from './lib/rz-header.svelte';
  import RzFooter from './lib/rz-footer.svelte';
  import RzModal from './lib/rz-modal.svelte';
  import RzImprint from './lib/rz-imprint.svelte';
  import RzDatetime from './lib/rz-datetime.svelte';
  import RzOnline from './lib/rz-online.svelte';
  import RzButtonTop from './lib/rz-button-top.svelte';
  import RzLoginForm from './lib/rz-loginform.svelte';
  
  
  const languageChannel = new BroadcastChannel("language_channel");
  languageChannel.onmessage = function (event) {
    console.log("languageChannel.onmessage = ", event.data);
  };
  
</script>

<RzHeader brand_title="Hello World"></RzHeader>

<span id="top"></span>
  <div id="rz_button_top">
    <RzButtonTop></RzButtonTop>
  </div>

<h1>Hello World</h1>
<div class="content">

  <h1>Vite + Svelte</h1>


  <div class="card">
    <Counter />
  </div>
  <br>

  <h2>Online</h2>
<RzOnline with_text="yes"></RzOnline>
<br/>
<main>

<article>
  <h2>Login</h2>
  <RzLoginForm></RzLoginForm>
</article>


<h2>Modal</h2>
<RzModal color="green" footer="me"></RzModal>

<h2>Imprint</h2>

<RzImprint></RzImprint>

<h2>Datetime</h2>
<RzDatetime tz="Asia/Shanghai" format="en-GB"></RzDatetime>

<br>
      <h2>Text</h2>
      <p class="txt">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

      </p>
    </main>

</div>

 <br>




<RzFooter></RzFooter>

<style>
.content{
 
  margin: calc(var(--base-padding) * 4);
}
</style>
