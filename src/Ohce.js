export class Ohce {
  /**
   * @param {MyConsole} console
   */
  constructor(console, emailSender) {
    this.console = console
  }

  /**
   * @param {string} name
   * @returns {Promise<void>}
   */
  async run(name) {
    this.console.log(`¡Buenos días ${name}!`)

    /**
     * @type string
     */
    let word = ""

    while (word !== "Stop!") {
      word = await this.console.readLine()

      if (word === "Stop!") {
        break
      }

      const reversed = word.split("").reverse().join("")

      this.console.log(reversed)

      if (reversed === word) {
        this.console.log("¡Bonita palabra!")
      }
    }
  }
}
