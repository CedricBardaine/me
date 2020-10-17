<template>

      <v-navigation-drawer
        v-model="drawer"
        color="primary"
        permanent
        :mini-variant="$vuetify.breakpoint.xs"
        dark
      >
      <!-- style="width: unset;" to make the width at the minimmum (default width is set by Vuetify)-->
        <v-list dense nav >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            @click="$router.push({name: item.goto})"
          >
            <v-list-item-icon class="c-margin-little" >
              <v-icon >{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title >{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        // { title: '...',
        // icon: 'mdi-cat',
        // goto: 'Cat'
        // },
        {title: '',
          icon: 'mdi-home',
          goto: 'Home',
        },
        {title: 'Contactez moi',
          icon: 'mdi-account-box',
          goto: 'Contact',
        },
        {title: 'Diplômes',
          icon: 'mdi-certificate',
          goto: 'Diplomas',
        },
        {title: 'Compétences',
          icon: 'mdi-head-snowflake ',
          goto: 'SkillsList',
        },
      ],
    };
  },
  computed: {
  },
};
</script>

<style >
  .c-margin-little {
    margin-right: 1rem !important;
  }
</style>
