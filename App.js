var editor = grapesjs.init({
  fromElement: 1,
  container: "#gjs",
  allowScripts: 1,
  
  plugins: ['grapesjs-preset-webpage'],
  pluginsOpts: {
    "gjs-blocks-basic": {},
  },
});
editor.DomComponents.addType('custom', {
  model: {
    defaults: {
      tagName: "form",
      name: "form",
      attributes: {
        id: "emailForm",
        class: "contact-form"
      },
      content:
        `<div class="form-group row contact-email">
            <label for="inputEmail" class="">Enter your email</label>
            <div class="">
              <input type="email" class="form-control" id="inputEmail" name="contact[email]" placeholder="test@test.com" required />
              <button type="submit" class="btn btn-primary btn-block">Submit</button>
            </div>
        </div>`,
      traits: [
        'data-url'
      ],
      script: function () {
        const form = this;
        form.addEventListener('submit', function (event) {
          event.preventDefault();

          const url = this.attributes['data-url'] ? this.attributes['data-url'].value : '';
          if (url.trim() === '') {
            alert('Please add post request url');
            return;
          }
          const regex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);

          if (regex.test(url) === false) {
            alert('Invaliid post request url');
            return;
          }

          const email = form.querySelector('[name="contact[email]"]').value;

          fetch('', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
            }),
          })
            .then(response => response.text())
            .then(data => {
              alert('API Response: ' + JSON.stringify(data));
            })
            .catch((error) => {
              console.error('Error:', error);
              alert('Error: ' + error.message);
            });
        });
      },
    },
  }
});

editor.BlockManager.add("custom", {
  label: "Email",
  content: { type: 'custom' },
  attributes: { class: 'fa fa-envelope-o' },
});
