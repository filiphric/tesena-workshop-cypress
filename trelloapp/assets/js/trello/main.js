const axios = require('axios');

Vue = require('vue');
VueRouter = require('vue-router');
Vue.use(VueRouter);

require('vuedraggable');
require('./../directives/vue-focus.js');
require('./../components/collection.js');
require('./../components/board.js');

var router = new VueRouter({
  mode: 'history',
  base: window.location.pathName,
  routes: [
    { path: '*', redirect: '/' },
    { path: '/', name: 'board-collection', component: Vue.component('board-collection') },
    { path: '/board/:id', name: 'board', component: Vue.component('board') },
  ]
});

const app = new Vue({
  data: function() {
    return {
      errorMessage: {
        show: false,
        text: 'Oops, there was an error'
      },
      showLoginModule: false,
      loginCardActive: false,
      signupCardActive: false,
      loginEmail: '',
      loginPassword: '',
      signupEmail: '',
      signupPassword: '',
      sendEmails: false,
      loginDropdown: false,
      loggedIn: {
        active: false,
        email: '',
      }
    };
  },
  created () {

    let parsedCookies = document.cookie.split('; ').reduce((prev, current) => {
      const [name, value] = current.split('=');
      prev[name] = value;
      return prev;
    }, {});

    if (parsedCookies['trello_token']) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${parsedCookies['trello_token']}`;

      axios
        .get('/api/users').then( r => {
          this.loggedIn.active = true;
          this.loggedIn.email = r.data.user.email;
        }).catch( () => {
          document.cookie = 'trello_token=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
        });

    }
  },
  methods: {
    openLogin: function() {
      this.showLoginModule = true;
      this.loginCardActive = true;
    },
    closeLogin: function() {
      this.showLoginModule = false;
      this.loginCardActive = false;
      this.signupCardActive = false;
      this.loginEmail = '';
      this.loginPassword = '';
      this.signupEmail = '';
      this.signupPassword = '';
    },
    logSignSwitch: function() {
      this.signupCardActive = !this.signupCardActive;
      this.loginCardActive = !this.loginCardActive;
    },
    login: function () {
      axios
        .post('/login', {
          email: this.loginEmail,
          password: this.loginPassword
        })
        .then( r => {
          axios.defaults.headers.common['Authorization'] = `Bearer ${r.data.accessToken}`;
          document.cookie = `trello_token=${r.data.accessToken}`;
          this.loggedIn.active = true;
          this.loggedIn.email = this.loginEmail;
          this.showLoginModule = false;
          this.loginCardActive = false;
          this.signupCardActive = false;
          this.$router.go();
        })
        .catch( r => {
          console.log(r.data);
        });
    },
    logout: function () {
      this.loggedIn.active = false;
      // axios.defaults.headers.common['Authorization'] = '';
      document.cookie = 'trello_token=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.location.href = '/';
    },
    signup: function () {
      axios({
        method: 'POST',
        url: '/signup',
        data: {
          email: this.signupEmail,
          password: this.signupPassword
        }
      })
        .then( r => {
          axios.defaults.headers.common['Authorization'] = `Bearer ${r.data.accessToken}`;
          document.cookie = `trello_token=${r.data.accessToken}`;
          if (this.sendEmails) {
            axios
              .post('/welcomeemail', {
                email: this.signupEmail
              }).then(() => {
                this.$router.go();
              });
          } else {

            this.$router.go();

          }

          this.loggedIn.active = true;
          this.loggedIn.email = this.signupEmail;
          this.showLoginModule = false;
          this.loginCardActive = false;
          this.signupCardActive = false;

        })
        .catch( r => {
          console.log(r.data);
        });
    }
  },
  router
}).$mount('#trello-app');

if (window.Cypress) {
  window.app = app;
}