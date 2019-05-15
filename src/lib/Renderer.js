// import $ from 'jquery';

// const renderers = [];

// class Renderer {
//   constructor(model, el) {
//     this.model = model;
//     this.model.bindView(this);
//     this.$el = $(el);

//     if (this.getEvents) {
//       const events = this.getEvents();
//       const eventKeys = Object.keys(events);

//       eventKeys.forEach(eventString => {
//         const [ eventName, selector ] = eventString.split(' ');
//         const fn = this[events[eventString]];
//         this.$el.on(eventName, selector, fn.bind(this));
//       }); 
//     }
    
//     renderers.push(this);
//     this.render();
//   } 

//   renderAll() {
//     renderers.forEach(renderer => renderer.render());
//   }

//   render() {
//     this.$el.html(this.template());

//     // This is a finicky hack for keeping focus on radio inputs after a render and should not
//     // be used as a solution for students at this time.
//     const $answers = this.$el.find('.answers');
//     if ($answers.length > 0) {
//       const checkedAnswer = $answers.find('input[type=radio]:checked');
//       if (checkedAnswer.length > 0) {
//         checkedAnswer.focus();
//       }
//     }
//   }
// }

// export default Renderer;
