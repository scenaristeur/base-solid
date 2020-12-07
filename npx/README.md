```


```



### installer mannuellement TiSoBr
Copiez les fichiers présents dans le dossier npx dans un dossier de votre POD ou dans n'importe quel serveur web
ou décompressez le fichier .zip obtenu à cette adresse :
https://kinolien.github.io/gitzip/?download=/scenaristeur/base-solid/tree/main/npx/


### inspiration
https://medium.com/@jamesweee/using-vue-js-single-file-component-without-module-bundlers-aea58d892ad9
but pika/web replaced by https://www.snowpack.dev/concepts/how-snowpack-works
###

```
npm init
npm install -D @pika/web
npm install -S vue http-vue-loader
```



```
{
  "name": "My Version Controlled Project"
  "dependencies": { ... }
  "devDependencies": { ... }
  "@pika/web": {
    "webDependencies": [
    "vue/dist/vue.esm.browser.js",
    "http-vue-loader/src/httpVueLoader.js"
    ]
  }
}
```


```
npx @pika/web
```


```
npx http-server
```
