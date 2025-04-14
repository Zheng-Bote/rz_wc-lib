<svelte:options customElement="rz-datetime" /> 

<script lang="ts">

export let tz:string = "Europe/Berlin";
export let show_tz_pre:string = "no";
export let show_tz_post:string = "no";
export let show_tz_top:string = "no";
export let format:string = "de-DE";
export let fulldatetime:string = "yes";
export let justdate:string = "no";
export let justtime:string = "no";

let options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
      timeZone: tz,
    };

function getDT() {


    if (fulldatetime === "yes") {
      options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: tz,
      };
    }
    if (justdate === "yes") {
      options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timeZone: tz,
      };
    }
    if (justtime === "yes") {
      options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: tz,
      };
    }

    const currentDate = new Date();
    const DT = new Intl.DateTimeFormat(format, options).format(
      currentDate
    );

    return DT;
  }
</script>

<span class="rz-datetime">
  {#if show_tz_top === "yes"}
    <span class="tz">{tz}</span><br>
  {/if}
  {#if show_tz_pre === "yes"}
    <span class="tz">{tz}&nbsp;</span>
  {/if}
  <time datetime="{getDT()}">{getDT()}</time>
  {#if show_tz_post === "yes"}
    <span class="tz">&nbsp;{tz}</span>
  {/if}
</span>