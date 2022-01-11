import Solution from '@/domain/Solution'
import Author from '@/domain/Author'

const authors = {
  ad: new Author(16, 'Ad Vlems', 'ad-vlems', ''),
  diny: new Author(
    44,
    'Diny Ceelen',
    'Diny-Ceelen',
    'Mijn persoonlijke missie is: Een samenleving waarin mensen in zichzelf geloven, hun kwaliteiten maximaal kunnen benutten en tot krachtige verbindingen in staat zijn die bijdragen aan een gezonde aarde.'
  ),
  iris: new Author(
    28,
    'Iris Vincent',
    'Iris-Vincent',
    ''
  ),
  niek: new Author(
    27,
    'Niek Tappe',
    'Niek-Tappe',
    'Hoi, Ik ben Niek!'
  ),
  richterEducation: new Author(
    597,
    'Richter Education',
    'Richter-Education',
    'Via Leergebied® werken inwoners samen aan oplossingen voor de Duurzame Ontwikkelingsdoelen in hun eigen gemeente. Verbinding voor leefbaarheid in jouw gemeente. Iedereen kan gratis meedoen. Doe jij ook mee? Bekijk onze video https://youtu.be/G9G9PkftNEw of kijk op www.richter.education/inschrijven'
  ),
  rick: new Author(
    21,
    'Rick de Vries',
    'Rick-de-Vries',
    'Ik ben een ICT & Media student'
  )
}

export default [
  new Solution(
    1,
    'Kruidenspiraal',
    new Date(2020, 11, 25, 13, 46, 0, 0),
    authors.niek,
    '<p>Kruiden zijn essentieel in de keuken, helaas zitten verse kruiden van de supermarkt altijd in plastic verpakt en zijn deze behoorlijk prijzig. Daarom laat ik je graag weten hoe je altijd kunt beschikken over je eigen verse kruiden met een kruidenspiraal!</p><p>Elk soort kruid heeft een andere behoefte aan zon, schaduw en vocht. Op deze factoren is de kruidenspiraal dan ook ingericht, zo staat bijvoorbeeld de rozemarijn aan de top van de kruidenspiraal. Rozemarijn heeft veel zon nodig en een droge grond, aan de top van de spiraal komt de meeste zon van de dag, omdat vocht in de grond naar beneden trekt is dit automatisch ook de meeste droge grond.&nbsp;</p><p>Om het beste resultaat te behalen moet de kruidenspiraal een doorsnede hebben van 2,5 meter. Als je de kruidenspiraal kleiner maakt dan is er een grote kans dat bij een langere afwezigheid de verse kruiden verdrogen, dit wil je natuurlijk niet! heb je geen ruimte voor een kruidenspiraal van 2,5 meter? Je kan ook een sproeier in de kruidenspiraal inbouwen, zo drogen je verse kruiden ook minder snel uit!</p><p>De kruiden welke in de kruidenspiraal staan zijn:</p><ul><li>Rozemarijn;</li><li>Oregano;</li><li>Salie;</li><li>Dragon;</li><li>Tijm;</li><li>Koriander;</li><li>Peterselie;</li><li>Bieslook;</li><li>Viooltjes;</li><li>Kamille;</li><li>Basilicum;</li><li>Goudsbloem;</li><li>Munt en tot slot;</li><li>Een waterkers vijvertje.</li></ul><p>Eet je ook graag paddenstoelen? Je kan dan ook eiken boomstammen tegen de zijkant aanzetten. Deze eiken boomstammen kan je enten met verschillende eetbare paddenstoelen, zo heb je <i>nog</i> meer vers uit eigen tuin!</p><p>Let op!&nbsp; Zorg ervoor dat de kruidenspiraal dezelfde ligging op het noorden heeft zoals de bijgevoegde afbeelding, daarnaast is het ook van belang dat de verschillende kruiden op de juiste positie staan. Als dit niet het geval is dan hebben de kruiden niet de ideale omstandigheden waardoor de groei belemmerd kan worden.</p>',
    [2, 12],
    3,
    69
  ),
  new Solution(
    3,
    '6 tips voor waterbesparing in de tuin',
    new Date(2020, 11, 25, 14, 3, 0, 0),
    authors.rick,
    '<h3>Hoe kan ik water besparen in de tuin?</h3><p>In de zomer moet de tuin wel eens gesproeid worden met water. De planten willen graag verkoeld worden zodat ze het beter uithouden. Hier zijn 6 tips die helpen bij het besparen van water.</p><h3>Tip 1: Een watervriendelijke en groene tuin</h3><p>Een tuin waarin veel groen te vinden is kan de temperatuur met een aantal graden verlagen. Vooral op zonnige dagen is een tuin met veel planten koeler dan de tuin van de buren. Door veel planten in de tuin te plaatsen wordt er voor biodiversiteit gezorgd en worden vogels en vlinders aangetrokken. Voor een grotere aanpak kan er een boom geplaatst worden waardoor er tegelijkertijd CO2 uit de lucht wordt gehaald.&nbsp;</p><h3>Tip 2: Het installeren van een regenton</h3><p>Regenwater is perfect voor het sproeien van een tuin. Het installeren van een regenton is een grote stap om water te besparen. Op een simpele manier vangt de regenton het water op, waardoor er vaak water is om te geven aan de planten. Een ander voordeel aan het gebruiken van een regenton is dat het water natuurlijk gratis is :)</p><h3>Tip 3: De regenpijp afkoppelen</h3><p>Het is belangrijk om gebruik te maken van iedere druppel regenwater die van een regenpijp komt. Het is natuurlijk zonde als regenwater in het riool verdwijnt als het ook gebruikt had kunnen worden voor het besproeien van planten. Door het ontkoppelen van de regenpijp kan er direct voor gezorgd worden dat het water van de regenpijp de bodem in kan worden gegaan. Daarnaast hoeven de planten minder vaak water te hebben.</p><h3>Tip 4: Het vergroenen van een geveltuin</h3><p>Planten in een geveltuin zijn niet alleen goed voor het aanzicht, maar zorgt ook voor verkoeling in het huis; een natuurlijke isolatie van het huis. Het groen beschermt het huis tegen opwarming van de zon en in de winter houdt het de warmte in huis vast. Een ander belangrijk effect van de geveltuin is het vasthouden van water voor in de bodem. De platen die in grond staan kunnen gebruik maken van dit water.&nbsp;</p><figure class="image"><img src="https://lh4.googleusercontent.com/TlsCKJPT_BwcI1MxikUkTWzopYmvDHOhwQ1ZThuE7nUKHFHj7xTMIb0Af1ruqn5YHHMjmkW3rNwFTFDhfe5bZpqy_HKJUrDTV00Oc_VfAo1u5JMdkf3asJJm9DIzcir4P8KTu37S"></figure><h3>Tip 5: Een groen dak</h3><p>Een groen dak helpt tegen warmte. Groene planten helpen bij het natuurlijk isoleren van een huis tegen warmte, maar ook tegen kou. Een groen dak zorgt er ook voor dat zonnepanelen beter werken op een plat dak. Als het dak namelijk te warm wordt, kunnen zonnepanelen minder met de zon energie opwekken.</p><p>Planten die op een dak groeien kunnen beter water vasthouden wanneer het hard regent. Ook is het goed voor de biodiversiteit én het kan er ook nog eens mooi uitzien.</p><h3>Tip 6:&nbsp; Natuurlijke bestrating</h3><p>Een tuin die bestaat uit bestrating met steen voelt veel warmer dan een tuin met veel groen. De stenen bestrating kan vervangen worden door meerjarige planten zoals een grasveld of een combinatie van deze twee. Als het regent kan het water in de bodem zakken waardoor het grondwater wordt aangevuld.</p><h3>Conclusie</h3><p>Dankzij de bron <a href="https://www.brabantsemilieufederatie.nl/nieuws/7x-water-besparen-in-de-tuin/"><u>https://www.brabantsemilieufederatie.nl/nieuws/7x-water-besparen-in-de-tuin/</u></a><u> </u>heb ik deze oplossing kunnen schrijven. Ik hoop met deze tips jou te helpen bij het besparen van water in de tuin. Laat weten in de reacties wat je van deze oplossing vindt!</p>',
    [13],
    4,
    87
  ),
  new Solution(
    9,
    'Composteren kun je leren',
    new Date(2020, 12, 1, 10, 29, 0, 0),
    authors.iris,
    '<p>Groente-, fruit- en tuinafval kun je in de gft-bak doen, maar je kunt het ook zelf composteren. Doe je dit op de juiste manier, dan bespaar je energie en verklein je de afvalberg. Als beloning krijg je gratis goede bodemverbeteraar voor de tuin. Ik heb het altijd lastig gevonden hoe ik dit nu precies kan doen, maar heb eindelijk de beste manier gevonden. Deze tips en tricks deel ik graag met jullie!</p><p>Zelf composteren bespaart enorm veel energie. Je verwerkt ter plekke organische afval uit je huishouden: de kringloop blijft dus klein. Bovendien levert het een nuttig eindproduct op. Compost is humusrijk en daarom bruikbaar als bodemverbeteraar voor je tuin.&nbsp;</p><p><strong>Verkeerd composteren kan broeikasgas veroorzaken</strong></p><p>Maar composteren is een rottingsproces: bacteriën, schimmels en andere bodemorganismen zetten groente-, fruit- en tuinafval om in compost met behulp van zuurstof. Bij verkeerd composteren, vindt het rottingsproces plaats zonder zuurstof (anaëroob), waardoor methaan of lachgas ontstaan. Beide zijn schadelijke broeikasgassen. Zorg dus dat er voldoende zuurstof aanwezig is!</p><p><strong>Zo maak je de ideale composthoop</strong></p><p>Besteed de nodige aandacht aan de composthoop of het -vat. Dan voorkom je dat er broeikasgassen ontstaan.</p><ul><li>Zorg voor goede door luchting. Zorg voor voldoende lucht in de hele composthoop. Dat doe je door ongeveer elke zes weken de composthoop geheel ondersteboven te keren (\'omzetten\'). Dat versnelt het composteerproces. In een halfopen of gesloten compostvat kun je organisch afval niet omzetten. In zo\'n systeem is een gevarieerde gft-samenstelling extra belangrijk.</li><li>Zorg voor variatie. Een composthoop moet zo gevarieerd mogelijk zijn: vochtig en droog materiaal, slap en stevig, grof en fijn, koolstofrijk (zaagsel, snoeihout, stro, boombladeren) en stikstofrijk (gras, mest, tuinafval). Heb je veel tuinafval, leg dit dan niet in één keer, maar in porties op de composthoop.</li><li>Zorg voor voldoende vochtigheid. De composthoop mag niet te nat of te droog worden. Af en toe een beetje water is prima, maar bij te veel regen spoelen de voedingsstoffen uit, of kan een tekort aan lucht ontstaan in de composthoop. Plaats de composthoop dus niet onder een afdak, en ook niet in een open veld. Onder een boom, half beschut tegen zon en regen, is een goede plek.</li></ul><p>Via deze video kun je nog meer leren over composteren:</p><p><a href="https://www.youtube.com/watch?v=gpfjB_mjUyk"><u>https://www.youtube.com/watch?v=gpfjB_mjUyk</u></a></p><p>&nbsp;</p>',
    [12, 15],
    3,
    60
  ),
  new Solution(
    31,
    'Blog: Belonging to the future',
    new Date(2020, 12, 7, 19, 16, 0, 0),
    authors.diny,
    '<p>‘<strong>Belonging to the future’</strong></p><p>Vanaf vandaag hoor ik officieel bij de gemeenschap van Ecodorp Boekel.&nbsp;</p><p>Zondag 15 maart, de dag waarop de lock down bekend gemaakt werd om Covid 19 in te dammen staat in mijn geheugen gegrift als de dag waarop mijn persoonlijke lock out plaats vond en de scheiding tussen mij en mijn partner werd ingezet. Hoe parallel liep het proces tussen het stilvallen van de wereld en het stilvallen van mijn turbulente leven en het naar binnen keren van mijzelf.&nbsp;</p><p>Een samenleving in paniek, net als ikzelf, maar ook in bezinning, op uitwassen en weeffouten. Tijdens de intens stille en lange wandelingen dit voorjaar hoorde ik voor het eerst sinds mijn vroege kinderjaren, de bomen weer groeien. Het ontroerde me en maakte ook het verlangen in me wakker vorm te gaan geven aan een betere toekomst, voor mij en voor mijn kleinkinderen.</p><p>En zo kwam ik op het spoor van het Ecodorp waar mijn verlangens naar een fijne woonplek, een betekenisvolle bijdrage aan de samenleving en me in mijn relaties diep verbonden voelen, integraal samen kwamen.</p><p>In Ecodorp Boekel eten we uit een gezamenlijke tuin, wekken we onze eigen energie op, zuiveren eigen afvalwater, wonen in klimaat adaptieve woningen die we samen met de eco-aannemer bouwen en zorgen met elkaar voor elkaar, voor diegenen die even wat minder veerkracht hebben.&nbsp;</p><p>Wat we leren willen we delen, verbinden, om samen nog meer te kunnen. Om sterker te worden, van niche pionier naar robuust eco-socio-systeem en zo een wezenlijke bijdrage te kunnen leveren aan een duurzame, gezonde en rechtvaardige samenleving.&nbsp;</p><p>En zo werd mijn crisis een kans en raakte ik hier betrokken bij de Global Goals Community. Geïnspireerd op de Duurzame Ontwikkelingsdoelen van de VN willen wij een ontmoetingscentrum zijn van waaruit we met elkaar die nieuwe gemeenschap kunnen vormen. Een nieuwe krachtenbundeling, lokaal, regionaal, nationaal en internationaal, die ruimte biedt aan pioniers om samen uit te groeien tot een stevig eco-systeem waar duurzame activiteiten tot wasdom kunnen komen. We willen samen, community based, waarden, kennis en kunde inzetten om voor de grote opgaven van deze tijd antwoorden te vinden. Bouwen aan een nieuwe economie waar deze waarden ook waarde vertegenwoordigen zodat we samen een armoedevrij bestaan op kunnen bouwen wat bijdraagt aan een betere, gezondere en eerlijkere wereld die voor de komende 7 generaties van waarde zal zijn.</p><p>Daar hoor ik bij, bij de toekomst, bij het nieuwe normaal….</p><p>&nbsp;</p><p>GGC Blogger: Diny Ceelen</p>',
    [11, 17],
    1,
    78
  ),
  new Solution(
    32,
    'Sociale huurwoningen als woongemeenschap opzetten',
    new Date(2020, 12, 7, 19, 42, 0, 0),
    authors.ad,
    '<p style="margin-left:0px;">Geen drempels meer voor nieuwe ecodorpen met betaalbare huurwoningen</p><p style="margin-left:0px;">Wij delen graag kennis en kunde. Iedereen die onze infomiddagen heeft bezocht, weet dat. We hebben al een aantal drempels gehad die andere initiatieven nog voor zich hebben en we willen graag delen wat onze ervaringen zijn, zodat voor hun de drempels gemakkelijker te nemen zijn.</p><p style="margin-left:0px;"><strong>De financieringsdrempel: </strong>Je hoeft helaas niet aan te kloppen bij Nederlandse banken zoals Triodos, Rabobank of ASN als je betaalbare huurwoningen wil bouwen. Nederlandse banken mogen namelijk geen hypotheek verstrekken aan woongemeenschappen, alleen aan individuele huishoudens. Woongemeenschappen komen dus altijd in gesprek met de afdeling Zakelijke leningen en die zijn gewend aan korte looptijden en hoge rentes. Wij hebben goede ervaringen met de <a href="https://www.ecodorpboekel.nl/ecodorp-boekel-heeft-een-bank/">Duitse GLS Bank</a>, het <a href="https://www.ecodorpboekel.nl/ecodorp-boekel-kan-de-bouwgrond-kopen/">Nationaal Groenfonds</a>, de <a href="https://www.ecodorpboekel.nl/maatschappelijke-waarde-van-ecodorp-boekel/">Provincie</a>, <a href="https://www.ecodorpboekel.nl/woongemeenschappen-financieren-woongemeenschappen-bij-vrijcoop/">VrijCoop</a> en <a href="https://www.ecodorpboekel.nl/huidige-status-certificatenactie/">crowdfunding</a>, als het gaat om financiering van ons ecodorp.</p><p style="margin-left:0px;"><strong>De groepsdrempel:&nbsp;</strong>We hebben ecodorpinitiatieven gestart in Veghel, Nijmegen, Oss en veel geleerd van Ecodorp Brabant. Elke geleerde les heeft geleid richting Ecodorp Boekel. Wil je een sterke groep? Begin met een kleine groep (2-6 personen) aan het schrijven van een projectplan. Vraag daarna iedereen die zich aanmeldt of ze zich kunnen vinden in het projectplan. Dan zijn alle neuzen gericht op hetzelfde doel en hoeft de basis niet elke keer ter discussie te komen, bij elke nieuwe geïnteresseerde.</p><p style="margin-left:0px;"><strong>De regelgeving:</strong> Ecodorp Boekel en Ecodorp Noordeland staan samen in de Crisis- en herstelwet. Daardoor mogen we uitzondering vormen op het bouwbesluit (en desgewenst ook andere wetten) en als het bij ons goed gaat, wordt de reguliere wet aangepast. Wij hebben verder nog nooit last gehad van regelgeving. Dat heeft vooral ook te maken met de gemeente waarin je zit. De gemeente Boekel is misschien wel de meest innovatieve gemeente van Nederland. Toen we voor de eerste keer in contact kwamen met het toenmalig Ministerie van Infrastructuur en Milieu (IenM), vroegen ze waar we zaten. Ik zei: ‘Boekel’. Zij zei: ‘De directie van het Ministerie van Infrastructuur en Milieu houdt de gemeente Boekel erg in de gaten, want Boekel zoekt vaak de grenzen van de wet op, maar altijd ten voordele van de burgers!’</p>',
    [1, 11],
    2,
    82
  ),
  new Solution(
    33,
    'Blog: Het GGC',
    new Date(2020, 12, 8, 9, 14, 0, 0),
    authors.niek,
    '<h3>Wat kan ik met GGC?</h3><p>Global Goals Community (GGC) is een platform waarbij de input van onze bezoekers centraal staat, oftewel een User Generated Content platform. De bezoekers van onze website kunnen duurzame en praktische SDG gerelateerde oplossingen delen waardoor de kennis van een andere bezoeker wordt verrijkt.&nbsp;</p><h3>Together we build a better world!</h3><p>GGC is bedacht door Ecodorp Boekel, een ecologisch dorp waarin een SDG-huis is geplaatst. In dit huis bevinden zich verschillende oplossingen die aansluiten bij één of meerdere SDG’s. Verder in deze blog wordt het begrip SDG verder uitgelegd.&nbsp;</p><p>Dit SDG-huis is lastig te bereiken met het openbaar vervoer, hierdoor is Ecodorp Boekel met het idee gekomen om een online SDG-huis te creëren; <strong>GGC</strong>. Dit online platform is altijd bereikbaar om praktische toepassingen te lezen én te delen conform de 17 SDG’s.</p><h3>Sustainable Development Goal (SDG)</h3><p>SDG is een begrip dat vaak wordt gebruikt bij GGC. Er zijn 17 verschillende SDG’s welke allemaal bijdragen aan een betere wereld in 2030. Deze SDG’s vormen een leidraad voor uitdagingen zoals armoede, onderwijs en de klimaatcrisis.&nbsp;</p><p>Bij GGC wordt een oplossing gekoppeld aan een SDG. Dit houdt in dat een oplossing (geschreven door een gebruiker van GGC) over waterzuivering gekoppeld wordt aan <strong>SDG 6 Schoon water en sanitair. </strong>Op deze manier kunnen oplossingen aan de hand van de verschillende SDG’s makkelijk teruggevonden worden op GGC.</p><h3>Hoe zijn SDG’s ontstaan?</h3><p>De Verenigde Naties (VN) spraken in 2000 de eerste 8 ontwikkelingsdoelen af, de Millenniumdoelen. Deze doelen waren actief tot 2015. Één van deze doelen was om het aantal mensen dat leeft in extreme armoede te halveren, dit doel is immers ook behaald. Andere doelen, zoals het verminderen van moeder- en kindersterfte zijn helaas niet behaald.</p><p>Tijdens de RIO+20, de VN-top voor duurzame ontwikkeling die in 2012 werd gehouden, werd er voor het eerst gesproken over ‘duurzame ontwikkelingsdoelen’. Dit zijn de opvolgers van de Millenniumdoelen. Nederland heeft een bijdrage geleverd in het formuleren van deze doelen. Nederland is hierbij vertegenwoordigd door Nederlandse bestuurders, burgers en ondernemers. Lees meer over de SDG’s in deze blog!</p><h3>Oplossingen</h3><p>SDG oplossingen worden geplaatst door gebruikers van GGC. Zij voeren informatie in via het invoerscherm voor een nieuwe oplossing. In dit scherm kan de gebruiker informatie invoeren over de betreffende oplossing zoals de toepasselijke SDG’s, titel, afbeelding en de oplossing zelf. Al deze informatie wordt opgeslagen in de database van GGC waardoor de oplossing teruggevonden kan worden op GGC.&nbsp;</p><h3>User Generated Content</h3><p>GGC draait op User Generated Content. Dit houdt in dat de inhoud van GGC bedacht is door de gebruikers. Omdat er geen controle wordt uitgevoerd op grammaticale- of spelfouten, kan hier een fout in voorkomen. GGC is van mening dat de focus moet liggen op het delen van oplossingen en niet op de manier waarop deze oplossing is beschreven.</p><h3>Nu ik weet wat GGC is...</h3><p>Zou jij graag een oplossing willen toevoegen waarmee je de wereld verbeterd óf zou jij een oplossing willen uitvoeren? Dan is GGC het perfecte platform voor jou! Neem gerust een kijkje op&nbsp;</p><p><a href="https://globalgoalscommunity.eu/"><u>https://globalgoalscommunity.eu/</u></a></p>',
    [11, 17],
    1,
    90
  ),
  new Solution(
    69,
    'Lastig Lustrum',
    new Date(2021, 3, 3, 9, 2, 0, 0),
    authors.diny,
    '<p>Vandaag ben ik begonnen mijn boekenkast op te ruimen om een groot deel naar de doorgeefwinkel te brengen.&nbsp;Wat gaat er dan een tijd door je handen…aan elk boek hangen beelden van eindeloze zomeravonden, studentenkamers met verhitte discussies, klaslokalen vol leerlingen, vrouwen die hun levens wilden veranderen, reiki met kinderen…en ga zo maar door.</p><p>Sommige van die boeken zijn door de tijd volkomen achterhaald (ik leg Perestrojka opzij) anderen zijn nog akelig actueel. Zo stond ik zomaar met het legendarische kleine grijze Aula pocketboekje in mijn handen ‘rapport van de CLUB VAN ROME’, een neerwaarts gerichte grafieklijn eindigend in het rood, met een slaphangend margrietje ervoor. Een generatie tijd was er nog voordat de terugkoppelingsmechanismen terugkeer naar het midden zouden blokkeren en er onherstelbare schade zou optreden. Ik was 14…de generatie die aan zet zou zijn. Nu ben ik 62 met twee generaties onder mij….</p><figure class="image image-style-align-left image_resized" style="width:22.38%;"><img src="/public/assets/content/body/69-1614759352.jpg"></figure><p>2015 alle Verenigde Naties sluiten een call to action om in 15 jaar (dat is een halve generatietijd) armoede uit de wereld te helpen, de planeet te beschermen en alle mensen vrede en welvaart te verzekeren. Datzelfde jaar, 12 december 2015, wordt het klimaatakkoord getekend, om te voorkomen dat de aarde meer dan 2° op zou warmen, in 2030 moet de CO2 uitstoot daarom gehalveerd zijn.&nbsp;</p><p><strong>Call to action</strong></p><p>In maart 2022 is het precies 50 jaar geleden dat het rapport van de CLUB VAN ROME verscheen. Hoe mooi zou het zijn als we dan een actielijst hebben zo lang als de weg naar Rome. Ik heb het even opgezocht: 1525 km; 1525 acties, die helpen om de aarde en haar voorraden voor toekomstige generaties te bewaren en tegelijkertijd , ik citeer het rapport: "<i>te zorgen dat redelijk grote bevolkingen materieel een goed leven alsmede voldoende gelegenheid voor onbeperkte individuele en sociale ontwikkeling krijgen”</i></p><p>3 generaties in actie…om 7 generaties gezonde aarde door te kunnen geven. Welke actie verzin jij? GGC Boekel wil waar mogelijk helpen de acties te realiseren…op naar de 1524 in 2022</p>',
    [12, 13],
    0,
    14
  ),
  new Solution(
    82,
    'Make your own herb spiral',
    new Date(2021, 4, 9, 11, 27, 0, 0),
    authors.ad,
    '<p style="margin-left:0px;">Most herbs need a lime-rich soil, so mix it with extra lime.<br>Herbal shrubs should be cut back regularly so that they do not become too woody and crowd each other. The herb spiral is 2.5 metres in diameter, it is better not to make it any smaller as it will dry out during long absences. You can also choose to place a built-in sprinkler in the middle, which makes it easy to spray all the herbs. On the side you can put tree trunks (preferably oaks) that you can inoculate with edible mushrooms. And make sure it is nice and close to the kitchen.</p><p style="margin-left:0px;">All you need to make your own spiral is soil mixed with compost and stones to build the spiral with. You can even start with a container for growing watercress (see drawing).</p><ol><li>Choose a spot in the garden with enough sunlight (at least five hours a day).</li><li>Put a stick in the middle of the spot where the spiral is to be placed.</li><li>Tie a one-metre rope to the stick and tie another stick to the end.</li><li>Draw a circle in the ground.</li><li>On this line, build a wall of stones about 30 cm high. Do not make it completely round, but turn inwards a little before the end. From the second round, stack one or two stones higher.</li><li>Repeat this towards the centre until you have three levels and the spiral is to your liking.</li><li>Fill everything with soil and water well.</li><li>Let the spiral sink in before planting. Only when it is sturdy enough can you start planting herbs.</li></ol><figure class="image image-style-align-center"><img src="/public/assets/content/body/82-1617960615.jpg"></figure>',
    [2],
    0,
    16
  ),
  new Solution(
    96,
    'Help the bumblebee to hibernate in your garden',
    new Date(2021, 4, 15, 18, 48, 0, 0),
    authors.ad,
    '<p>Step 1:<br>Take an empty ceramic (not plastic) &nbsp;pot. Do not use a closed pot, the hole at the bottom is the entrance for the bumblebees. Place some soft moss in the pot.</p><p>Step 2:&nbsp;<br>Next, some hay or straw.</p><p>Step 3:&nbsp;<br>Choose a warm sheltered spot, such as the base of a hedge. Remove a little soil, enough to half-bury the pot. Turn the pot upside down in the hole and push back the soil around it.<br>The opening of the pot faces upwards and becomes the entrance for the bumblebees. Place about 3 inches of soil over the edge and press it down a bit, so there is no draft to the bumblebee nests.</p><figure class="image image-style-align-center"><img src="/public/assets/content/body/96-1618505670.png"></figure>',
    [15],
    1,
    17
  ),
  new Solution(
    137,
    'De Groene Vlek',
    new Date(2021, 10, 7, 11, 16, 0, 0),
    authors.richterEducation,
    '',
    [11, 13],
    2,
    23,
    'intro',
    'difficulty',
    ['test', 'test2'],
    ['wood', 'plastic'],
    ['hammer', 'scews']

  )
]
