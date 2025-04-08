<svelte:options customElement="rz-datetime" /> 

<script lang="ts">

export let tz:string = "Europe/Berlin";
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

<span class="rz-datetime"><time datetime="{getDT()}">{getDT()}</time></span>