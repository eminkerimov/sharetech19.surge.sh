<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="img">
          <img src="../../assets/img/404.png" alt="404" />
        </div>
      </div>
      <div class="col-6">
        <div class="content">
          <h2>Niyə burdasan?</h2>
          <p>
            Çünki axdardığınız səhifə ya heç var olmayıb ya da silinib. Xahiş
            edirik keçidin doğruluğunu yoxlayın.
          </p>
          <button>ANA SƏHİFƏ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped lang='scss'>
.img {
  width: 600px;
  height: 600px;
}

.content {
  height: 100%;
  padding: 200px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 47px;
    color: #202020;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: #828282;
  }
  button {
    background: #ef5a28;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 35px;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    text-align: justify;
    color: #ffffff;
    padding: 18px 24px 18px 33px;
    cursor: pointer;
    &:hover {
        color: #fff;
        background: #828282;
    }
  }
}
</style>