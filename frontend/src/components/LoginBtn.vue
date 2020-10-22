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
                                required
                                v-model="email">
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                password-reveal
                                placeholder="Your password"
                                required
                                v-model="password">
                            </b-input>
                        </b-field>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-primary" type="submit" @click="login">Login</button>
                    </footer>
                </div>
            </form>
        </b-dropdown-item>
    </b-dropdown>   
</template>

<script>
import axios from 'axios';
const urlGet = 'http://localhost:4000/api/auth/login';
import { ToastProgrammatic as Toast } from 'buefy'

export default {
    name: 'LoginBtn',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {

            // eslint-disable-next-line no-console
            console.log('Message LogIn');
            // eslint-disable-next-line no-console
            console.log(this.email + this.password);

            let response = undefined;
            try {
                response = await axios.post(urlGet, {
                    email: this.email,
                    password: this.password
                })
            } catch (e) {
                // eslint-disable-next-line no-console
                console.log(e);
            }

            if (response !== undefined && response.status === 200) {
                // eslint-disable-next-line no-console
                console.log(response.data);

                localStorage.setItem('authorization', response.headers['authorization']);

                Toast.open({
                    message: 'Successfully logged in!',
                    type: 'is-success'
                });
            } else {
                // eslint-disable-next-line no-console
                console.error(response);
                Toast.open({
                    message: 'Incorrect credentials!',
                    type: 'is-danger'
                });
            }
        },
    }
}
</script>

<style scoped>

</style>