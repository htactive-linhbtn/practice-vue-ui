<template>
<div>
    <div>
        <img src="" alt="Ảnh Đại Diện">
        <div>
            loaded id : {{id}}
            <!-- <div>Họ Và Tên : {{this.staff.name}}</div>
            <div>Địa Chỉ : {{this.staff.address}}</div>
            <div>Tuổi :{{this.staff.age}}</div>
            <div>Công Ty : {{this.staff.company}}</div> -->
            <div v-for="(item,index) in this.staff" :key="index">
                <div>{{index}}</div>
                <div>Họ Và Tên : {{item.name}}</div>
                <div>Địa Chỉ : {{item.address}}</div>
                <div>Tuổi :{{item.age}}</div>
                <div>Công Ty : {{item.company}}</div>
            </div>
        </div>
    </div>
    <div>
        Once you have finished writing, go back through your work with a
        fine-tooth comb for spelling or grammatical mistakes. Check that you
        have spelled names correctly, gotten titles right. Also, check and recheck
        your facts—if you can't verify something, it's probably best to leave it out.
        The better your work when it reaches the copy desk, the more time copy editors
        will have to spend massaging and improving your prose, as opposed to fixing common
        grammatical errors.
    </div>
    <div>
        Once you have finished writing, go back through your work with a
        fine-tooth comb for spelling or grammatical mistakes. Check that you
        have spelled names correctly, gotten titles right. Also, check and recheck
        your facts—if you can't verify something, it's probably best to leave it out.
        The better your work when it reaches the copy desk, the more time copy editors
        will have to spend massaging and improving your prose, as opposed to fixing common
        grammatical errors.
    </div>
    <div>
        Once you have finished writing, go back through your work with a
        fine-tooth comb for spelling or grammatical mistakes. Check that you
        have spelled names correctly, gotten titles right. Also, check and recheck
        your facts—if you can't verify something, it's probably best to leave it out.
        The better your work when it reaches the copy desk, the more time copy editors
        will have to spend massaging and improving your prose, as opposed to fixing common
        grammatical errors.
    </div>
    <div>
        Once you have finished writing, go back through your work with a
        fine-tooth comb for spelling or grammatical mistakes. Check that you
        have spelled names correctly, gotten titles right. Also, check and recheck
        your facts—if you can't verify something, it's probably best to leave it out.
        The better your work when it reaches the copy desk, the more time copy editors
        will have to spend massaging and improving your prose, as opposed to fixing common
        grammatical errors.
    </div>
    <div>
        Once you have finished writing, go back through your work with a
        fine-tooth comb for spelling or grammatical mistakes. Check that you
        have spelled names correctly, gotten titles right. Also, check and recheck
        your facts—if you can't verify something, it's probably best to leave it out.
        The better your work when it reaches the copy desk, the more time copy editors
        will have to spend massaging and improving your prose, as opposed to fixing common
        grammatical errors.
    </div>
    <div>
        Once you have finished writing, go back through your work with a
        fine-tooth comb for spelling or grammatical mistakes. Check that you
        have spelled names correctly, gotten titles right. Also, check and recheck
        your facts—if you can't verify something, it's probably best to leave it out.
        The better your work when it reaches the copy desk, the more time copy editors
        will have to spend massaging and improving your prose, as opposed to fixing common
        grammatical errors.
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    watch: {
        '$route'(to) {
            this.id = to.params.id;
        }
    },
    props: {
        staff: Array,
        index: Number
    }
}
</script>
