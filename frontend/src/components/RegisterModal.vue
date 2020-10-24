<template>
    <section>
        <button class="button is-primary"
            @click="isComponentModalActive = true">
            Sign up
        </button>

        <b-modal
            id="reg_modal"
            v-model="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-modal>
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        <p class="title">Create a new account!</p>
                        <b-field label="Username">
                            <b-input
                                placeholder="John Doe"
                                v-model="username">
                            </b-input>
                        </b-field>
                        <b-field label="Email">
                            <b-input
                                type="email"
                                placeholder="john_smith@mail.com"
                                v-model="email">
                            </b-input>
                        </b-field>
                        <b-field label="Password">
                            <b-input
                                type="password"
                                v-model="password">
                            </b-input>
                        </b-field>
                        <button class="button is-primary" @click="registerUser">Register</button>
                        <p>{{username}} {{email}} {{password}}</p>
                    </div>
                </div>
            </div>
        </b-modal>
    </section>
</template>

<script>
import axios from 'axios';
import { ToastProgrammatic as Toast } from 'buefy'

export default {
    name: 'RegisterModal',
    data() {
        return {
            isComponentModalActive: false,
            username: '',
            email: '',
            password: ''
        }
    },
    methods : {
        async registerUser() {
            const urlRegister = 'http://localhost:4000/api/auth/registerUser';
            let response = undefined;

            try {
                response = await axios.post(urlRegister, {
                    username : this.username,
                    email : this.email,
                    password : this.password
                });
            } catch (e) {
                // eslint-disable-next-line no-console
                console.log(e);
            }

            if (response !== undefined && response.status === 200) {
                // eslint-disable-next-line no-console
                console.log(response.data);
                localStorage.setItem('authorization', response.headers['authorization']);

                // close modal
                this.isComponentModalActive = false;

                // open success toast
                Toast.open({
                    message: 'Successfully logged in!',
                    type: 'is-success'
                });
            } else {
                alert(response);
                Toast.open({
                    message: 'Incorrect data format',
                    type: 'is-danger'
                });
            }
        }
    }
}
</script>

<style scoped>
.card {
    padding: 3em;
}
</style>