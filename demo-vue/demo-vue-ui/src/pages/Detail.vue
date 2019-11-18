<template>
<div>
  <div>
    <img src="" alt="Ảnh Đại Diện">
    <div>
      <div>Họ Và Tên : {{this.item.name}}</div>
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
  props: {
    staff: Object,
  },
  data() {
    return {
      id: this.$route.params.id,  
      item:{}
    }
  },
  watch: {

  },
  created() {
    this.item = this.staff[this.id]
  },
}
</script>
