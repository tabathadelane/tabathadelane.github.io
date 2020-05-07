<template>
    <div>
        <div><h3>This will be my new portfolio site.</h3></div>
        <b-navbar toggleable="md" type="light" >
            <!-- <b-navbar-brand>Test</b-navbar-brand> -->
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav-collapse" >
                <b-navbar-nav>
                    <b-nav-item>
                        <router-link to="/About">About Me</router-link>
                    </b-nav-item>
                    <b-nav-item-dropdown text="Projects"  >
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
                    <b-nav-item>
                        <router-link to="/Contact">Contact Me</router-link>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>

        </b-navbar>

        <router-view />
    </div>
</template>