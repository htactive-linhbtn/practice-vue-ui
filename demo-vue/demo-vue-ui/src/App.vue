<template>
<div id="app">
    <div class="container">
        <div class="text-center">
            <h1>Thông tin nhân viên công ty</h1>
        </div>
        <div class="mt-3">
            <form action="">
                <table class="table table-bordered">
                    <thead class="text-center">
                        <tr>
                            <!-- <th scope="col">Id</th> -->
                            <th scope="col">Họ Và Tên</th>
                            <th scope="col">Địa Chỉ</th>
                            <th scope="col">Tuổi</th>
                            <th scope="col">Công Ty</th>
                            <th scope="col">Ảnh Đại Diện</th>
                            <th scope="col">Hành Động</th>

                        </tr>
                    </thead>
                    <tbody v-for="(staff,id) in listStaffs" :key="id" class="text-center">
                        <!-- <tr>
                            <th scope="row">{{staff.id}}</th>
                            <td>{{staff.name}}</td>
                            <td class="editWAddress">{{staff.address}}</td>
                            <td>{{staff.age}}</td>
                            <td>{{staff.company}}</td>
                            <td class="editImage">
                                <img v-bind:src="staff.avatar" alt="image">
                            </td>
                            <td>
                                <button class="mx-1">Edit</button>
                                <button @click="delStaff(staff.id)" class="mx-1">Delete</button>
                            </td>
                        </tr> -->
                        <tr>
                            <!-- <th scope="row">{{staff.id}}</th> -->
                            <td>{{staff.name}}</td>
                            <td class="editWAddress">{{staff.address}}</td>
                            <td>{{staff.age}}</td>
                            <td>{{staff.company}}</td>
                            <td class="editImage">
                                <img v-bind:src="staff.avatar" alt="image">
                            </td>
                            <td>
                                <button class="mx-1">Edit</button>
                                <button @click="delStaff(id)" class="mx-1">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="button" @click="handleAddNewStaff" class="btn btn-success" value="add">
                <div class="mt-3">
                    <input type="text" v-model="newObj.name" placeholder="nhập tên của bạn">
                    <input type="text" v-model="newObj.address" placeholder="nhập địa chỉ">
                    <input type="text" v-model="newObj.age" placeholder="nhập tuổi">
                    <input type="text" v-model="newObj.company" placeholder="nhập tên công ty">
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'app',
    components: {

    },
    data() {
        return {
            listStaffs: [
                // {
                //     id: 1,
                //     name: 'Nguyễn Văn A',
                //     address: '140-142 Lê Lợi, phường Hải Châu, Quận Hải Châu, thành phố Đà Nẵng',
                //     age: 21,
                //     company: 'Chi Nhánh Đà Nẵng',
                //     avatar: 'http://topvietnam.com.vn/wp-content/uploads/2019/02/ca-si-noi-tieng-1.jpg'
                // },
                // {
                //     id: 2,
                //     name: 'Nguyễn Văn B',
                //     address: '140-142 Lê Lợi, phường Hải Châu, Quận Hải Châu, thành phố Đà Nẵng',
                //     age: 22,
                //     company: 'Chi Nhánh Đà Nẵng',
                //     avatar: 'http://topvietnam.com.vn/wp-content/uploads/2019/02/ca-si-noi-tieng-1.jpg'
                // },
                // {
                //     id: 3,
                //     name: 'Nguyễn Văn C',
                //     address: '140-142 Lê Lợi, phường Hải Châu, Quận Hải Châu, thành phố Đà Nẵng',
                //     age: 23,
                //     company: 'Chi Nhánh Đà Nẵng',
                //     avatar: 'http://topvietnam.com.vn/wp-content/uploads/2019/02/ca-si-noi-tieng-1.jpg'
                // },
            ],
            newObj: {
                name: '',
                address: '',
                age: '',
                company: '',
            },
        }
    },
    methods: {
        delStaff(id) {
            this.listStaffs = this.listStaffs.filter((x, idx) => idx !== id)
        },
        handleAddNewStaff() {

            this.listStaffs.push(this.newObj);
            this.newObj = {
                name: '',
                address: '',
                age: '',
                company: '',
            }
        }
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
