var imFile=[
    "mother/1福寿草.jpg", 
    "mother/2カタクリ群生.jpg",
    "mother/3カタクリの花.jpg",
    "mother/4sumire.jpg",
    "mother/5himeryuukinka.jpg",
    "mother/6椿.jpg",
    "mother/7春の寄せ植え.jpg", 
    "mother/8河津桜.jpg", 
    "mother/9桜草.jpg", 
    "mother/10木蓮と山雀.jpg", 
    "mother/10木蓮と山雀.jpg",  
    "mother/11パフィオペディルムs.jpg", 
    "mother/12紫蘭.jpg", 
    "mother/13春蘭s.jpg", 
    "mother/14野の蘭熊谷草.jpg",
    "mother/15春の庭先.jpg", 
    "mother/16花水木.jpg", 
    "mother/17アマリリス咲く庭.jpg",
    "mother/18山法師を盛る.jpg",
    "mother/19林の中の水芭蕉群.jpg",
    "mother/20牡丹咲いた.jpg",
    "mother/20牡丹咲いた.jpg",
    "mother/21牡丹を活ける.jpg",
    "mother/22くちなしの花s.jpg", 
    "mother/23カラーs.jpg",
    "mother/24花ある窓辺s.jpg", 
    "mother/25赤い薔薇s.jpg",
    "mother/26夏椿s.jpg", 
    "mother/27額紫陽花s.jpg",
    "mother/28透かし百合を飾るs.jpg", 
    "mother/30薊と透かし百合の庭s.jpg",
    "mother/31百合爛漫s.jpg", 
    "mother/32鬼百合s.jpg",
    "mother/33野辺の百合s.jpg", 
    "mother/34向日葵s.jpg", 
    "mother/35クレマチスs.jpg",
    "mother/36蓮s.jpg", 
    "mother /37_hamayuutotsukimisou.jpg",
    "mother /38_asutoromeria.jpg",
    "mother /39_huyoutomagarettonoHarmony.jpg",
    "mother /40_keshinohana.jpg",
    "mother /41_hoteiatsumorisou.jpg",
    "mother /42_dokudami.jpg",
    "mother /43_akinonogeshi.jpg",
    "mother/44_yoimachigusatodokudamito.jpg",
    "mother /45_tsuyukusatoakamanma.jpg",
    "mother/46_hotarubukuro.jpg",
    "mother/47_kazetoasobukosumosu.jpg",
    "mother/48_kosumosu.jpg",
    "mother/49_azamitohimejionnokatarai.jpg",
    "mother/50_higanbana.jpg",
    "mother/51_azami.jpg",
    "mother/52_akinonobana.jpg",
    "mother/53_koharubiyorinoniwa.jpg",
    "mother/54_tawawanaminori2.jpg",
    "mother/55_kukonohana.jpg",
    "mother/56_sikuramen.jpg",
    "mother/57_kurisumasurouzusaita.jpg",
    "mother/58_akaikurisumasurouzu.jpg",
    "mother/59_kurisumasurouzu.jpg",
    "mother/60_katorea.jpg",
    "mother/61_dendorobyuumu.jpg",
    "mother/62_huyubotan.jpg",
    "mother/63_yuri.jpg", 

    "mother/ヨセミテ2.jpg",
    "mother/孫と1.jpg", 
    "mother/孫と2.jpg",
    "mother/孫と(3).jpg"
];

var slideInt=5000;
var imNo=0;
var imLoad=false;
var slideTimeId;
var imMax=imFile.length;
document.write("<div  align='center'>");
document.write("<img width='70%' height='90%' src="+imFile[0]+" name='pic'><br><br>");
document.write("<form name='picForm'>");
document.write("<input type='button' value='再生' onclick='slideLoad()' name='picBt'></form>");
document.write("</div>");

function slideLoad()
{
    if(imLoad==false)
    {
       imLoad=true;
       document.picForm.picBt.value="停止";
       slideTimeId=setInterval("slideRun()",slideInt);
    }else{
       imLoad=false;
       document.picForm.picBt.value="再生";
       clearInterval(slideTimeId);
    }
}
function slideRun()
{
    imNo++;
    if(imNo>=imMax){imNo=0;}
    document.pic.src=imFile[imNo];
}// JavaScript Document