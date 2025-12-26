gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDFondo1Objects1= [];
gdjs.MenuCode.GDFondo1Objects2= [];
gdjs.MenuCode.GDFondo1Objects3= [];
gdjs.MenuCode.GDFondo1Objects4= [];
gdjs.MenuCode.GDFondo1Objects5= [];
gdjs.MenuCode.GDFondo1Objects6= [];
gdjs.MenuCode.GDFondo1Objects7= [];
gdjs.MenuCode.GDFondo1Objects8= [];
gdjs.MenuCode.GDFondo1Objects9= [];
gdjs.MenuCode.GDFondo1Objects10= [];
gdjs.MenuCode.GDFondo1Objects11= [];
gdjs.MenuCode.GDFondo2Objects1= [];
gdjs.MenuCode.GDFondo2Objects2= [];
gdjs.MenuCode.GDFondo2Objects3= [];
gdjs.MenuCode.GDFondo2Objects4= [];
gdjs.MenuCode.GDFondo2Objects5= [];
gdjs.MenuCode.GDFondo2Objects6= [];
gdjs.MenuCode.GDFondo2Objects7= [];
gdjs.MenuCode.GDFondo2Objects8= [];
gdjs.MenuCode.GDFondo2Objects9= [];
gdjs.MenuCode.GDFondo2Objects10= [];
gdjs.MenuCode.GDFondo2Objects11= [];
gdjs.MenuCode.GDFondo3Objects1= [];
gdjs.MenuCode.GDFondo3Objects2= [];
gdjs.MenuCode.GDFondo3Objects3= [];
gdjs.MenuCode.GDFondo3Objects4= [];
gdjs.MenuCode.GDFondo3Objects5= [];
gdjs.MenuCode.GDFondo3Objects6= [];
gdjs.MenuCode.GDFondo3Objects7= [];
gdjs.MenuCode.GDFondo3Objects8= [];
gdjs.MenuCode.GDFondo3Objects9= [];
gdjs.MenuCode.GDFondo3Objects10= [];
gdjs.MenuCode.GDFondo3Objects11= [];
gdjs.MenuCode.GDFondo4Objects1= [];
gdjs.MenuCode.GDFondo4Objects2= [];
gdjs.MenuCode.GDFondo4Objects3= [];
gdjs.MenuCode.GDFondo4Objects4= [];
gdjs.MenuCode.GDFondo4Objects5= [];
gdjs.MenuCode.GDFondo4Objects6= [];
gdjs.MenuCode.GDFondo4Objects7= [];
gdjs.MenuCode.GDFondo4Objects8= [];
gdjs.MenuCode.GDFondo4Objects9= [];
gdjs.MenuCode.GDFondo4Objects10= [];
gdjs.MenuCode.GDFondo4Objects11= [];
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];
gdjs.MenuCode.GDNewSpriteObjects3= [];
gdjs.MenuCode.GDNewSpriteObjects4= [];
gdjs.MenuCode.GDNewSpriteObjects5= [];
gdjs.MenuCode.GDNewSpriteObjects6= [];
gdjs.MenuCode.GDNewSpriteObjects7= [];
gdjs.MenuCode.GDNewSpriteObjects8= [];
gdjs.MenuCode.GDNewSpriteObjects9= [];
gdjs.MenuCode.GDNewSpriteObjects10= [];
gdjs.MenuCode.GDNewSpriteObjects11= [];
gdjs.MenuCode.GDNewSprite2Objects1= [];
gdjs.MenuCode.GDNewSprite2Objects2= [];
gdjs.MenuCode.GDNewSprite2Objects3= [];
gdjs.MenuCode.GDNewSprite2Objects4= [];
gdjs.MenuCode.GDNewSprite2Objects5= [];
gdjs.MenuCode.GDNewSprite2Objects6= [];
gdjs.MenuCode.GDNewSprite2Objects7= [];
gdjs.MenuCode.GDNewSprite2Objects8= [];
gdjs.MenuCode.GDNewSprite2Objects9= [];
gdjs.MenuCode.GDNewSprite2Objects10= [];
gdjs.MenuCode.GDNewSprite2Objects11= [];
gdjs.MenuCode.GDSTARTObjects1= [];
gdjs.MenuCode.GDSTARTObjects2= [];
gdjs.MenuCode.GDSTARTObjects3= [];
gdjs.MenuCode.GDSTARTObjects4= [];
gdjs.MenuCode.GDSTARTObjects5= [];
gdjs.MenuCode.GDSTARTObjects6= [];
gdjs.MenuCode.GDSTARTObjects7= [];
gdjs.MenuCode.GDSTARTObjects8= [];
gdjs.MenuCode.GDSTARTObjects9= [];
gdjs.MenuCode.GDSTARTObjects10= [];
gdjs.MenuCode.GDSTARTObjects11= [];
gdjs.MenuCode.GDNewSprite3Objects1= [];
gdjs.MenuCode.GDNewSprite3Objects2= [];
gdjs.MenuCode.GDNewSprite3Objects3= [];
gdjs.MenuCode.GDNewSprite3Objects4= [];
gdjs.MenuCode.GDNewSprite3Objects5= [];
gdjs.MenuCode.GDNewSprite3Objects6= [];
gdjs.MenuCode.GDNewSprite3Objects7= [];
gdjs.MenuCode.GDNewSprite3Objects8= [];
gdjs.MenuCode.GDNewSprite3Objects9= [];
gdjs.MenuCode.GDNewSprite3Objects10= [];
gdjs.MenuCode.GDNewSprite3Objects11= [];


gdjs.MenuCode.asyncCallback16059332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs.MenuCode.GDNewSpriteObjects4);

{for(var i = 0, len = gdjs.MenuCode.GDNewSpriteObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSpriteObjects4[i].setPosition(365,105.5);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDNewSpriteObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSpriteObjects4[i].getBehavior("Resizable").setSize(550, 298.5);
}
}
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "klepto.wav");
}
{gdjs.evtTools.sound.unloadMusic(runtimeScene, "klepto.wav");
}
{gdjs.evtTools.sound.unloadMusic(runtimeScene, "PitcherPerfectTheme.wav");
}
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "PitcherPerfectTheme.wav");
}
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Switch.wav");
}
{gdjs.evtTools.sound.unloadMusic(runtimeScene, "Switch.wav");
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(16059332, gdjs.MenuCode.asyncCallback16059332);
gdjs.MenuCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDNewSpriteObjects3) asyncObjectsList.addObject("NewSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback16059332(runtimeScene, asyncObjectsList)), 16059332, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback16058084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs.MenuCode.GDNewSpriteObjects3);

{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Menu.wav", 8, true, 50, 1);
}
{for(var i = 0, len = gdjs.MenuCode.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSpriteObjects3[i].setPosition(420,120.75);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSpriteObjects3[i].getBehavior("Resizable").setSize(440, 237);
}
}

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(16058084, gdjs.MenuCode.asyncCallback16058084);
gdjs.MenuCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDNewSpriteObjects2) asyncObjectsList.addObject("NewSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.MenuCode.asyncCallback16058084(runtimeScene, asyncObjectsList)), 16058084, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback16058956 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs.MenuCode.GDNewSpriteObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSpriteObjects2[i].setPosition(525.5,153);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSpriteObjects2[i].getBehavior("Resizable").setSize(229, 108);
}
}

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(16058956, gdjs.MenuCode.asyncCallback16058956);
gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDNewSpriteObjects1) asyncObjectsList.addObject("NewSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.MenuCode.asyncCallback16058956(runtimeScene, asyncObjectsList)), 16058956, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback16066812 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs.MenuCode.GDNewSpriteObjects3);

{for(var i = 0, len = gdjs.MenuCode.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSpriteObjects3[i].setX(gdjs.MenuCode.GDNewSpriteObjects3[i].getX() - (5));
}
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(16066812, gdjs.MenuCode.asyncCallback16066812);
gdjs.MenuCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDNewSpriteObjects2) asyncObjectsList.addObject("NewSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback16066812(runtimeScene, asyncObjectsList)), 16066812, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback16066308 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs.MenuCode.GDNewSpriteObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSpriteObjects2[i].setX(gdjs.MenuCode.GDNewSpriteObjects2[i].getX() + (10));
}
}

{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(16066308, gdjs.MenuCode.asyncCallback16066308);
gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDNewSpriteObjects1) asyncObjectsList.addObject("NewSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback16066308(runtimeScene, asyncObjectsList)), 16066308, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback16067772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("START"), gdjs.MenuCode.GDSTARTObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDSTARTObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSTARTObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(16067772, gdjs.MenuCode.asyncCallback16067772);
gdjs.MenuCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDSTARTObjects1) asyncObjectsList.addObject("START", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MenuCode.asyncCallback16067772(runtimeScene, asyncObjectsList)), 16067772, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback16071844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.MenuCode.GDNewSprite3Objects11);

{for(var i = 0, len = gdjs.MenuCode.GDNewSprite3Objects11.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite3Objects11[i].getBehavior("Opacity").setOpacity(255);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Selector", false);
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(16071844, gdjs.MenuCode.asyncCallback16071844);
gdjs.MenuCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDNewSprite3Objects10) asyncObjectsList.addObject("NewSprite3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.MenuCode.asyncCallback16071844(runtimeScene, asyncObjectsList)), 16071844, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback16070460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.MenuCode.GDNewSprite3Objects10);

{for(var i = 0, len = gdjs.MenuCode.GDNewSprite3Objects10.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite3Objects10[i].getBehavior("Opacity").setOpacity(210);
}
}

{ //Subevents
gdjs.MenuCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(16070460, gdjs.MenuCode.asyncCallback16070460);
gdjs.MenuCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDNewSprite3Objects9) asyncObjectsList.addObject("NewSprite3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.MenuCode.asyncCallback16070460(runtimeScene, asyncObjectsList)), 16070460, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback16071348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.MenuCode.GDNewSprite3Objects9);

{for(var i = 0, len = gdjs.MenuCode.GDNewSprite3Objects9.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite3Objects9[i].getBehavior("Opacity").setOpacity(180);
}
}

{ //Subevents
gdjs.MenuCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(16071348, gdjs.MenuCode.asyncCallback16071348);
gdjs.MenuCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDNewSprite3Objects8) asyncObjectsList.addObject("NewSprite3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.MenuCode.asyncCallback16071348(runtimeScene, asyncObjectsList)), 16071348, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback16070988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.MenuCode.GDNewSprite3Objects8);

{for(var i = 0, len = gdjs.MenuCode.GDNewSprite3Objects8.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite3Objects8[i].getBehavior("Opacity").setOpacity(140);
}
}

{ //Subevents
gdjs.MenuCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(16070988, gdjs.MenuCode.asyncCallback16070988);
gdjs.MenuCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDNewSprite3Objects7) asyncObjectsList.addObject("NewSprite3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.MenuCode.asyncCallback16070988(runtimeScene, asyncObjectsList)), 16070988, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback16070540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.MenuCode.GDNewSprite3Objects7);

{for(var i = 0, len = gdjs.MenuCode.GDNewSprite3Objects7.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite3Objects7[i].getBehavior("Opacity").setOpacity(100);
}
}

{ //Subevents
gdjs.MenuCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(16070540, gdjs.MenuCode.asyncCallback16070540);
gdjs.MenuCode.eventsList10 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDNewSprite3Objects6) asyncObjectsList.addObject("NewSprite3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.MenuCode.asyncCallback16070540(runtimeScene, asyncObjectsList)), 16070540, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback16069556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.MenuCode.GDNewSprite3Objects6);

{for(var i = 0, len = gdjs.MenuCode.GDNewSprite3Objects6.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite3Objects6[i].getBehavior("Opacity").setOpacity(80);
}
}

{ //Subevents
gdjs.MenuCode.eventsList10(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(16069556, gdjs.MenuCode.asyncCallback16069556);
gdjs.MenuCode.eventsList11 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDNewSprite3Objects5) asyncObjectsList.addObject("NewSprite3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.MenuCode.asyncCallback16069556(runtimeScene, asyncObjectsList)), 16069556, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback16070044 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.MenuCode.GDNewSprite3Objects5);

{for(var i = 0, len = gdjs.MenuCode.GDNewSprite3Objects5.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite3Objects5[i].getBehavior("Opacity").setOpacity(50);
}
}

{ //Subevents
gdjs.MenuCode.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(16070044, gdjs.MenuCode.asyncCallback16070044);
gdjs.MenuCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDNewSprite3Objects4) asyncObjectsList.addObject("NewSprite3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.MenuCode.asyncCallback16070044(runtimeScene, asyncObjectsList)), 16070044, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback16069628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.MenuCode.GDNewSprite3Objects4);

{for(var i = 0, len = gdjs.MenuCode.GDNewSprite3Objects4.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite3Objects4[i].getBehavior("Opacity").setOpacity(30);
}
}

{ //Subevents
gdjs.MenuCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(16069628, gdjs.MenuCode.asyncCallback16069628);
gdjs.MenuCode.eventsList13 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDNewSprite3Objects3) asyncObjectsList.addObject("NewSprite3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.MenuCode.asyncCallback16069628(runtimeScene, asyncObjectsList)), 16069628, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback16069148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.MenuCode.GDNewSprite3Objects3);
{for(var i = 0, len = gdjs.MenuCode.GDNewSprite3Objects3.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite3Objects3[i].getBehavior("Opacity").setOpacity(15);
}
}

{ //Subevents
gdjs.MenuCode.eventsList13(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(16069148, gdjs.MenuCode.asyncCallback16069148);
gdjs.MenuCode.eventsList14 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MenuCode.asyncCallback16069148(runtimeScene, asyncObjectsList)), 16069148, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback16068964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "whoosh.mp3", false, 30, 1);
}

{ //Subevents
gdjs.MenuCode.eventsList14(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(16068964, gdjs.MenuCode.asyncCallback16068964);
gdjs.MenuCode.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MenuCode.asyncCallback16068964(runtimeScene, asyncObjectsList)), 16068964, asyncObjectsList);
}
}

}


};gdjs.MenuCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fondo1"), gdjs.MenuCode.GDFondo1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo2"), gdjs.MenuCode.GDFondo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo3"), gdjs.MenuCode.GDFondo3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo4"), gdjs.MenuCode.GDFondo4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.MenuCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.MenuCode.GDNewSprite3Objects1);
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Menu.wav");
}
{gdjs.evtTools.sound.unloadMusic(runtimeScene, "Menu.wav");
}
{for(var i = 0, len = gdjs.MenuCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite3Objects1[i].setPosition(-(8),-(8));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite3Objects1[i].getBehavior("Resizable").setSize(1296, 734);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite3Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDFondo1Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFondo1Objects1[i].setPosition(-(14),-(8));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDFondo2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFondo2Objects1[i].setPosition(-(14),-(8));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDFondo3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFondo3Objects1[i].setPosition(-(14),-(8));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDFondo4Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFondo4Objects1[i].setPosition(-(14),-(8));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSpriteObjects1[i].setPosition(640,180);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSpriteObjects1[i].getBehavior("Resizable").setSize(0, 0);
}
}

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.func(runtimeScene, "loop", 0.05, -(1), null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fondo1"), gdjs.MenuCode.GDFondo1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo2"), gdjs.MenuCode.GDFondo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo3"), gdjs.MenuCode.GDFondo3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo4"), gdjs.MenuCode.GDFondo4Objects1);
{for(var i = 0, len = gdjs.MenuCode.GDFondo1Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFondo1Objects1[i].setX(gdjs.MenuCode.GDFondo1Objects1[i].getX() - (0.3));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDFondo2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFondo2Objects1[i].setX(gdjs.MenuCode.GDFondo2Objects1[i].getX() - (0.6));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDFondo3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFondo3Objects1[i].setX(gdjs.MenuCode.GDFondo3Objects1[i].getX() - (1.5));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDFondo4Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFondo4Objects1[i].setX(gdjs.MenuCode.GDFondo4Objects1[i].getX() - (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fondo1"), gdjs.MenuCode.GDFondo1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFondo1Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFondo1Objects1[i].getX() <= -(1300) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFondo1Objects1[k] = gdjs.MenuCode.GDFondo1Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFondo1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDFondo1Objects1 */
{for(var i = 0, len = gdjs.MenuCode.GDFondo1Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFondo1Objects1[i].setX(-(14));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fondo2"), gdjs.MenuCode.GDFondo2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFondo2Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFondo2Objects1[i].getX() <= -(1300) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFondo2Objects1[k] = gdjs.MenuCode.GDFondo2Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFondo2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDFondo2Objects1 */
{for(var i = 0, len = gdjs.MenuCode.GDFondo2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFondo2Objects1[i].setX(-(14));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fondo3"), gdjs.MenuCode.GDFondo3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFondo3Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFondo3Objects1[i].getX() <= -(1300) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFondo3Objects1[k] = gdjs.MenuCode.GDFondo3Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFondo3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDFondo3Objects1 */
{for(var i = 0, len = gdjs.MenuCode.GDFondo3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFondo3Objects1[i].setX(-(14));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fondo4"), gdjs.MenuCode.GDFondo4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFondo4Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFondo4Objects1[i].getX() <= -(1300) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFondo4Objects1[k] = gdjs.MenuCode.GDFondo4Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFondo4Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDFondo4Objects1 */
{for(var i = 0, len = gdjs.MenuCode.GDFondo4Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFondo4Objects1[i].setX(-(14));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.func(runtimeScene, "titulo", 0.7, -(1), null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.MenuCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSpriteObjects1[i].setX(gdjs.MenuCode.GDNewSpriteObjects1[i].getX() - (5));
}
}

{ //Subevents
gdjs.MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.func(runtimeScene, "press", 3, -(1), null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("START"), gdjs.MenuCode.GDSTARTObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSTARTObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSTARTObjects1[i].getBehavior("Opacity").setOpacity(155);
}
}

{ //Subevents
gdjs.MenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16067700);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.MenuCode.GDNewSprite2Objects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "good.wav", false, 50, 1);
}
{for(var i = 0, len = gdjs.MenuCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}

{ //Subevents
gdjs.MenuCode.eventsList15(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDFondo1Objects1.length = 0;
gdjs.MenuCode.GDFondo1Objects2.length = 0;
gdjs.MenuCode.GDFondo1Objects3.length = 0;
gdjs.MenuCode.GDFondo1Objects4.length = 0;
gdjs.MenuCode.GDFondo1Objects5.length = 0;
gdjs.MenuCode.GDFondo1Objects6.length = 0;
gdjs.MenuCode.GDFondo1Objects7.length = 0;
gdjs.MenuCode.GDFondo1Objects8.length = 0;
gdjs.MenuCode.GDFondo1Objects9.length = 0;
gdjs.MenuCode.GDFondo1Objects10.length = 0;
gdjs.MenuCode.GDFondo1Objects11.length = 0;
gdjs.MenuCode.GDFondo2Objects1.length = 0;
gdjs.MenuCode.GDFondo2Objects2.length = 0;
gdjs.MenuCode.GDFondo2Objects3.length = 0;
gdjs.MenuCode.GDFondo2Objects4.length = 0;
gdjs.MenuCode.GDFondo2Objects5.length = 0;
gdjs.MenuCode.GDFondo2Objects6.length = 0;
gdjs.MenuCode.GDFondo2Objects7.length = 0;
gdjs.MenuCode.GDFondo2Objects8.length = 0;
gdjs.MenuCode.GDFondo2Objects9.length = 0;
gdjs.MenuCode.GDFondo2Objects10.length = 0;
gdjs.MenuCode.GDFondo2Objects11.length = 0;
gdjs.MenuCode.GDFondo3Objects1.length = 0;
gdjs.MenuCode.GDFondo3Objects2.length = 0;
gdjs.MenuCode.GDFondo3Objects3.length = 0;
gdjs.MenuCode.GDFondo3Objects4.length = 0;
gdjs.MenuCode.GDFondo3Objects5.length = 0;
gdjs.MenuCode.GDFondo3Objects6.length = 0;
gdjs.MenuCode.GDFondo3Objects7.length = 0;
gdjs.MenuCode.GDFondo3Objects8.length = 0;
gdjs.MenuCode.GDFondo3Objects9.length = 0;
gdjs.MenuCode.GDFondo3Objects10.length = 0;
gdjs.MenuCode.GDFondo3Objects11.length = 0;
gdjs.MenuCode.GDFondo4Objects1.length = 0;
gdjs.MenuCode.GDFondo4Objects2.length = 0;
gdjs.MenuCode.GDFondo4Objects3.length = 0;
gdjs.MenuCode.GDFondo4Objects4.length = 0;
gdjs.MenuCode.GDFondo4Objects5.length = 0;
gdjs.MenuCode.GDFondo4Objects6.length = 0;
gdjs.MenuCode.GDFondo4Objects7.length = 0;
gdjs.MenuCode.GDFondo4Objects8.length = 0;
gdjs.MenuCode.GDFondo4Objects9.length = 0;
gdjs.MenuCode.GDFondo4Objects10.length = 0;
gdjs.MenuCode.GDFondo4Objects11.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects3.length = 0;
gdjs.MenuCode.GDNewSpriteObjects4.length = 0;
gdjs.MenuCode.GDNewSpriteObjects5.length = 0;
gdjs.MenuCode.GDNewSpriteObjects6.length = 0;
gdjs.MenuCode.GDNewSpriteObjects7.length = 0;
gdjs.MenuCode.GDNewSpriteObjects8.length = 0;
gdjs.MenuCode.GDNewSpriteObjects9.length = 0;
gdjs.MenuCode.GDNewSpriteObjects10.length = 0;
gdjs.MenuCode.GDNewSpriteObjects11.length = 0;
gdjs.MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MenuCode.GDNewSprite2Objects3.length = 0;
gdjs.MenuCode.GDNewSprite2Objects4.length = 0;
gdjs.MenuCode.GDNewSprite2Objects5.length = 0;
gdjs.MenuCode.GDNewSprite2Objects6.length = 0;
gdjs.MenuCode.GDNewSprite2Objects7.length = 0;
gdjs.MenuCode.GDNewSprite2Objects8.length = 0;
gdjs.MenuCode.GDNewSprite2Objects9.length = 0;
gdjs.MenuCode.GDNewSprite2Objects10.length = 0;
gdjs.MenuCode.GDNewSprite2Objects11.length = 0;
gdjs.MenuCode.GDSTARTObjects1.length = 0;
gdjs.MenuCode.GDSTARTObjects2.length = 0;
gdjs.MenuCode.GDSTARTObjects3.length = 0;
gdjs.MenuCode.GDSTARTObjects4.length = 0;
gdjs.MenuCode.GDSTARTObjects5.length = 0;
gdjs.MenuCode.GDSTARTObjects6.length = 0;
gdjs.MenuCode.GDSTARTObjects7.length = 0;
gdjs.MenuCode.GDSTARTObjects8.length = 0;
gdjs.MenuCode.GDSTARTObjects9.length = 0;
gdjs.MenuCode.GDSTARTObjects10.length = 0;
gdjs.MenuCode.GDSTARTObjects11.length = 0;
gdjs.MenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MenuCode.GDNewSprite3Objects2.length = 0;
gdjs.MenuCode.GDNewSprite3Objects3.length = 0;
gdjs.MenuCode.GDNewSprite3Objects4.length = 0;
gdjs.MenuCode.GDNewSprite3Objects5.length = 0;
gdjs.MenuCode.GDNewSprite3Objects6.length = 0;
gdjs.MenuCode.GDNewSprite3Objects7.length = 0;
gdjs.MenuCode.GDNewSprite3Objects8.length = 0;
gdjs.MenuCode.GDNewSprite3Objects9.length = 0;
gdjs.MenuCode.GDNewSprite3Objects10.length = 0;
gdjs.MenuCode.GDNewSprite3Objects11.length = 0;

gdjs.MenuCode.eventsList16(runtimeScene);
gdjs.MenuCode.GDFondo1Objects1.length = 0;
gdjs.MenuCode.GDFondo1Objects2.length = 0;
gdjs.MenuCode.GDFondo1Objects3.length = 0;
gdjs.MenuCode.GDFondo1Objects4.length = 0;
gdjs.MenuCode.GDFondo1Objects5.length = 0;
gdjs.MenuCode.GDFondo1Objects6.length = 0;
gdjs.MenuCode.GDFondo1Objects7.length = 0;
gdjs.MenuCode.GDFondo1Objects8.length = 0;
gdjs.MenuCode.GDFondo1Objects9.length = 0;
gdjs.MenuCode.GDFondo1Objects10.length = 0;
gdjs.MenuCode.GDFondo1Objects11.length = 0;
gdjs.MenuCode.GDFondo2Objects1.length = 0;
gdjs.MenuCode.GDFondo2Objects2.length = 0;
gdjs.MenuCode.GDFondo2Objects3.length = 0;
gdjs.MenuCode.GDFondo2Objects4.length = 0;
gdjs.MenuCode.GDFondo2Objects5.length = 0;
gdjs.MenuCode.GDFondo2Objects6.length = 0;
gdjs.MenuCode.GDFondo2Objects7.length = 0;
gdjs.MenuCode.GDFondo2Objects8.length = 0;
gdjs.MenuCode.GDFondo2Objects9.length = 0;
gdjs.MenuCode.GDFondo2Objects10.length = 0;
gdjs.MenuCode.GDFondo2Objects11.length = 0;
gdjs.MenuCode.GDFondo3Objects1.length = 0;
gdjs.MenuCode.GDFondo3Objects2.length = 0;
gdjs.MenuCode.GDFondo3Objects3.length = 0;
gdjs.MenuCode.GDFondo3Objects4.length = 0;
gdjs.MenuCode.GDFondo3Objects5.length = 0;
gdjs.MenuCode.GDFondo3Objects6.length = 0;
gdjs.MenuCode.GDFondo3Objects7.length = 0;
gdjs.MenuCode.GDFondo3Objects8.length = 0;
gdjs.MenuCode.GDFondo3Objects9.length = 0;
gdjs.MenuCode.GDFondo3Objects10.length = 0;
gdjs.MenuCode.GDFondo3Objects11.length = 0;
gdjs.MenuCode.GDFondo4Objects1.length = 0;
gdjs.MenuCode.GDFondo4Objects2.length = 0;
gdjs.MenuCode.GDFondo4Objects3.length = 0;
gdjs.MenuCode.GDFondo4Objects4.length = 0;
gdjs.MenuCode.GDFondo4Objects5.length = 0;
gdjs.MenuCode.GDFondo4Objects6.length = 0;
gdjs.MenuCode.GDFondo4Objects7.length = 0;
gdjs.MenuCode.GDFondo4Objects8.length = 0;
gdjs.MenuCode.GDFondo4Objects9.length = 0;
gdjs.MenuCode.GDFondo4Objects10.length = 0;
gdjs.MenuCode.GDFondo4Objects11.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects3.length = 0;
gdjs.MenuCode.GDNewSpriteObjects4.length = 0;
gdjs.MenuCode.GDNewSpriteObjects5.length = 0;
gdjs.MenuCode.GDNewSpriteObjects6.length = 0;
gdjs.MenuCode.GDNewSpriteObjects7.length = 0;
gdjs.MenuCode.GDNewSpriteObjects8.length = 0;
gdjs.MenuCode.GDNewSpriteObjects9.length = 0;
gdjs.MenuCode.GDNewSpriteObjects10.length = 0;
gdjs.MenuCode.GDNewSpriteObjects11.length = 0;
gdjs.MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MenuCode.GDNewSprite2Objects3.length = 0;
gdjs.MenuCode.GDNewSprite2Objects4.length = 0;
gdjs.MenuCode.GDNewSprite2Objects5.length = 0;
gdjs.MenuCode.GDNewSprite2Objects6.length = 0;
gdjs.MenuCode.GDNewSprite2Objects7.length = 0;
gdjs.MenuCode.GDNewSprite2Objects8.length = 0;
gdjs.MenuCode.GDNewSprite2Objects9.length = 0;
gdjs.MenuCode.GDNewSprite2Objects10.length = 0;
gdjs.MenuCode.GDNewSprite2Objects11.length = 0;
gdjs.MenuCode.GDSTARTObjects1.length = 0;
gdjs.MenuCode.GDSTARTObjects2.length = 0;
gdjs.MenuCode.GDSTARTObjects3.length = 0;
gdjs.MenuCode.GDSTARTObjects4.length = 0;
gdjs.MenuCode.GDSTARTObjects5.length = 0;
gdjs.MenuCode.GDSTARTObjects6.length = 0;
gdjs.MenuCode.GDSTARTObjects7.length = 0;
gdjs.MenuCode.GDSTARTObjects8.length = 0;
gdjs.MenuCode.GDSTARTObjects9.length = 0;
gdjs.MenuCode.GDSTARTObjects10.length = 0;
gdjs.MenuCode.GDSTARTObjects11.length = 0;
gdjs.MenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MenuCode.GDNewSprite3Objects2.length = 0;
gdjs.MenuCode.GDNewSprite3Objects3.length = 0;
gdjs.MenuCode.GDNewSprite3Objects4.length = 0;
gdjs.MenuCode.GDNewSprite3Objects5.length = 0;
gdjs.MenuCode.GDNewSprite3Objects6.length = 0;
gdjs.MenuCode.GDNewSprite3Objects7.length = 0;
gdjs.MenuCode.GDNewSprite3Objects8.length = 0;
gdjs.MenuCode.GDNewSprite3Objects9.length = 0;
gdjs.MenuCode.GDNewSprite3Objects10.length = 0;
gdjs.MenuCode.GDNewSprite3Objects11.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
