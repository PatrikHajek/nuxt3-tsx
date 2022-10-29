export default defineComponent({
  setup() {
    const name = ref('bob')
    const list = ref(['i', 'finally', 'work', ':)'])

    return () => (
      <>
        <div>hellop</div>
        <h1>{name.value}</h1>
        <ul>
          {list.value.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </>
    )
  },
})
