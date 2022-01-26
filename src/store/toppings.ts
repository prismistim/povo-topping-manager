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
      toppings: [] as ToppingType[]
    }
  },
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage }]
  },
  actions: {
    addTopping(
      toppingName: string,
      purchasedDate: string,
      remainingDays: number
    ): number {
      const id = this.toppings.length + 1
      this.toppings.push({
        id: id,
        toppingName,
        purchasedDate,
        remainingDays
      })
      return id
    },
    findTopping(id: number): ToppingType {
      const topping = this.toppings.find((v) => v.id == id)
      if (!topping) throw new Error('トッピングがありません。')
      return topping
    }
  }
})
