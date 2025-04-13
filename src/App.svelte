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
  import RzNavmenu from './lib/rz-navmenu.svelte';
  
  
  
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

  <h2>Navmenu</h2>
  <RzNavmenu current_id="main"></RzNavmenu>

</div>






<RzFooter></RzFooter>

<style>
.content{
 
  margin: calc(var(--base-padding) * 4);
}
</style>
