// Helper functions for saving trial data [using LeanCloud]
const { Query, User } = AV;
AV.init({
          appId: "7yk2g0IxApJ23zLC6w8hW2ml-gzGzoHsz",
          appKey: "O3GGJQvRi1vLugRNUMCN0JR0",
          serverURL: "https://7yk2g0ix.lc-cn-n1-shared.com",
        });

// import task version info
var dbCreate = function(dbClass){
        const Database = AV.Object.extend(dbClass);
        const database = new Database();
        window.database = database
}

// function to save startData
var saveSubInfo = function(type, dataToSave){
    database.add("subInfo", {[type]:dataToSave});
    database.set("phoneNum", phoneNum);
    database.set("participantOS", navigator.userAgent);
    database.save();
}

var saveStartData = function() {
        database.set("date", new Date().toISOString().split('T')[0]);
        database.set("startTime", new Date().toLocaleTimeString());
        database.set("expCompleted", 0);
        database.save();
};

// // function to save the practice data
var savePracTaskData = function(trialN, dataToSave){
        database.add("practiceData", {[trialN]: dataToSave});
        database.save();
}
//----------------------------------- TASK 0 -------------------------------------------
// function to save the task0 data
var saveTaskData = function(trialN, dataToSave){
        database.add("taskData", {[trialN]: dataToSave});
        database.save();
}

// function to save post-block question data
var savePostTaskData = function(questN, dataToSave){
        database.add("postTaskData", {[questN]: dataToSave});
        database.save();
}

// function to save end data 
var saveEndData = function(){
        database.set("endTime", new Date().toLocaleTimeString());
        database.set("expCompleted", 1);
        database.save();
}

export { dbCreate, saveSubInfo, saveStartData, savePracTaskData, saveTaskData, savePostTaskData, saveEndData}

// {
//     "reward1": [7,7,4,5,7,7,4,5],
    
//     "effort1": [0.95,0.95,0.2,0.75,0.95,0.95,0.2,0.75],
    
//     "reward2": [3,4,6,4,3,4,6,4],
     
//     "effort2": [0.35,0.75,0.55,0.2,0.35,0.75,0.55,0.2]
// }