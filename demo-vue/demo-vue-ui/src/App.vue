<template>
<div id="app">
    <div class="container">
        <!-- <Staffs></Staffs> -->
        <router-view></router-view>
    </div>
</div>
</template>

<script>
// import Staffs from './pages/Staffs'

export default {
    name: 'app',
    components: {
        // Staffs
    },
}
</script>

<style>
.editWAddress {
    width: 150px;
}

.editImage img {
    height: 100px;
}
</style>
