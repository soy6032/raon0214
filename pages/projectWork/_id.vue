<template><!-- 프로젝트 작업페이지 -->
  <div id="projectWork">
    <div class="proWorkWrap">

<script>
    
    function delete3(id) {
      //속성 : class 값으로 on 추가
      var test = id.nextSibling;
      id.innerHTML=''
      test.innerHTML = '';
      return false;
    }

    var idcheck = null;
      function reply_click(clicked_id)
    {
      idcheck = clicked_id;
      return idcheck;
    }
    

    function appendHtml(el, str) {
      var div = document.createElement('div');
      div.innerHTML = str;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    }


   function randomNum(min, max){
    var randNum = Math.floor(Math.random()*(max-min+1)) + min;
    return randNum;
}

   

     function m_title() {
       var randNum = randomNum(1, 500000);
         if(idcheck == null){
           var test =  document.getElementById("tem09_0");
           var html = '<p id="delete" class="delete" onclick="delete3(this)" >ⓧ</p><div><input type="text" name="inputTitle" autocomplete="off" id="test"	value="제목을 입력하세요" maxlength="25" class="select select_'+randNum+'"style="width: 100%; height: 50px; text-align: center; font-size: 1.9rem; font-weight: 600;"></div>';
           appendHtml(test, html);
         }else{
         var test =  document.getElementById("tem09_"+ idcheck);
         var html = '<p id="delete" class="delete" onclick="delete3(this)" >ⓧ</p><div><input type="text" name="inputTitle" autocomplete="off" id="test" value="제목을 입력하세요" maxlength="25" class="select select_'+randNum+'" style="width: 100%; height: 50px; text-align: center; font-size: 1.9rem; font-weight: 600;"></div>';
         appendHtml(test, html);
        }
     }

    function s_title() {
       var randNum = randomNum(1, 500000);
        if(idcheck == null){
          var test =  document.getElementById("tem09_0");
          var html = '<p id="delete" class="delete" onclick="delete3(this)" >ⓧ</p><div><input type="text" autocomplete="off" name="evaluate01" value="제목을 입력하세요" maxlength="36" class="select select_'+randNum+121+'" style="width: 100%;height: 45px;font-size: 1.3rem;font-weight: 600;text-align: center;padding-left: 10px;border: none;outline: none;"></div>';
          appendHtml(test, html);
        }else{
        var test =  document.getElementById("tem09_"+ idcheck);
        var html = '<p id="delete" class="delete" onclick="delete3(this)" >ⓧ</p><div><input type="text" autocomplete="off" name="evaluate01" value="제목을 입력하세요" maxlength="36" class="select select_'+randNum+121+'" style="width: 100%;height: 45px;font-size: 1.3rem;font-weight: 600;text-align: center;padding-left: 10px;border: none;outline: none;"></div>';
        appendHtml(test, html);
        }
        
    }

    function f_title() {
      var randNum = randomNum(1, 500000);
        if(idcheck == null){
          var test =  document.getElementById("tem09_0");
          var html = '<p id="delete" class="delete" onclick="delete3(this)" >ⓧ</p><div><input type="text" autocomplete="off" name="inputTitle" value="제목을 입력하세요ddd" maxlength="17" class="select select_'+randNum+111+'" style="width: 100%; height: 80px; text-align: center; font-size: 2.7rem; font-weight: 600; padding: 0px 5px; margin-top: 20px;"></div>';
          appendHtml(test, html);
        }else{
        var test =  document.getElementById("tem09_"+ idcheck);
        var html = '<p id="delete" class="delete" onclick="delete3(this)" >ⓧ</p><div><input type="text" autocomplete="off" name="inputTitle" value="제목을 입력하세요" maxlength="17" class="select select_'+randNum+111+'" style="width: 100%; height: 80px; text-align: center; font-size: 2.7rem; font-weight: 600; padding: 0px 5px; margin-top: 20px;"></div>';
        appendHtml(test, html);
        }
    }
    function s_img() {
      var randNum = randomNum(1, 500000);
        if(idcheck == null){
          var test =  document.getElementById("tem09_0");
          var html = '<p id="delete" class="delete" onclick="delete3(this)" >ⓧ</p><div><div style="width: 400px; height: 260px; margin: 0px auto 20px;"><input type="text" autocomplete="off" name="tem02Item1" value="title" maxlength="22" class="select select_'+randNum+10+'" style="width: 100%; height: 40px; font-size: 1.1rem; text-align: center;"> <div class="imgUpload imgUpload'+randNum+'" style="border: 1px solid rgb(229, 229, 229); width: 402px; height: 222px; position: relative; overflow: hidden; text-align: center;"><label for="tem02_'+randNum+'Img" class="select select_'+randNum+16+'" value="undefined" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: rgb(255, 255, 255); font-size: 0.9rem; font-weight: 600; border-radius: 5px; padding: 5px; background: rgb(239, 132, 84);">이미지 선택</label> <input id="tem02_'+randNum+'Img" type="file" accept="image/png, image/jpeg" class="select select_'+randNum+16+'" value="" style="display: none;"> <p style="width: 100%; color: rgb(149, 149, 149); font-size: 0.9rem; position: absolute; top: 140px; left: 50%; transform: translateX(-50%);">이미지 최적화 사이즈<br>1.82:1 , 400px x 220px , 10.58cm x 5.8cm</p></div></div></div>';
          appendHtml(test, html);
        }else{
        var test =  document.getElementById("tem09_"+ idcheck);
        var html = '<p id="delete" class="delete" onclick="delete3(this)" >ⓧ</p><div><div style="width: 400px; height: 260px; margin: 0px auto 20px;"><input type="text" autocomplete="off" name="tem02Item1" value="title" maxlength="22" class="select select_'+randNum+10+'" style="width: 100%; height: 40px; font-size: 1.1rem; text-align: center;"> <div class="imgUpload imgUpload'+randNum+'" style="border: 1px solid rgb(229, 229, 229); width: 402px; height: 222px; position: relative; overflow: hidden; text-align: center;"><label for="tem02_'+randNum+'Img" class="select select_'+randNum+16+'" value="undefined" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: rgb(255, 255, 255); font-size: 0.9rem; font-weight: 600; border-radius: 5px; padding: 5px; background: rgb(239, 132, 84);">이미지 선택</label> <input id="tem02_'+randNum+'Img" type="file" accept="image/png, image/jpeg" class="select select_'+randNum+16+'" value="" style="display: none;"> <p style="width: 100%; color: rgb(149, 149, 149); font-size: 0.9rem; position: absolute; top: 140px; left: 50%; transform: translateX(-50%);">이미지 최적화 사이즈<br>1.82:1 , 400px x 220px , 10.58cm x 5.8cm</p></div></div></div>';
        appendHtml(test, html);
        }
    }
    function l_img() {
      var randNum = randomNum(1, 500000);
        if(idcheck == null){
          var test =  document.getElementById("tem09_0");
          var html = '<p id="delete" class="delete" onclick="delete3(this)" >ⓧ</p><div><div style="width: 700px; height: 520px; margin: 0px auto;"><input type="text" autocomplete="off" name="tem04Item1" value="이미지 텍스트" maxlength="39" class="select select_'+randNum+16+'" style="width: 100%; height: 40px; font-size: 1.1rem; text-align: center;"> <div class="imgUpload imgUpload'+randNum+'" style="border: 1px solid rgb(229, 229, 229); width: 702px; height: 482px; position: relative; overflow: hidden; text-align: center;"><label for="tem02_'+randNum+'Img" class="select select_'+randNum+17+'" value="undefined" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: rgb(255, 255, 255); font-size: 0.9rem; font-weight: 600; border-radius: 5px; padding: 5px; background: rgb(239, 132, 84);">이미지 선택</label> <input id="tem02_'+randNum+'Img" type="file" accept="image/png, image/jpeg" class="select select_'+randNum+17+'" value="" style="display: none;"> <p style="width: 100%; color: rgb(149, 149, 149); font-size: 0.9rem; position: absolute; top: 270px; left: 50%; transform: translateX(-50%);">이미지 최적화 사이즈<br>1.46:1 , 700px x 480px , 18.5cm x 12.7cm</p></div></div></div>';
          appendHtml(test, html);
        }else{
        var test =  document.getElementById("tem09_"+ idcheck);
        var html = '<p id="delete" class="delete" onclick="delete3(this)" >ⓧ</p><div><div style="width: 700px; height: 520px; margin: 0px auto;"><input type="text" autocomplete="off" name="tem04Item1" value="이미지 텍스트" maxlength="39" class="select select_'+randNum+16+'" style="width: 100%; height: 40px; font-size: 1.1rem; text-align: center;"> <div class="imgUpload imgUpload'+randNum+'" style="border: 1px solid rgb(229, 229, 229); width: 702px; height: 482px; position: relative; overflow: hidden; text-align: center;"><label for="tem02_'+randNum+'Img" class="select select_'+randNum+17+'" value="undefined" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: rgb(255, 255, 255); font-size: 0.9rem; font-weight: 600; border-radius: 5px; padding: 5px; background: rgb(239, 132, 84);">이미지 선택</label> <input id="tem02_'+randNum+'Img" type="file" accept="image/png, image/jpeg" class="select select_'+randNum+17+'" value="" style="display: none;"> <p style="width: 100%; color: rgb(149, 149, 149); font-size: 0.9rem; position: absolute; top: 270px; left: 50%; transform: translateX(-50%);">이미지 최적화 사이즈<br>1.46:1 , 700px x 480px , 18.5cm x 12.7cm</p></div></div></div>';
        appendHtml(test, html);
        }
    }
    function m_img() {
      var randNum = randomNum(1, 500000);
        if(idcheck == null){
          var test =  document.getElementById("tem09_0");
          var html = '<p id="delete" class="delete" onclick="delete3(this)" >ⓧ</p><div><div style="width: 600px; height: 300px; margin: 0px auto;"><input type="text" autocomplete="off" name="tem05Item1" value="이미지 텍스트" maxlength="34" class="select select_'+randNum+12+'" style="width: 100%; height: 40px; font-size: 1.1rem; text-align: center;"> <div class="imgUpload imgUpload'+randNum+'" style="border: 1px solid rgb(229, 229, 229); width: 602px; height: 262px; position: relative; overflow: hidden; text-align: center;"><label for="tem02_'+randNum+'Img" class="select select_'+randNum+15+'" value="undefined" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: rgb(255, 255, 255); font-size: 0.9rem; font-weight: 600; border-radius: 5px; padding: 5px; background: rgb(239, 132, 84);">이미지 선택</label> <input id="tem02_'+randNum+'Img" type="file" accept="image/png, image/jpeg" class="select select_'+randNum+15+'" value="" style="display: none;"> <p style="width: 100%; color: rgb(149, 149, 149); font-size: 0.9rem; position: absolute; top: 160px; left: 50%; transform: translateX(-50%);">이미지 최적화 사이즈<br>2.31:1 , 600px x 260px , 15.8cm x 6.8cm</p></div></div></div>';
          appendHtml(test, html);
        }else{
        var test =  document.getElementById("tem09_"+ idcheck);
        var html = '<p id="delete" class="delete" onclick="delete3(this)" >ⓧ</p><div><div style="width: 600px; height: 300px; margin: 0px auto;"><input type="text" autocomplete="off" name="tem05Item1" value="이미지 텍스트" maxlength="34" class="select select_'+randNum+12+'" style="width: 100%; height: 40px; font-size: 1.1rem; text-align: center;"> <div class="imgUpload imgUpload'+randNum+'" style="border: 1px solid rgb(229, 229, 229); width: 602px; height: 262px; position: relative; overflow: hidden; text-align: center;"><label for="tem02_'+randNum+'Img" class="select select_'+randNum+15+'" value="undefined" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: rgb(255, 255, 255); font-size: 0.9rem; font-weight: 600; border-radius: 5px; padding: 5px; background: rgb(239, 132, 84);">이미지 선택</label> <input id="tem02_'+randNum+'Img" type="file" accept="image/png, image/jpeg" class="select select_'+randNum+15+'" value="" style="display: none;"> <p style="width: 100%; color: rgb(149, 149, 149); font-size: 0.9rem; position: absolute; top: 160px; left: 50%; transform: translateX(-50%);">이미지 최적화 사이즈<br>2.31:1 , 600px x 260px , 15.8cm x 6.8cm</p></div></div></div>';
        appendHtml(test, html);
        }
    }

    function m_textbox() {
      var randNum = randomNum(1, 500000);
        if(idcheck == null){
          var test =  document.getElementById("tem09_0");
          var html = '<p id="delete" class="delete custom" onclick="delete3(this)" >ⓧ</p><div><div style="width: 100%; margin: 0px auto 0px; border: 1px solid rgb(229, 229, 229); padding: 0px 5px;"><textarea type="text" autocomplate="off" class="select select_'+randNum+11+'" value="" style="margin-top: 5px; font-size: 0.95rem; overflow: hidden; width: 100%; height: 180px; border: none; outline: none;"></textarea></div></div>';
          appendHtml(test, html);
        }else{
        var test =  document.getElementById("tem09_"+ idcheck);
        var html = '<p id="delete" class="delete custom" onclick="delete3(this)" >ⓧ</p><div><div style="width: 100%; margin: 0px auto 0px; border: 1px solid rgb(229, 229, 229); padding: 0px 5px;"><textarea type="text" autocomplate="off" class="select select_'+randNum+11+'" value="" style="margin-top: 5px; font-size: 0.95rem; overflow: hidden; width: 100%; height: 180px; border: none; outline: none;"></textarea></div></div>';
        appendHtml(test, html);
        }
    }

    function s_textbox() {
      var randNum = randomNum(1, 500000);
        if(idcheck == null){
          var test =  document.getElementById("tem09_0");
          var html = '<p id="delete" class="delete custom" onclick="delete3(this)" >ⓧ</p><div><div style="width: 100%; overflow: hidden;  margin-bottom: 15px; border: 1px solid rgb(229, 229, 229); padding: 5px; "><textarea type="text" autocomplete="off" class="select select_'+randNum+0+'" value="" style="width: 100%; height: 51px; margin-top: 7px; overflow: hidden; border: none; outline: none;"></textarea></div></div>';
          appendHtml(test, html);
        }else{
        var test =  document.getElementById("tem09_"+ idcheck);
        var html = '<p id="delete" class="delete custom" onclick="delete3(this)" >ⓧ</p><div><div style="width: 100%; overflow: hidden;  margin-bottom: 15px; border: 1px solid rgb(229, 229, 229); padding: 5px; "><textarea type="text" autocomplete="off" class="select select_'+randNum+0+'" value="" style="width: 100%; height: 51px; margin-top: 7px; overflow: hidden; border: none; outline: none;"></textarea></div></div>';
        appendHtml(test, html);
        }
    }

    function l_textbox() {
      var randNum = randomNum(1, 500000);
        if(idcheck == null){
          var test =  document.getElementById("tem09_0");
          var html = '<p id="delete" class="delete custom" onclick="delete3(this)" >ⓧ</p><div><div style="border: 1px solid rgb(229, 229, 229); padding: 0px 5px;"><textarea type="text" autocomplate="off" id="test234" onclick="initTemplate()"  class="select select_'+randNum+9+'"  contenteditable="true" value="" style="margin-top: 5px; font-size: 0.95rem; overflow: hidden; width: 100%; height: 444px; border: none; outline: none;"></textarea></div></div>';
          appendHtml(test, html);
        }else{
        var test =  document.getElementById("tem09_"+ idcheck);
        var html = '<p id="delete" class="delete custom" onclick="delete3(this)" >ⓧ</p><div><div style="border: 1px solid rgb(229, 229, 229); padding: 0px 5px;"><textarea type="text" autocomplate="off" id="test234" onclick="initTemplate()" class="select select_'+randNum+9+'" value="" style="margin-top: 5px; font-size: 0.95rem; overflow: hidden; width: 100%; height: 444px; border: none; outline: none;"></textarea></div></div>';
        appendHtml(test, html);
        }
    }
    
    function m_list() {
      var randNum = randomNum(1, 500000);
        if(idcheck == null){
          var test =  document.getElementById("tem09_0");
          var html = '<p id="delete" class="delete" onclick="delete3(this)" >ⓧ</p><div><div style="width: 400px; margin: 0px auto 0px;"><input type="text" autocomplete="off" name="listInput" value="목차" maxlength="17" class="select select_'+randNum+8+'" style="width: 100%; height: 45px; font-size: 1.4rem; font-weight: 600;"> <div style="margin-top: 15px;"><input type="text" autocomplate="off" placeholder="" class="select select_2" maxlength="22" value="1. text" style="width: 100%; height: 45px; font-size: 1.1rem;"> </div></div></div>';
          appendHtml(test, html);
        }else{
        var test =  document.getElementById("tem09_"+ idcheck);
        var html = '<p id="delete" class="delete" onclick="delete3(this)" >ⓧ</p><div><div style="width: 400px; margin: 0px auto 0px;"><input type="text" autocomplete="off" name="listInput" value="목차" maxlength="17" class="select select_'+randNum+8+'" style="width: 100%; height: 45px; font-size: 1.4rem; font-weight: 600;"> <div style="margin-top: 15px;"><input type="text" autocomplate="off" placeholder="" class="select select_2" maxlength="22" value="1. text" style="width: 100%; height: 45px; font-size: 1.1rem;"> </div></div></div>';
        appendHtml(test, html);
        }
    }

    function m_list2() {
      var randNum = randomNum(1, 500000);
        if(idcheck == null){
          var test =  document.getElementById("tem09_0");
          var html = '<p id="delete" class="delete list2" onclick="delete3(this)" >ⓧ</p><div><div style="width: 400px; margin: 0px auto 0px;"><input type="text" autocomplate="off" placeholder="" class="select select_'+randNum+7+'" maxlength="22" value="1. text" style="width: 100%; height: 45px; font-size: 1.1rem;"></div>';
          appendHtml(test, html);
        }else{
        var test =  document.getElementById("tem09_"+ idcheck);
        var html = '<p id="delete" class="delete list2" onclick="delete3(this)" >ⓧ</p><div><div style="width: 400px; margin: 0px auto 0px;"><input type="text" autocomplate="off" placeholder="" class="select select_'+randNum+7+'" maxlength="22" value="1. text" style="width: 100%; height: 45px; font-size: 1.1rem;"></div>';
        appendHtml(test, html);
        }
    }

    function mind() {
      var randNum = randomNum(1, 500000);
        if(idcheck == null){
          var test =  document.getElementById("tem09_0");
          var html = '<p id="delete" class="delete" onclick="delete3(this)" >ⓧ</p><div><div style="width: 100%; height: 450px; overflow: hidden; position: relative;"><textarea type="text" autocomplete="off" class="select select_'+randNum+1+'" style="width: 150px;height: 100px;text-align: center;font-size: 1rem;font-weight: 600;position: absolute;top: 20px;right: 180px;border: none;border-radius: 10%;background-color: rgb(236, 240, 241);outline: none;">키워드</textarea><textarea type="text" autocomplete="off" class="select select_'+randNum+2+'" style="width: 150px;height: 100px;text-align: center;font-size: 1rem;font-weight: 600;position: absolute;top: 25px;left: 180px;border: none;border-radius: 10%;background-color: rgb(236, 240, 241);outline: none;">키워드</textarea><textarea type="text" autocomplete="off" class="select select_'+randNum+3+'" style="width: 150px;height: 100px;text-align: center;font-size: 1rem;font-weight: 600;position: absolute;bottom: 200px;right: 80px;border: none;border-radius: 10%;background-color: rgb(236, 240, 241);outline: none;">키워드</textarea><textarea type="text" autocomplete="off" class="select select_'+randNum+4+'" style="width: 150px;height: 100px;text-align: center;font-size: 1rem;font-weight: 600;position: absolute;bottom: 50px;right: 170px;border: none;border-radius: 10%;background-color: rgb(236, 240, 241);outline: none;">키워드</textarea><textarea type="text" autocomplete="off" class="select select_'+randNum+5+'" style="width: 150px;height: 100px;text-align: center;font-size: 1rem;font-weight: 600;position: absolute;bottom: 45px;left: 225px;border: none;border-radius: 10%;background-color: rgb(236, 240, 241);outline: none;">키워드</textarea><textarea type="text" autocomplete="off" class="select select_'+randNum+6+'" style="width: 150px;height: 100px;text-align: center;font-size: 1rem;font-weight: 600;position: absolute;bottom: 200px;left: 90px;border: none;border-radius: 10%;background-color: rgb(236, 240, 241);outline: none;">키워드</textarea><div style="width: 95px; border: 1px solid black; transform: 50%; transform: rotate(5deg); top: 215px; right: 228px; position: absolute;"></div><div style="width: 90px;border: 1px solid black;transform: 50%;transform: rotate(60deg);bottom: 187px;right: 250px;position: absolute;"></div><div style="width: 100px;border: 1px solid black;transform: 50%;transform: rotate(-65deg);bottom: 188px;left: 280px;position: absolute;"></div><div style="width: 85px; border: 1px solid black; transform: 50%; transform: rotate(-5deg); top: 215px; left: 240px; position: absolute;"></div><div style="width: 70px;border: 1px solid black;transform: 50%;transform: rotate(55deg);top: 150px;left: 280px;position: absolute;"></div><div style="width: 80px;border: 1px solid black;transform: 50%;transform: rotate(-55deg);top: 150px;left: 380px;position: absolute;"></div><input type="text" autocomplete="off" name="keyword_1" value="키워드주제" maxlength="10" class="select select_8 select_8" style="width: 180px; height: 60px; text-align: center; font-size: 1rem; font-weight: 600; color: rgb(0, 0, 0); position: absolute; bottom: 213px; right: 285px; background-color: gray; border-radius: 51%; border: none; outline: none;"></div></div>';
          appendHtml(test, html);
        }else{
        var test =  document.getElementById("tem09_"+ idcheck);
        var html = '<p id="delete" class="delete" onclick="delete3(this)" >ⓧ</p><div><div style="width: 100%; height: 450px; overflow: hidden; position: relative;"><textarea type="text" autocomplete="off" class="select select_'+randNum+1+'" style="width: 150px;height: 100px;text-align: center;font-size: 1rem;font-weight: 600;position: absolute;top: 20px;right: 180px;border: none;border-radius: 10%;background-color: rgb(236, 240, 241);outline: none;">키워드</textarea><textarea type="text" autocomplete="off" class="select select_'+randNum+2+'" style="width: 150px;height: 100px;text-align: center;font-size: 1rem;font-weight: 600;position: absolute;top: 25px;left: 180px;border: none;border-radius: 10%;background-color: rgb(236, 240, 241);outline: none;">키워드</textarea><textarea type="text" autocomplete="off" class="select select_'+randNum+3+'" style="width: 150px;height: 100px;text-align: center;font-size: 1rem;font-weight: 600;position: absolute;bottom: 200px;right: 80px;border: none;border-radius: 10%;background-color: rgb(236, 240, 241);outline: none;">키워드</textarea><textarea type="text" autocomplete="off" class="select select_'+randNum+4+'" style="width: 150px;height: 100px;text-align: center;font-size: 1rem;font-weight: 600;position: absolute;bottom: 50px;right: 170px;border: none;border-radius: 10%;background-color: rgb(236, 240, 241);outline: none;">키워드</textarea><textarea type="text" autocomplete="off" class="select select_'+randNum+5+'" style="width: 150px;height: 100px;text-align: center;font-size: 1rem;font-weight: 600;position: absolute;bottom: 45px;left: 225px;border: none;border-radius: 10%;background-color: rgb(236, 240, 241);outline: none;">키워드</textarea><textarea type="text" autocomplete="off" class="select select_'+randNum+6+'" style="width: 150px;height: 100px;text-align: center;font-size: 1rem;font-weight: 600;position: absolute;bottom: 200px;left: 90px;border: none;border-radius: 10%;background-color: rgb(236, 240, 241);outline: none;">키워드</textarea><div style="width: 95px; border: 1px solid black; transform: 50%; transform: rotate(5deg); top: 215px; right: 228px; position: absolute;"></div><div style="width: 90px;border: 1px solid black;transform: 50%;transform: rotate(60deg);bottom: 187px;right: 250px;position: absolute;"></div><div style="width: 100px;border: 1px solid black;transform: 50%;transform: rotate(-65deg);bottom: 188px;left: 280px;position: absolute;"></div><div style="width: 85px; border: 1px solid black; transform: 50%; transform: rotate(-5deg); top: 215px; left: 240px; position: absolute;"></div><div style="width: 70px;border: 1px solid black;transform: 50%;transform: rotate(55deg);top: 150px;left: 280px;position: absolute;"></div><div style="width: 80px;border: 1px solid black;transform: 50%;transform: rotate(-55deg);top: 150px;left: 380px;position: absolute;"></div><input type="text" autocomplete="off" name="keyword_1" value="키워드주제" maxlength="10" class="select select_8 select_8" style="width: 180px; height: 60px; text-align: center; font-size: 1rem; font-weight: 600; color: rgb(0, 0, 0); position: absolute; bottom: 213px; right: 285px; background-color: gray; border-radius: 51%; border: none; outline: none;"></div></div>';
        appendHtml(test, html);
        }
    }

    function table() {
      var randNum = randomNum(1, 500000);
        if(idcheck == null){
          var test =  document.getElementById("tem09_0");
          var html = '<p id="delete" class="delete" onclick="delete3(this)" >ⓧ</p><div><div style="width: 100%;"><div style="width: 120px;height: 120.5px;float: left;border-top: 1px solid rgb(149, 149, 149);border-right: 1px solid rgb(149, 149, 149);border-bottom: 1px solid rgb(149, 149, 149);border-left: none;border-image: initial;padding: 5px;background: rgb(229, 229, 229);"><input type="text" autocomplete="off" name="recordItem1_05" maxlength="7" class="select select_'+randNum+'" value="제목" style="width: 100%; height: 44px; text-align: center; font-size: 0.95rem; font-weight: 600; float: left; margin-top: 32px; border: none; outline: none;"></div> <div style="width: calc(100% - 120px);height: 120.5px;float: right;border-top: 1px solid rgb(149, 149, 149);border-right: none;border-bottom: 1px solid rgb(149, 149, 149);border-left: none;border-image: initial;padding: 5px;"><textarea type="text" autocomplete="off" class="select select_'+randNum+1+'" value="" style="width: 100%; height: 110px; font-size: 0.9rem; float: left; overflow: hidden; border: none; outline: none;"></textarea></div></div></div>';
          appendHtml(test, html);
        }else{
        var test =  document.getElementById("tem09_"+ idcheck);
        var html = '<p id="delete" class="delete" onclick="delete3(this)" >ⓧ</p><div><div style="width: 100%;"><div style="width: 120px;height: 120.5px;float: left;border-top: 1px solid rgb(149, 149, 149);border-right: 1px solid rgb(149, 149, 149);border-bottom: 1px solid rgb(149, 149, 149);border-left: none;border-image: initial;padding: 5px;background: rgb(229, 229, 229);"><input type="text" autocomplete="off" name="recordItem1_05" maxlength="7" class="select select_'+randNum+'" value="제목" style="width: 100%; height: 44px; text-align: center; font-size: 0.95rem; font-weight: 600; float: left; margin-top: 32px; border: none; outline: none;"></div> <div style="width: calc(100% - 120px);height: 120.5px;float: right;border-top: 1px solid rgb(149, 149, 149);border-right: none;border-bottom: 1px solid rgb(149, 149, 149);border-left: none;border-image: initial;padding: 5px;"><textarea type="text" autocomplete="off" class="select select_'+randNum+1+'" value="" style="width: 100%; height: 110px; font-size: 0.9rem; float: left; overflow: hidden; border: none; outline: none;"></textarea></div></div></div>';
        appendHtml(test, html);
        }
    }

    function remove() {
      var randNum = randomNum(1, 500000);
        if(idcheck == null){
          var test =  document.getElementById("tem09_0");
          test.innerHTML = '';
        }else{
        var test =  document.getElementById("tem09_"+ idcheck);
        var html = '<div style="width: 100%; height: 450px; overflow: hidden; position: relative;"><textarea type="text" autocomplete="off" class="select select_3 select_2" style="width: 150px;height: 100px;text-align: center;font-size: 1rem;font-weight: 600;position: absolute;top: 20px;right: 180px;border: none;border-radius: 10%;background-color: rgb(236, 240, 241);outline: none;">키워드</textarea><textarea type="text" autocomplete="off" class="select select_3 select_3" style="width: 150px;height: 100px;text-align: center;font-size: 1rem;font-weight: 600;position: absolute;top: 25px;left: 180px;border: none;border-radius: 10%;background-color: rgb(236, 240, 241);outline: none;">키워드</textarea><textarea type="text" autocomplete="off" class="select select_3 select_4" style="width: 150px;height: 100px;text-align: center;font-size: 1rem;font-weight: 600;position: absolute;bottom: 200px;right: 80px;border: none;border-radius: 10%;background-color: rgb(236, 240, 241);outline: none;">키워드</textarea><textarea type="text" autocomplete="off" class="select select_3 select_5" style="width: 150px;height: 100px;text-align: center;font-size: 1rem;font-weight: 600;position: absolute;bottom: 50px;right: 170px;border: none;border-radius: 10%;background-color: rgb(236, 240, 241);outline: none;">키워드</textarea><textarea type="text" autocomplete="off" class="select select_3 select_6" style="width: 150px;height: 100px;text-align: center;font-size: 1rem;font-weight: 600;position: absolute;bottom: 45px;left: 225px;border: none;border-radius: 10%;background-color: rgb(236, 240, 241);outline: none;">키워드</textarea><textarea type="text" autocomplete="off" class="select select_3 select_7" style="width: 150px;height: 100px;text-align: center;font-size: 1rem;font-weight: 600;position: absolute;bottom: 200px;left: 90px;border: none;border-radius: 10%;background-color: rgb(236, 240, 241);outline: none;">키워드</textarea><div style="width: 95px; border: 1px solid black; transform: 50%; transform: rotate(5deg); top: 215px; right: 228px; position: absolute;"></div><div style="width: 90px;border: 1px solid black;transform: 50%;transform: rotate(60deg);bottom: 187px;right: 250px;position: absolute;"></div><div style="width: 100px;border: 1px solid black;transform: 50%;transform: rotate(-65deg);bottom: 188px;left: 280px;position: absolute;"></div><div style="width: 85px; border: 1px solid black; transform: 50%; transform: rotate(-5deg); top: 215px; left: 240px; position: absolute;"></div><div style="width: 70px;border: 1px solid black;transform: 50%;transform: rotate(55deg);top: 150px;left: 280px;position: absolute;"></div><div style="width: 80px;border: 1px solid black;transform: 50%;transform: rotate(-55deg);top: 150px;left: 380px;position: absolute;"></div><input type="text" autocomplete="off" name="keyword_1" value="키워드주제" maxlength="10" class="select select_8 select_8" style="width: 180px; height: 60px; text-align: center; font-size: 1rem; font-weight: 600; color: rgb(0, 0, 0); position: absolute; bottom: 213px; right: 285px; background-color: gray; border-radius: 51%; border: none; outline: none;"></div></div>';
        test.innerHTML = '';
        }
    }

    function test() {
      var today = new Date();

      var year = today.getFullYear();
      var month = ('0' + (today.getMonth() + 1)).slice(-2);
      var day = ('0' + today.getDate()).slice(-2);

      var dateString = year + '-' + month  + '-' + day;

      console.log(dateString);
      var seldate = document.getElementById('test50').value;
      if(seldate < dateString){
        alert("오늘 이전의 날짜는 선택할 수 없습니다");
        document.getElementById('test50').value = dateString;
      }else{
        
      }
    }

 
     




    </script>

    
      <div class="proTop">
       <div class="projectTitle">
          <h3 class="com_fonts13 proName">
            <input v-model="projectName" type="text" >
          </h3>
          <p class="com_fonts10 com_textGray com_fontW600" style="margin-top:-3px;">
            최종완료일<span style="font-size: 1.2rem;"> : </span><input v-model="projectDate"  type="date" id="test50" onclick="initTemplate()" onchange="test(this)">
          </p>
        </div>
        <div class="proBtns">

          <button text class="com_btn com_btn_line_orange proBtn120" id="testb" @click="nickState2 = true">
            커스텀 템플릿
          </button>

          <!-- 닉네임 설정 -->
          <button text class="com_btn com_btn_line_orange proBtn120" @click="nickState = true">
            닉네임 설정
          </button>

          <!-- 참여자 목록 -->
          <button text class="com_btn com_btn_line_orange proBtn120" @click="entBtn">
            참여자 목록
          </button>

          <!-- 초대 링크 -->
          <button text class="com_btn com_btn_orange proBtn80" @click="invPop = true">
            초대
          </button>
        </div>
      </div>

      
      <div class="templateWrap">
        <!-- 템플릿 리스트 -->
        <div class="temList">
          <ul class="temLWrap">
            <li v-for="(item, index) in temList" :key="index" class="temItem">
              <div :id="index" :style="{background:'url('+item.img_path+') center center / contain no-repeat'}" class="temImg" @click="changeTem(index)" onClick="reply_click(this.id)">
              </div>
            </li>
          </ul>
          <v-icon v-show="scrollState" class="listIcon">mdi-arrow-down</v-icon>
        </div>

        <!-- 프로젝트 문서 편집 -->
        <div class="templateWork" id="workArea">
          <div v-html="htmls" ref="myHtml"></div>
        </div>


        <!-- 채팅 -->
        <div class="chatWrap">
          <div class="chatting"> 채팅 추후 개발 예정</div>
          <div class="chatInputWrap">
            <input type="text" name="chatting" class="chatInput" disabled/>
            <button icon>
              <v-icon class="sendIcon">mdi-arrow-up-circle</v-icon>
            </button>
          </div>
        </div>
      </div>

      <!-- 하단 버튼 -->
      <div class="bottomBtn">
        <button class="com_btn_130 com_btn_darkOrange" @click="lastSave">
          최종완료
        </button>
        <button class="com_btn_110 com_btn_orange" @click="saveBtn" style="outline:none;">
          저장
        </button>
      </div>
    </div>

    <!-- 저장중 모달 -->
    <v-dialog
      v-model="waitState"
      persistent
      max-width="380"
    >
      <v-card class="alertWrap">
        <div class="waitCon">
          <!--<p class="waitUser"><span style="color:#ef8454;font-size: 0.95rem">{{waitText}}</span> 님이 저장중입니다.</p>-->
          <p class="waitUser">{{waitText}}</p>
        </div>
      </v-card>
    </v-dialog>

    <NickPop2 :nickState2="nickState2" :pdx="pdx" @popClose="nickState2 = false"></NickPop2>

    <!-- 닉네임 설정 components -->
    <NickPop :nickState="nickState" :pdx="pdx" @popClose="nickState = false"></NickPop>

    <!-- 참여자 목록 components -->
    <EntrantPop :entState = "entState" :memList = "memList" @popClose="entState = false" @invOpen="invOpen"></EntrantPop>

    <!-- 초대 components -->
    <InvitePop :invPop = "invPop" :url = "decodeURI(url)" @popClose="invPop = false"></InvitePop>

    <!-- alert components -->
    <AlertPop :alertState="alertState" :completeSignup="completeSignup" @popClose="alertClose">
      {{alertCon}}
    </AlertPop>

    <!-- confirm components -->
    <ConfirmPop :confirmState="confirmState" @popClose="confirmState = false" @popOk="popOk">
      <p>프로젝트가 최종완료되면 더이상<br>작업이 <span style="color:#ff0000;font-weight: 600;">불가능</span>합니다. 프로젝트를<br>최종완료</span>하시겠습니까?</p>
    </ConfirmPop>
  </div>
</template>
<script>
export default {
  name: 'ProjectWork',
  middleware: 'client',
   data () {
    return {
      selectSection: 1,
      htmls: '',
      code: '',
      projectName: '',
      projectDate: '',
      pickTemplate: null,
      nickState: false,
      nickState2: false,
      entState: false,
      invPop: false,
      confirmState:false,
      alertState: false,
      alertCon: '',
      scrollState: false,
      temList: [],
      pdx: null,
      url:'',
      memList: [],
      URL: null,
      save: 0,
      socket: '',
      pushRecord: [],
      contentsRecord:[],
      waitState: false,
      waitText : '',
      resState: '',
      completeSignup: false,
      keypressing: false,
      ctrlkey: '',
      ctrlDown: false,
      ctrlKey: 17,
      cmdKey: 91,
      vKey: 86,
      cKey: 67
    };
  },
  created() {
    if (!this.$store.state.loginState) {
      this.$store.commit('setProjectUrl', window.location.pathname);
      this.$router.push('/login');
    }
    
  },
  mounted() {
    //console.log(this.$route.params.id);
    this.$route.params.id ? this.code = this.$route.params.id : this.$router.push('/');
    this.projectCheck();
    this.socketEvent();
    //this.autoSaveTimer();
  },
  methods: {
    socketEvent() {
      this.socket = this.$nuxtSocket({
        name: 'projectRoom',
        channel: '/index'
      });
      
      this.socket.emit('join', {
        code: this.code, 
        email: this.$store.state.email
      });
      
      this.socket.on('joinUser', data => {
        if(data.total === 1) this.getProject(data.total);
      });
      
      this.socket.on('reqHtml', data => {
        let resData = new Object();
        resData.to = data.sendUser;
        resData.htmls = this.$refs.myHtml.innerHTML;
        this.socket.emit('resHtml', resData);
      });
      
      this.socket.on('reciveHtml', data => {
        this.getProject();
        this.htmls = data;
      });
      
      this.socket.on('logout', (data) => {
        // console.log(`${data} 님이 나갔습니다.`);
        this.logoutInit('logout', data);
      });
      
      this.socket.on('async', (data) => {
        this.merge(data);
      });
      // 중도 입장 유저가 현재 유저들이 선택중인 영역 요청
      this.socket.on('requestPushRecord', (data) => {
        this.socket.emit('recordsMerge', {
          to: data,
          record: this.pushRecord 
        });
      });
      // 위의 요청에 대한 응답
      this.socket.on('resRecords', (data) => {
        if(data.length > 0) this.merge(data[0]);
      });
      
      this.socket.on('reqAutoSave', () => {
        this.saveBtn('auto');
      });
      
      this.socket.on('alert', (data) => {
        if(data.email !== this.$store.state.email) {
          //if(data.action === 'save') {
          //  this.waitText = `${data.email} 님이 저장 중 입니다.`;
          //  this.waitState = true;
         // }
          if(data.action === 'saveEnd') {
            this.waitText = data.msg;
            setTimeout( function(){
              this.waitState = false;
            }.bind(this), 1000);
          }
          if(data.action === 'finalSave') {
            this.waitText = data.msg;
            this.waitState = true;
          }
          if(data.action === 'finalSaveEnd') {
            this.waitState = false;
            this.resState = data.result;
            this.alertCon = data.msg;
            this.alertState = true;
          }
        }
      });
    },
    projectCheck() {
      this.$axios.get(`/client/checkProject/${this.code}`)
      .then((res) => {
        if(!res.data.state) {
          this.alertCon = res.data.msg;
          this.alertState = true;
          this.resState = res.data.state;
        }
      });
    
    },
    logoutInit(type, email='') {
      const section = this.$refs.myHtml.getElementsByClassName('section');
      for(let[i, e] of Object.entries(section)) {
        let select = e.getElementsByClassName('select');
        for(let[j, el] of Object.entries(select)) {
          if(type == 'save') {
            if(el.getAttribute('disabled')) el.removeAttribute('disabled');
            if(el.getAttribute('data-user') && el.getAttribute('data-state')) {
              el.style.border = 'none';
            }
          }
          if(type == 'finalSave') {
            el.removeAttribute('data-user');
            el.removeAttribute('data-state');
            el.removeAttribute('disabled');
          }
          if(type == 'logout') {
            if(el.getAttribute('data-user') == email) {
              el.removeAttribute('data-user');
              el.removeAttribute('data-state');
              el.removeAttribute('disabled');
            }
          }
        }
      }
    },
    setHtmlAttribute(){ 
      const section = this.$refs.myHtml.getElementsByClassName('section');
      for(let[i, e] of Object.entries(section)) {
        let select = e.getElementsByClassName('select');
        for(let[j, el] of Object.entries(select)) {
          if(el.getAttribute('data-user') && el.getAttribute('data-state')) {
            if((el.getAttribute('data-user') == this.$store.state.email) 
            && (el.getAttribute('data-state') == 'w')) {
              el.style.border = '1px solid rgb(255, 180, 147)';
            } else {
              el.setAttribute('disabled', true);
            }
          }
        }
      }
    },
    merge(data) {
      let section = this.$refs.myHtml.getElementsByClassName(data.section);
      let select = section[0].getElementsByClassName(data.select);
      if(data.type === 'action') {
        if(data.action_type ==='in') {
          select[0].setAttribute('data-user', data.who);
          select[0].setAttribute('data-state', data.state);
          select[0].setAttribute('disabled', true);
        }
        if(data.action_type == 'out') {
          select[0].removeAttribute('data-user');
          select[0].removeAttribute('data-state');
          select[0].removeAttribute('disabled');
        }  
      }
      if(data.type === 'keyEvent') {
        if(select[0].tagName === 'INPUT') {
          select[0].setAttribute('value', data.str);
          select[0].value = data.str;
        }
        if(select[0].tagName === 'TEXTAREA') {
          select[0].innerText = data.str;
          select[0].value = data.str;
        }
      }
      if(data.type === 'img') {
        if(select[0].getElementsByTagName('img')[0]) {
          select[0].removeChild(select[0].getElementsByTagName('img')[0]);
        }
        let img = document.createElement('img');
        img.setAttribute('src', data.str);
        img.addEventListener('click', function(e) {
          select[0].getElementsByTagName('input')[0].click();
        });
        select[0].getElementsByTagName('p')[0].style.display = 'none';
        select[0].getElementsByTagName('label')[0].style.display = 'none';
        select[0].appendChild(img);
      }
    },
    getProject(total = 0) {
      this.URL = window.location.href;
      this.$refs.myHtml.style.display = 'none';
      this.$axios.post('/client/getProject', {
        code: this.code
      }).then((res) => {
        //console.log(res);
        if(res.data.state) {
          this.projectName = res.data.item[0].name;
          this.url = "http://꾸럼이.com/projectWork/" + res.data.item[0].url;
          this.projectDate = res.data.item[0].close_date.substr(0,10);
          this.temList = res.data.item;
          this.pdx = res.data.item[0].idx;
          this.save = res.data.item[0].save;
          if(total === 1) {
            this.htmls = res.data.item[0].contents;
          }
          setTimeout( function(){
            this.initTemplate();
            this.$refs.myHtml.style.display = 'block';
            this.initPage();
          }.bind(this),500);
          if(this.temList.length >= 6) {
            this.scrollState = true;
          } else {
            this.scrollState = false;
          }
          this.checkFirstjoin();
        } else {
          this.alertCon = res.data.msg;
          this.alertState = true;
          this.resState = res.data.state;
        }
      });
    },
    alertClose() {
      this.alertState = false;
      if(!this.resState) {
        this.$router.push(`/management`);
      }
    },
    // 템플릿 class, style 세팅
    initTemplate() {
      let section = this.$refs.myHtml.getElementsByClassName('section');
      for(let[i, el] of Object.entries(section)) {
        let areas = el.getElementsByTagName('textarea');
        if(i == 0) {
          el.style.display = 'block';
        } else {
          el.style.display = 'none';
        }
        for(let[k, area] of Object.entries(areas)) {
          if(area.innerHTML) area.innerHTML = area.innerHTML.replace(/&lt;br&gt;/gi,'\n');
        }
        let select = el.getElementsByClassName('select'); 
        for(let[j, sel] of Object.entries(select)) {
          if(this.save === 0) sel.className += " select_"+j;
          sel.removeAttribute('data-user');
          sel.removeAttribute('data-state');
        }
      }
    },
    // 이벤트 세팅
    initPage() {

 var div = document.getElementById("testb");
      
    if(document.getElementById("template_09")){
        div.style.display = 'inline-block';
    }else{
        div.style.display = 'none';
    }


      let currentSection = this.$refs.myHtml.getElementsByClassName('section'+this.selectSection);
      let inputArea = currentSection[0].getElementsByClassName('select');
      let imgArea = currentSection[0].getElementsByClassName('imgUpload');
      for(let [i, el] of Object.entries(imgArea)) {
        let input = el.getElementsByTagName('input')[0];
        let select = el.className.split(" ")[1];
        var _this = this;
        input.addEventListener('change', function(e) {
          if(e.target.files.length > 0) {
            this.imgUploadProcess = true;
            let formData = new FormData();
            formData.append('url', _this.code);
            formData.append('email', _this.$store.state.email);
            formData.append('section', 'section' + _this.selectSection);
            formData.append('select', select);
            formData.append('img', e.target.files[0]);
            _this.$axios.post("/client/imagesUpload", formData,
            { headers : { "enctype": "multipart/form-data" }})
            .then((res) => {
              if(el.getElementsByTagName('img')[0]) el.removeChild(el.getElementsByTagName('img')[0]);
              let src = `..${res.data.items[0].path}`;
              let img = document.createElement('img');
              img.setAttribute('src', src);
              el.appendChild(img);
              el.getElementsByTagName('label')[0].style.display = 'none';
              el.getElementsByTagName('p')[0].style.display = 'none';
              _this.socket.emit('push', _this.setData(select, 'img', 'insert', '', src));
              this.imgUploadProcess = false;
              img.addEventListener('click', function(e) {
                e.preventDefault();
                el.getElementsByTagName('input')[0].click();
              });
            });
          }
        });
        
         if(el.getElementsByTagName('img')[0]){
          el.getElementsByTagName('img')[0].addEventListener('click', function(e) {
             this.remove();
                el.getElementsByTagName('label')[0].style.display = 'block';
                el.getElementsByTagName('p')[0].style.display = 'block';
            //if(!this.imgUploadProcess) el.getElementsByTagName('input')[0].click();
          });
        }
      }
      for(let [i, el] of Object.entries(inputArea)) {
        el.addEventListener('focusin', (e) => {
          // console.log(`${e.target.getAttribute('data-user')} ${e.target.getAttribute('data-state')}`);
          // 1. 선택한 영역이 선택되어있는 영역인가? v
          // YES: 선택 불가 
          // NO : local dom에  data-user , data-state 세팅 (pull) v
          // 2. socket 에 email, section, select, state (push) v
          // 3. socket 에서 나를 제외한 프로젝트 참여자들에게 (socket.to().emit()) (send) v
          // 4. 데이터를 받은 참여자들은 data 동기화 (merge) v  
          if(e.target.getAttribute('data-user') && e.target.getAttribute('data-state')) {
            
          } else {
            el.style.border = "1px solid #ffb493";
            el.style.outline = "none";
            e.target.setAttribute('data-user', this.$store.state.email);
            e.target.setAttribute('data-state', 'w');
            let select = el.className.split(' ')[1];
            this.socket.emit('push', this.setData(select, 'action', 'in', 'w'));
            this.pushRecord.push(this.setData(select, 'action', 'in', 'w')); 
          }
        });
        
        el.addEventListener('focusout', (e) => {
          if(el.tagName === 'INPUT') el.style.border ="none";
          if(el.tagName === 'TEXTAREA') el.style.border ="none";
          this.alertCheck = false;
          let select = el.className.split(' ')[1];
          e.target.removeAttribute('data-user');
          e.target.removeAttribute('data-state');
          let outData = this.setData(select, 'action', 'out', '', el.value);
          this.socket.emit('push', outData);
        });

        el.addEventListener('keyup', (e) => {
          let str = '';
          let select = el.className.split(' ')[1];
          if(el.tagName === "INPUT") {
            if( el.getAttribute('maxlength') <= el.value.length 
              && ((e.keyCode == 12) || (e.keyCode >= 34 && e.keyCode <= 36) || (e.keyCode >= 41 && e.keycode <= 47)
              || (e.keyCode >= 48 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 110) || (e.keyCode >= 186 && e.keyCode <= 189)
              || (e.keyCode >= 190 && e.keyCode <= 192) || (e.keyCode >= 219 && e.keyCode <= 222))) {
              if(!this.alertCheck) {
                this.alertCheck = true;
                alert("더 이상 입력하실 수 없습니다.");
                str = el.value.substr(0, el.getAttribute('maxlength'));
              }
            } else {
              str = el.value;
            }
            el.setAttribute('value', str);
          }
          if(el.tagName === "TEXTAREA") {
            if(el.scrollTop > 0  
              && ((e.keyCode == 12) || (e.keyCode >= 34 && e.keyCode <= 36) || (e.keyCode >= 41 && e.keycode <= 47)
              || (e.keyCode >= 48 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 110) || (e.keyCode >= 186 && e.keyCode <= 189)
              || (e.keyCode >= 190 && e.keyCode <= 192) || (e.keyCode >= 219 && e.keyCode <= 222))) {
              if(!this.alertCheck){
                this.alertCheck = true;
                alert("허용된 영역을 벗어났습니다.\n출력시 글자가 짤릴 수 있습니다.");
                el.scrollTop = 0;
              }
            } else {
              el.innerText = el.value;
              str = el.value;
            }
          }
          // this.socket.emit('push', this.setData(select, 'keyEvent', 'insert', '', el.value));
          this.socket.emit('push', this.setData(select, 'keyEvent', 'insert', '', str));
          return false;
        });
      }
    },
    // select : 선택한 영역
    // type : action, keyEvent, img
    // action_type : in, out, insert
    // state : w ( write ), ''
    // str : string 전송할 문자열
    setData(select, type, action_type, state = '', str = '') {
      let pushData = {
        code: this.code,
        who: this.$store.state.email,
        section: 'section' + this.selectSection,
        select: select,
        action_type: action_type,
        state: state,
        type: type,
        str: str
      }
      return pushData;
    },
    checkFirstjoin() {
      this.$axios.post('/client/checkMember',{
        email: this.$store.state.email,
        pdx: this.pdx
      })
      .then((res) => {
        if(!res.data.items) {
          this.nickState = true;
        }
      });
    },
    entBtn() {
      this.$axios.post('/client/getJoinMembers', { pdx: this.pdx })
      .then((res) => {
        this.entState = true;
        this.memList = res.data.items;
      });
    },
    changeTem (index) {
      this.selectSection = index + 1;
      let section = this.$refs.myHtml.getElementsByClassName('section');
      document.getElementById(0).style.border = "none";
      for(let i = 0; i<this.temList.length; i++) {
        if(i !== index) {
          document.getElementById(i).style.border = "none";
        }else { 
          document.getElementById(i).style.border = "1px solid #ef8454";
          document.getElementById(i).style.borderRadius = "5px";
        }
      }
      for(let [i, el] of Object.entries(section)) {
        if(index == i) {
          el.style.display = 'block';
        } else {
          el.style.display = 'none';
        }
      }
      this.initPage();
    },
    lastSave() {
      this.$axios.post(`/client/checkCreator`, {
        code: this.code,
        idx: this.$store.state.userIdx
      }).then((res) => {
        if(!res.data.state) {
          this.alertCon = res.data.msg;
          this.alertState = true;
          this.resState = true;
        } else {
          this.confirmState = true; //프로젝트 장일때만
        }
      });
    },
    saveBtn(type="") {
      let data = {
        code: this.code,
        email: this.$store.state.email,
        action: 'save',
        msg: '저장중 입니다.'
      };
      if(type !== "auto") this.socket.emit('saveBtn', data);
      this.logoutInit('save');
      let htmls = this.$refs.myHtml.innerHTML;
    var div = document.getElementById("testb");
      
    if(document.getElementById("template_09")){
        div.style.display = 'inline-block';
        history.go(0)
    }else{
        div.style.display = 'none';
    }
      // console.log(htmls);
      this.$axios.post('/client/saveHtml', {
        html: htmls,
        code: this.code,
        name: this.projectName,
        close_date: this.projectDate
      }).then((res) => {
        if(type !=="auto") {
          data.action = "saveEnd";
          this.waitState = true;
          this.waitText = res.data.msg;
          setTimeout( function() {
            data.msg = res.data.msg;
            this.socket.emit('saveBtn', data);
            this.waitState = false;
          }.bind(this), 1000);
        }
        this.setHtmlAttribute();
      });
    },
    invOpen() {
      this.entState = false;
      this.invPop = true;
    },
    popOk() {
      this.confirmState = false;
      let data = {
        code: this.code,
        action: 'finalSave',
        result: false,
        msg: '프로젝트 장이 최종완료 중 입니다.'
      };
      this.logoutInit('finalSave');

      let htmls = this.$refs.myHtml.innerHTML;
      this.socket.emit('saveBtn', data);
      this.$axios.post('/client/finalSave', {
        html: htmls,
        code: this.code,
        idx: this.$store.state.userIdx
      }).then((res) => {
        if(res.data.state) this.resState = false;
        else this.resState = true;
        data.msg = res.data.msg;
        data.action = 'finalSaveEnd';
        data.result = this.resState;
        setTimeout( function() {
          this.socket.emit('saveBtn', data);
          this.alertCon = res.data.msg;
          this.alertState = true;
        }.bind(this), 1000);
      });
    },
    convertDate(oriDate) {
      let cDate = new Date(oriDate),
          year  = cDate.getFullYear(),
          m     = cDate.getMonth()+1,
          month = m > 10 ? m : '0'+m,
          date  = cDate.getDate() > 10 ? cDate.getDate() : '0'+cDate.getDate();
      return [year,month,date].join('-');
    }
  }
};
</script>
<style>
  .proWorkWrap {
    width: 1200px;
    margin: 0 auto;
    margin-top: 110px;
    overflow: hidden;
  }
  .proTop {
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;
  }
  .projectTitle {
    float: left;
  }
  .proName {
    width: 700px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap:break-word;
  }

  /* 상단 버튼 */
  .proBtns {
    float: right;
    margin-top: 15px;
  }
  .proBtns button {
    margin-right: 5px;
  }
  .proBtns button:last-child {
    margin-right: 0;
  }
  .proBtn120 {
    width: 120px;
    height: 40px;
  }
  .proBtn80 {
    width: 80px;
    height: 40px;
  }

  /* 프로젝트 전체 */
  .templateWrap {
    width: 100%;
    height: 630px;
  }

  /* 템플릿 리스트 */
  .temList {
    float: left;
    width: 150px;
    height: 100%;
    margin-right: 20px;
    padding: 10px;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    border: 1px solid #959595;
  }
  .temLWrap {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-left: 0 !important;
  }
  .temLWrap::-webkit-scrollbar {
    display: none;
  }
  .listIcon {
    position: absolute !important;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: #ef8454 !important;
    background: white;
    border-radius: 50px;
    font-size: 1.6rem !important;
  }
  .temItem {
    width: 100%;
    height: 95px;
    margin-bottom: 15px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    cursor: pointer;
  }
  .temItem:first-child div {
    border: 2px solid #ef8454;
    border-radius: 5px;
  }
  .temItem:last-child {
    margin-bottom: 0;
  }

  /* 프로젝트 문서 편집 */
  .templateWork {
    float: left;
    border: 1px solid #959595;
    border-radius: 5px;
    width: calc(100% - 420px);
    height: 100%;
    padding: 10px;
    overflow: hidden;
    position: relative;
  }

  /* 채팅 */
  .chatWrap {
    float: right;
    width: 230px;
    height: 100%;
    border: 1px solid #959595;
    margin-left: 20px;
    border-radius: 5px;
  }
  .chatting {
    height: 563px;
    border: 1px solid #e5e5e5;
    margin: 10px 10px 0px 10px;
    border-radius: 5px;
  }
  .chatInputWrap {
    width: 100%;
    padding: 10px;
  }
  .chatInput {
    width: calc(100% - 37.2px);
    height: 35px;
    float: left;
    padding-left: 5px;
    font-size: 0.9rem;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
  }
  .sendIcon {
    font-size: 1.7rem;
    color: #ef8454 !important;
    float: left;
    padding-top: 5px;
    margin-left: 10px;
  }

  /* 하단 버튼 */
  .bottomBtn {
    float:right;
    margin-top: 20px
  }
  .bottomBtn button:first-child {
    margin-right: 5px;
  }
  .waitCon {
    text-align: center;
    font-size: 1rem;
  }
  .waitUser {
    font-size: 0.9rem !important;
    margin-bottom: 10px !important;
  }
  .waitCon p {
    font-weight: 600;
  }
  #delete{
    right: 0px;
    font-weight:900;
  }
  .delete{
    display: inline;
    cursor: pointer;
    color: #e2e2e2;
    z-index: 1;
  }
  .delete:hover{
     color: #b8b8b8;
  }
  .v-overlay__scrim{
    z-index: 9996;
  }
  .list2{
    display: inline;
    position: relative;
    left: 0px;
  }
  @media print {
    .delete { display:none; }  
}
</style>
