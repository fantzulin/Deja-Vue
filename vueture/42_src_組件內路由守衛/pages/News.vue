<template>
    <ul>
        <li :style="{opacity}">Welcome</li>
        <li>News001 <input type="text" class="form-control"></li>
        <li>News002 <input type="text" class="form-control"></li>
        <li>News003 <input type="text" class="form-control"></li>
    </ul>
</template>

<script>
export default {
    name: 'News',
    data() {
        return {
            opacity: 1
        }
    },
    /* mounted() {
        this.timer = setInterval(() => {
            this.opacity -= 0.01
            if (this.opacity <=0 ) this.opacity = 1
        }, 10)
    }, */
    /* beforeDestroy() {
        console.log('News 組件被銷毀了')
        clearInterval(this.timer)
    } */
    activated() {
        console.log('News組件被激活了')
        this.timer = setInterval(() => {
            this.opacity -= 0.01
            if (this.opacity <=0 ) this.opacity = 1
        }, 10)
    },
    deactivated() {
        console.log('News組件被失活了')
        clearInterval(this.timer)
    }
}
</script>

<style>

</style>