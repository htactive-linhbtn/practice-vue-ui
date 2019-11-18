<template>
<div>
  <div class="text-center">
    <h1>Thông tin nhân viên công ty</h1>
  </div>
  <Staff :listStaffs="listStaffs" @addStaff="addStaff" :newObj="newObj" @deleteStaff="deleteStaff">
  </Staff>
</div>
</template>

<script>
import Staff from './Staff'
export default {
  data() {
    return {
      listStaffs: [{
          id: 1,
          name: 'Nguyễn Văn A',
          address: '140-142 Lê Lợi, phường Hải Châu, Quận Hải Châu, thành phố Đà Nẵng',
          age: 21,
          company: 'Chi Nhánh Đà Nẵng',
          avatar: 'http://topvietnam.com.vn/wp-content/uploads/2019/02/ca-si-noi-tieng-1.jpg'
        },
        {
          id: 2,
          name: 'Nguyễn Văn B',
          address: '140-142 Lê Lợi, phường Hải Châu, Quận Hải Châu, thành phố Đà Nẵng',
          age: 22,
          company: 'Chi Nhánh Đà Nẵng',
          avatar: 'http://topvietnam.com.vn/wp-content/uploads/2019/02/ca-si-noi-tieng-1.jpg'
        },
        {
          id: 3,
          name: 'Nguyễn Văn C',
          address: '140-142 Lê Lợi, phường Hải Châu, Quận Hải Châu, thành phố Đà Nẵng',
          age: 23,
          company: 'Chi Nhánh Đà Nẵng',
          avatar: 'http://topvietnam.com.vn/wp-content/uploads/2019/02/ca-si-noi-tieng-1.jpg'
        },
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
      this.listStaffs = this.listStaffs.filter( x => x.index !== index)

    }
  },
  components: {
    Staff
  }
}
</script>
