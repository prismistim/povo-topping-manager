import { defineStore } from 'pinia'

type ToppingType = {
  id: number
  toppingName: string
  purchasedDate: string
  remainingDays: number
}

export const toppingStore = defineStore('toppings', {
  state: () => {
    return {
      toppings: [] as ToppingType[],
      nextId: 0
    }
  },
  getters: {
    findLatestTopping(state) {
      return (): ToppingType => {
        if (state.toppings.length === 0)
          throw new Error('トッピングがありません。')
        const topping = state.toppings[state.toppings.length - 1]
        return topping
      }
    }
  },
  actions: {
    addTopping(
      toppingName: string,
      purchasedDate: string,
      remainingDays: number
    ) {
      this.toppings.push({
        id: this.nextId++,
        toppingName,
        purchasedDate,
        remainingDays
      })
    }
  }
})
