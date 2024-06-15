export class Ohce {
  /**
   * @param {MyConsole} console
   */
  constructor(console) {
    this.console = console
  }

  /**
   * @param {string} name
   * @returns {Promise<void>}
   */
  async run(name) {
    const console = this.console

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
