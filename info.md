# Workshop Node CI
- On créer un répertoire sur Github, pensez à mettre le .gitignore pour Node et ajouter le Readme.md
- Clonez le repo en local
- Faite la commande npm init
- Ajoutez un fichier index.js (même vide)
- Ensuite, installez jest avec la commande npm i jest
- Ajoutez un dossier __tests__
- Puis un fichier index.spec.js dans ce dossier avec le contenu 
```
test("hello_world", () => {
    expect(true).toBe(false)
})
```
- Vérifiez que tout fonctionne bien avec la commande npx jest (Le test doit être en échec)
- Ensuite installez eslint avec npm i eslint
- Initialiser eslint avec npx eslint --init (Choisir JavaScript, syntax only, module, none, no, Node, Yes, npm)
- On modifie le contenu du fichier eslint.config.mjs avec
```
import globals from "globals";

export default [
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
                myCustomGlobal: "readonly"
            }
        }
        // ...other config
    }
];
```
- On fait un petit npm ci
- On fait npx eslint . --debug
- Remplacer dans le package.json dans la clé script par : 
```
    "test": "jest",
    "build": "node index.js",
    "lint": "eslint ."
```
- Faites un add + Commit + push
- Ensuite à vous d'aller dans github actions pour créer un workflow Node (simple, donc recherchez le !) et y intégrer l'analyse eslint.
- A vous de chercher comment créer le fichier pour gérer votre workflow (dans .github/workflows) - Prenez Node (simple)
- Pensez à mettre un true.toBe(true) dans votre test pour que la CI passe
- Et c'est fini




















# Workshop Node / Jest / CI
- Le but de ce workshop va être de retravailler :
    - Node
    - Les tests unitaires avec Jest
    - La CI avec Github Action

## Partie github
- Créer un nouveau repo github
- Avec le gitignore de Node
- Cloner le repo en local dans un dossier vide

## Partie code 
- Développer une liste de livre (tableau de livre dans une classe)
- Ajouter les méthodes pour :
    - Initialiser la liste de livre vide
    - Récupérer et afficher la liste des livres
    - Ajouter un livre
    - Reset les livres

## Partie tests unitaires
- Installez Jest avec npm install jest --save-dev
- Ajoutez le script "jest" dans votre package.json
- Créer un nouveau dossier __tests__ dans votre projet (à la racine)
- Ajoutez y un fichier livre.spec.js
- Faites les imports des trois fonctions ajouterLivre, getLivres, resetLivres
- Ajoutez un describe
- Ajoutez un beforeEach qui resetLivres
- Réalisez 4 tests unitaires pour :
    - "ajoute un livre à la liste"
    - "retourne une liste vide par défaut"
    - "peut ajouter plusieurs livres"
    - "ajouter un livre puis reset les livres retourne une liste vide"
- Essayez de trouver un moyen de tester avec des paramètres d'entrée (j'ai pas réfléchi à la question, à vous de trouver une méthode simple pour tester ça, vous pouvez reprendre un exemple comme celui réalisé ensemble durant la démo)

## Partie Intégration continue
- Ajouter un linter
- Ajouter une intégration continue (workflow github actions) avec :
    - Build 
    - Linter
    - Lancement des tests