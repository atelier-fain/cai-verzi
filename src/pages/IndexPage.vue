<template>
  <q-page class="homepage">
    <div class="hero">
      <div class="container">
        <q-img
          class="hero-img"
          src="../assets/hero-img.svg"
          alt="img horse"
        />
      </div>
    </div>
    <div class="s1">
      <div class="container">
        <div>
          <h1>Cai verzi, cum adică?</h1>
          <p class="text-h3 subtitle">Invenții, plăsmuiri, povești? Da. Ce altceva decât produse ale imaginației admiri pe simezele sau pe scenele instituțiilor culturale?</p>
        </div>
        <div class="middle">
          <p>Te invităm să le descoperi împreună cu elevii tăi de gimnaziu sau liceu (nu la trap, ci la pas ghidat de specialiști), în cadrul Săptămânii Altfel sau al unei ore altfel. Și să devii (dacă nu cumva ești deja) profesorul lor preferat, indiferent de materia pe care o predai. Eliberează-i dintre cei patru pereți ai clasei și fă din mersul la expoziții sau la teatru o experiență exciting!</p>
          <p>Pornim la drum cu ambiția de a aduce 2500 de elevi, în următoarele 2 luni, în instituțiile culturale din Sectorul 1, Capitala Culturală a Capitalei.</p>
        </div>
        <span class="text-h3">Descoperă mai jos traseul și toolurile noastre de plimbare!</span>
      </div>

    </div>
    <div class="s2">
      <div class="container">
        <div class="top">
          <div class="text">
            <h2><span>Unde găsești</span><br><span>Cai Verzi</span></h2>
            <span class="text-h3 subtitle text-primary">Mai multe despre habitaturile lor culturale, în lista cu partenerii noștri!</span>
          </div>
          <div class="map">
            Harta Google Maps
          </div>
        </div>
        <div class="list-cards">
          <Partner
            v-for="({text}, index) in listPartners"
            :key="`${index}-partner`"
            :img="`Cal_0${index + 1}.png`"
            :text="text"
          />
        </div>
      </div>
    </div>
    <div class="s3">
      <div class="container">
        <q-img
          src="../assets/horse-1.svg"
          alt="horse"
        />
        <div>
          <span class="text-h3 text-secondary text-center">Fii la curent cu noi locuri în care poți observa Cai Verzi.</span>
          <span class="text-h3 text-secondary text-center">Abonează-te la newsletter!</span>
          <q-input
            dense
            flat
            borderless
            type="email"
            placeholder="Email"
            v-model="input"
          />
          <q-btn
            dense
            outline
            no-caps
            :disabled="!input"
            @click="handleSubmit">
            Abonează-te
          </q-btn>
        </div>
        <q-img
          src="../assets/horse-2.svg"
          alt="horse"
        />
      </div>
    </div>
    <div class="s4">
      <div class="container">
        <h2 class="text-secondary text-center">Bonus pentru profesori</h2>
        <span class="text-h3 text-secondary text-center">55 de invitații </span>
        <p class="text-secondary text-center">la evenimentele culturale ale Fundației The Institute din 2026
          pleacă la finalul cursei noastre spre școlile participante!</p>
      </div>
    </div>
    <div class="s5">
      <div class="container">
        <div class="top">
          <div class="text">
            <h2 class="text-primary">Cai Verzi în mișcare</h2>
            <span class="text-h3 subtitle text-primary">Vezi cum arată o plimbare pe Cai Verzi pe traseele noastre! </span>
            <q-btn no-caps flat @click="handleButton('galeria-video')">Galeria video</q-btn>
          </div>
          <div class="map">
            Video
          </div>
        </div>
        <div class="bottom">
          <div>
            <h2 class="text-primary text-center">Resurse & activități</h2>
            <span class="text-h3 text-center text-primary">Aici găsești idei pentru cum poți transforma “mersul la muzeu” într-o experiențǎ căutată de elevii tăi.</span>
          </div>
          <div class="exp-section">
            <span class="text-h1 text-center text-primary">În vizită</span>
            <div class="list-exp">
              <Expansion
                v-for="({label, content}, index) in s5_list"
                :key="`${index}-s5-item`"
                :label="label"
                theme="primary"
                :content="content"
              />
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="s6">
      <div class="container">
        <div class="top">
          <h2 class="text-secondary text-center">Vânătoare de Cai Verzi</h2>
          <span class="text-h3 text-secondary text-center">Transformă vizita voastră la muzeu într-un treasure hunt. Mai jos găsești o serie de provocări pe care le poți lansa elevilor tăi, adaptate pentru tipul vostru de vizită.</span>
        </div>
        <div class="p-section">
          <p class="text-center text-secondary">01. Fă o captură de ecran ca să le ai la îndemână. 02. Dă-le provocarea verbal sau sharuieste-o pe grupul de Whatsapp al clasei. 03. Pentru ca jocul să fie și mai palpitant, împarte-i pe grupuri și organizează un concurs.</p>
          <p class="text-center text-secondary">P.S. Pe cei mai mari îi poți încuraja să își facă și un montaj sau chiar un Insta Story cu experiența lor. Post-vizită le puteți viziona și discuta la clasă!</p>
        </div>
        <div class="list-exp">
          <Expansion
            v-for="({label, content}, index) in s6_list"
            :key="`${index}-s6-item`"
            :label="label"
            theme="white"
            :content="content"
          />
        </div>
      </div>
    </div>
    <div class="s7">
      <div class="container">
        <div class="top">
          <h2 class="text-center text-primary">La clasă</h2>
          <div class="list-exp">
            <Expansion
              v-for="({label, content}, index) in s7_list"
              :key="`${index}-s6-item`"
              :label="label"
              theme="primary"
              :content="content"
            />
          </div>
        </div>
        <div class="bottom">
          <h2 class="text-center text-primary">Ești părinte?</h2>
          <span class="text-h3 text-center text-primary">Ia frâiele în mâini și sugerează profesorilor copilului tău să umble după Cai Verzi în Săptămâna Altfel </span>
          <p class="text-center text-primary"> Sau faceți expedițiile și activitățile noastre în familie, oricând aveți
            un weekend în care nu e de stat pe-afară.</p>
        </div>
      </div>
    </div>
    <div class="s8">
      <div class="container">
        <h2 class="text-secondary text-center">Ești elev?</h2>
        <span class="text-h3 text-secondary text-center">Asta e șansa ta de a zburda în afara clasei.</span>
        <p class="text-secondary text-center">Propune-le profesorilor tăi să ia parte la proiect și sǎ dea împreună
          cu voi o tură prin spațiile culturale ale Sectorului 1. Gonna be fun!</p>
      </div>
    </div>
    <div class="s9">
      <div class="container">
        <h2 class="text-primary">Let’s riiide!</h2>
        <q-img src="../assets/horses-bottom.svg"
               alt="horses" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import Partner from 'components/Partner.vue';
import {ref} from "vue";
import Expansion from 'components/Expansion.vue';

const input = ref('')
const listPartners = ref([
  {
    text: `Șoseaua Pavel D. Kiseleff 1 <br><br>
           “Unde mergem?” “La Antipaaaa!!!” Destinația “to go” a copiilor de toate vârstele din București și nu numai: peste 2 milioane de exponate culese din toate zonele globului, din Romania și până la ecuator, regiuni polare și chiar de la 6000 de metri sub mari. Căutați aici nu doar unicornul din colecție, ci și spațiul interactiv și activitățile vânate de toți pasionații de științele naturii!<br><br> antipa.ro`
  },
  {
    text: `Calea Victoriei 49-53 <br><br> Rembrandt și Grigorescu, Monet și Luchian, Rodin și Brâncuși și alți artiști pe cai mari se întrec pentru atenția voastră în galeriile de artă europeană și românească, la concurență cu colecția de artă orientală, excelente expoziții temporare şi spațiile cu încărcătură istorică ale fostului Palat Regal. Noi zicem să-i dați bice, cum s-ar zice. Tip: Din circuitul MNAR fac parte și Muzeul Colecțiilor de Artă, Muzeul Theodor Pallady și Muzeul Zambaccian.<br><br> mnar.ro`
  },
  {
    text: `Șoseaua Pavel D. Kiseleff 3<br><br> O colecție unicat de artă etnografică, pe măsura splendidului monument de arhitectură neoromaneascǎ care o găzduiește. Parcursul vostru trece prin săli tematice, de la ceramică și port, la obiecte religioase și expoziții temporare. Atelierele, serile de lectură, concertele și proiecțiile de film merită și ele reținute. Și nu săriți peste o tură prin museum shop!<br><br> muzeultaranuluiroman.ro`
  },
  {
    text: `Bulevardul Primăverii 15<br><br> “Monolitul negru din Primăverii”: primul muzeu de artă privat din Romania pare la prima vedere un imens obstacol. În interior vă așteaptă însă o ascensiune fascinantă de 5 etaje, printre lucrări realizate de peste 250 de nume mari ale artei moderne și contemporane, de la Bernea și Perjovschi, la Long și Pistoletto. Și daca ne permiți să iți șoptim la ureche: aici găsiți cele mai căutate expoziții temporare din București.<br><br> mare.ro`
  },
  {
    text: `Strada Londra 39<br><br> Unul dintre acele locuri în care nu știi la ce să te uiți mai întâi: la clădirea de patrimoniu cu arce gotice și logii venețiene? La plafoanele decorate cu scene mitologice și vitraliile inspirate din heraldică și cartografie? Sau la cele peste 1000 de harți din secolele XVI – XX? Faceți-i înconjurul!<br><br> muzeulhartilor.ro`
  },
  {
    text: `Bulevardul Nicolae Bălcescu 2<br><br> Ați ajuns la km 0 al Capitalei? Cel mai vizitat teatru din România te întâmpină aici cu 7 spații de joc, 40 de spectacole racordate la prezent, cu regizori de marcă, actori și scenografi din toate generațiile (mai ales din cea mai apropiată de elevii tai!) 170.000 de mii de spectatori fideli iau cu asalt casele de bilete ale Naționalului în fiecare an. Vă alăturați lor?<br><br> tnb.ro`
  },
  {
    text: `Bulevardul Ion C. Brătianu 2<br><br> Fotografie și numismatică, artă, știință și tehnică, textile și tipărituri, obiecte religioase și obiecte de uz casnic: nimic cu adevărat reprezentativ pentru București nu lipsește din colecțiile găzduite de Palatul Suțu și de cele 12 case memoriale și muzee din rețeaua MMR. Un galop prin istoria și viața de acum și de altădată a Capitalei!<br><br> muzeulbucurestiului.ro`
  },
  {
    text: `Strada Piața Amzei 13<br><br> Galeria independenta unde vă puteți împrieteni cu o subspecie a cailor verzi: arta contemporană est-europeană. Aici vă paște ocazia de a vă întâlni cu lucrǎri de Roman Tolici, Tara von Neudorf, Lea Razovsky sau Saddo. N-o ratați!<br><br> mare.ro`
  },
  {
    text: `Piața Presei Libere 1<br><br> N-ați fi zis că galopul vostru prin palate și case de patrimoniu va ajunge la finish în stilulul realist socialist al anilor ’50, nu? Fosta Casă a Scânteii, devenită Casa Presei Libere, se reinventeazǎ astǎzi din nou, într-un spațiu dedicat artei contemporane și evenimentelor culturale. Vă aventurați în labirint?<br><br> scânteia.org/plus/`
  },
  {
    text: `Strada Piața Amzei 14<br><br> Atenție, trecerea voastră prin Amzei s-ar putea să se transforme într-un luuung popas. Sau poate chiar într-o aventură, odată ce descoperiți acest spatiu populat cu expoziții de arta vizuală și design, proiecte de implicare socială, workshopuri și intervenții menite să îi dea Pieței locul pe care îl merita în peisajul cultural al Bucurestiului. Amzei Creative Corner este parte din Cartierului Creativ, tot o inițiativă THE INSTITUTE. Ne vedem în Amzei!<br><br> cartierulcreativ.ro/amzei`
  },
  {
    text: `Calea Victoriei 12<br><br> Prrr! Trageți frâiele și trageți-vă sufletul, pentru că ce urmează este o călătorie în timp. De la tezaurul istoric al României și colecția de piese litice până la zona 3D. Salutați pe parcurs și căluții de pe copia Columnei lui Traian!<br><br> mnir.ro`
  },
  {
    text: `Strada C.A. Rosetti 2-4<br><br> Ho, căluț, aici trebuie să ne oprim neapărat! Ați ajuns la una dintre cele mai cunoscute galerii multidisciplinare de artă și design din țară. Un hub privat cu zeci de parteneri naționali și internaționali, implicați în proiecte ca NEO ART CONNECT (NAC), prima anuală de artă și știință din România, CSWeek sau Săptămâna Sustenabilitǎții Creative şi dedicat promovării tinerilor artiști. Spațiul Galateca este unul de referință pentru Bucureşti, semnat de arhitectul Radu Teacă. Îl gǎsiți în buricul oraşului, în clădirea istorică a Bibliotecii Universitare “Carol I”.<br><br> https://www.galateca.ro`
  },
])
const s5_list = ref([
  {
    label: 'Harta fizică',
    content: `Ce-i în mână, nu-i virtual! Descarcă harta noastră cu spațiile în care puteți lua urma Cailor Verzi. Ce puteți face cu ea: <br><br>
     1. Folosiți-o că instrument de orientare sau de planificare a noi excursii culturale. <br><br>
     2. Marcați pe ea locurile pe care le-ați vizitat (cu ștampila de la muzeu, dar merge și cu un sticker, un pin sau cu un cal desenat de o mână talentată). <br><br>
     3. Alternativ, puteți afișă harta în format mare la scoală. Faceți-vă selfie-uri cu ce v-a plăcut mai mult din vizita voastră, printați-le și înfigeți-le cu un pin în hartă.<br><br>
     4. Puteți organiza și o competiție între elevi sau clase: Cine a văzut mai mulți Cai Verzi?`
  },
  {
    label: 'Colecționează Cai Verzi!',
    content: `Cel mai bun suvenir: un pașaport plin de ștampile! <br><br>
    1. Downloadați-vǎ pasapoartele culturale și printați-le pentru toatǎ clasa! <br><br>
    2. Sau spune-le elevilor tai să vină îmbrăcați cu un tricou deschis la culoare (poate fi și o șapcă). <br><br>
    3. La muzeu, teatru, galerie sau casă memoraiala, veți gǎsi o ștampilă cu Calul Verde al fiecărei destinații. <br><br>
    4. Aplicați-o pe pașapoartele voastre sau personalizați-vă cu ea ținuta de explorator cultural! <br><br>
    5. Dacǎ optați pentru tricou sau șapcǎ puteți face și un concurs cu cel mai reușit design! + pașaport printabil (booklet A6)`
  },
  {
    label: 'Cai Spotting',
    content: `Caii noștri se caută nu doar în colecții, ci și pe traseul vostru până la destinație! <br><br>
    1. Provoacă-ți elevii să-i observe și să-și facă selfie-uri cu caii de pe drum și din expoziții (pot fi statui din oraș, afișe, stenciluri, cai reprezentați în lucrări, orice cal e bun, chiar și unul viu, daca aveți norocul să îl întâlniți!)<br><br>
    2. Printați-le pe cele mai reprezentative (și mai haioase). <br><br>
    3. Organizați o expoziție Cai Verzi în școală!`
  }
])
const s6_list = ref([
  {
    label: 'La expoziții de artă',
    content: `1. Stai cu fața la intrare. Fă o poză cu detaliul de arhitectură care te impresionează cel mai tare. <br><br>
    2. Găsește pe parcursul vizitei 3 lucrări din perioade diferite. Care e cea mai mare diferență în modul în care sunt reprezentate figurile umane în ele? <br><br>
    3. Găsește un tablou în culori calde. Apoi unul în culori reci. Ce vibe iți dau fiecare? <br><br>
    4. Găseşte cel mai luminos loc din sală. Ce e expus acolo? <br><br>
    5. Fă-ți un selfie (fără blitz!) în aceeaşi poziție ca statuia din salǎ.<br><br>
    6. Identifică 3 materiale folosite de artist în aceastǎ lucrare. De ce crezi că a optat pentru ele? <br><br>
    7. Ce obiect din expoziție ți-ar plăcea să ai în camera ta? <br><br>
    8. Fă o poză cu un personaj care se uită în ochii tăi. Capturează legătură dintre voi! (Ai reținut: fară blitz!) <br><br>
    9. Ce s-a întâmplat cu 5 minute de scena aceasta? Dar după? 10. Găsește o lucrare care iți amintește de o experiență personală!`
  },
  {
    label: 'La teatru',
    content: `1. Stai cu fața la intrare. Numește piața, clădirea sau monumentul aflate în spatele tău.<br><br>
    2. Găsește trei detalii de arhitectură care fac clădirea teatrului să para “teatrală”. Ce crezi, e construită intenționat în așa fel încât să iasă în evidență?<br><br>
    3.Oprește-te un moment în foaier. Cum se aud sunetele aici?<br><br>
    4. Vezi toată scena de pe locul tău? Ce crezi că s-ar schimba dacă ai sta la balcon? Dar în lojele laterale?<br><br>
    5. Alege-ți un personaj. Ce iți spune felul în care e costumat despre el? Ține minte 3 detalii.<br><br>
    6. Ce iți spune decorul despre când și unde are loc acțiunea? Ce obiecte sau culori iți sugerează asta?<br><br>
    7. Imaginează-ți că tu ești actorul. Ce ți se pare cel mai dificil (să ții minte replici, să te mișți pe scenă/să cânți/să dansezi, să exprimi emoții, să vorbești suficient de tare ca să se audă până în ultimul rând?)<br><br>
    8. Ce a fost diferit la teatru față de cinema sau de ceva vizionat acasă?<br><br>
    9. Ce scenă te-a impresionat cel mai mult (te-a emoționat, te-a întristat, te-a făcut să râzi). Ce din ce au făcut actorii ți-a trezit ceastă reacție?<br><br>
    10. Cum ai povesti spectacolul într-o propoziție cuiva care nu l-a văzut?`
  },
  {
    label: 'La alte muzee',
    content: `1. Ești la intrare. Vezi vreun detaliu care iți sugerează ce adăpostește clădirea? <br><br>
    2. Alege un exponat. Ce crezi că a exclamat descoperitorul sau inventatorul lui? Imaginează-ți momentul. <br><br>
    3. Găsește un exponat care există încă și astăzi și fotografiază-l. <br><br>
    4. Găsește un exponat care nu mai există. Ce l-a înlocuit? <br><br>
    4. Ce obiect din această încăpere era considerat tehnologie de ultima oră la vremea respectivă? <br><br>
    5. Fă o poza cu cel mai uimitor exponat din colecție. Ce te-a surprins la el? <br><br>
    6. Găsește un obiect legat de interesele tale. Ce îl face important pentru tine? <br><br>
    7. Găsește două obiecte din expoziție intre care exista o legătură (u material comun, locul de proveniență, perioada, scopul lui). Explică legătura.<br><br>
    8. Descoperă cel mai mare și cel mai mic exponat din încăpere. De ce contează dimensiunea? <br><br>
    9. Reconstituie traseul tău de la intrare până aici: care sunt exponatele pe care le-ai reținut?`
  }

])
const s7_list = ref([
  {
    label: 'Design your horse',
    content: `Organizați un concurs de postere Cai Verzi la școală. <br> <br>
              Elevii își pot imagina și crea propriul cal inspirat de
              vizita voastră (orice tehnica arts&craft este permisă:
              desen (fie și tehnic!), pictură, colaj, cusut, fotografie,
              tehnici mixte).<br> <br>
              Îi pot da și un nume și crea o poveste daca vreți să
              faceți și un exercițiu de creative writing.
              Afișați cei mai reușiți Cai Verzi pe pereții clasei (sau
              pe hol, că să îi vadă toată școala!)`
  },
  {
    label: 'Muzicǎ de îmblânzit Cai Verzi',
    content: `Şi alți nărăvaşi! Deschide un playlist colectiv pe
              Spotify sau pe YouTube. <br> <br>
              Invită-ți elevii să contribuie cu piese: Ce muzică s-ar
              potrivi cu vizita noastră? <br> <br>
              Ascultați-o și discutați piesele la clasă!`
  },
  {
    label: 'Design your horse',
    content: `Organizați un concurs de postere Cai Verzi la școală. <br> <br>
              Elevii își pot imagina și crea propriul cal inspirat de
              vizita voastră (orice tehnica arts&craft este permisă:
              desen (fie și tehnic!), pictură, colaj, cusut, fotografie,
              tehnici mixte).<br> <br>
              Îi pot da și un nume și crea o poveste daca vreți să
              faceți și un exercițiu de creative writing.
              Afișați cei mai reușiți Cai Verzi pe pereții clasei (sau
              pe hol, că să îi vadă toată școala!)`
  },
])

function handleSubmit () {

}

function handleButton (action) {

}


</script>

<style lang="scss">
.homepage {
  .s1 {
    background-color: #00CA72;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #E7F3E9;
    text-align: center;
    .container {
      div {
        h1 {
          margin-bottom: 15px;
        }
        .subtitle {
          max-width: 1107px;
          margin: 0 auto;
        }
      }
      .middle {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 45px 0;
        p {
          max-width: 1019px;
          margin: 0 auto;
        }
      }
      .text-h3 {
        max-width: 687px;
        margin: 0 auto;
      }
    }
  }
  .s2 {
    padding: 98px 0;
    .container {
      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .text {
          h2 {
            color: $primary;
            margin-bottom: 11px;
          }
          .subtitle {
            max-width: 698px;
          }
        }
        .map {
          width: 835px;
          height: 439px;
          background-color: #e3e3e3;
          display: flex;
          align-items: center;
          justify-content: center;
          color: grey;
          font-size: 40px;
        }

      }
      .list-cards {
        margin: 100px 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 40px;
      }

    }
  }
  .s3 {
    background-color: $primary;
    padding: 60px 0;
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      .q-img {
        max-width: 350px;
      }
      .q-field {
        background-color: white;
        border-radius: 19px;
        max-width: 600px;
        margin: 5px auto 0;
        .q-field__native {
          padding-left: 40px;
          color: grey;
          font-size: 16px;
          font-weight: 500;
          border-radius: 19px;
        }
      }
      .q-btn {
        margin: 20px auto 0;
        display: flex;
        color: $secondary;
        padding: 4px 16px;
        .q-btn__content {
          font-size: 16px;
        }
      }

    }
  }
  .s4 {
    background-color: #E751E9;
    padding: 40px 0;
    .container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      > p {
        max-width: 700px;
        margin: 0 auto;
      }
    }
  }
  .s5 {
    padding: 98px 0;
    .container {
      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .text {
          .text-h1 {
            color: $primary;
            text-align: center;
            margin-bottom: 11px;
          }
          .subtitle {
            max-width: 698px;
            margin-bottom: 10px;
          }
          .q-btn {
            background-color: $primary;
            border-radius: 14px;
            .q-btn__content {
              font-size: 20px;
              font-weight: 700;
              color: $secondary;
              padding: 10px 30px;
            }
          }
        }
        .map {
          width: 835px;
          height: 439px;
          background-color: #e3e3e3;
          display: flex;
          align-items: center;
          justify-content: center;
          color: grey;
          font-size: 40px;
        }
      }
      .bottom {
        margin: 108px 0 0 0;
        > div {
          .text-h3 {
            max-width: 1054px;
            margin: 0 auto;
          }
        }
        .exp-section {
          margin: 80px 0 0 0;
          > .text-h1 {
            margin-bottom: 52px;
          }
          .list-exp {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 36px;
          }
        }
      }
    }
  }
  .s6 {
    background-color: $primary;
    padding: 60px 0 112px 0;
    .container {
      .top {
        margin-bottom: 40px;
        > h2 {
          margin-bottom: 22px;
        }
        .text-h3 {
          max-width: 1054px;
          margin: 0 auto;
        }
      }
      .p-section {
        max-width: 1054px;
        margin: 0 auto 66px 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .list-exp {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 36px;
      }
    }
  }
  .s7 {
    padding: 60px 0;
    .container {
      .top {
        margin-bottom: 30px;
        > h2 {
          margin-bottom: 33px;
        }
        .list-exp {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 36px;
        }
      }
      .bottom {
        > h2 {
          margin-bottom: 20px;
        }
        > .text-h3 {
          max-width: 1000px;
          margin: 0 auto 20px;
        }
        > p {
          max-width: 720px;
          margin: 0 auto;
        }
      }
    }
  }
  .s8 {
    background-color: #E751E9;
    padding: 40px 0;
    .container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      > p {
        max-width: 700px;
        margin: 0 auto;
      }
    }
  }
  .s9 {
    padding: 90px 0 73px 0;
    .container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 166px;
      .q-img {
        max-width: 930px;
      }
    }
  }
}
</style>
