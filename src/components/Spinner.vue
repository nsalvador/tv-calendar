<template>
  <div class="loader"></div>
</template>

<style lang="scss" scoped>
  .loader {
    position: fixed;
    z-index: 100000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      width: 45px;
      height: 45px;
      border-top: 3px solid black;
      border-right: 3px solid black;
      border-bottoM: 3px solid black;
      border-left: 3px solid white;
      content: "";
      border-radius: 50%;
      animation: spin 400ms linear infinite;

      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    }
  }
</style>

