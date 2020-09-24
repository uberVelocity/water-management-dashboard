<template>
    <section>
        <button class="button is-primary"
            @click="isComponentModalActive = true">
            Sign up
        </button>

        <b-modal 
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
                        <button class="button is-primary">Register</button>
                        <p>{{username}} {{email}} {{password}}</p>
                    </div>
                </div>
            </div>
        </b-modal>
    </section>
</template>

<script>

    export default {
        name: 'RegisterModal',
        data() {
            return {
                isComponentModalActive: false,
                username: '',
                email: '',
                password: ''
            }
        }
    }
</script>

<style scoped>
.card {
    padding: 3em;
}
</style>