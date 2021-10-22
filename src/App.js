import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIXOF2XxwseuGe426mPsKX5lNI10GvovU",

  authDomain: "react-firebase-chat-52975.firebaseapp.com",

  projectId: "react-firebase-chat-52975",

  storageBucket: "react-firebase-chat-52975.appspot.com",

  messagingSenderId: "655776649425",

  appId: "1:655776649425:web:82aecda2201d0fe13df5f0",
};

function App() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  const onSubmit = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div>
      {" "}
      <h1>FIREBASE CHATTT</h1>
      <form>
        <label>email</label>
        <input type="email"></input>
        <label>password</label>
        <input type="password"></input>
        <button type="submit" onClick={(e) => alert(JSON.stringify(e.target))}>
          register
        </button>
      </form>
    </div>
  );
}

export default App;
