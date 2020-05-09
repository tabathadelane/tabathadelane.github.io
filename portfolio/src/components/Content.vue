<template>
    <div>
        <b-navbar toggleable="sm" type="dark" variant="primary" >
            <b-navbar-brand>Learn More:</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse" right></b-navbar-toggle>
            <b-collapse is-nav id="nav-collapse" >
                <b-navbar-nav>
                    <b-nav-item>
                        <router-link to="/About">About</router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/Contact">Contact</router-link>
                    </b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="Projects" right >
                        <b-dropdown-item>
                            <router-link to="/Trversal">Trversal</router-link>
                        </b-dropdown-item>
                        <b-dropdown-item>
                            <router-link to="/Critical">Critical Reactions</router-link>
                        </b-dropdown-item>
                        <b-dropdown-item>
                            <router-link to="/Habitat">Habit@</router-link>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>

        </b-navbar>

        <router-view />
    </div>
</template>

<style lang="scss" scoped>

nav {
    margin-top: 20px;
    margin-bottom: 20px;
    text-transform: uppercase;
    border-radius: 5px;
}

$primary: rgba(128, 0, 128, 0.637);

@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

</style>