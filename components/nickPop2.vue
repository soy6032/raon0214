<template><!-- 커스텀 템플릿 모달 -->
  <div id="nickPop2" style="height:640px;">
    <v-dialog
        v-model="nickState2"
        persistent
        max-width="420"
      >
      <v-card class="nickSetWrap" >
        <v-icon class="closeIcon" @click="popCloses" id="btnfadeOut">
          mdi-close
        </v-icon>
        <h3 class="com_fonts11">커스텀 항목을 선택해 주세요</h3>
        <button class="com_btn com_btn_line_orange proBtn120" onclick="remove()" style="margin-top:30px;" @click="popCloses">페이지 초기화</button><br>
        <div style="width:100%; border-bottom:1px dotted lightgray; margin-top:10px; text-align: center; color:gray">
          <span style="margin-bottom:5px; display:block;">목차</span>
        </div>
        <button class="com_btn com_btn_line_orange proBtn120" onclick="m_list()" style="margin-top:10px;" @click="popCloses">목차</button>
        <button class="com_btn com_btn_line_orange proBtn120" onclick="m_list2()" style="margin-top:10px;" @click="popCloses">목차 목록 추가</button><br>
        <div style="width:100%; border-bottom:1px dotted lightgray; margin-top:10px; text-align: center; color:gray">
          <span style="margin-bottom:5px; display:block;">제목</span>
        </div>
        <button class="com_btn com_btn_line_orange proBtn120" onclick="f_title()" style="margin-top:10px;"  @click="popCloses">제목 생성(대)</button>
        <button class="com_btn com_btn_line_orange proBtn120" onclick="m_title()" style="margin-top:10px;" @click="popCloses">제목 생성(중)</button>
        <button class="com_btn com_btn_line_orange proBtn120" onclick="s_title()" style="margin-top:10px;" @click="popCloses">제목 생성(소)</button><br>
        <div style="width:100%; border-bottom:1px dotted lightgray; margin-top:15px; text-align: center; color:gray; font-weight:bold;">
          <span style="margin-bottom:5px; display:block;">텍스트</span>
        </div>
        <button class="com_btn com_btn_line_orange proBtn120" onclick="s_textbox()" style="margin-top:10px;" @click="popCloses">텍스트박스(소)</button>
        <button class="com_btn com_btn_line_orange proBtn120" onclick="m_textbox()" style="margin-top:10px;" @click="popCloses">텍스트박스(중)</button>
        <button class="com_btn com_btn_line_orange proBtn120" onclick="l_textbox()" style="margin-top:10px;" @click="popCloses">텍스트박스(대)</button><br>
        <div style="width:100%; border-bottom:1px dotted lightgray; margin-top:15px; text-align: center; color:gray; font-weight:bold;">
          <span style="margin-bottom:5px; display:block;">이미지</span>
        </div>
        <button class="com_btn com_btn_line_orange proBtn120" onclick="s_img()" style="margin-top:10px;" @click="popCloses">이미지(소)</button>
        <button class="com_btn com_btn_line_orange proBtn120" onclick="m_img()" style="margin-top:10px;" @click="popCloses">이미지(중)</button>
        <button class="com_btn com_btn_line_orange proBtn120" onclick="l_img()" style="margin-top:10px;" @click="popCloses">이미지(대)</button><br>
        
        <div style="width:100%; border-bottom:1px dotted lightgray; margin-top:15px; text-align: center; color:gray; font-weight:bold;">
          <span style="margin-bottom:5px; display:block;">기타</span>
        </div>
        <button class="com_btn com_btn_line_orange proBtn120" onclick="mind()" style="margin-top:10px;" @click="popCloses">마인드맵</button>
        <button class="com_btn com_btn_line_orange proBtn120" onclick="table()" style="margin-top:10px;" @click="popCloses">테이블</button><br>
       <!-- <p class="com_fonts09 com_textGray" style="padding-top:3px;">닉네임은 해당 프로젝트내에서만 사용되며 중복이 불가능 합니다.</p>
        <input type="text" name="nickName" autocomplete = "off" class="com_input nickInput" v-model="userNick" />
        <button class="com_btn_90 com_btn_orange" @click="nickOk">확인</button> -->
      </v-card>
    </v-dialog>
    <AlertPop :alertState="alertState" @popClose="alertState = false">
      {{alertCon}}
    </AlertPop>
  </div>
</template>
<script>
  export default {
    name:'NickPop2',
    props: {
      nickState2: Boolean,
      pdx: Number
    },
    data () {
      return {
        userNick: '',
        alertState: false,
        alertCon: ''
      };
    },
    methods: {
      // 닉네임 설정창 닫기
      popCloses () {
        this.$emit('popClose');
        this.userNick = '';
      },
      // 닉네임 설정
      nickOk () {
        if(this.userNick.replace(/(\s*)/g, '') === "") {
          this.alertCon = "설정하실 닉네임을 입력하세요.";
          this.alertState = true;
          return false;
        } else {
          this.$axios.post('/client/setNickname',{
            pdx: this.pdx,
            uid: this.$store.state.userIdx,
            nick: this.userNick
          }).then((res) => {
            //console.log(res);
            this.alertState = true;
            this.alertCon = res.data.msg;
            if(res.data.state) {
              this.$emit('popClose');
            }
          });
        }
      }
    }
  };
</script>
<style>
  .nickSetWrap {
    padding: 20px;
  }
  .nickSetWrap{
    z-index: 9999;
  }
  .nickInput {
    width: calc(100% - 103px);
    margin-top: 30px;
    margin-right: 7px;
  }
  
  /*confirm custom*/
  /*.conDialog {*/
    /*height: 150px !important;*/
  /*}*/
  /*.confirmWrap {*/
    /*height: 150px !important;*/
  /*  padding: 30px 0 0 0 !important;*/
  /*}*/
  /*.confirmCon {*/
  /*  padding: 0 0 35px 0 !important;*/
  /*}*/
</style>