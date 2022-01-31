<template>
  <nav class="navbar">
    <div class="nav-center">
      <router-link to="/">
        <img :src="logo" alt="logo" class="logo" />
      </router-link>
    </div>
    <ul class="nav-links">
      <li v-for="item in navItem" :key="item.id">
        <router-link :to="item.url">{{ item.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import logo from '@/assets/logo.svg';

export default {
  name: 'Navbar',
  data() {
    return {
      logo,
      navItem: [
        { id: 1, url: '/', title: 'Home' },
        { id: 2, url: '/about', title: 'About' },
      ],
    };
  },
};
</script>

<style></style>
