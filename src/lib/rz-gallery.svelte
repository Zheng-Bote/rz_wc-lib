<svelte:options customElement="rz-gallery" /> 

<script lang="ts">
export let img:string;
export let title:string;
export let desc:string;

</script>


<div class="rz-img-gallery-item">
  <figure>
    <img src="{img}" alt="{img}" title="{img}" />
    <figcaption>
      <h3>{title}</h3>
      {desc}
    </figcaption>
  </figure>
</div>

<style>
/*
:root {
  --rz-gallery-border: 1px solid black;
  --rz-gallery-gap: 1.5em;
  --rz-gallery-item-border-radius: 0.4em;
  --rz-gallery-items-per-row: 1;
}

.rz-img-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: var(--rz-gallery-gap);
}

@media only screen and (width >= 1024px) {
  .rz-img-gallery {
    --rz-gallery-items-per-row: 4;
  }
}
@media only screen and (768px < width < 1024px) {
  .rz-img-gallery {
    --rz-gallery-items-per-row: 3;
  }
}
@media only screen and (540px < width < 768px) {
  .rz-img-gallery {
    --rz-gallery-items-per-row: 2;
  }
}
*/

img {
  max-width: 100%;
  vertical-align: middle;
  height: auto;
}

.rz-img-gallery-item {
  flex: 0 0
    calc(
      100% / var(--rz-gallery-items-per-row) - var(--rz-gallery-gap) *
        (var(--rz-gallery-items-per-row) - 1) / var(--rz-gallery-items-per-row)
    );

  border: var(--rz-gallery-border);
  border-radius: var(--rz-gallery-item-border-radius);

  & figure {
    margin: 0;
  }

  & figcaption {
    /*margin: 0.5rem;*/
    padding: 0.5rem;
    background-color: var( --rz-gallery-caption-bg-color);
    color: var(--rz-gallery-caption-text-color);

    border-bottom-left-radius: var(--rz-gallery-item-border-radius);
    border-bottom-right-radius: var(--rz-gallery-item-border-radius);
  }

  & img {
    aspect-ratio: 3 / 2;
    object-fit: contain;
    border-radius: var(--rz-gallery-item-border-radius);
  }

  &:hover {
    figcaption {
      opacity: 1;
    }
  }
}

</style>