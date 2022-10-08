import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";
import { getProduct } from "./helper/fetchAPI";

function App() {
  const [pictureUrl, setPictureUrl] = useState("");
  const [idToken, setIdToken] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [userId, setUserId] = useState("");

  const logout = () => {
    liff.logout();
    window.location.reload();
  };

  const initLine = async () => {
    liff.init(
      { liffId: "1657488538-3Vmgrzpg" },
      () => {
        if (liff.isLoggedIn()) {
          runApp();
        } else {
          liff.login();
        }
      },
      (err) => console.error(err)
    );
  };

  const runApp = async () => {
    const idToken: string = liff.getIDToken()!;
    idToken && setIdToken(idToken);
    console.log(liff.getContext);
    const userData = await liff.getProfile();
    console.log(userData);
    const product = await getProduct();
    console.log(product);
    await liff
      .getProfile()
      .then((profile) => {
        console.log(profile);
        setDisplayName(profile.displayName);
        profile.pictureUrl && setPictureUrl(profile.pictureUrl);
        profile.statusMessage && setStatusMessage(profile.statusMessage);
        setUserId(profile.userId);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    initLine();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ textAlign: "center" }}>
          <h1>React with LINE Login by GITEC VN TEAM</h1>
          <hr />
          <img src={pictureUrl} width="300px" height="300px" />
          <p
            style={{
              textAlign: "left",
              marginLeft: "20%",
              marginRight: "20%",
              wordBreak: "break-all",
            }}
          >
            <b>id token: </b> {idToken}
          </p>
          <p
            style={{
              textAlign: "left",
              marginLeft: "20%",
              marginRight: "20%",
              wordBreak: "break-all",
            }}
          >
            <b>display name: </b> {displayName}
          </p>
          <p
            style={{
              textAlign: "left",
              marginLeft: "20%",
              marginRight: "20%",
              wordBreak: "break-all",
            }}
          >
            <b>status message: </b> {statusMessage}
          </p>
          <p
            style={{
              textAlign: "left",
              marginLeft: "20%",
              marginRight: "20%",
              wordBreak: "break-all",
            }}
          >
            <b>user id: </b> {userId}
          </p>

          <button
            onClick={() => logout()}
            style={{ width: "100%", height: 30 }}
          >
            Logout
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
