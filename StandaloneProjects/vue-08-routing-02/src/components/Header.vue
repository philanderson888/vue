<template>
    <div>
        <div class="navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-offset-5 col-xs-2 text-center">
                </div>
                 <div class="col-xs-5"></div>
            </div>
        </div>
        <div>
            <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                    <ul class="nav nav-pills">
                        <li role="presentation"><router-link to="/">Home</router-link></li>
                        <li role="presentation"><router-link to="HelloWorld">Hello World</router-link></li>
                        <li role="presentation"><router-link to="Component01">Component01</router-link></li>
                        <li role="presentation"><router-link to="Component02">Component02</router-link ></li>
                    </ul>
                </div>
                <div class="col-sm-4"></div>
            </div>
        </div>
        </div>
    </div>
</template>
<style>
.container {
  margin-left:40%;
  display: block;
  float: none;
}
</style>

