import { defineStore } from 'pinia'

export const useEventStore = defineStore('eventList', {
  //state
  state: () => ({
    eventList: [],
    id: 1001
  }),
  //getters
  actions: {
    addEvent(event) {
      this.eventList.push({ event, id: this.id++, boosted: false })
      console.log(this.eventList)
    },
    deleteEvent(eventId) {
      this.eventList = this.eventList.filter((object) => {
        return object.id !== eventId
      })
    },
    toggleBoosted(eventId) {
      console.log('clicked')
      const event = this.eventList.find((object) => object.id === eventId)
      if (event) {
        event.boosted = !event.boosted
      }
    }
  }
})
