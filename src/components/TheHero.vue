<template>
    <div class="container-fluid single-result">
        <div id="nav">
            <TheHeader />
        </div>

        <div class="d-flex justify-content-around">
            <div class="col-6">
                <img class="rounded-circle" :src="hero.thumbnail.path + '.' + hero.thumbnail.extension" alt="John" style="width:25%">
                <h1 class="my-3">{{ hero.name }}</h1>
                <p>{{ hero.description }}</p>
            </div>
            <div class="col-6">
                <ul class="list-group">
                    <li class="list-group-item" v-for="(comic, index) in hero.comics.items" :key="index">
                        {{ comic.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import FakeHero from '../../data.json'
import TheHeader from '../components/TheHeader'

export default {
    name: 'TheHero',
    components: {
        TheHeader
    },
    data: function(){
        return {
            hero: FakeHero.data.results[0]
        }
    }
}
</script>