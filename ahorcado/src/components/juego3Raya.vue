<template>
  <div class="row">
    <div class="contenido">
      <button id="jugar" class="bg-info" @click="resetBoard()" v-if="isOver || isTie">RESET BOARD</button>
      <h1>3 EN RAYA</h1>
      <h2 id="winner" v-if="isOver"> Ganador {{winner}} </h2>
      <h2 v-if="isTie"> Empate</h2>
      <div class="play-area">
        <div id="block_0" class="block" @click="draw(0, false)">{{ content[0] }}</div>
        <div id="block_1" class="block" @click="draw(1, false)">{{ content[1] }}</div>
        <div id="block_2" class="block" @click="draw(2, false)">{{ content[2] }}</div>
        <div id="block_3" class="block" @click="draw(3, false)">{{ content[3] }}</div>
        <div id="block_4" class="block" @click="draw(4, false)">{{ content[4] }}</div>
        <div id="block_5" class="block" @click="draw(5, false)">{{ content[5] }}</div>
        <div id="block_6" class="block" @click="draw(6, false)">{{ content[6] }}</div>
        <div id="block_7" class="block" @click="draw(7, false)">{{ content[7] }}</div>
        <div id="block_8" class="block" @click="draw(8, false)">{{ content[8] }}</div>
      </div>
      
      
        
    </div>
            
  </div>
    
</template>
<script >

export default {
  name: 'juego3Raya',
  data() {
    return {
      content: ["", "", "", "", "", "", "", "", ""],
      turn: true,
      isOver: false,
      winner: null,
      isTie: false
    }
  },
  methods: {
    draw(index) {
      // send event to socket.io
      if(this.turn) {
        // if turn is true then mark as X or mark as O
        this.content[index] = "X"
      } else {
        this.content[index] = "O"
      }
      this.turn = !this.turn;
      this.calculateWinner();
      this.calculateTie();
    },
    calculateWinner() {
      const WIN_CONDITIONS = [
              // rows
              [0, 1, 2], [3, 4, 5], [6, 7, 8],
              // cols
              [0, 3, 6], [1, 4, 7], [2, 5, 8],
              // diagonals
              [0, 4, 8], [2, 4, 6]
      ];
      for (let i = 0; i < WIN_CONDITIONS.length; i++) {
        let firstIndex = WIN_CONDITIONS[i][0];
        let secondIndex = WIN_CONDITIONS[i][1];
        let thirdIndex = WIN_CONDITIONS[i][2];
        if(this.content[firstIndex] == this.content[secondIndex] &&
          this.content[firstIndex] == this.content[thirdIndex] &&
        this.content[firstIndex] != "") {
          this.isOver = true;
          this.winner = this.content[firstIndex];
        }
      }
    },
    calculateTie(){
      for (let i = 0 ; i<= 8 ; i++) {
        if(this.content[i] == "") {
          return
        }
      }
      this.isTie = true
    },
    resetBoard() {
      for (let i=0; i<= 8; i++) {
        this.content[i] = ""
        this.isOver = false;
        this.winner = null
        this.isTie = false
      }
    }
  }
}
</script>