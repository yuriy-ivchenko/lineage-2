let screen = document.getElementById("screen");
screen.addEventListener("click", function () {
    location.href = "./index.html";
});
document.getElementById('screen').innerHTML = `
<div id = "GodModal" class="personName-eclipse">
    <div class="personModalInfo">
<div class="titleModal">
<h2> </h2><h1><strong>G o d</strong></h1>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">          
	<div class="box visible" id="visible">
    <h2>Heavenly Father - Lord of all families.</h2><br>
<p><q>There they are in great terror, for God is with the generation of the righteous.</q> (Psalms 14:5)</p><br>
<p><strong>Jesus Christ is the Head of the Church.</strong></p><br>
<p><strong>God - Creator. God - Judge. God - Father. God - Savior.</strong></p>
<br><br>
    </div>
        </div>
    </div>
</div>
<!--//////////////  info /////////////////////////-->
<div id = "info" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">

<h2>Info</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <h1>How to work with template #2.</h1><br><br>
<p>To successfully process the template, you need to perform two actions:</p>
<p>1. Open the index.html page in the editor and replace the names and photos in the template with
their names and photos </p>
<p>(name: "Ivan"; path_photo: "./photo/Ivan.png" )</p>
<pre>
{
    id: "son", name: "Son", path_photo: "./photo/son.png", link: "#sonModal"
},</pre>

<p>2. Open the winMoodalData.js page in the editor and replace the content of all modal windows
on data about their relatives.</p><br>
------------------------------------------------------
Author: Ivchenko Yurii. +380663669013; ivchenko505@gmail.com 
<br>
<br>
            </div>
        </div>
    </div>
<!--//////////////////// Son ////////////////////-->
<div id = "son-daugtherModal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/son-1.png" width="48">
<h2>Son</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>About son</p>
        </div>
    </div>
</div>
<!--////////  Б А Т Ь К И  ///////////////////////-->
<div id="tatoModal" class="personName-eclipse">
        <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/tato.png" width="48">
<h2>Тато</h2>
<a class="close" href="#">&times;</a>
</div>
<div class="contentModal">
<p>All about dad</p><p></p><p></p><p></p>
            </div>
        </div>
    </div>
<!--//////////////////////////////////////-->
<div id = "mamaModal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/mama.png" width="48">
<h2>Mather</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>All about mom</p>
        </div>
    </div>
</div>
<!--//////////  Д І Д И    ////////////////////-->
<div id = "gFather1Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/didus11.png" width="48">
<h2>gFather1</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>All about gFather1</p>
        </div>
    </div>
</div>
<!--///////////////////////////////////////////-->
<div id = "gMather1Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/babusia11.png" width="48">
<h2>gMather1</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>All about gMather1</p>
        </div>
    </div>
</div>
<!--///////////////////////////////////////////-->
<div id = "gFather2Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/didus22.png" width="48">
<h2>gFather2</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>All about gFather2</p>
        </div>
    </div>
</div>
<!--///////////////////////////////////////////-->
<!--///////////////////////////////////////////-->
<div id = "gMather2Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/babusia22.png" width="48">
<h2>gMather2</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>All about gMathe2</p>
        </div>
    </div>
</div>
<!--////////////  П Р А Д І Д И/////////////////////////-->
<div id = "2gFather1Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/didus11.png" width="48">
<h2>2gFather1</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>All about 2gFather1</p>
        </div>
    </div>
</div>

</div>
<!--///////////////////////////////////////////-->
<div id = "2gMather1Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/babusia22.png" width="48">
<h2>2gMather1</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>All about 2gMather1</p>
        </div>
    </div>
</div>
</div>
<!--///////////////////////////////////////////-->

<div id = "2gFather2Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/didus11.png" width="48">
<h2>2gFather2</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>All about 2gFather2</p>
        </div>
    </div>
</div>
<!--///////////////////////////////////////////-->
<!--///////////////////////////////////////////-->
<div id = "2gMather2Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/babusia22.png" width="48">
<h2>2gMather2</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>All about 2gMather2</p>
        </div>
    </div>
</div>
</div>
<!--///////////////////////////////////////////-->
<div id = "2gFather3Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/didus11.png" width="48">
<h2>2gFather3</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>All about 2gFather3</p>
        </div>
    </div>
</div>
<!--///////////////////////////////////////////-->
<!--///////////////////////////////////////////-->
<div id = "2gMather3Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/mama.png" width="48">
<h2>2gMather3</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>All about 2gMather3</p>
        </div>
    </div>
</div>
</div>
<!--///////////////////////////////////////////-->

<!--///////////////////////////////////////////-->
<div id = "2gFather4Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/didus11.png" width="48">
<h2>2gFather4</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>All about 2gFather4</p>
        </div>
    </div>
</div>
<!--///////////////////////////////////////////-->
<!--///////////////////////////////////////////-->
<div id = "2gMather4Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/mama.png" width="48">
<h2>2gMather4</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>All about 2gMather4</p>
        </div>
    </div>
</div>
</div>
<!--///////////////////////////////////////////-->


<!--///////////////////////////////////////////-->




<!--///////////////////////////////////////////-->


`;