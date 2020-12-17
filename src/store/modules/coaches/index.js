import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Gagandeep',
          lastName: 'Singh',
          areas: ['frontend', 'backend', 'career'],
          description: "I'm Gagandeep Singh and I'm a freelance web developer'",
          hourlyRate: 50,
        },
        {
          id: 'c2',
          firstName: 'Shivani',
          lastName: 'Mane',
          areas: ['frontend', 'career'],
          description: 'I am Shivani. I am a Data Scientist',
          hourlyRate: 30,
        },
        {
          id: 'c3',
          firstName: 'Pranav',
          lastName: 'Karmarkar',
          areas: ['frontend', 'backend', 'career'],
          description: "I'm a Frontend developer'",
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
