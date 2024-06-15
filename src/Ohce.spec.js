import { describe, it, expect } from "vitest"
import { Ohce } from "./Ohce.js"
import { MyConsole } from "./MyConsole.js"

class TestableConsole extends MyConsole {
  messages = []

  async readLine() {
    return "Stop!"
  }

  log(message) {
    this.messages.push(message)
  }
}


class DummyConsole extends MyConsole {
  async readLine() {
    return ""
  }

  log(message) {

  }
}

class TestableConsole2 extends MyConsole {
  messages = []
  counter = 0

  async readLine() {
    if (this.counter === 0) {
      this.counter++
      return "Hola"
    }

    return "Stop!"
  }

  log(message) {
    this.messages.push(message)
  }
}

class TestableConsole3 extends MyConsole {
  messages = []
  counter = 0

  async readLine() {
    if (this.counter === 0) {
      this.counter++
      return "oto"
    }

    return "Stop!"
  }

  log(message) {
    this.messages.push(message)
  }
}

describe("Ohce", () => {
  const notImportantName = "Pepe"

  it("says good morning", async () => {
    const myConsole = new TestableConsole()
    const ohce = new Ohce(myConsole)

    await ohce.run("Pedro")

    expect(myConsole.messages).toContain("¡Buenos días Pedro!")
  })

  it("reverses the words", async () => {
    const myConsole = new TestableConsole2()
    const ohce = new Ohce(myConsole)

    await ohce.run(notImportantName)

    expect(myConsole.messages).toContain("aloH")
  })

  it("displays nice message when palindrome", async () => {
    const myConsole = new TestableConsole3()
    const ohce = new Ohce(myConsole)

    await ohce.run(notImportantName)

    expect(myConsole.messages).toContain("¡Bonita palabra!")
  })
})
