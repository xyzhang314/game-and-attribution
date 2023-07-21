// Helper functions for saving trial data [using LeanCloud]

const { Query, User } = AV;
AV.init({
          appId: "7yk2g0IxApJ23zLC6w8hW2ml-gzGzoHsz",
          appKey: "O3GGJQvRi1vLugRNUMCN0JR0",
          serverURL: "https://7yk2g0ix.lc-cn-n1-shared.com",
        });

// import task version info
import { randCond } from "./versionInfo.js";

// database.set("task0Data", object);
// database.set("task1Data", object);
// database.set("postTaskData", object);

const Database = AV.Object.extend("Database");
const database = new Database();

// function to save startData 
var saveStartData = function(startTime) {
    database.set("date", new Date().toISOString().split('T')[0]);
    database.set("startTime", new Date().toLocaleTimeString());
    database.set("condition", randCond);
    database.set("participantOS", navigator.userAgent);
    database.set("expCompleted", 0);
    database.set("taskStartTimePhaser", startTime);
    database.save();
};

// // function to save the practice data
var savePracTaskData = function(trialN, dataToSave){
    const query = new AV.Query("Database");
    query.equalTo("participantOS", navigator.userAgent);
    query
    .find()
    .then(function (){
        database.add("practiceData", {[trialN]: dataToSave});
        database.save();
    })
}
//----------------------------------- TASK 0 -------------------------------------------
// function to save the task0 data
var saveTask0Data = function(trialN, dataToSave){
    const query = new AV.Query("Database");
    query.equalTo("participantOS", navigator.userAgent);
    query
    .find()
    .then(function(){
        database.add("task0Data", {[trialN]: dataToSave});
        database.save();
    })
}
// function to save post-block question data
var savePostTaskData = function(questN, dataToSave){
    const query = new AV.Query("Database");
    query.equalTo("participantOS", navigator.userAgent);
    query
    .find()
    .then(function(){
        database.add("postTaskData", {[questN]: dataToSave});
        database.save();
    })
}
// function to save goal OR gameLiking score
var saveIntervData = function(trialN, dataToSave){
    const query = new AV.Query("Database");
    query.equalTo("participantOS", navigator.userAgent);
    query
    .find()
    .then(function(){
        database.add("goalORgame", {[trialN]: dataToSave});
        database.save();
    })
}
// function to save the task1 data
var saveTask1Data = function(trialN, dataToSave){
    const query = new AV.Query("Database");
    query.equalTo("participantOS", navigator.userAgent);
    query
    .find()
    .then(function(){
        database.add("task1Data", {[trialN]: dataToSave});
        database.save();
    })
}
// function to save end data 
var saveEndData = function(){
    const query = new AV.Query("Database");
    query.equalTo("participantOS", navigator.userAgent);
    query
    .find()
    .then(function(){
        database.set("endTime", new Date().toLocaleTimeString());
        database.set("expCompleted", 1);;
        database.save();
    })
}

export { saveStartData, savePracTaskData, saveTask0Data, saveIntervData, saveTask1Data, savePostTaskData, saveEndData}

// , savePracTaskData, 
//          saveQuizData, saveIntervention,
//           saveTask0Ques, saveTask0PHQ,
//          saveTask1Data, saveTask1Ques, saveTask1PHQ, saveEndData
// {
//     "reward1": [7,7,4,5,7,7,4,5],
    
//     "effort1": [0.95,0.95,0.2,0.75,0.95,0.95,0.2,0.75],
    
//     "reward2": [3,4,6,4,3,4,6,4],
     
//     "effort2": [0.35,0.75,0.55,0.2,0.35,0.75,0.55,0.2]
// }