<template>
<div>
    <div class="text-center">
        <h1>Thông tin nhân viên công ty</h1>
    </div>
    <Staff 
    :listStaffs="listStaffs" 
    @addStaff="addStaff" :newObj="newObj"
    @deleteStaff="deleteStaff(index)"></Staff>
</div>
</template>

<script>
import Staff from './Staff'
export default {
    data() {
        return {
            listStaffs: [],
            newObj: {
                name: '',
                address: '',
                age: '',
                company: '',
            },
        }
    },
    methods: {
        addStaff() {
            this.listStaffs.push(this.newObj);
            this.newObj = {
                name: '',
                address: '',
                age: '',
                company: '',
            }
        },
        deleteStaff(index) {
            // this.listStaffs = this.listStaffs.filter((x, index) => index !== index)
            this.listStaffs = this.listStaffs.splice(index, 1);
        }
    },
    components: {
        Staff
    }
}
</script>
