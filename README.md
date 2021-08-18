# Clone de l'application web amazon 

Pour visualiser le clone , cliquez [ici](https://clone-3467b.web.app)

## Balayage de code 

**Note: Le code est structuré dans le dossier src de facon a scindé les composants react de redux**

### components 

Dossiers contenant tous les composants React. La librairie [style-components](https://www.npmjs.com/package/style-components) a été utilisé pour appliquer le style au composants

### store , reducer , action

Ces dossiers contiennent la partie redux qui s'occupera de la gestion de l'état de notre application (La transmission de l'état entre les différents composants de l'application...). 
Pour de plus ample information sur la façon d'utiliser react-redux , suivez ce [lien](https://react-redux.js.org/introduction/getting-started)

###firebase.js 

ce fichier établie la connexion avec notre base de donnée stockée sur [firebase](https://firebase.google.com) elle va nous permettre entre autre le stockage : 
1. Des paramètres d'authentification de l'utilisateur 
2. Des postes de l'utilisateur

Pour de plus ample information sur comment ajouter firebase à votre projet, suivez ce [lien](https://firebase.google.com/docs/web/setup)
**Note: Toutes les fonctionnalités de l'application web [amazon](https://www.amazon.fr/) n'ont pas été développé**

