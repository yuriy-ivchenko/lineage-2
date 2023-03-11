let screen_ua = document.getElementById("screen_ua");
screen_ua.addEventListener("click", function () {
    location.href = "./page-ua.html";
});

document.getElementById('screen_ua').innerHTML = `
<div id = "GodModal" class="personName-eclipse">
    <div class="personModalInfo">
<div class="titleModal">
<h2> </h2><h1><strong>Б О Г</strong></h1>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">          
	<div class="box visible" id="visible">
    <h2>Отець Небесний - Владика всіх родів</h2><br>
<p><q>Тоді настрашилися страхом вони, бо Бог в 
<strong>праведнім роді</strong></q>
(Псалми 13:5)</p>
<p><strong>Ісус Христо є Голова Церкви.</strong></p><br>
<p><strong>Бог-Творець. Бог-Суддя. Бог-Отець. Бог-Спаситель.</strong></p>
<br><br>
    </div>
        </div>
    </div>
</div>
<!--//////////////  info /////////////////////////-->
<div id = "infoUa" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">

<h2>Info</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <h1>Як працювати з шаблоном №2</h1><br><br>
<p>Для успішного опрацювання шаблону треба виконати дві дії:</p>
<p>1. Відкрити у редакторі сторінку index.html і замінти у 
шаблоні імена та фото на свої імена та фото
<p>(name: "Іван"; path_photo: "./photo/Ivan.png"); </p>
<pre>
{
    id: "son", name: "Cин", path_photo: "./photo/son.png", link: "#sonModal"
},</pre>

<p>2. Відкрити у редакторі сторінку winMoodalData-ua.js і замінити зміст усіх модальних вікон</p><br>
------------------------------------------------------
Автор: Івченко Юрій. +380663669013; ivchenko505@gmail.com 
<br>
            </div>
        </div>
    </div>
<!--//////////////////// Son ////////////////////-->
<div id = "son-daugtherModal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/son-1.png" width="48">
<h2>Син</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>Про Сина</p>
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
<p>Все про Тата</p><p></p><p></p><p></p>
            </div>
        </div>
    </div>
<!--//////////////////////////////////////-->
<div id = "mamaModal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/mama.png" width="48">
<h2>Мама</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>Все про Маму</p>
        </div>
    </div>
</div>
<!--//////////  Д І Д И    ////////////////////-->
<div id = "gFather1Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/didus11.png" width="48">
<h2>Двдусь-1</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>Все про Дідуся-1</p>
        </div>
    </div>
</div>
<!--///////////////////////////////////////////-->
<div id = "gMather1Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/babusia11.png" width="48">
<h2>Бабуся-1</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>Все про Бабусю-1</p>
        </div>
    </div>
</div>
<!--///////////////////////////////////////////-->
<div id = "gFather2Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/didus22.png" width="48">
<h2>Дідусь-2</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>Все про Дідуся-2</p>
        </div>
    </div>
</div>
<!--///////////////////////////////////////////-->
<!--///////////////////////////////////////////-->
<div id = "gMather2Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/babusia22.png" width="48">
<h2>Бабуся-2</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>Все про Бабусю-2</p>
        </div>
    </div>
</div>
<!--////////////  П Р А Д І Д И/////////////////////////-->
<div id = "2gFather1Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/didus11.png" width="48">
<h2>Прадідусь-1</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>Все про Прадідуся-1</p>
        </div>
    </div>
</div>

</div>
<!--///////////////////////////////////////////-->
<div id = "2gMather1Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/babusia22.png" width="48">
<h2>Прабабуся-1</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>Все про Прабабусю-1</p>
        </div>
    </div>
</div>
</div>
<!--///////////////////////////////////////////-->

<div id = "2gFather2Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/didus11.png" width="48">
<h2>Прадідусь-2</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>Все про Прадідуся-2</p>
        </div>
    </div>
</div>
<!--///////////////////////////////////////////-->
<!--///////////////////////////////////////////-->
<div id = "2gMather2Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/babusia22.png" width="48">
<h2>Прабабуся-2</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>Все про Прабабусю-2</p>
        </div>
    </div>
</div>
</div>
<!--///////////////////////////////////////////-->
<div id = "2gFather3Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/didus11.png" width="48">
<h2>Прадідусь-3</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>Все про Прадідуся-3</p>
        </div>
    </div>
</div>
<!--///////////////////////////////////////////-->
<!--///////////////////////////////////////////-->
<div id = "2gMather3Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/mama.png" width="48">
<h2>Прабабуся-3</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>Все про Прабабусю-3</p>
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
<h2>Прадідусь-4</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>Все про Прадідуся-4</p>
        </div>
    </div>
</div>
<!--///////////////////////////////////////////-->
<!--///////////////////////////////////////////-->
<div id = "2gMather4Modal" class="personName-eclipse" >
    <div class="personModalInfo">
<div class="titleModal">
<img src="./photo/mama.png" width="48">
<h2>Прабабуся-4</h2>
<a class="close" href="#">&times;</a>
</div>
        <div class="contentModal">
            <p>Все про Прабабусю-4</p>
        </div>
    </div>
</div>
</div>
<!--///////////////////////////////////////////-->
`;