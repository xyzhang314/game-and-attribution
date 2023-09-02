import { firstPlay, secondPlay, saveSubInfo } from "./saveGameData.js";
import { runTask0First } from "./task0_first.js";
import { runTask1First } from "./task1_first.js";
import { runStudy0First } from "./constructStudy0_first.js";
import { runStudy1First } from "./constructStudy1_first.js";
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
    "    <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\">首先，非常感谢您参与此次小测验！该项目由北京师范大学认知神经科学与学习国家重点实验室和北京回龙观医院共同合作完成，目的是为了探究药物及睡眠对精神类疾病的治疗机制。本项目采集的所有个人信息将会严格保密，仅用于科学研究，请您根据自己的情况如实填写并认真完成。非常感谢您的配合！<\/p>"+
    "    <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\"><strong>项目流程<\/strong><\/p>"+
    "    <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\">本项目主体部分为网页小游戏，具体分为以下流程：<\/p>"+    
    "    <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\">1. 第一次完成小游戏；<\/p>"+
    "    <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\">2. 服药后或睡觉后的第二天早晨再次完成小游戏。<\/p>"+
    "    <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\"><strong>个人信息填写<\/strong><\/p>"+
    "<form id=\"Info1\">"+
    "   <fieldset>"+
    "     <p style=\"margin-left:0.3rem; margin-bottom: 0.1rem;\">请输入您的姓名：<\/p>"+
    "     <input style=\"margin-left:0.3rem;\" type=\"text\" id=\"uname\" required\/>"+
    "     <p style=\"margin-left:0.3rem; margin-bottom: 0.1rem;\">请输入您的手机号（请务必仔细检查是否填写正确）：<\/p>"+
    "     <input style=\"margin-left:0.3rem;\" type=\"tel\" pattern=\"[0-9]{3}[0-9]{4}[0-9]{4}\" id=\"uphone\" required\/>"+
    // "  <span class=\"validity\"><\/span>"+
    "     <hr width=\"300\" \/>"+
    "     <p style=\"margin-left:0.3rem; margin-bottom: 0.2rem;\">您是第几次做这个小游戏？<\/p>"+
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
    "      <legend style=\"font-size:2em\">药品1<\/legend>"+
    "         <label id=\"med\">药品名称：<\/label>"+
    "      <select class=\"medType\">"+
    "        <optgroup label=\"常用药品\">"+
    "          <option value=\"碳酸锂片\">碳酸锂片<\/option>"+
    "          <option value=\"奥氮平\">奥氮平<\/option>"+
    "          <option value=\"盐酸舍曲林\">盐酸舍曲林<\/option>"+
    "          <option value=\"阿立哌唑\">阿立哌唑<\/option>"+
    "          <option value=\"劳拉西泮\">劳拉西泮<\/option>"+
    "          <option value=\"盐酸舍曲林\">盐酸舍曲林<\/option>"+
    "          <option value=\"草酸艾司西酞普兰\">草酸艾司西酞普兰<\/option>"+
    "          <option value=\"枸橼酸坦度螺酮胶囊\">枸橼酸坦度螺酮胶囊<\/option>"+
    "          <option value=\"右佐匹克隆片\">右佐匹克隆片<\/option>"+
    "          <option value=\"盐酸文拉法辛缓释胶囊/片\">盐酸文拉法辛缓释胶囊/片<\/option>"+
    "          <option value=\"阿戈美拉汀\">阿戈美拉汀<\/option>"+
    "          <option value=\"富马酸喹硫平片\">富马酸喹硫平片<\/option>"+
    "          <option value=\"利培酮片\">利培酮片<\/option>"+
    "          <option value=\"丙戊酸钠片/丙戊酸镁片\">丙戊酸钠片/丙戊酸镁片<\/option>"+
    "        <\/optgroup>"+
    "        <optgroup label=\"其他药品\">"+
    "          <option value=\"帕利哌酮缓释片\">帕利哌酮缓释片<\/option>"+
    "          <option value=\"氯氮平片\">氯氮平片<\/option>"+
    "          <option value=\"奥沙西泮片\">奥沙西泮片<\/option>"+
    "          <option value=\"氟哌啶醇片\">氟哌啶醇片<\/option>"+
    "          <option value=\"马来酸氟伏沙明片\">马来酸氟伏沙明片<\/option>"+
    "          <option value=\"米氮平片\">米氮平片<\/option>"+
    "          <option value=\"艾司唑仑片\">艾司唑仑片<\/option>"+
    "        <\/optgroup>"+
    "      <\/select><br \/>"+
    "         <label id=\"med\">服用剂量（mg）：<\/label>"+
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

document.getElementById('infoSheet').innerHTML = subInfoPage1;

const medAdd = "<fieldset id=\"medInfo\">"+
"   <legend id=\"med1\" style=\"font-size:2em\">药品<\/legend>"+
"      <label id=\"med\">药品名称：<\/label>"+
"      <select class=\"medType\">"+
"        <optgroup label=\"常用药品\">"+
"          <option value=\"碳酸锂片\">碳酸锂片<\/option>"+
"          <option value=\"奥氮平\">奥氮平<\/option>"+
"          <option value=\"盐酸舍曲林\">盐酸舍曲林<\/option>"+
"          <option value=\"阿立哌唑\">阿立哌唑<\/option>"+
"          <option value=\"劳拉西泮\">劳拉西泮<\/option>"+
"          <option value=\"盐酸舍曲林\">盐酸舍曲林<\/option>"+
"          <option value=\"草酸艾司西酞普兰\">草酸艾司西酞普兰<\/option>"+
"          <option value=\"枸橼酸坦度螺酮胶囊\">枸橼酸坦度螺酮胶囊<\/option>"+
"          <option value=\"右佐匹克隆片\">右佐匹克隆片<\/option>"+
"          <option value=\"盐酸文拉法辛缓释胶囊/片\">盐酸文拉法辛缓释胶囊/片<\/option>"+
"          <option value=\"阿戈美拉汀\">阿戈美拉汀<\/option>"+
"          <option value=\"富马酸喹硫平片\">富马酸喹硫平片<\/option>"+
"          <option value=\"利培酮片\">利培酮片<\/option>"+
"          <option value=\"丙戊酸钠片/丙戊酸镁片\">丙戊酸钠片/丙戊酸镁片<\/option>"+
"        <\/optgroup>"+
"        <optgroup label=\"其他药品\">"+
"          <option value=\"帕利哌酮缓释片\">帕利哌酮缓释片<\/option>"+
"          <option value=\"氯氮平片\">氯氮平片<\/option>"+
"          <option value=\"奥沙西泮片\">奥沙西泮片<\/option>"+
"          <option value=\"氟哌啶醇片\">氟哌啶醇片<\/option>"+
"          <option value=\"马来酸氟伏沙明片\">马来酸氟伏沙明片<\/option>"+
"          <option value=\"米氮平片\">米氮平片<\/option>"+
"          <option value=\"艾司唑仑片\">艾司唑仑片<\/option>"+
"        <\/optgroup>"+
"      <\/select><br \/>"+
"      <label id=\"med\" >其他：<\/label>"+
"      <input margin-left:0rem; type=\"text\" class=\"medDose\"\/><br \/>"+
"      <label id=\"med\" >服用剂量（mg）：<\/label>"+
"      <input margin-left:0rem; type=\"text\" class=\"medDose\"\/><br \/>"+
"      <label id=\"med\" for=\"lastMedTime\">服药时间：<\/label>"+
"      <input type=\"datetime-local\" class=\"MedTime\" name=\"MedTime\"\/>"+
"      <hr width=\"300\" \/>"+
"   <\/fieldset>";

// 添加药品
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
// ...然后接管表单的提交事件
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const uname = document.getElementById("uname").value;
  window.uname = uname; //change to globally-scoped variables
  const phoneNum = Number(document.getElementById("uphone").value);
  window.phoneNum = phoneNum; //change to globally-scoped variables

  // 任务顺序 ABBA OR BAAB
  var taskType = ['game', 'choice'];
  var rand = Math.floor(Math.random()*taskType.length);
  var firstTask = 'game'//taskType[rand];

  // -----------------------fist time-------------------------
  if ($("input[name='playTime']:checked").val()=="first"){
    var gamePhase = 'postTask0';
    var taskN = 0;
    window.gamePhase = gamePhase;
    window.taskN = taskN;
    firstPlay(firstTask);
    if ($("input[name='mentalIllness']:checked").val()=="no"){
      var subInfo = {'run': $("input[name='playTime']:checked").val(),
                     'medicine': $("input[name='mentalIllness']:checked").val(),
                    }
      saveSubInfo('task0', subInfo);
      document.getElementById('infoSheet').style.display = "none";
    }else{
      var type = document.getElementsByClassName("medType");
      var dose = document.getElementsByClassName("medDose");
      var time = document.querySelectorAll("input[name='MedTime']");
      var i;
      var medInfo = [];
      for (i=0; i<type.length; i++){
        medInfo.push({'medType': type[i].value});
        medInfo.push({'medDose': dose[i].value});
        medInfo.push({'medTime': time[i].value});
      }
      var subInfo = {'run': $("input[name='playTime']:checked").val(),
                     'patient': $("input[name='mentalIllness']:checked").val(),
                     'medDur': document.getElementById("medDur").value,
                     'medInfo': medInfo,
                    }
      saveSubInfo('task0', subInfo);
      document.getElementById('infoSheet').style.display = "none";
    }
    if (firstTask === 'game'){ //第一次测验中先game后choice
      var gameNext = 'TheEnd0First' //不询问
      window.gameNext = gameNext;
      runTask0First();
    }else{ //先choice后game
      var gameNext = 'GameEndScene' //询问问题
      window.gameNext = gameNext;
      runStudy0First();
    }
  }else{
  // ----------------------second time---------------------
    var gamePhase = 'postTask1';
    var taskN = 1;
    window.gamePhase = gamePhase;
    window.taskN = taskN;
    secondPlay();
    if ($("input[name='mentalIllness']:checked").val()=="no"){
      var subInfo = {'run': $("input[name='playTime']:checked").val(),
                     'patient': $("input[name='mentalIllness']:checked").val(),
                    }
      saveSubInfo('task1', subInfo);
      document.getElementById('infoSheet').style.display = "none";
    }else{
      var type = document.getElementsByClassName("medType");
      var dose = document.getElementsByClassName("medDose");
      var time = document.querySelectorAll("input[name='MedTime']");
      var i;
      var medInfo = [];
      for (i=0; i<type.length; i++){
        medInfo.push({'medType': type[i].value});
        medInfo.push({'medDose': dose[i].value});
        medInfo.push({'medTime': time[i].value});
      }
      var subInfo = {'run': $("input[name='playTime']:checked").val(),
                     'patient': $("input[name='mentalIllness']:checked").val(),
                     'medDur': document.getElementById("medDur").value,
                     'medInfo': medInfo,
                    }
      saveSubInfo('task1', subInfo);
      document.getElementById('infoSheet').style.display = "none";
      }
      const query = new AV.Query("cbt_all");
      query.equalTo("phoneNum", phoneNum);
      query.find().then((subjs) => {
                if (subjs.length===0){
                }else{
                  subjs.forEach((subj) => {
                      var run0Task = subj.get("firstTask");
                      if (run0Task == "game"){ //第二次测验中先choice后game
                        var gameNext = 'GameEndScene' //询问问题
                        window.gameNext = gameNext;
                        runStudy1First();
                      }else{ //先game后choice
                        var gameNext = 'TheEnd1First' //不询问问题
                        window.gameNext = gameNext;
                        runTask1First();
                      }
                  });
                }
        });
  }
})
