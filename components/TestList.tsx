export default defineComponent({
  props: {
    title: String,
  },
  setup(props) {
    return () => (
      <div>
        I am component
        <p>My title is: {props.title}</p>
      </div>
    );
  },
});
