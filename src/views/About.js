import amisButton from "@/lib/components/button.vue";

export default {
  provide: {
    test() {
      console.log("test");
    }
  },
  amisbutton: {},
  render() {
    return (
      <amisButton label='asd'>
      </amisButton>
    );
  }
};
