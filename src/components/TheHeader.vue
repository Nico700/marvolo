<template>
    <div class="header">
        <div class="row">
            <div class="col-3">
                <img src="../assets/logo.png">
            </div>
            <div class="col-5">
                <!-- Search bar -->
            </div>
            <div class="col-4">
                <TheButton label="characters"/>
                <TheButton label="comics"/>
                <TheButton label="creators"/>
                <TheButton label="series"/>
                <TheButton label="movies"/>
            </div>
        </div>
    </div>
</template>


<script>
import TheButton from '../components/TheButton.vue'
export default {
    name: 'Header',
    data() {
        return {
            
        }
    },
    components: {
        TheButton
    },
}
</script>

<style>

</style>