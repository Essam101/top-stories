# top-stories

 ## About this App
 The app allows the user to view all the top stories from New York Times.
  ## Using
Starting from the homepage, the user can access all the categories of articles from the navigation bar. Additional categories can be viewed by clicking on the "more" tab. While viewing the available articles, the user can click for more details or click to bookmark the article. Clicking the bookmark icon a second time will unbookmark the article. The bookmarked articles can be found in the "Bookmarks" tab. When viewing the details of the article, the user can click on the title to be taken to the original article. 

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
I used Local Storage and I choosed to use Object DataType to be able to get the article by key, so it will be o(1) time complexity.


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