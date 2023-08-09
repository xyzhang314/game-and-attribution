import { saveSubInfo } from "./saveData.js";
import { runTask } from "./task.js";
setFontSize();
window.onresize = setFontSize; //实时监听
function setFontSize(){
    var width = document.body.offsetWidth;
    var newSize = width/375*20;  
    var setHtml=document.getElementsByTagName('html')[0]; //通过根元素设置
    setHtml.style.fontSize = newSize+"px";
}

const subInfoPage1="<div role=\"main\" class=\"form-all\" box-shadow=0 0 32px rgba(42, 42, 42, 0.16)>"+
"<ul class=\"form-section page-section\">"+
    "<div id=\"logo\" class=\"form-input-wide\" data-layout=\"full\"> "+
    "   <img src=\"./assets/HLGlogo.png\" alt=\"HLG hispital logo\" loading=\"lazy\" class=\"form-image\" style=\"border:0\" tabindex=\"0\" data-component=\"image\"> "+
    "   <img src=\"./assets/BNUlogo.png\" alt=\"BNU logo\" loading=\"lazy\" class=\"form-image\" style=\"border:0\" tabindex=\"0\" data-component=\"image\"> "+
    "<\/div>"+

    "<div class=\"form-header-group  header-large\">"+
    "	  <div class=\"header-text httac htvam\">"+
    "		   <h1 id=\"header_1\" class=\"form-header\" data-component=\"header\">小游戏-神奇雨伞<\/h1>"+
    "	  <\/div>"+
    "<\/div>"+
    
    "<div id=\"text_2\" class=\"form-html\" data-component=\"text\" tabindex=\"0\">"+
    "            <div style=\"font-family:Inter, sans-serif;color:#2c3345;\">"+
    "              <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\"><strong><span style=\"line-height:107%;\">项目说明<\/strong><\/p>"+
    "              <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\">首先，非常感谢您参与此次小游戏测验！该项目由北京师范大学认知神经科学与学习国家重点实验室和北京回龙观医院共同合作完成，目的是为了探究药物及睡眠对精神类疾病的治疗机制。本项目采集的所有信息将会绝对保密，仅用于科学研究，请您根据自己的情况如实填写并认真完成。非常感谢您的配合！<\/p>"+
    "              <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\"><strong>项目流程<\/strong><\/p>"+
    "              <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\">本项目主体部分为小游戏，具体分为以下流程：<\/p>"+    
    "              <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\">1. 第一次完成小游戏；<\/p>"+
    "              <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\">2. 服药后或睡觉后的第二天早晨再次完成小游戏。<\/p>"+
    "              <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\"><strong>个人信息填写<\/strong><\/p>"+
    "<form id=\"Info1\">"+
    "   <fieldset>"+
    "     <p style=\"margin-left:0.3rem; margin-bottom: 0.1rem;\">请输入您的手机号：<\/p>"+
    "     <input type=\"text\" id=\"uphone\" required\/>"+
    // "  <span class=\"validity\"><\/span>"+
    "     <hr width=\"300\" \/>"+
    "     <p style=\"margin-left:0.3rem; margin-bottom: 0.2rem;\">您是第几次做这个小游戏项目？<\/p>"+
    "     <input type=\"radio\" id=\"F\" name=\"playTime\" value=\"first\" required\/>"+
    "     <label for=\"F\">第一次<\/label><br \/>"+
    "     <input type=\"radio\" id=\"S\" name=\"playTime\" value=\"second\" required\/>"+
    "     <label for=\"S\">第二次<\/label><br \/>"+
    "     <hr width=\"300\" \/>"+
    "     <p style=\"margin-left:0.3rem; margin-bottom: 0.2rem;\">您是否曾经或目前患有精神类疾病？<\/p>"+
    "     <input type=\"radio\" id=\"patient\" name=\"mentalIllness\" class=\"illed\" value=\"yes\" required\/>"+
    "     <label for=\"patient\">是<\/label><br \/>"+
    "     <input type=\"radio\" id=\"hc\" name=\"mentalIllness\" value=\"no\" required\/>"+
    "     <label for=\"hc\">否<\/label><br \/>"+
    "     <hr width=\"300\" \/>"+
    "<\/form>"+
    "<form class=\"expandable\">"+
    "      <p style=\"margin-left:0.3rem; margin-bottom: 0.2rem;\">您服用抗精神类药物多久了（未服用过请填无）？<\/p>"+
    "      <input type=\"text\" id=\"medDur\" required\/>"+
    "      <hr width=\"300\" \/>"+
    "      <p style=\"margin-left:0.3rem; margin-bottom: 0.2rem;\">您最近一次服用抗精神类药物的时间是（未服用过请不要选）？<\/p>"+
    "      <input type=\"datetime-local\" id=\"lastMedTime\" name=\"lastMedTime\"\/>"+
    "      <hr width=\"300\" \/>"+
    "<\/form>"+
    "<center><button type=\"submit\">确认<\/button><\/center>"+
    "   <\/fieldset>"+
    "            <\/div>"+
    "<\/div>"+
"<\/ul>"+
"<\/div>";

document.getElementById('noconsent').innerHTML = subInfoPage1;

// 我们需要获取表单元素
var form = document.getElementById("Info1");

// ...然后接管表单的提交事件
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if ($("input[name='mentalIllness']:checked").val()=="no"){
    saveSubInfo('phoneNum', document.getElementById("uphone").value)
    saveSubInfo('run',$("input[name='playTime']:checked").val())
    saveSubInfo('medicine', $("input[name='mentalIllness']:checked").val())
    document.getElementById('noconsent').style.display = "none";
    runTask();}else{
      saveSubInfo('phoneNum', document.getElementById("uphone").value)
      saveSubInfo('run',$("input[name='playTime']:checked").val())
      saveSubInfo('medicine', $("input[name='mentalIllness']:checked").val())
      saveSubInfo('medDur', document.getElementById("medDur").value)
      saveSubInfo('lastMedTime', document.querySelector("input[name='lastMedTime']").value)
      document.getElementById('noconsent').style.display = "none";
      runTask();
    }
});

