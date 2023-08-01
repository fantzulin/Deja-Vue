import { onBeforeUnmount, onMounted, reactive } from 'vue'
export default function () {
    // 實現滑鼠 "點擊" 相關的數據
    let point = reactive({
        x: 0,
        y: 0
    })
    
    // 實現滑鼠 "點擊" 相關的方法
    function getPoint(event) {
        console.log('x:',event.pageX, 'y:',event.pageY)
        point.x = event.pageX
        point.y = event.pageY
    }

    // 實現滑鼠 "點擊" 相關的生命週期鉤子
    onMounted(()=>{
        window.addEventListener('click', getPoint)       
    })

    onBeforeUnmount(()=>{
        window.removeEventListener('click', getPoint)
    })
    
    return point
}

