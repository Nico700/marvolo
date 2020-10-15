<template>
    <div class="header">
        <div class="row align-items-center">
            <div class="col-2">
                <img width="250" src="../assets/logo.png">
            </div>
            <div class="col-6 mt-2">
                <TheBar/>
            </div>
            <div class="col-4 d-flex justify-content-around align-items-center">
                <TheButton label="fakeHeroResult"/>
                <TheButton label="heroes"/>
                <TheButton label="comics"/>
            </div>
        </div>
    </div>
</template>


<script>
import TheButton from '../components/TheButton.vue'
import TheBar from '../components/TheBar.vue'
export default {
    name: 'Header',
    data() {
        return {
            
        }
    },
    components: {
        TheButton,
        TheBar

    },
}
</script>

<style>

</style>