import "./App.css";
import Home from "./components/home";
import Header from "./components/header";
import Checkout from "./components/checkout";
import Login from "./components/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./components/stateProvider";
import { setUser } from "./actions";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //sexecut quand le composant sera deja pret
    //onAuthStateChanged est pour le changement d'utilisateur
    auth.onAuthStateChanged((authUser) => {
      console.log("user is>>>>>", authUser);
      if (authUser) {
        //when the user is logged in(enregistrer lutilisateur)=> action +type+

        dispatch(setUser(authUser));
      } else {
        //when the user is logged out

        dispatch(setUser(null));
      }
    });
  }, []);

  //USEEFFECT EST ENCORE UN HOOK DE REACT QUI REMPLACE LES FONCTION COMPONENTDIDMOUNT ET COMPONENTDIDUPDATE

  //USEEFFECT SERT PRINCIPALEMENT A EXECUTER QUELQUE CHOSE APRES LAFFICHAGE DE NOTRE PAGE ET APRES CHAQUE MIS A JOUR

  //LE TABLEAU OPTIONNELE A USEEFFECT PERMET DE PASSER UNE LISTE PAR EXEMPLE UNE VARIABLE DETAT ET USEEFFECT NE SERA EXECUTE QUE LORSQUE CELLE CI AURA CHANGE
  //EXECUTER A LINTERIEUR DE LA FONCTION COMPOSANT ELLE NOUS PERMET DAVOIR ACCES A LA VARIABLE DETAT DANS LE USEEFFECT

  //SAVOIR PLUS https://fr.reactjs.org/docs/hooks-effect.html
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//commence par le routeur puis le switch puis la route---

//dans firebase creer une application web </> et copier la config
//pour setup firebase ::: npm install -g firebase tools (firebasse init /firebase login firebase dep )
