<template>
  <div class="home-content background-offwhite py-md-40 py-100">
    <img class="circles circles-recent-home-left" :src="images.circles" />
    <img class="circles circles-recent-home-right rotate-80" :src="images.circles" />

    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-md-7">
            <h2>Nieuwste oplossingen</h2>

            <div class="row mt-20">
              <div class="col-lg-10">
                Hier staan de nieuwste praktische oplossingen die op GGC
                zijn geplaatst
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-md-40 mt-60">
          <solution-excerpt
            v-for="(solution, index) in solutions"
            v-bind:key="index"
            :solution="solution"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import circlesImage from '@/assets/images/circles/circles.png'
import SolutionExcerpt from '@/components/SolutionExcerpt.vue'
import Solution from '@/domain/Solution'
import Author from '@/domain/Author'

const authorAd: Author = new Author(16, 'Ad Vlems', 'ad-vlems', '')

@Component({
  components: {
    SolutionExcerpt
  },
  data: function () {
    return {
      images: {
        circles: circlesImage
      },
      solutions: [
        new Solution(
          'Help the bumblebee to hibernate in your garden',
          new Date(2021, 4, 15, 18, 48, 0, 0),
          authorAd,
          '<figure class="image image-style-align-right image_resized" style="width:27.17%;"><img src="/public/assets/content/body/96-1618505633.png"></figure><p>Step 1:&nbsp;<br>Take an empty ceramic (not plastic) &nbsp;pot. Do not use a closed pot, the hole at the bottom is the entrance for the bumblebees. Place some soft moss in the pot.</p><p>Step 2:&nbsp;<br>Next, some hay or straw.</p><p>Step 3:&nbsp;<br>Choose a warm sheltered spot, such as the base of a hedge. Remove a little soil, enough to half-bury the pot. Turn the pot upside down in the hole and push back the soil around it.<br>The opening of the pot faces upwards and becomes the entrance for the bumblebees. Place about 3 inches of soil over the edge and press it down a bit, so there is no draft to the bumblebee nests.</p><figure class="image image-style-align-center"><img src="/public/assets/content/body/96-1618505670.png"></figure>',
          [15],
          1,
          17
        ),
        new Solution(
          'Make your own herb spiral',
          new Date(2021, 4, 9, 11, 27, 0, 0),
          authorAd,
          '<p style="margin-left:0px;">Most herbs need a lime-rich soil, so mix it with extra lime.<br>Herbal shrubs should be cut back regularly so that they do not become too woody and crowd each other. The herb spiral is 2.5 metres in diameter, it is better not to make it any smaller as it will dry out during long absences. You can also choose to place a built-in sprinkler in the middle, which makes it easy to spray all the herbs. On the side you can put tree trunks (preferably oaks) that you can inoculate with edible mushrooms. And make sure it is nice and close to the kitchen.</p><p style="margin-left:0px;">All you need to make your own spiral is soil mixed with compost and stones to build the spiral with. You can even start with a container for growing watercress (see drawing).</p><ol><li>Choose a spot in the garden with enough sunlight (at least five hours a day).</li><li>Put a stick in the middle of the spot where the spiral is to be placed.</li><li>Tie a one-metre rope to the stick and tie another stick to the end.</li><li>Draw a circle in the ground.</li><li>On this line, build a wall of stones about 30 cm high. Do not make it completely round, but turn inwards a little before the end. From the second round, stack one or two stones higher.</li><li>Repeat this towards the centre until you have three levels and the spiral is to your liking.</li><li>Fill everything with soil and water well.</li><li>Let the spiral sink in before planting. Only when it is sturdy enough can you start planting herbs.</li></ol><figure class="image image-style-align-center"><img src="/public/assets/content/body/82-1617960615.jpg"></figure>',
          [2],
          0,
          16
        ),
        new Solution(
          'Lastig Lustrum',
          new Date(2021, 3, 3, 9, 2, 0, 0),
          new Author(
            44,
            'Diny Ceelen',
            'Diny-Ceelen',
            'Mijn persoonlijke missie is: Een samenleving waarin mensen in zichzelf geloven, hun kwaliteiten maximaal kunnen benutten en tot krachtige verbindingen in staat zijn die bijdragen aan een gezonde aarde.'
          ),
          '<p>Vandaag ben ik begonnen mijn boekenkast op te ruimen om een groot deel naar de doorgeefwinkel te brengen.&nbsp;Wat gaat er dan een tijd door je handen…aan elk boek hangen beelden van eindeloze zomeravonden, studentenkamers met verhitte discussies, klaslokalen vol leerlingen, vrouwen die hun levens wilden veranderen, reiki met kinderen…en ga zo maar door.</p><p>Sommige van die boeken zijn door de tijd volkomen achterhaald (ik leg Perestrojka opzij) anderen zijn nog akelig actueel. Zo stond ik zomaar met het legendarische kleine grijze Aula pocketboekje in mijn handen ‘rapport van de CLUB VAN ROME’, een neerwaarts gerichte grafieklijn eindigend in het rood, met een slaphangend margrietje ervoor. Een generatie tijd was er nog voordat de terugkoppelingsmechanismen terugkeer naar het midden zouden blokkeren en er onherstelbare schade zou optreden. Ik was 14…de generatie die aan zet zou zijn. Nu ben ik 62 met twee generaties onder mij….</p><figure class="image image-style-align-left image_resized" style="width:22.38%;"><img src="/public/assets/content/body/69-1614759352.jpg"></figure><p>2015 alle Verenigde Naties sluiten een call to action om in 15 jaar (dat is een halve generatietijd) armoede uit de wereld te helpen, de planeet te beschermen en alle mensen vrede en welvaart te verzekeren. Datzelfde jaar, 12 december 2015, wordt het klimaatakkoord getekend, om te voorkomen dat de aarde meer dan 2° op zou warmen, in 2030 moet de CO2 uitstoot daarom gehalveerd zijn.&nbsp;</p><p><strong>Call to action</strong></p><p>In maart 2022 is het precies 50 jaar geleden dat het rapport van de CLUB VAN ROME verscheen. Hoe mooi zou het zijn als we dan een actielijst hebben zo lang als de weg naar Rome. Ik heb het even opgezocht: 1525 km; 1525 acties, die helpen om de aarde en haar voorraden voor toekomstige generaties te bewaren en tegelijkertijd , ik citeer het rapport: "<i>te zorgen dat redelijk grote bevolkingen materieel een goed leven alsmede voldoende gelegenheid voor onbeperkte individuele en sociale ontwikkeling krijgen”</i></p><p>3 generaties in actie…om 7 generaties gezonde aarde door te kunnen geven. Welke actie verzin jij? GGC Boekel wil waar mogelijk helpen de acties te realiseren…op naar de 1524 in 2022</p>',
          [12, 13],
          0,
          14
        )
      ]
    }
  }
})
export default class NewSolutions extends Vue {}
</script>

<style>
</style>
