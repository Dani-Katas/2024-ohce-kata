import { createInterface } from 'node:readline/promises'
import { stdin, stdout } from 'node:process'

export class MyConsole {
  /**
   * @returns {Promise<string>}
   */
  async readLine() {
    const rl = createInterface({ input: stdin, output: stdout })
    const input = await rl.question("")
    rl.close()
    return input
  }

  /**
   * @param {string} message
   */
  log(message) {
    console.log(message)
  }
}

export class Ohce {
  /**
   * @param {string} name
   * @returns {Promise<void>}
   */
  async run(name) {
    const console = new MyConsole()

    console.log(`¡Buenos días ${name}!`)

    /**
     * @type string
     */
    let word = ""

    while (word !== "Stop!") {
      word = await console.readLine()

      if (word === "Stop!") {
        break
      }

      const reversed = word.split("").reverse().join("")

      console.log(reversed)

      if (reversed === word) {
        console.log("¡Bonita palabra!")
      }
    }
  }
}
