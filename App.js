const createContactBlock = () => {
  return {
    id: 'email',
    label: 'Email',
    category: 'Custom',
    attributes: { class: 'fa fa-envelope-o' },
    content: `<form class="contact-form" method="POST" action="https://www.toptal.com/developers/postbin/1700221319848-5961196743883" id="emailForm">
      <div class="form-group row contact-email">
        <label for="inputEmail" class="">Enter your email</label>
        <div class="">
          <input type="email" class="form-control" id="inputEmail" name="contact[email]" placeholder="test@test.com" required />
          <button type="submit" class="btn btn-primary btn-block">Submit</button>
        </div>
      </div>
    </form>`,
  };
};

var editor = grapesjs.init({
  fromElement: 1,
  container: "#gjs",

  plugins: ['grapesjs-preset-webpage'],
  pluginsOpts: {
    "gjs-blocks-basic": {},
  },
});

editor.BlockManager.add('email', createContactBlock());


