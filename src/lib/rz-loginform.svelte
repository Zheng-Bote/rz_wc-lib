<svelte:options customElement="rz-loginform" />

<script lang="ts">

</script>


<div class="rz-loginform">
  <form class="form" action="#" method="post">
    <input type="hidden" name="csrf_cookie" id="csrf_cookie" value="" />
    <fieldset class="account_details">
      <legend>Login</legend>
      <label for="username">Username:</label>
      <input
        type="email"
        name="username"
        id="username"
        placeholder="Username"
        autocomplete="username"
        title="Please enter a valid email address"
        required
        minlength="3"
      />
      <label for="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        autocomplete="current-password"
        required
        minlength="8"
      />

    <button type="submit" name="btn_submit" id="btn_submit">
      Login
    </button>    </fieldset>
  </form>
</div>

<style>
@scope (.rz-loginform){
  form {
    width: 300px;
    margin: 50px auto;
  }  

  fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px;;
    border: var(--border-width) var(--border-style) var(--border-color);
    border-radius: var(--border-radius);
  }

  legend, label {
    font-size: var(--font-size-small);
  }
  legend {
    padding: var(--base-padding);
  }
  label {
    width: 100%;
  }

  input {
    font-size: var(--font-size);
    width: 100%;

    border: var(--border-width) var(--border-style) var(--border-color);
    border-radius: var(--border-radius);
    padding: 2px;
    margin-bottom: 10px;
  }
  input:required:valid {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAepJREFUeNrEk79PFEEUx9/uDDd7v/AAQQnEQokmJCRGwc7/QeM/YGVxsZJQYI/EhCChICYmUJigNBSGzobQaI5SaYRw6imne0d2D/bYmZ3dGd+YQKEHYiyc5GUyb3Y+77vfeWNpreFfhvXfAWAAJtbKi7dff1rWK9vPHx3mThP2Iaipk5EzTg8Qmru38H7izmkFHAF4WH1R52654PR0Oamzj2dKxYt/Bbg1OPZuY3d9aU82VGem/5LtnJscLxWzfzRxaWNqWJP0XUadIbSzu5DuvUJpzq7sfYBKsP1GJeLB+PWpt8cCXm4+2+zLXx4guKiLXWA2Nc5ChOuacMEPv20FkT+dIawyenVi5VcAbcigWzXLeNiDRCdwId0LFm5IUMBIBgrp8wOEsFlfeCGm23/zoBZWn9a4C314A1nCoM1OAVccuGyCkPs/P+pIdVIOkG9pIh6YlyqCrwhRKD3GygK9PUBImIQQxRi4b2O+JcCLg8+e8NZiLVEygwCrWpYF0jQJziYU/ho2TUuCPTn8hHcQNuZy1/94sAMOzQHDeqaij7Cd8Dt8CatGhX3iWxgtFW/m29pnUjR7TSQcRCIAVW1FSr6KAVYdi+5Pj8yunviYHq7f72po3Y9dbi7CxzDO1+duzCXH9cEPAQYAhJELY/AqBtwAAAAASUVORK5CYII=);
    background-position: right top;
    background-repeat: no-repeat;
  }
  input:user-invalid {
    border: 1px solid red;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAeVJREFUeNqkU01oE1EQ/mazSTdRmqSxLVSJVKU9RYoHD8WfHr16kh5EFA8eSy6hXrwUPBSKZ6E9V1CU4tGf0DZWDEQrGkhprRDbCvlpavan3ezu+LLSUnADLZnHwHvzmJlvvpkhZkY7IqFNaTuAfPhhP/8Uo87SGSaDsP27hgYM/lUpy6lHdqsAtM+BPfvqKp3ufYKwcgmWCug6oKmrrG3PoaqngWjdd/922hOBs5C/jJA6x7AiUt8VYVUAVQXXShfIqCYRMZO8/N1N+B8H1sOUwivpSUSVCJ2MAjtVwBAIdv+AQkHQqbOgc+fBvorjyQENDcch16/BtkQdAlC4E6jrYHGgGU18Io3gmhzJuwub6/fQJYNi/YBpCifhbDaAPXFvCBVxXbvfbNGFeN8DkjogWAd8DljV3KRutcEAeHMN/HXZ4p9bhncJHCyhNx52R0Kv/XNuQvYBnM+CP7xddXL5KaJw0TMAF8qjnMvegeK/SLHubhpKDKIrJDlvXoMX3y9xcSMZyBQ+tpyk5hzsa2Ns7LGdfWdbL6fZvHn92d7dgROH/730YBLtiZmEdGPkFnhX4kxmjVe2xgPfCtrRd6GHRtEh9zsL8xVe+pwSzj+OtwvletZZ/wLeKD71L+ZeHHWZ/gowABkp7AwwnEjFAAAAAElFTkSuQmCC);
    background-position: right top;
    background-repeat: no-repeat;
    -moz-box-shadow: none;
  }  

  button {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: none;
    outline: none;
    background-color: grey;
    color: white;
   }
   button:hover {
    cursor: pointer;
   }
}

</style>