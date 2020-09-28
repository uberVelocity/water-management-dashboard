<template>
    <b-dropdown position="is-bottom-left" append-to-body aria-role="menu" trap-focus>
        <a
            class="button"
            slot="trigger"
            role="button">
            Login
        </a>
        <b-dropdown-item
            aria-role="menu-item"
            :focusable="false"
            custom
            paddingless>
            <form action="">
                <div class="modal-card" style="width:300px;">
                    <section class="modal-card-body">
                        <b-field label="Email">
                            <b-input
                                type="email"
                                placeholder="Your email"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </b-input>
                        </b-field>
                        <!-- <b-checkbox>Remember me</b-checkbox> -->
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-primary" @click="getUsers">Login</button>
                    </footer>
                </div>
            </form>
        </b-dropdown-item>
    </b-dropdown>   
</template>

<script>
import axios from 'axios';
const urlGet = 'http://localhost:4000/api/auth/currentUser';

export default {
    name: 'LoginBtn',
    methods: {
        async getUsers() {
            // eslint-disable-next-line no-console
            console.log('Button pressed, sending request!');
            const response = await axios.get(urlGet);
            if (response.status === 200) {
                // eslint-disable-next-line no-console
                console.log(response.data);
            } else {
                // eslint-disable-next-line no-console
                console.error(response);
            }
        },
    }
}
</script>

<style scoped>

</style>