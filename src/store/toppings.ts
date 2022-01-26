import { defineStore } from 'pinia'
import { savedData } from '/@/types/topping'

export const toppingStore = defineStore('toppings', {
  state: () => {
    return {
      toppings: [] as Array<savedData>
    }
  },
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage }]
  },
  getters: {
    fetchToppings(state) {
      return state.toppings
    }
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
    findTopping(id: number): savedData {
      const topping = this.toppings.find((v) => v.id == id)
      if (!topping) throw new Error('トッピングがありません。')
      return topping
    }
  }
})
