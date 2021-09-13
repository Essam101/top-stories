<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle
        fixed="center"
        target="nav-text-collapse"
      ></b-navbar-toggle>
      <b-navbar-brand class="pr-5"
        >Top Stories
        <span class="subtitle">by New York Times</span></b-navbar-brand
      >
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/"> Home </b-nav-item>
          <b-nav-item to="/bookmarks"> Bookmarks </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- <b-navbar type="dark" variant="dark">
      <b-navbar-brand to="/">Top Stories</b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item to="/"> Home </b-nav-item>
        <b-nav-item to="/bookmarks"> Bookmarks </b-nav-item>
      </b-navbar-nav>
    </b-navbar> -->

    <router-view />
  </div>
</template>
 <style scoped>
.subtitle {
  font-size: 10px;
}
</style>
 