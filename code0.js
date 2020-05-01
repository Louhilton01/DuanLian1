gdjs.GameCode = {};
gdjs.GameCode.GDPlayerObjects2_1final = [];

gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDGrassObjects1= [];
gdjs.GameCode.GDGrassObjects2= [];
gdjs.GameCode.GDGrassObjects3= [];
gdjs.GameCode.GDJumpthruObjects1= [];
gdjs.GameCode.GDJumpthruObjects2= [];
gdjs.GameCode.GDJumpthruObjects3= [];
gdjs.GameCode.GDLadderObjects1= [];
gdjs.GameCode.GDLadderObjects2= [];
gdjs.GameCode.GDLadderObjects3= [];
gdjs.GameCode.GDBackgroundObjects1= [];
gdjs.GameCode.GDBackgroundObjects2= [];
gdjs.GameCode.GDBackgroundObjects3= [];
gdjs.GameCode.GDShrubObjects1= [];
gdjs.GameCode.GDShrubObjects2= [];
gdjs.GameCode.GDShrubObjects3= [];
gdjs.GameCode.GDCloudObjects1= [];
gdjs.GameCode.GDCloudObjects2= [];
gdjs.GameCode.GDCloudObjects3= [];
gdjs.GameCode.GDCoinObjects1= [];
gdjs.GameCode.GDCoinObjects2= [];
gdjs.GameCode.GDCoinObjects3= [];
gdjs.GameCode.GDScoreObjects1= [];
gdjs.GameCode.GDScoreObjects2= [];
gdjs.GameCode.GDScoreObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.condition4IsTrue_0 = {val:false};
gdjs.GameCode.condition5IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};
gdjs.GameCode.condition4IsTrue_1 = {val:false};
gdjs.GameCode.condition5IsTrue_1 = {val:false};
gdjs.GameCode.conditionTrue_2 = {val:false};
gdjs.GameCode.condition0IsTrue_2 = {val:false};
gdjs.GameCode.condition1IsTrue_2 = {val:false};
gdjs.GameCode.condition2IsTrue_2 = {val:false};
gdjs.GameCode.condition3IsTrue_2 = {val:false};
gdjs.GameCode.condition4IsTrue_2 = {val:false};
gdjs.GameCode.condition5IsTrue_2 = {val:false};


gdjs.GameCode.eventsList0x707744 = function(runtimeScene) {

{

gdjs.GameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

gdjs.GameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipX(true);
}
}}

}


{

gdjs.GameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.GameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimation(2);
}
}}

}


{

gdjs.GameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimation(3);
}
}}

}


{

gdjs.GameCode.GDPlayerObjects2.length = 0;


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.GDPlayerObjects2_1final.length = 0;gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
gdjs.GameCode.condition2IsTrue_1.val = false;
gdjs.GameCode.condition3IsTrue_1.val = false;
{
gdjs.GameCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));
{gdjs.GameCode.conditionTrue_2 = gdjs.GameCode.condition0IsTrue_1;
gdjs.GameCode.condition0IsTrue_2.val = false;
gdjs.GameCode.condition1IsTrue_2.val = false;
{
gdjs.GameCode.condition0IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.GameCode.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.GameCode.condition1IsTrue_2.val = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;}}
gdjs.GameCode.conditionTrue_2.val = true && gdjs.GameCode.condition0IsTrue_2.val && gdjs.GameCode.condition1IsTrue_2.val;
}
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDPlayerObjects2_1final.indexOf(gdjs.GameCode.GDPlayerObjects3[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects2_1final.push(gdjs.GameCode.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.GameCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));
{gdjs.GameCode.conditionTrue_2 = gdjs.GameCode.condition1IsTrue_1;
gdjs.GameCode.condition0IsTrue_2.val = false;
gdjs.GameCode.condition1IsTrue_2.val = false;
{
gdjs.GameCode.condition0IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.GameCode.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.GameCode.condition1IsTrue_2.val = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;}}
gdjs.GameCode.conditionTrue_2.val = true && gdjs.GameCode.condition0IsTrue_2.val && gdjs.GameCode.condition1IsTrue_2.val;
}
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDPlayerObjects2_1final.indexOf(gdjs.GameCode.GDPlayerObjects3[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects2_1final.push(gdjs.GameCode.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.GameCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));
{gdjs.GameCode.conditionTrue_2 = gdjs.GameCode.condition2IsTrue_1;
gdjs.GameCode.condition0IsTrue_2.val = false;
gdjs.GameCode.condition1IsTrue_2.val = false;
{
gdjs.GameCode.condition0IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.GameCode.condition1IsTrue_2.val = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;}}
gdjs.GameCode.conditionTrue_2.val = true && gdjs.GameCode.condition0IsTrue_2.val && gdjs.GameCode.condition1IsTrue_2.val;
}
if( gdjs.GameCode.condition2IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDPlayerObjects2_1final.indexOf(gdjs.GameCode.GDPlayerObjects3[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects2_1final.push(gdjs.GameCode.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.GameCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));
{gdjs.GameCode.conditionTrue_2 = gdjs.GameCode.condition3IsTrue_1;
gdjs.GameCode.condition0IsTrue_2.val = false;
gdjs.GameCode.condition1IsTrue_2.val = false;
{
gdjs.GameCode.condition0IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.GameCode.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.GameCode.condition1IsTrue_2.val = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;}}
gdjs.GameCode.conditionTrue_2.val = true && gdjs.GameCode.condition0IsTrue_2.val && gdjs.GameCode.condition1IsTrue_2.val;
}
if( gdjs.GameCode.condition3IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDPlayerObjects2_1final.indexOf(gdjs.GameCode.GDPlayerObjects3[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects2_1final.push(gdjs.GameCode.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.GameCode.GDPlayerObjects2.createFrom(gdjs.GameCode.GDPlayerObjects2_1final);
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].playAnimation();
}
}}

}


{

gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
gdjs.GameCode.condition4IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
gdjs.GameCode.condition3IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
}if ( gdjs.GameCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.GameCode.condition4IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}}
}
}
}
if (gdjs.GameCode.condition4IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].pauseAnimation();
}
}}

}


}; //End of gdjs.GameCode.eventsList0x707744
gdjs.GameCode.eventsList0x709154 = function(runtimeScene) {

{


{
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameCode.GDPlayerObjects1.length !== 0 ? gdjs.GameCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


}; //End of gdjs.GameCode.eventsList0x709154
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.GameCode.GDCoinObjects2});gdjs.GameCode.eventsList0x709344 = function(runtimeScene) {

{

gdjs.GameCode.GDCoinObjects2.createFrom(runtimeScene.getObjects("Coin"));
gdjs.GameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCoinObjects2Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCoinObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCoinObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{


{
gdjs.GameCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.GameCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


}; //End of gdjs.GameCode.eventsList0x709344
gdjs.GameCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0x707744(runtimeScene);
}


{


gdjs.GameCode.eventsList0x709154(runtimeScene);
}


{


gdjs.GameCode.eventsList0x709344(runtimeScene);
}


}; //End of gdjs.GameCode.eventsList0x5b6e18


gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDGrassObjects1.length = 0;
gdjs.GameCode.GDGrassObjects2.length = 0;
gdjs.GameCode.GDGrassObjects3.length = 0;
gdjs.GameCode.GDJumpthruObjects1.length = 0;
gdjs.GameCode.GDJumpthruObjects2.length = 0;
gdjs.GameCode.GDJumpthruObjects3.length = 0;
gdjs.GameCode.GDLadderObjects1.length = 0;
gdjs.GameCode.GDLadderObjects2.length = 0;
gdjs.GameCode.GDLadderObjects3.length = 0;
gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDShrubObjects1.length = 0;
gdjs.GameCode.GDShrubObjects2.length = 0;
gdjs.GameCode.GDShrubObjects3.length = 0;
gdjs.GameCode.GDCloudObjects1.length = 0;
gdjs.GameCode.GDCloudObjects2.length = 0;
gdjs.GameCode.GDCloudObjects3.length = 0;
gdjs.GameCode.GDCoinObjects1.length = 0;
gdjs.GameCode.GDCoinObjects2.length = 0;
gdjs.GameCode.GDCoinObjects3.length = 0;
gdjs.GameCode.GDScoreObjects1.length = 0;
gdjs.GameCode.GDScoreObjects2.length = 0;
gdjs.GameCode.GDScoreObjects3.length = 0;

gdjs.GameCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
