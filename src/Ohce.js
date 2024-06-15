import { createInterface } from 'node:readline/promises'
import { stdin, stdout } from 'node:process'

export class Ohce {
  async run() {
    const rl = createInterface({ input: stdin, output: stdout })

    const name = process.argv[2]
    console.log(`¡Buenos días ${name}!`)

    /**
     * @type string
     */
    let word = ""

    while (word !== "Stop!") {
      word = await rl.question("")

      if (word === "Stop!") {
        break
      }

      const reversed = word.split("").reverse().join("")

      console.log(reversed)

      if (reversed === word) {
        console.log("¡Bonita palabra!")
      }
    }

    rl.close()
  }
}
