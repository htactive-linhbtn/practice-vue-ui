<template>
<div>
    <b-button class="btn btn-success" @click="toggleModal">Add New Staff</b-button>
    <div class="mt-3">
        <table class="table table-bordered">
            <thead class="text-center">
                <tr>
                    <th scope="col" v-for="(item,index) in listHeader" :key="index">{{item}}</th>
                </tr>
            </thead>
            <tbody v-for="(staff,index) in listStaffs" :key="index" class="text-center">
                <tr>
                    <td>{{index+1}}</td>
                    <td>{{staff.name}}</td>
                    <td class="editWAddress">{{staff.address}}</td>
                    <td>{{staff.age}}</td>
                    <td>{{staff.company}}</td>
                    <td class="editImage">
                        <img v-bind:src="staff.avatar" alt="image">
                    </td>
                    <td>
                        <button class="mx-1" @click="toggleModal2(index)">Chỉnh Sửa</button>
                        <button @click="delStaff(staff.index)" class="mx-1">Xóa</button>
                        <button >
                            <router-link to="/Detail/1" :staff="staff" > Xem Chi Tiết</router-link>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>
        <b-modal ref="my-modal" hide-footer title="Using Component Methods">
            <div class="d-block text-center">
                <div class="">
                    <div>
                        <input type="text" class="col-12 my-2" v-model="newObj.name" placeholder="nhập tên của bạn">
                    </div>
                    <div>
                        <input type="text" class="col-12 my-2" v-model="newObj.address" placeholder="nhập địa chỉ của bạn">
                    </div>
                    <div>
                        <input type="text" class="col-12 my-2" v-model="newObj.age" placeholder="nhập tuổi">
                    </div>
                    <div>
                        <input type="text" class="col-12 my-2" v-model="newObj.company" placeholder="nhập tên công ty">
                    </div>
                </div>
            </div>
            <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
            <b-button class="mt-2 " variant="outline-warning" block @click="handleAddNewStaff">Add</b-button>
        </b-modal>
    </div>
    <div>
        <b-modal ref="modal-0" hide-footer title="Using Component Methods">
            <div class="d-block text-center">
                <div class="">
                    <div>
                        <input type="text" class="col-12 my-2" v-model="editObj.name" placeholder="nhập tên của bạn">
                    </div>
                    <div>
                        <input type="text" class="col-12 my-2" v-model="editObj.address" placeholder="nhập địa chỉ của bạn">
                    </div>
                    <div>
                        <input type="text" class="col-12 my-2" v-model="editObj.age" placeholder="nhập tuổi">
                    </div>
                    <div>
                        <input type="text" class="col-12 my-2" v-model="editObj.company" placeholder="nhập tên công ty">
                    </div>
                </div>
            </div>
            <b-button class="mt-3" variant="outline-danger" block @click="hideModal2">Close Me</b-button>
            <b-button class="mt-2 " variant="outline-warning" block @click="okEdit(index)">Ok</b-button>
        </b-modal>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            listHeader: {
                id: 'stt',
                name: 'Họ Và Tên',
                address: 'Địa Chỉ',
                age: 'Tuổi',
                company: 'Công Ty',
                avatar: 'Ảnh Đại Diện',
                action: 'Hành Động'
            },
            editObj: {
                name: '',
                address: '',
                age: '',
                company: '',
            },
            tempIndex: '',
        }
    },
    methods: {
        delStaff(index) {
            this.$emit('deleteStaff', index)
        },
        handleAddNewStaff() {
            this.$emit('addStaff')
        },
        showModal2() {
            this.$refs['modal-0'].show()
        },
        hideModal2() {
            this.$refs['modal-0'].hide()
        },
        toggleModal2(index) {
            this.$refs['modal-0'].toggle('.toggle-btn')
            // this.editObj = this.listStaffs[index]
            this.tempIndex = index
            // this.listStaffs[index] = this.editObj
        },
        okEdit(index) {
            this.editObj = this.listStaffs[index]
            this.listStaffs[index] = this.editObj
            this.listStaffs[this.tempIndex] = this.editObj
        },

        showModal() {
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        },
        toggleModal() {
            //dung cah khac
            this.$refs['my-modal'].toggle('.toggle-btn')
        },
    },
    props: {
        listStaffs: Array,
        newObj: Object,

    }
}
</script>
