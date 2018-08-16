//BAZA PYTAN

var pytanie = new Array;
var odpowiedzi = new Array;
var numer;
var punkty=0;
var wyniki = new Array;
var porazka=0;
var koniec="";
pytanie[0]="Jakiej narodowości jest zawodnik MMA Conor McGregor";
pytanie[1]="Jak nazywał się największy czarny charakter z serialu \"Plebania\"?";
pytanie[2]="Słynna katastrowa samolotu prezydenckiego w smoleńsku miała miejsce 10 kwietni 2010. Który to był dzień tygodnia?";
pytanie[3]="W którym najbliższym roku będziemy mieli 29-cio dniowy luty?";
pytanie[4]="Skala Richtera kończy się na:"; 
pytanie[5]="\"A\" jest: "; 
pytanie[6]="PYTANIE 6";
pytanie[7]="PYTANIE 7";
pytanie[8]="PYTANIE 8";
pytanie[9]="PYTANIE 9";
pytanie[10]="PYTANIE 10";
pytanie[11]="PYTANIE 11";

odpowiedzi[0]="Jest Irlandczykiem";
odpowiedzi[1]="Jest Szkotem";
odpowiedzi[2]="Jest Amerykaninem";
odpowiedzi[3]="Jest Australiczykiem";
odpowiedzi[4]="Ksiądz Adam";
odpowiedzi[5]="Janusz Tracz";
odpowiedzi[6]="Jurek Tosiek";
odpowiedzi[7]="\"Rumcajs\"";
odpowiedzi[8]="Piatek";
odpowiedzi[9]="Sobota";
odpowiedzi[10]="Niedziela";
odpowiedzi[11]="Poniedziałek";
odpowiedzi[12]="2022";
odpowiedzi[13]="2021";
odpowiedzi[14]="2023";
odpowiedzi[15]="2020";
odpowiedzi[16]="nie ma końca";
odpowiedzi[17]="12";
odpowiedzi[18]="18";
odpowiedzi[19]="10";
odpowiedzi[20]="spółgłoską dźwięczną";
odpowiedzi[21]="samogłoską nosową";
odpowiedzi[22]="społgloska bezdźwięczną";
odpowiedzi[23]="samogłoską ustną";
odpowiedzi[24]="odpowiedzi[24]";
odpowiedzi[25]="odpowiedzi[25]";
odpowiedzi[26]="odpowiedzi[26]";
odpowiedzi[27]="odpowiedzi[27]";
odpowiedzi[28]="odpowiedzi[28]";
odpowiedzi[29]="odpowiedzi[29]";
odpowiedzi[30]="odpowiedzi[30]";
odpowiedzi[31]="odpowiedzi[31]";
odpowiedzi[32]="odpowiedzi[32]";
odpowiedzi[33]="odpowiedzi[33]";
odpowiedzi[34]="odpowiedzi[34]";
odpowiedzi[35]="odpowiedzi[35]";
odpowiedzi[36]="odpowiedzi[36]";
odpowiedzi[37]="odpowiedzi[37]";
odpowiedzi[38]="odpowiedzi[38]";
odpowiedzi[39]="odpowiedzi[39]";
odpowiedzi[40]="odpowiedzi[40]";
odpowiedzi[41]="odpowiedzi[41]";
odpowiedzi[42]="odpowiedzi[42]";
odpowiedzi[43]="odpowiedzi[43]";
odpowiedzi[44]="odpowiedzi[44]";
odpowiedzi[45]="odpowiedzi[45]";
odpowiedzi[46]="odpowiedzi[46]";
odpowiedzi[47]="odpowiedzi[47]";
odpowiedzi[48]="odpowiedzi[48]";




function Pytanie() {
    
        numer=Math.floor(Math.random()*5);

    document.getElementById("question").innerHTML=pytanie[numer];
    for(i=0; i<4; i++){
    document.getElementById(i+1).innerHTML=odpowiedzi[(4*numer)+i];
    }
}










function sprawdzOdpowiedz(nr) {
    
    if((numer==0 || numer==4 || numer==8 )&& nr==1)   {
        punkty++;
        Pytanie();
        document.getElementById("gamestate").innerHTML="STAN GRY <br></br>" +punkty;
                                                      
                                                      }
    else if((numer==1 || numer==5 || numer==9) && nr==2)   {
        punkty++;
        Pytanie(); 
        document.getElementById("gamestate").innerHTML="STAN GRY <br></br>" +punkty;
                                                           }
    else if((numer==2 || numer==6 || numer==10) && nr==3)   {
        punkty++;
        Pytanie();
        document.getElementById("gamestate").innerHTML="STAN GRY <br></br>" +punkty;
                                                            
                                                            }
    else if((numer==3 || numer==7 || numer==11) && nr==4)   {
        punkty++;
        Pytanie();  
        document.getElementById("gamestate").innerHTML="STAN GRY <br></br>" +punkty;
                                                            }
    else {alert("PRZEGRAŁEŚ");
          var tura=1;
          wyniki[porazka]=punkty;
          porazka++;
          
          for(i=0; i<tura; i++)
          {
              koniec+="Wynik gry nr: " + porazka+"---->"+wyniki[porazka-1]+"<br></br>"
              
          }
         punkty=0;
         
         
        
           document.getElementById("gamestate").innerHTML="STAN GRY <br></br>" +punkty;

    document.getElementById("last").innerHTML=koniec;
    
    
    
    
  
   
    
}}





 




























