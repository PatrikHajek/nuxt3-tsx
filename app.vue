<script lang="tsx">
export default defineComponent({
  setup() {
    const name = ref('bob')

    return () => (
      <div>
        <h1>Hello World</h1>
        <TestList title={name.value} />
      </div>
    )
  }
})
</script>
