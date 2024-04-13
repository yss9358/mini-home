<template>

<div id="wrap">

    <header>
        <div class="header0">
            <div class="header1">
                <!-- 누르면 둘다 홈으로 -->
                <img src="../../assets/images/mainlogo.png">
                <span>
                    <a>집꾸며조</a>
                </span>
            </div>
            <!-- //header1 -->

            <div class="header2">
                <!-- 검색 키워드 사용 -->
                <!-- v-on:keyup.enter="submit" -->
                <img src="../../assets/images/search.png">
                <input type="text" name="" value="" placeholder="제목으로 검색하세요.">
            </div>
            <!-- //header2 -->

            <div class="header3">
                <!-- 누르면 장바구니 페이지로 -->
                <img src="../../assets/images/cart.png">

                <!-- 로그인하기전 -->
                <ul>
                    <li><a>로그인</a></li>
                    <li><a>회원가입</a></li>
                    <li><a>고객센터</a></li>
                </ul>

                <!-- 로그인하고나서 -->
                <!-- <ul>   
                    <li><a>ㅁㅁㅁ님</a></li>
                    <li><a>로그아웃</a></li>
                    <li><a>마이페이지</a></li>
                </ul> -->
                <!-- 관리자가 로그인했을때 -->
                <!-- <ul>   
                    <li><a>관리자</a></li>
                    <li><a>로그아웃</a></li>
                    <li><a>관리페이지</a></li>
                </ul> -->
            </div>
            <!-- //header3 -->
        </div>
        <!-- header0 -->
    </header>
    <!-- //header 부분 -->

    <nav class="clearfix">
        <div class="nav0">
            <div class="nav1">
                <!-- https://bomango.tistory.com/52 -->
                <ul class="nav1-main" v-on:mouseleave="mouseleave" >
                    <li>
                        <router-link to="/" v-on:mouseover="mouseover" >침대</router-link>
                        <ul class="nav1-sub" v-show="show">
                            <li><a>서브1</a></li>
                            <li><a>서브2</a></li>
                            <li><a>서브3</a></li>
                            <li><a>서브4</a></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/" v-on:mouseover="mouseover" >쇼파</router-link>
                        <ul class="nav1-sub" v-show="show">
                            <li><a>서브1</a></li>
                            <li><a>서브2</a></li>
                            <li><a>서브3</a></li>
                            <li><a>서브4</a></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/" v-on:mouseover="mouseover" >책상</router-link>
                        <ul class="nav1-sub" v-show="show">
                            <li><a>서브1</a></li>
                            <li><a>서브2</a></li>
                            <li><a>서브3</a></li>
                            <li><a>서브4</a></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/" v-on:mouseover="mouseover" >옷장</router-link>
                        <ul class="nav1-sub" v-show="show">
                            <li><a>서브1</a></li>
                            <li><a>서브2</a></li>
                            <li><a>서브3</a></li>
                            <li><a>서브4</a></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/" v-on:mouseover="mouseover" >기타</router-link>
                        <ul class="nav1-sub" v-show="show">
                            <li><a>서브1</a></li>
                            <li><a>서브2</a></li>
                            <li><a>서브3</a></li>
                            <li><a>서브4</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- nav1 -->
            <!-- https://apost.dev/1121/#google_vignette -->
            <div class="rollingbanner">
                <div class="title">1</div>
                <ul class="nav2-hit">
                    <li><router-link to="/" class="prev" >{{ hitList[0] }}</router-link></li>
                    <li><router-link to="/" class="current">{{ hitList[1] }}</router-link></li>
                    <li><router-link to="/" >{{ hitList[2] }}</router-link></li>
                    <li><router-link to="/" >{{ hitList[3] }}</router-link></li>
                    <li><router-link to="/" >{{ hitList[4] }}</router-link></li>
                    <li><router-link to="/" >{{ hitList[5] }}</router-link></li>
                    <li><router-link to="/" >{{ hitList[6] }}</router-link></li>
                    <li><router-link to="/" >{{ hitList[7] }}</router-link></li>
                    <li><router-link to="/" >{{ hitList[8] }}</router-link></li>
                    <li><router-link to="/" >{{ hitList[9] }}</router-link></li>
                    <li><router-link to="/" class="next">{{ hitList[10] }}</router-link></li>
                </ul>
            </div>

            
        </div>
        <!-- nav0 -->
    </nav>
    <!-- //nav 부분 -->

    <div class="content-slide clearfix">
        <div class="slide">
            <!-- https://jjineei.tistory.com/10 -->
        </div>
        <!-- slide -->
    </div>
    <!-- //content-slide 부분 -->

    <footer>
        <div class="footer">
            <ul>
                <li>집꾸며조</li>
                <li>CopyRight</li>
                <li>고객센터</li>
                <li>02-1111-1111</li>
            </ul>
        </div>
    </footer>
    <!-- //footer 부분 -->

</div>
<!-- //wrap -->
</template>

<script>
import '@/assets/css/home.css';
import '@/assets/css/main.css';

export default{
    name : 'MainView',
    components : {

    },
    data(){
        return{
            show : false, // 서브메뉴용 체크
            hitList : [
                '쇼파' ,
                '침대',
                '쇼파' ,
                '침대' ,
                 '쇼파' ,
                '침대' ,
                '쇼파',
                '침대' ,
                '쇼파' ,
                '침대' 
            ]
        }
    },
    methods : {
        mouseover(){ // 마우스 올리면 서브메뉴 보여줌
            this.show = true;
        },
        mouseleave(){ // 마우스 떼면 서브메뉴 사라짐
            this.show = false;
        },

        
        
    },
    created (){
        
    }
}

</script>

<style>

</style>