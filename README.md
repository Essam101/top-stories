# top-stories

 ## About this App
 The app allows the user to view all the top- stroies from new yourk times. Once the user selects a specific artical, he/she will be able to see the following details about the artical .

  ## Using
the application should allow you to read and save articales from many secation with easy and fast way 

 ### I use this API to provide the data for the top Stories web app 
 
  ```
 https://developer.nytimes.com/docs/top-stories-product/1/overview.
 ```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Top stories web app Features:

* Home
* Bookmark
* Artical data
* Routing
* Caching

## Caching 
I did use cache to save the bookmarks for the user


### Libraries & Tools Used

* [BootstrapVue](https://bootstrap-vue.org/t)

### Src

Here is the folder structure that I have used in this project.

```
src/
|- assests/
|- components/
|- router/
|- store/
|- views/
|- App.vue
|- main.js
```
### components
```
components/

|- BookmarkCard.vue
|- NewsCard.vue
```
### router
```
router/

|- router.js
```
### store
```
store/

|- bookmark.js
|- details.js
|- home.js
|- index.js
```
### views
```
views/

|- ArticaleDetails.vue
|- Bookmarks.vue
|- Home.vue
```
### App.vue

```
App.vue
```
### main.js

```
main.js
```
## 