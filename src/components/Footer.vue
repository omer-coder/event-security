<template>
  <footer>
    <div class="content">
        <div class="top">
            <!-- top logo -->
            <div class="logo-details">
                <img src="@/assets/logo.png" />
                <span class="logo_name">Security Company</span>
            </div>
            <!-- social media -->
            <div class="social-media">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
        </div>

        <!-- link -->
        <div class="link-boxes">
            <!-- 1 -->
            <ul class="box">
                <li class="link-name">Company</li>
                <li><a href="#">home</a></li>
                <li><a href="#">contact us</a></li>
                <li><a href="#">about us</a></li>
                <li><a href="#">get started</a></li>
            </ul>
            <!-- 2 -->
            <ul class="box">
                <li class="link-name">Services</li>
                <li><a href="#">app design</a></li>
                <li><a href="#">web design</a></li>
                <li><a href="#">logo design</a></li>
                <li><a href="#">banner design</a></li>
            </ul>
            <!-- 3 -->
            <ul class="box">
                <li class="link-name">account</li>
                <li><a href="#">my application</a></li>
                <li><a href="#">my jobs</a></li>
                <li><a href="#">applicant</a></li>
                <li><a href="#">preference</a></li>
            </ul>
            <!-- 4 -->
            <ul class="box">
                <li class="link-name">Box 4</li>
                <li><a href="#">lorem ipsum</a></li>
                <li><a href="#">lorem ipsum</a></li>
                <li><a href="#">lorem ipsum</a></li>
                <li><a href="#">lorem ipsum</a></li>
            </ul>
            <!-- newslettr -->
            <ul class="box input-box">
                <li class="link-name">Subscribe</li>
                <li><input type="email" placeholder="Email" /></li>
                <li><input type="button" value="Subscribe" /></li>
            </ul>
        </div>
    </div>
    <!-- bottom details -->
    <div class="bottom-details">
        <div class="bottom-text">
            <span class="copyright-text">CopyRight @ 2022 <a href="#">Security Company</a> All rights reserved</span>
            <!-- policy -->
            <span class="policy-terms">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </span>
        </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

footer{
    position : relative;
    background : #212121;
    width : 100%;
    /* bottom : 0;
    left:0; */
}

footer::before{
    content : '';
    position : absolute;
    left : 0;
    height : 1px;
    top : 100px;
    width : 100%;
    background : #afafb6
}

footer .content{
    max-width : 1250px;
    margin : 50px auto 0px;
    padding : 30px 40px 40px 40px;
}

footer .content .top{
    display : flex;
    align-items : center;
    margin-bottom: 50px;
    justify-content : space-between;
}

.content .top .logo-details span{
    color : #fff;
    font-size : 30px
}

.content .top .logo-details img{
    height: 30px;
    transition : 0.5s ease all;
    margin-right : 20px;
}

.content .top .social-media{
    display : flex;
}

.content .top .social-media a{
    height : 40px;
    width : 40px;
    margin : 0 8px;
    border-radius: 50%;
    text-align : center;
    line-height : 40px;
    font-size : 17px;
    text-decoration : none;
    transition : all 0.4s ease;
}

.content .top .social-media a i{
    color : #ffff;
}

/* coloring social media icon */
/* facebook */
.top .social-media a:nth-child(1){
    background : #4267b2;
}

.top .social-media a:nth-child(1):hover{
    background : #fff;
}

.top .social-media a:nth-child(1) i:hover{
    color : #4267b2;
}

/* twitter */
.top .social-media a:nth-child(2){
    background : #1da1f2;
}

.top .social-media a:nth-child(2):hover{
    background : #fff;
}

.top .social-media a:nth-child(2) i:hover{
    color : #1da1f2;
}

/* insta */
.top .social-media a:nth-child(3){
    background : #e1306c;
}

.top .social-media a:nth-child(3):hover{
    background : #fff;
}

.top .social-media a:nth-child(3) i:hover{
    color : #e1306c;
}

/* linked in */
.top .social-media a:nth-child(4){
    background : #0077b5;
}

.top .social-media a:nth-child(4):hover{
    background : #fff;
}

.top .social-media a:nth-child(4) i:hover{
    color : #0077b5;
}

/* youtube */
.top .social-media a:nth-child(5){
    background : #ff0000;
}

.top .social-media a:nth-child(5):hover{
    background : #fff;
}

.top .social-media a:nth-child(5) i:hover{
    color : #ff0000;
}

footer .content .link-boxes{
    width : 100%;
    display : flex;
    justify-content:  space-between;
}

footer .content .link-boxes .box{
    width : calc(100% / 5 - 10px);
}

.content .link-boxes .box .link-name{
    color : #fff;
    font-size : 18px;
    font-weight : 400;
    margin-bottom: 10px;
    position : relative;
}

.link-boxes .box .link-name::before{
    content : '';
    position : absolute;
    left : 0;
    bottom : -2px;
    height : 2px;
    width : 35px;
    background : #fff;
}

.content .link-boxes .box li{
    margin : 6px 0;
    list-style : none;
}

.content .link-boxes .box li a{
    color : #fff;
    font-size : 14px;
    font-weight : 400;
    text-decoration : none;
    opacity : 0.8;
    transition : all 0.4s ease
}

.content .link-boxes .box li a:hover{
    opacity : 1;
    text-decoration : underline;
}

.content .link-boxes .input-box{
    margin-right : 55px
}

.link-boxes .input-box input{
    height : 40px;
    width : calc(100% + 55px);
    outline : none;
    border : 2px style #afafb6;
    background : #212121;
    border-radius: 4px;
    padding : 0 15px;
    font-size : 15px;
    color : #fff;
    margin-top : 5px;
}

.link-boxes .input-box input::placeholder{
    color : #afafb6;
    font-size : 16px;
}

.link-boxes .input-box input[type='button']{
    background : #fff;
    color : #140b5c;
    border : none;
    font-size : 18px;
    font-weight : 500;
    margin : 4px 0;
    opacity : 0.8;
    cursor : pointer;
    transition : all 0.4s ease;
}

.link-boxes .input-box input[type='button']:hover{
    opacity : 1;
}

footer .bottom-details{
    width : 100%;
    background : #000000;
}

footer .bottom-details .bottom-text{
    max-width : 1250px;
    margin : auto;
    padding : 20px 40px;
    display : flex;
    justify-content : space-between;
}

.bottom-details .bottom-text span,
.bottom-details .bottom-text a{
    font-size : 14px;
    font-weight : 300;
    color : #fff;
    opacity : 0.8;
    text-decoration: none;
}

.bottom-details .bottom-text a:hover{
    opacity : 1;
    text-decoration : underline ;
}

.bottom-details .bottom-text a{
    margin : 0px 10px;
}

@media screen and (max-width : 900px){
    footer .content .link-boxes{
        flex-wrap : wrap;
    }

    footer .content .link-boxes .input-box{
        width : 40%;
        margin-top : 10px;
    }
}

@media screen and (max-width : 700px){
    .content .top .logo-details{
        font-size : 26px;
    }
    .content .top .social-media a{
        width : 35px;
        height : 35px;
        font-size : 14px;
        line-height : 35px;
    }
    footer .content .link-boxes .box{
        width : calc(100% / 3 - 10px);
    }
    footer .content .link-boxes .input-box{
        width : 60%;
    }
    .bottom-details .bottom-text span,
    .bottom-details .bottom-text a{
        font-size : 12px;
    }
}

@media screen and (max-width : 650px){
    footer .bottom-details .bottom-text{
        flex-direction : column;
    }
    .bottom-details .bottom-text .copyright-text{
        margin-bottom : 15px;
    }
    .content .top .logo-details span{
        font-size : 16px;
    }
}

@media screen and (max-width : 520px){
    footer::before{
        top : 145px;
    }
    footer .content .top{
        flex-direction : column;
    }
    .content .top .social-media{
        margin-top : 16px;
    }
    footer .content .link-boxes .box{
        width : calc(100% / 2 - 10px);
    }
    footer .content .link-boxes .input-box{
        width : 100%;
    }
}

@media screen and (max-width : 385px){
    .content .top .logo-details span{
        font-size : 16px;
        margin-bottom : 10px;
    }
}
</style>