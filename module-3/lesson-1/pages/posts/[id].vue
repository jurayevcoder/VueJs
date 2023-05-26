<template>
  <div class="wrapper">
  <h2>Post item {{ params.id }}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta assumenda,
      delectus vitae eaque rem incidunt maxime quae nostrum ratione sed, aperiam ab
      ducimus molestiae labore cupiditate blanditiis optio eos? Quidem explicabo officiis
      magnam, accusantium expedita temporibus hic aspernatur enim exercitationem
      perferendis vel! Provident incidunt rem illo ut consectetur similique explicabo
      aliquam recusandae. Ipsam explicabo eum, exercitationem dolorum pariatur inventore!
      Modi quasi ullam nisi voluptas corporis, asperiores suscipit illo reprehenderit
      facilis, eligendi animi, quam tempora optio aliquam nostrum expedita ipsum ea
      maiores? Corrupti autem hic cum iste earum, eveniet ad? Fuga commodi dolorem natus
      magnam laborum dicta sint! Voluptates quo ad in eius accusamus deserunt perferendis
      nesciunt molestiae quidem et labore maxime ab, cupiditate dolores sed! Error eveniet
      dolorem rerum. Autem commodi, maxime illo repudiandae dolor illum dolore, sunt
      voluptas temporibus, reiciendis perferendis obcaecati repellat eaque vel cum
      excepturi repellendus consequuntur cupiditate voluptatem provident vero tempore
      quae. Vel, magnam sit. Nemo quod in, omnis numquam nesciunt voluptates esse amet eos
      possimus, dolorem fugiat ut? Porro dolore debitis consequuntur provident ad, in
      error fugiat ipsum quibusdam a, beatae quasi cum est! Adipisci, dicta eius aut
      voluptatum asperiores veniam nisi suscipit necessitatibus, maiores quia repudiandae
      quam repellat optio consequatur alias earum minima? Qui aliquam facere expedita
      quidem eveniet odio, quo magnam molestias? Mollitia consequuntur, quis facere
      numquam officia at alias atque dignissimos minima! Reiciendis soluta officia
      consectetur nesciunt deleniti odit nemo fuga eligendi. Architecto ut quasi
      voluptatem. Quibusdam nostrum dicta tenetur autem. Vel fugit quisquam ut recusandae
      dolorum modi quidem. Numquam illo eius rem eaque facere eum sunt error repellendus
      recusandae neque dolorem, repellat voluptatem officiis ducimus obcaecati ipsum
      consequatur perferendis! Beatae. Tempora nemo perspiciatis illum? Fugit at hic quas
      perspiciatis? Labore fuga et voluptas beatae tenetur laudantium tempora architecto,
      cupiditate optio officia molestias perferendis, natus, praesentium totam quae
      veritatis inventore temporibus. Dolorem ut nihil suscipit, nesciunt quidem officia
      unde, quisquam fugiat nemo repellat iure. Optio excepturi nemo suscipit beatae,
      impedit placeat id. Soluta odio quasi, cumque odit veritatis praesentium eligendi
      minima! Dicta, saepe explicabo autem nobis eos voluptas dolore error voluptatibus ad
      vel eaque impedit sequi animi, maiores enim nemo dignissimos dolores necessitatibus
      fugit odio omnis! Veritatis, laudantium consequatur. Corrupti, vitae!
    </p>
    <button @click="back.push({ name: 'posts' })" class="btn">GO BACK</button>
  </div>
</template>

<script setup>
const params = useRoute().params;
const back = useRouter();
console.log(params);
</script>

<style lang="scss" scoped></style>
