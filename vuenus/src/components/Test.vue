<template>
    <h2>Test vue</h2>
    <h2>當前點擊時數標的座標為: X: {{ point.x }}, Y: {{ point.y }}</h2>
</template>

<script>
import usePoint from '../hooks/usePoint'
export default {
    name: 'Test',
    setup() {
        const point = usePoint()
        return { point }
    }
}
</script>
