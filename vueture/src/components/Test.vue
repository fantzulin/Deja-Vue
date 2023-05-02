<template>
    <div>
        <button @click="isShow = !isShow">show / hide</button>
        <transition name="hello" appear>
            <h1 v-show="isShow">Hello!</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            isShow: true
        }
    }
}
</script>

<style scoped>
    h1 {
        background-color: lightgray;
    }

    .hello-enter-active {
        animation: title 1s;
    }

    .hello-leave-active {
        animation: title 1s reverse;
    }

    @keyframes title {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0px);
        }
    }
</style>