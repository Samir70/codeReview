/**
 * returns a shuffled version of argument, which is left unchanged
 * uses Fisher-Yates algorithm, modified so no element is in its original place
 * @param {*} arr 
 */
const shuffle = arr => {
    let out = [...arr];
    for (let i = out.length - 1; i > 0; i--) {
        let j = i;
        while (j === i) {
            j = Math.floor(Math.random() * (i + 1)); // number 0..i
        }
        [out[i], out[j]] = [out[j], out[i]]
    }
    return out
}

const WRONG = "sortq-li wrong-pos";
const RIGHT = "sortq-li right-pos";

/**
 * This display will display a short question / description of what to do
 * Then it will have a column of options which can be rearranged into the correct order
 * -- rows are highlighted in green to indicate that they are correct from the top
 * -- rows are highlighted in amber to indicate that they are in the wrong position.
 * 
 * When the answer is checked it is marked and an object passed as part of the event
 * The object contains:
 * status: boolean for user was correct
 * mark: first bit of feedback, eg: 'correct', 'wrong!'
 * extra: something like confirmation of the answer.
 * 
 */

Vue.component('sortQ', {
    props: {
        qData: Object
    },
    data: function () {
        return {
            userWasCorrect: false,
            correctRows:0,
            draggedItemID: null, droppedOnID: null,
            enteredElement: null,
            userAnswer: shuffle(
                this.qData.code.map((x, i) => {
                    return {
                        text: x, id: i, class: WRONG
                    }
                })
            )
        }
    },
    computed: {
        qText: function () { return this.qData.name },
        ans: function () { return this.qData.code }
    },
    methods: {
        updateUserAnswer: function () {
            this.correctRows = 0;
            this.userAnswer.forEach((row, i) => {
                row.class = row.text === this.ans[i] ? RIGHT : WRONG;
                this.correctRows += row.class === RIGHT ? 1 : 0
            });
            console.log(this.correctRows, 'out of', this.userAnswer.length, 'correct');
            if (this.correctRows === this.userAnswer.length) {
                this.$emit('user-answered', {status:true, mark:'All correct!!!', extra:'more feedback'})
            }
        }
    },
    template: `
        <div>
            <h3>{{qText}}</h3>
            <draggable v-model="userAnswer" v-on:end="updateUserAnswer" >
                <div
                    v-for="item in userAnswer" 
                    v-bind:key="item.id" 
                    v-bind:class="item.class"><div class="codeSpace">{{item.text}}</div>
                </div>
            </draggable>
        </div>
    `
})