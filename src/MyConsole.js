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
