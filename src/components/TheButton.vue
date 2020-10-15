<template>
    <div class="button">
        <router-link :to="'/' + label">{{ label }}</router-link>
    </div>
</template>

<script>
export default {
    name: 'TheButton',
    props : {
        label: String,
    },
    filters: {
        capitalize(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>