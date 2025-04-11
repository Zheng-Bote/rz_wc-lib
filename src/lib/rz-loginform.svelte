<svelte:options customElement="rz-loginform" />

<script lang="ts">
  import { onMount } from 'svelte';

  export let login_url: string = 'http://localhost:8080/get_json';
  let csrf_cookie: string = 'csrf_cookie';
  let csrfCookie: any;
  let csrfInput:any;
  
  let password:string = "";
  let username:string = "";
  let errorMsg:string = "";

  let isLoading:boolean = false;
  let isSuccess:boolean = false;
  let hasResponseError:boolean = false;

  let user_en = "Username";
  let user_de = "Benutzername";
  let user:string = user_en;

  let msg_email_en = "Please enter a valid email address";
  let msg_email_de = "Bitte tragen Sie eine gültige email Addresse ein";
  let msg_email:string = msg_email_en;

  let msg_support_en = "Please contact your Support";
  let msg_support_de = "Bitte wenden Sie sich an Ihren IT-Support";
  let msg_support:string = msg_support_en;


  let error_en = "Error";
  let error_de = "Fehler";
  let error: string = error_en;

  let logged_in_en = "You've been successfully logged in";
  let logged_in_de = "Sie wurden erfolgreich angemeldet";
  let logged_in = logged_in_en;

  let login_en = "Login";
  let login_de = "Anmeldung";
  let login:string = login_en;

  let log_in_en = "log-in";
  let log_in_de = "anmelden";
  let log_in:string = log_in_en;

  let pwd_en = "Password";
  let pwd_de = "Passwort";
  let pwd:string = pwd_en;

  let msg_pwd_en = "Please enter your password";
  let msg_pwd_de = "Bitte tragen Sie Ihr Passwort ein";
  let msg_pwd:string = msg_pwd_en;

    function setLanguage(){
    let language = localStorage.getItem("language") || "en";
  
    switch(language){
      case "de":{
        user = user_de;
        msg_email = msg_email_de;
        msg_support = msg_support_de;
        error = error_de;
        logged_in = logged_in_de;
        login = login_de;
        pwd = pwd_de;
        msg_pwd = msg_pwd_de;
        log_in = log_in_de;
        break;
      }
      default:{
        user = user_en;
        msg_email = msg_email_en;
        msg_support = msg_support_en;
        error = error_en;
        logged_in = logged_in_en;
        login = login_en;
        pwd = pwd_en;
        msg_pwd = msg_pwd_en;
        log_in = log_in_en;
        break;
      }
    }
  }

  const handleSubmit = () => {

    csrfCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith(csrf_cookie));
    if (csrfCookie) {
      console.info("onMount csrfCookie");
      const csrfValue = csrfCookie.split('=')[1];
      csrfCookie = csrfValue;
      console.info("onMount csrfCookie", csrfCookie);
      csrfInput = document.getElementById('csrf_cookie') as HTMLInputElement;
      if (csrfInput) {
        csrfInput.value = csrfValue;
      }
    }


    console.info(`username -${username}- pwd -${password}- cookie -${csrfCookie}-`);
    isLoading = true;

    if(csrfCookie === "" || csrfCookie === "undefined") {
      csrfCookie = "empty";
      console.info("csrfCookie 0: ", csrfCookie);
    }

    const data = {user: username, "pwd": password, "token": csrfCookie};
    const jsonData =   JSON.stringify(data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const response = fetch(login_url, {
	    method: 'POST', 
      headers: headers,
      body: jsonData
    })
    .then(response => {
      if (!response.ok) {
        errorMsg = `System ${error}: ${response.status}. ${msg_support}.`;
        hasResponseError = true;
        isLoading = false;
        throw new Error(`HTTP ${error}! status: ${response.status}`);
      }
      return response.json();
    })
    .then(responseData => {
      isSuccess = true;
      isLoading = false;
      return responseData;  
    })
    .catch(error => {
      console.error('Error:', error);
      errorMsg = `System ${error}: ${error}. ${msg_support}.`;
      hasResponseError = true;
      isLoading = false;
    });


  };


  onMount(() => {
    //document.cookie = "csrf_cookie=John Doe; expires=Thu, 18 Dec 2025 12:00:00 UTC";
    setLanguage();
    csrfCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith(csrf_cookie));
    if (csrfCookie) {
      const csrfValue = csrfCookie.split('=')[1];
      csrfCookie = csrfValue;
      csrfInput = document.getElementById('csrf_cookie') as HTMLInputElement;
      if (csrfInput) {
        csrfInput.value = csrfValue;
      }
    }
  });
</script>


<div class="rz-loginform">
  <form class="form" on:submit|preventDefault={handleSubmit}>
    {#if isSuccess}
      <div class="success">
        <img src="img/icons/ok.svg" alt="ok" />
        &nbsp;
        {logged_in}.
      </div>
    {:else}
      <input type="hidden" name="csrf_cookie" id="csrf_cookie" value="" />
      <fieldset class="account_details">
        <legend>{login}</legend>
        <label for="username">{user}:</label>
        <input
          type="email"
          name="username"
          id="username"
          autocomplete="username"
          title="{msg_email}"
          required
          minlength="3"
          bind:value={username}
        />
        <label for="password">{pwd}:</label>
        <input
          type="password"
          name="password"
          id="password"
          autocomplete="current-password"
          title="{msg_pwd}"
          required
          minlength="8"
          bind:value={password}
        />

        <button type="submit" name="btn_submit" id="btn_submit">
          {#if isLoading}
            {login}...<div class="dots"><div></div><div></div><div></div></div>
          {:else}
          {log_in} 🔒
          {/if}
        </button>
        {#if hasResponseError}
          <div class="error">
            <img src="img/icons/nok.svg" alt="not ok" />
            &nbsp;
            {errorMsg}
          </div>
        {/if}
      </fieldset>
    {/if}
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
    opacity: var(--opacity-05);
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
    background-color: var(--secondary-color);
    color: var(--font-color);
   }
   button:hover {
    cursor: pointer;
  }

  .success, .error {
    text-align:center;
    text-wrap: pretty;
    & img {
      width: 15px;
      height: auto;
      vertical-align: middle;
    }
  }
  .success {
    color: var(--green-color);
  }
  .error {
    color: var(--red-color);
  }

  /* spinner */
  .dots {
        width: 3.5em;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        margin: auto;
      }

      .dots div {
        width: 0.5em;
        height: 0.5em;
        border-radius: 50%;
        background-color: #fc2f70;
        animation: fade 0.8s ease-in-out alternate infinite;
      }

      .dots div:nth-of-type(1) {
        background-color: oklch(0.97 0.211 109.77);
        animation-delay: -0.4s;
      }

      .dots div:nth-of-type(2) {
        background-color: oklch(0.52 0.176858 142.4953);
        animation-delay: -0.2s;
      }

      @keyframes fade {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
}

</style>