export default {
  state: {
    orders: []
  },
  mutations: {},
  actions: {
    async createOrder({commit}, {name, phone, adId, userId}) {
      console.log(name)
      console.log(phone)
      console.log(adId)
      console.log(userId)
      commit('clearError', null, { root: true })
      // Заглушка запроса
      let isRequestOk = true
      let promise = new Promise(function(resolve) {
        setTimeout(() => resolve('Done'), 3000);
      });
      if (isRequestOk) {
        await promise.then(()=> {
          // Здесь вызовем commit для добавления заказа
        })
      } else {
        await promise.then(()=> {
          commit('setError', 'Ошибка создания заказа', { root: true })
          throw new Error('Упс... Ошибка создания заказа')
        })
      }
    }
  },
  getters: {}
} 