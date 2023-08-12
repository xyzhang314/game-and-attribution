import { dbCreate, saveSubInfo } from "./saveData.js";
import { runTask0 } from "./task.js";
import { runTask1 } from "./task1.js";
const { Query, User } = AV;
AV.init({
          appId: "7yk2g0IxApJ23zLC6w8hW2ml-gzGzoHsz",
          appKey: "O3GGJQvRi1vLugRNUMCN0JR0",
          serverURL: "https://7yk2g0ix.lc-cn-n1-shared.com",
        });

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
    "    <div style=\"font-family:Inter, sans-serif;color:#2c3345;\">"+
    "    <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\"><strong><span style=\"line-height:107%;\">项目说明<\/strong><\/p>"+
    "    <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\">首先，非常感谢您参与此次小游戏测验！该项目由北京师范大学认知神经科学与学习国家重点实验室和北京回龙观医院共同合作完成，目的是为了探究药物及睡眠对精神类疾病的治疗机制。本项目采集的所有信息将会绝对保密，仅用于科学研究，请您根据自己的情况如实填写并认真完成。非常感谢您的配合！<\/p>"+
    "    <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\"><strong>项目流程<\/strong><\/p>"+
    "    <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\">本项目主体部分为小游戏，具体分为以下流程：<\/p>"+    
    "    <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\">1. 第一次完成小游戏；<\/p>"+
    "    <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\">2. 服药后或睡觉后的第二天早晨再次完成小游戏。<\/p>"+
    "    <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\"><strong>个人信息填写<\/strong><\/p>"+
    "<form id=\"Info1\">"+
    "   <fieldset>"+
    "     <p style=\"margin-left:0.3rem; margin-bottom: 0.1rem;\">请输入您的手机号：<\/p>"+
    "     <input style=\"margin-left:0.3rem;\" type=\"tel\" pattern=\"[0-9]{3}[0-9]{4}[0-9]{4}\" id=\"uphone\" required\/>"+
    // "  <span class=\"validity\"><\/span>"+
    "     <hr width=\"300\" \/>"+
    "     <p style=\"margin-left:0.3rem; margin-bottom: 0.2rem;\">您是第几次做这个小游戏项目？<\/p>"+
    "     <input style=\"margin-left:0.3rem;\" type=\"radio\" id=\"F\" name=\"playTime\" value=\"first\" required\/>"+
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
    "      <input style=\"margin-left:0.3rem;\" type=\"text\" id=\"medDur\" required\/>"+
    "      <hr width=\"300\" \/>"+
    "      <p style=\"margin-left:0.3rem; margin-bottom: 0.2rem;\">您最近一次服用抗精神类药物种类和时间是（未服用请勿填写）？<\/p>"+
    "   <div>"+
    "      <fieldset id=\"medInfo\">"+
    "      <legend style=\"font-size:26px\">药品1<\/legend>"+
    "         <label id=\"med\">药品名称：<\/label>"+
    "         <input margin-left:0rem; type=\"text\" class=\"medType\"\/><br \/>"+
    "         <label id=\"med\">服用剂量：<\/label>"+
    "         <input margin-left:0rem; type=\"text\" class=\"medDose\"\/><br \/>"+
    "         <label id=\"med\" for=\"lastMedTime\">服药时间：<\/label>"+
    "         <input type=\"datetime-local\" class=\"MedTime\" name=\"MedTime\"\/>"+
    "         <hr width=\"300\" \/>"+
    "         <button id=\"add\" type=\"button\">+<\/button>"+
    "      <\/fieldset>"+
    "   <\/div>"+
    "      <div id=\"medField\"><\/div>"+
    "      <hr width=\"300\" \/>"+
    "<\/form>"+
    "   <center><button type=\"submit\">确认<\/button><\/center>"+
    "   <\/fieldset>"+
    "<\/div>"+
    "<\/div>"+
"<\/ul>"+
"<\/div>";

document.getElementById('noconsent').innerHTML = subInfoPage1;

const medAdd = "<fieldset id=\"medInfo\">"+
"   <legend id=\"med1\" style=\"font-size:26px\">药品<\/legend>"+
"      <label id=\"med\">药品名称：<\/label>"+
"      <input margin-left:0rem; type=\"text\" class=\"medType\"\/><br \/>"+
"      <label id=\"med\" >服用剂量：<\/label>"+
"      <input margin-left:0rem; type=\"text\" class=\"medDose\"\/><br \/>"+
"      <label id=\"med\" for=\"lastMedTime\">服药时间：<\/label>"+
"      <input type=\"datetime-local\" class=\"MedTime\" name=\"MedTime\"\/>"+
"      <hr width=\"300\" \/>"+
"   <\/fieldset>";

var add = document.getElementById("add");
var n = 1;

add.addEventListener("click", function AddMed () {
  n+=1;
  if (n==2){
    var div = document.createElement('div');
    div.innerHTML = medAdd;
    var field = document.getElementById("medField");
    field.before(div);
    var medNum = document.getElementById("med1");
    medNum.textContent = "药品"+n;
    medNum.id = "med"+n;
  }else{
    var div = document.createElement('div');
    div.innerHTML = medAdd;
    var field = document.getElementById("medField");
    field.before(div);
    var medNum = document.getElementById("med1");
    medNum.textContent = "药品"+n; 
    medNum.id = "med"+n;
  }
})

// 我们需要获取表单元素
var form = document.getElementById("Info1");
var dbClass = "rew_eff0";
// ...然后接管表单的提交事件
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const phoneNum = Number(document.getElementById("uphone").value);
  window.phoneNum = phoneNum; //change to globally-scoped variables
  if ($("input[name='playTime']:checked").val()=="first"){
    var gamePhase = 'postTask0';
    var taskN = 0;
    window.gamePhase = gamePhase;
    window.taskN = taskN;
    dbCreate("rew_eff0")
    if ($("input[name='mentalIllness']:checked").val()=="no"){
      saveSubInfo('run', $("input[name='playTime']:checked").val());
      saveSubInfo('medicine', $("input[name='mentalIllness']:checked").val());
      document.getElementById('noconsent').style.display = "none";
      runTask0();
    }else{
      var type = document.getElementsByClassName("medType");
      var dose = document.getElementsByClassName("medDose");
      var time = document.querySelectorAll("input[name='MedTime']");
      var i;
      for (i=0; i<type.length; i++){
        saveSubInfo('medType', type[i].value);
        saveSubInfo('medDose', dose[i].value);
        saveSubInfo('medTime', time[i].value);
      }
        saveSubInfo('run',$("input[name='playTime']:checked").val());
        saveSubInfo('medDur', document.getElementById("medDur").value);
        document.getElementById('noconsent').style.display = "none";
        runTask0();
      }
  }else{
    var gamePhase = 'postTask1';
    var taskN = 1;
    window.gamePhase = gamePhase;
    window.taskN = taskN;
    dbCreate("rew_eff1")
    if ($("input[name='mentalIllness']:checked").val()=="no"){
      saveSubInfo('run', $("input[name='playTime']:checked").val());
      saveSubInfo('medicine', $("input[name='mentalIllness']:checked").val());
      document.getElementById('noconsent').style.display = "none";
      runTask1();
    }else{
      var type = document.getElementsByClassName("medType");
      var dose = document.getElementsByClassName("medDose");
      var time = document.querySelectorAll("input[name='MedTime']");
      var i;
      for (i=0; i<type.length; i++){
        saveSubInfo('medType', type[i].value);
        saveSubInfo('medDose', dose[i].value);
        saveSubInfo('medTime', time[i].value);
      }
        saveSubInfo('run',$("input[name='playTime']:checked").val());
        saveSubInfo('medDur', document.getElementById("medDur").value);
        document.getElementById('noconsent').style.display = "none";
        runTask1();
      }
    }
});


