// Script to run task instructions and looping quiz, using built in JsPsych functionality
import { saveStartData } from "./saveChoiceData.js";

// initialize sizing vars
var scaleDisplayWidth = 600;  // in px

///////////////////////////////////////////// MISC TEXT /////////////////////////////////////////////////////////
var timeline_instructions_choice = [];

var introText = {
  type: jsPsychInstructions,
  allow_backward: true,
  show_clickable_nav: true,
  allow_keys: true,
  button_label_previous: "上一页",
  button_label_next: "下一页",
  pages: [ /////////////////////page one////////////////////////
          "<p>"+
          "<h2> 欢迎参加测验！</h2>"+
          "</p>"+
          "<p>"+
          "对于发生在我们日常生活中的事件，我们通常会去推测 <b> "+
          "这些事情发生的原因</b>。"+
          "</p>"+
          "<div class='center-content'><img class=\"attribution-image\" src='../assets/imgs/eg1_2.png'></img></div>"+
          "<p>"+
          "在本次测验中，我们会要求你 <b>想象一些的生活事件</b>。"+
          // "For the this study, we will <b>again ask you to imagine yourself in various different everyday situations</b>."+
          // "</p>"+
          "<p>"+
          "你需要从给定的选项中选择一个你认为对于这个事件发生最恰当的解释。 "+
          // "For each situation, all we ask you to do is to choose which of several possible explanations "+
          // "you think is the most likely, if the event happened to you right now."+
          // "</p>"+
          "<p>"+
          "尽管我们都知道一件事情的发生总会有多种原因，但是你需要"+
          "尽可能地去选择那个你认为引起这个事件发生 <b>最主要的原因</b>。"+
          "<br><br>"+
          "</p>",
          /////////////////////page two////////////////////////
          "<p>"+
          "<h2>你需要如何完成测验？</h2>"+
          //"<h2>Reminder: What do I need to do?</h2>"+
          "</p>"+
          "<p>"+
          "在每一次的选择中，你需要 <b>首先阅读每页最上面的事件描述，"+
          "</p>"+
          "<p>"+
          "<br>"+
          "<i>然后，尽可能地去想象这个事件场景，就好像这件事情真"+
          "的发生在你身上一样。</b></i>"+
          "</p>"+
          "<div class='center-content'><img class=\"attribution-image\" src='../assets/imgs/eg.png' ></img></div>"+
          "<p>"+
          "你的任务是根据事件描述，<b>从下面四个方框中选择一个"+
          "</b> 你认为 <b>最能够解释事件发生</b> 的陈述。"+
          "<br><br>"+
          "</p>",
          /////////////////////page three////////////////////////
          // "<p>"+
          // "<h2>测验设计的背后原因</h2>"+
          // //"<h2>Reminder: Reasons behind the design of this part of study</h2>"+
          // "<br>"+
          // "<p>"+
          // "We know that reading many different descriptions can, over time, "+
          // "start to feel repetitive. However, it is really important for the purposes of our research "+
          // "that we record responses to the different events that are as <i>accurate and honest as possible</i>. "+
          // "</p>"+
          // "<p>"+
          // "Ensuring that the responses we collect are as high quality as possible forms part of our "+
          // "responsibility to the organizations that fund our research, as well any future "+
          // "beneficiaries of the research."+
          // "</p>"+
          // "<p>"+
          // "We have therefore tried to design the study in a way that makes it as easy as possible "+
          // "for participants to provide accurate answers."+
          // "</p>"+
          // "<p>"+
          // "Specifically, we have tried to make sure we have allowed <b>plenty of time in the study "+
          // "completion estimate</b> to fully read all the questions and answers, and to <b>limit the number "+
          // "of questions to the minimum we need</b> to answer the study questions properly."+
          // "</p>"+
          // "<div class='center-content'><img src='../assets/imgs/exam.png' style='width:200px;'></img></div>"+
          // "<p>"+
          // // "A <b>‘progress’ bar</b> has "+
          // // "also been included to show <b>how far through the study you are at any one point in time</b> "+
          // // "(if you have any other suggestions - please let us know!)"+
          // "<br>"+
          // "</p>",
          // /////////////////////page four////////////////////////
          // "<p>"+
          // "<h2>Reasons behind our approval rules</h2>"+
          // //"<h2>Reminder: Reasons behind our approval rules</h2>"+
          // "<br>"+
          // "</p>"+
          // "<p>"+
          // "In addition to this, we will be applying <b>two quality control rules</b> to the data "+
          // "from this part of the study. These rules will be used to help decide whether or not to approve submissions."+
          // "</p>"+
          // "<ol>"+
          //   "<p><li><b>Choice times</b>. Submissions with reading and choice times of <i>less than 2 seconds "+
          //   "for a majority of trials</i> will not be approved, as it is not possible to properly process "+
          //   "the question and answer information in this time.</li></p>"+
          //   "<p><li><b>Choice repetition</b>. Submissions with the <i>same option chosen for a majority of questions</i> "+
          //   "(e.g., almost all answers are the top right option) may also not be approved.</li></p>"+
          // "</ol>"+
          // "<p>"+
          // "We hope that the above measures are reasonable and clearly explained. If you don't think this is the case, "+
          // "please get in touch and let us know."+
          // "</p>"+
          // "<div class='center-content'><img src='../assets/imgs/thank-you.png' style='width:150px;'></img></div>"+
          // "<p>"+
          // "Above all, <b>we are very grateful to our study participants for volunteering their time to help us "+
          // "with our research</b>. Having quality control checks like the above on our data means that we can "+
          // "be more confident in the conclusions we can draw from online studies, and be more likely "+
          // "to be able to conduct these kind of studies in the future."+
          // "<br>"+
          // "</p>",
          // /////////////////////page five////////////////////////
          // "<br>"+
          // "<p>"+
          // "Before you continue to the first part of the study, we will ask you to <b>answer some quick questions</b>. "+
          // "This is in order to make sure we have explained all the previous information clearly enough."+
          // "</p>"+
          // "<div class='center-content'><img src='../assets/imgs/quiz.png' style='width:200px;'></img></div>"+
          // "<p>"+
          // "<b>If you don't get all the questions right the first time, you will be routed back to the start of these instructions "+
          // "to try again</b>. This helps us make sure everything is completely clear before we get started!"+
          // "<br><br><br><br><br><br>"+
          // "</p>"
          ],
  // on_start: function() {
  //   this.type.jsPsych.setProgressBar(0);
  // },
  on_finish: function() {
    var startTime = performance.now(); // this.type.jsPsych.getStartTime();
    saveStartData(taskN);
  }
};

// var quizQuestions = [
//   { prompt: "<p><b>1. The point of this part of the study is to...</b></p>"+
//             "<p><b>A</b>  Answer each question according to how you think most people would explain the causes of different events</p>"+
//             "<p><b>B</b>  Answer each question according to what you think would be the main cause behind an event, if it actually happened to you</p>"+
//             "<p><b>C</b>  Answer each question completely at random, in order to generate unusable data</p>",
//     options: ["A", "B", "C"],
//     required: true,
//     horizontal: true
//   },
//   { prompt: "<p><b>2. Events usually have multiple reasons behind them. For this part of the study, I should...</b></p>"+
//             "<p><b>A</b>  Select the main reason I think explains the events, from the options available</p>"+
//             "<p><b>B</b>  Select all of the reasons I think are relevant to the event</p>"+
//             "<p><b>C</b>  Type in my own answers</p>",
//     options: ["A", "B", "C"],
//     required: true,
//     horizontal: true
//   },
//   { prompt: "<p><b>3. I understand that some quality control checks will be applied to my data, in "+
//             "order to ensure the scientific integrity of the study. The first check is that "+
//             "submissions with very quick choice times (majority less than 2s) are likely to be rejected. "+
//             "The second check is that...</b></p>"+
//             "<p><b>A</b>  If choose the same answer every time, my data may not be approved</p>"+
//             "<p><b>B</b>  If choose the same answer every time, my data will definitely be approved</p>"+
//             "<p><b>C</b>  If I always select the bottom-left choice, my data will be approved</p>",
//     options: ["A", "B", "C"],
//     required: true,
//     horizontal: true
//   }
// ];

// var nCorrect = 0;
// var introQuiz = {
//   type: jsPsychSurveyMultiChoice,
//   questions: quizQuestions,
//   data: {
//     correct_answers: ["B", "A", "A"]
//   },
//   randomize_question_order: false,
//   button_label: "check answers", 
//   on_finish: function (data) {
//     // compare answers to correct answers
//     nCorrect = 0;
//     for (var i=0; i < data.correct_answers.length; i++) {
//       var questID = "Q"+i;
//       if (data.response[questID] == data.correct_answers[i]) {
//         nCorrect++;
//       }
//     }
//     data.nCorrect = nCorrect;
//   }
// };

// var sorryText = {
//   type: jsPsychInstructions,
//   allow_backward: false,
//   show_clickable_nav: true,
//   allow_keys: true,
//   button_label_next: "continue",
//   pages: ["<p><h2>Sorry, you didn’t get all the answers right this time!</h2></p>"+ 
//           "<p>"+
//           "To check we have explained everything clearly, please re-read the "+
//           "information and try the quiz again."+
//           "</p>"]
// };

// var if_node = {
//   timeline: [sorryText],
//   condition_function: function(data) {
//     if ( loop_node == false ) {
//         return false;
//     } else {
//         return true;
//     }
//   }
// }

var loop_node = {
  timeline: [introText],
};

var continueText= {
  type: jsPsychInstructions,
  allow_backward: false,
  show_clickable_nav: true,
  allow_keys: true,
  //button_label_previous: "back",
  button_label_next: "继续",
  pages: ["<p><h2>下面即将开始测验</h2></p>"+
          "<p>"+
          "只是想再次提醒您，我们希望您能够仔细阅读事件说明，"+
          //"Just to remind you one more time, what we would like you to do is read "+
          "尽可能地 <b>想象如果该事件真的发生在你身上时</b>，你认为"+
          "该事件发生 <b>最主要的原因</b> 是什么。"+
          "</p>"+
          "<p>"+
          "请注意，当您选择过快时，页面可能无法跳转。"+
          "因此，请您尽可能认真、仔细地做出选择。"+
          "</p>"+
          "<p>"+
          "本测验共包括 <b>32 个不同的事件场景</b>，当测验进行到一半时"+
          //"Like before, we will ask you about to think about the reasons behind <b>32 different events</b>. "+
          "我们会提醒你，这时你可以选择休息一下。"+
          "</p>"+
          // "<p>"+
          // "<b>The progress bar at the top of the screen shows you how far you are through this part of the study</b>."+
          // "</p>"
          "<p>"+
          "准备好了吗？请点击 <b>继续</b> 按钮开始测验吧！"+
          "</p>"
          ]
};

///////////////////////////////////////////// CONCAT ////////////////////////////////////////////////////////
timeline_instructions_choice.push(loop_node);        // loop through instructions and quiz until correct
timeline_instructions_choice.push(continueText);     // loop through instructions and quiz until correct
 
export { timeline_instructions_choice };

