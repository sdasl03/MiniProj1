<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <nav class="nav-bar background-black">
      <ul class="nav-bar-list">
        <li>
          <router-link to="/personal-statement" class="nav-bar-element-link"
            >Quem sou eu?</router-link
          >
        </li>
        <li>
          <router-link to="/technical-view" class="nav-bar-element-link"
            >O que eu faço?</router-link
          >
        </li>
        <li>
          <router-link to="/hobbies" class="nav-bar-element-link">Hobbies</router-link>
        </li>
      </ul>
    </nav>

    <main class="main">
      <router-view />
    </main>

    <footer class="site-footer background-black">
      <div class="footer-inner">
        <p>Siga-nos</p>
        <nav aria-label="Social links" class="social-links">
          <!-- YouTube -->
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="YouTube"
          >
            <svg
              width="20"
              height="14"
              viewBox="0 0 24 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M23.499 3.123a2.966 2.966 0 0 0-2.091-2.099C19.656.5 12 0.5 12 0.5s-7.656 0-9.408.524A2.966 2.966 0 0 0 .501 3.123 30.02 30.02 0 0 0 0 8c.501 4.877 2.007 4.877 2.592 4.877 1.752.524 9.408.524 9.408.524s7.656 0 9.408-.524c.585 0 2.091 0 2.592-4.877.5-4.877 0-4.877-.501-4.877zM9.545 11.023V4.977L15.318 8l-5.773 3.023z"
              />
            </svg>
            <span class="sr-only">YouTube</span>
          </a>

          <!-- Facebook -->
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="Facebook"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M22 12.073C22 6.477 17.523 2 11.927 2 6.332 2 1.855 6.477 1.855 12.073c0 4.99 3.657 9.12 8.438 9.951v-7.04H7.898v-2.91h2.395V9.845c0-2.366 1.402-3.67 3.55-3.67 1.028 0 2.104.184 2.104.184v2.31h-1.182c-1.165 0-1.527.723-1.527 1.464v1.755h2.596l-.414 2.91h-2.182v7.04c4.781-.831 8.438-4.961 8.438-9.951z"
              />
            </svg>
            <span class="sr-only">Facebook</span>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="LinkedIn"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.039-1.852-3.039-1.853 0-2.136 1.446-2.136 2.941v5.667H9.353V9h3.414v1.561h.049c.476-.9 1.635-1.852 3.366-1.852 3.598 0 4.263 2.369 4.263 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.999 20.452H3.675V9h3.324v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.273V1.727C24 .774 23.2 0 22.225 0z"
              />
            </svg>
            <span class="sr-only">LinkedIn</span>
          </a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh; /* ensure footer can stick to viewport bottom */
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1; /* main grows to fill available space and push footer down */
  margin-top: 56px; /* Adjust based on header height */
  margin-bottom: 60px; /* Adjust based on footer height */
}

.background-black {
  background-color: black;
  color: white;
}
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 10px;
}
.nav-bar-list {
  list-style-type: none;
  display: flex;
  justify-content: start;
  padding: 0;
}
.nav-bar-element-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin: 0 10px;
}
.nav-bar-element-link:hover,
.nav-bar-element-link:focus {
  color: gold;
}
.site-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 16px 12px;
  text-align: left;
}

/* Make the inner footer fill the width and push its children to the right */
.footer-inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end; /* align content to the right */
  gap: 12px;
  padding-right: 12px; /* small spacing from the edge */
}
.footer-inner p {
  margin: 0;
}
/* Social links */
.social-links {
  display: inline-flex;
  gap: 12px;
  align-items: center;
}
.social-link {
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}
.social-link svg {
  display: block;
  color: white;
}
.sr-only {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
}
</style>
