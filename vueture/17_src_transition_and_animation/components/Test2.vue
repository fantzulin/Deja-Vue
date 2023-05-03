<template>
    <div>
        <button @click="isShow = !isShow">show / hide</button>
        <transition-group name="hello" appear>
            <h1 v-show="!isShow" key="title">Hello!</h1>
            <h1 v-show="isShow" key="title">Chris</h1>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'Test2',
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

    /* 進入的起點、離開的終點 */
    .hello-enter,
    .hello-leave-to {
        transform: translateX(-100%);
    }

    .hello-enter-active,
    .hello-leave-active {
        transition: 1s linear;
    }

    /* 進入的終點、離開的起點 */
    .hello-enter-to,
    .hello-leave {
        transform: translateX(0);
    }
</style>