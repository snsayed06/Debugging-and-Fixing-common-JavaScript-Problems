var AddRantView = Backbone.View.extend({

  initialize: function() {
    this.$('textarea').on('keyup', this.onChange.bind(this));
    this.$('form').on('submit', this.onSubmit.bind(this));
    var text = localStorage.getItem('next-rant');
    if (text) {
      this.$('textarea').val(text);
    }
  },

  onChange: function(evt) {
    var text = (evt.target || {}).value;
    // Exercise 2
    if (typeof text === 'string') {
      localStorage.setItem('next-rant', text);
    }
  },

  onSubmit: function(evt) {
    evt.preventDefault();
    var form = evt.target;
    var rant = {
      text: form.rant.value
    };
    // Exercise 3
    if (rant.text && rant.text.length > 0) {
      // Exercise 8
      if(window.analytics){
        analytics.trackConversion();
      }
      this.collection.create(rant, { wait: true });

      form.rant.value = '';
    }
  }

});
