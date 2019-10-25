<template>
  <div class="home">
    <h1>Home.vue</h1>
    <h2>
      <PhilComponent />
    </h2>
    <h3>
      <ComponentWithMessage msg="Displaying message sent through as props" />
    </h3>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <ul style="list-style-type:none;">
      <li>
        <Component2WithMessage msg="Message 01" />
      </li>
      <li>
        <Component2WithMessage msg="Message 02" />
      </li>
      <li>
        <Component2WithMessage msg="Message 03" />
      </li>
    </ul>
    <div>And here is a component with 2 messages in it</div>
    <component-with-2-messages
      message1="This is message 1"
      message2="This is message 2"
      :number1="someNumber"
      :array1="someArray"
      array2="hello hello hello, hello"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import PhilComponent from "@/components/PhilComponent.vue";
import ComponentWithMessage from "@/components/ComponentWithMessage.vue";
import Component2WithMessage from "@/components/Component2WithMessage.vue";
import ComponentWith2Messages from "@/components/ComponentWith2Messages.vue";

@Component({
  components: {
    HelloWorld,
    PhilComponent,
    ComponentWithMessage,
    Component2WithMessage,
    ComponentWith2Messages
  }
})
export default class Home extends Vue {
  data() {
    return {
      someNumber: 1000,
      someArray: ["one", "two", "three"]
    };
  }
}
</script>
