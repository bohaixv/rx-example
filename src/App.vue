<template>
  <div class="app">
    <button v-stream:click="{subject:plus$,data:'demo data'}">this is a stream button</button>
    <p>{{ count }}</p>
    <button @click="countCustom++">custom button</button>
    <children ref="childrenTest" @child-click="subHundler"/>
    <p>{{childClick}}</p>
  </div>
</template>

<script>
import Children from "./components/Children";
import { Subject, interval } from "rxjs";
import { map, startWith, scan, take, pluck } from "rxjs/operators";

export default {
  name: "App",
  components: {
    Children
  },
  data() {
    return {
      countCustom: 1
    };
  },
  domStreams: ["plus$"],
  created() {
    this.$subscribeTo(interval(1000), v => console.log(v));
  },
  subscriptions() {
    // console.log(this.plus$);
    return {
      message: interval(1000),
      count: this.plus$.pipe(
        map(v => 1),
        startWith(0),
        map(v => {
          // console.log(v);
          return v;
        }),
        take(10),
        scan((pre, total) => pre + total, 0)
      ),
      demoData: this.plus$.pipe(pluck("data")),
      customTest: this.$watchAsObservable("countCustom").pipe(
        pluck("newValue")
      ),
      childClick: interval(1000),
      formData: this.$createObservableMethod("subHundler")
    };
  },
  methods: {
    noop() {}
  }
};
</script>

<style>
</style>