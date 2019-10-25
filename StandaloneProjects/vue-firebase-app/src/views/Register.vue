<template>
  <div class="container">
    <h1>Register</h1>
    <form name="registerform" id="registerform">
      <div class="form-group row">
        <label for="registeruser" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="email" id="registeruser" placeholder="Email" value="phil@phil.com" />
        </div>
      </div>
      <div class="form-group row">
        <label for="registerpassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" id="registerpassword" />
        </div>
      </div>
      <div class="form-group row">
        <button type="submit" class="btn btn-default">Submit</button>
      </div>
    </form>
  </div>
</template>
