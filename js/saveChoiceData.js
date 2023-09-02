// Helper functions for saving trial data [using LeanCloud]
const { Query, User } = AV;
AV.init({
          appId: "7yk2g0IxApJ23zLC6w8hW2ml-gzGzoHsz",
          appKey: "O3GGJQvRi1vLugRNUMCN0JR0",
          serverURL: "https://7yk2g0ix.lc-cn-n1-shared.com",
        });

// 
var firstPlay = function(){
        const Database = AV.Object.extend("cbt_all");
        const database = new Database();
        window.database = database
}
var secondPlay = function(){
        const query = new AV.Query("cbt_all");
        query.equalTo("phoneNum", phoneNum);
        query.find().then((subjs) => {
                if (subjs.length===0){ //如果查找不到phoneNum
                        const Database = AV.Object.extend("cbt_all_1");
                        const database = new Database();
                        window.database = database
                }
})}
var saveSubInfo = function(type, dataToSave){
        const query = new AV.Query("cbt_all");
        query.equalTo("phoneNum", phoneNum);
        query.find().then((subjs) => {
                if (subjs.length===0){ //如果查找不到phoneNum
                        database.add("subInfo", {[type]:dataToSave});
                        database.add("name", {[type]: uname});
                        database.set("phoneNum", phoneNum);
                        database.set("participantOS", navigator.userAgent);
                        database.save();
                }else{
                // 获取需要更新的 todo
                subjs.forEach((subj) => {
                  // 更新属性值
                  subj.add("subInfo", {[type]:dataToSave});
                });
                AV.Object.saveAll(subjs);
                }
        })
}
var saveStartData = function(taskN){
        const query = new AV.Query("cbt_all");
        query.equalTo("phoneNum", phoneNum);
        query.find().then((subjs) => {
                if (subjs.length===0){
                        database.add("date", {['choice'+taskN]: new Date().toISOString().split('T')[0]});
                        database.add("startTime", {['choice'+taskN]: new Date().toLocaleTimeString()});
                        database.save();
                }else{
                        // 获取需要更新的 todo
                        subjs.forEach((subj) => {
                        // 更新属性值
                                subj.add("date", {['choice'+taskN]: new Date().toISOString().split('T')[0]});
                                subj.add("startTime", {['choice'+taskN]: new Date().toLocaleTimeString()});
                        });
                        AV.Object.saveAll(subjs);
                }
        })
}

// // function to save the practice data
var savePracTaskData = function(trialN, dataToSave){
        database.add("practiceData", {[trialN]: dataToSave});
        database.save();
}
//----------------------------------- TASK 0 -------------------------------------------
// function to save the task0 data
var saveTaskData = function(trialN, dataToSave){
        const query = new AV.Query("cbt_all");
        query.equalTo("phoneNum", phoneNum);
        query.find().then((subjs) => {
                if (subjs.length===0){
                        database.add("choiceData", {[trialN]: dataToSave});
                        database.save();
                }else{
                        // 获取需要更新的 todo
                        subjs.forEach((subj) => {
                                // 更新属性值
                                        subj.add("choiceData", {[trialN]: dataToSave});
                                });
                                AV.Object.saveAll(subjs);
                }
        })
}
// function to save questionnaire data
var saveQuestData = function (questionnaire, dataToSave, completionRT) {
        const query = new AV.Query("cbt_all");
        query.equalTo("phoneNum", phoneNum);
        query.find().then((subjs) => {
                if (subjs.length===0){
                        database.add("postChoiceData", {[questionnaire]: dataToSave});
                        database.add("postChoiceData",{[questionnaire+'_RT']: completionRT});
                }else{
                        // 获取需要更新的 todo
                        subjs.forEach((subj) => {
                                // 更新属性值
                                        subj.add("postChoiceData", {[questionnaire]: dataToSave});
                                        subj.add("postChoiceData",{[questionnaire+'_RT']: completionRT});
                                });
                                AV.Object.saveAll(subjs);
                }
        })
}
// function to save end data 
var saveEndData = function(taskN){
        const query = new AV.Query("cbt_all");
        query.equalTo("phoneNum", phoneNum);
        query.find().then((subjs) => {
                if (subjs.length===0){
                        database.add("endTime", {['choice'+taskN]: new Date().toLocaleTimeString()});
                        database.add("expCompleted",{['choice'+taskN]: 1});
                        database.save();
                }else{
                        // 获取需要更新的 todo
                        subjs.forEach((subj) => {
                                // 更新属性值
                                        subj.add("endTime", {['choice'+taskN]: new Date().toLocaleTimeString()});
                                        subj.add("expCompleted",{['choice'+taskN]: 1});
                                });
                                AV.Object.saveAll(subjs);
                }
        })
}

export { firstPlay, secondPlay, saveSubInfo, saveStartData, savePracTaskData, saveTaskData,saveQuestData, saveEndData }

// {
//     "reward1": [7,7,4,5,7,7,4,5],
    
//     "effort1": [0.95,0.95,0.2,0.75,0.95,0.95,0.2,0.75],
    
//     "reward2": [3,4,6,4,3,4,6,4],
     
//     "effort2": [0.35,0.75,0.55,0.2,0.35,0.75,0.55,0.2]
// }