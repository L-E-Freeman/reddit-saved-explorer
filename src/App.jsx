import { Button } from "@chakra-ui/react";

document.body.style = "background: grey;";

function getRedditAuthUrl() {
  const authUrl = new URL(process.env.REACT_APP_REDDIT_AUTH_URL_BASE);

  authUrl.search = new URLSearchParams({
    client_id: `${process.env.REACT_APP_REDDIT_AUTH_CLIENT_ID}`,
    response_type: "code",
    state: generateAuthState(),
    redirect_uri: process.env.REACT_APP_REDDIT_AUTH_REDIRECT_URI,
    duration: "permanent",
    scope: "read, identity",
  });

  return authUrl.toString();
}

function generateAuthState() {
  // State generation taken from https://medium.com/@dazcyril/generating-cryptographic-random-state-in-javascript-in-the-browser-c538b3daae50
  const validChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let array = new Uint8Array(40);
  window.crypto.getRandomValues(array);
  array = array.map((x) => validChars.charCodeAt(x % validChars.length));

  const authState = String.fromCharCode.apply(null, array);

  storeAuthState(authState);

  return authState;
}

function storeAuthState(authState) {
  window.sessionStorage.setItem("authState", authState);
}

function compareAuthStates(retrievedAuthState) {}

function clearAuthState() {}

function LoginButton() {
  return (
    <div className="LoginButton">
      <a href={getRedditAuthUrl()}>
        <Button href={getRedditAuthUrl()} colorScheme="blue" size="lg">
          Log in with Reddit
        </Button>
      </a>
    </div>
  );
}

function HomePage() {
  return (
    <div className="Background">
      <div className="HomePage">
        <LoginButton></LoginButton>
      </div>
    </div>
  );
}

export default HomePage;
