<!doctype html>
<html lang="en" ⚡<?=isset($_GET['theme']) ? ' data-theme="' . $_GET['theme'] . '"' : '' ?>>

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover">
    <title>Google Amp example • Pico.css</title>
    <meta name="description" content="A simple layout for Google Amp, with inlined CSS, Fixed nav, Sidebar and Social Share.  Built with Pico CSS.">
    <link rel="shortcut icon" href="https://picocss.com/favicon.ico">
    <link rel="canonical" href="https://picocss.com/examples/google-amp/">

    <!-- AMP runtime -->
    <script async src="https://cdn.ampproject.org/v0.js"></script>

    <!-- AMP components -->
    <script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"></script>
    <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
    <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>

    <!-- AMP boilerplate -->
    <style amp-boilerplate="">body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
    <noscript><style amp-boilerplate="">body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>

    <!-- Pico.css custom build for AMP inlined -->
    <style amp-custom>
    <?php
    include("css/pico.google-amp.min.css");
    echo PHP_EOL;
    ?>
    </style>
  </head>

  <body>

    <amp-sidebar id="sidebar-left" class="sample-sidebar" layout="nodisplay" side="left">
      <aside>
        <nav>
          <button on="tap:sidebar-left.close" aria-label="Open menu">
            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1rem" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18">
              </line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <ul>
            <li><h3>Theme</h3></li>
            <li><a href="./">Auto</a></li>
            <li><a href="?theme=light">Light</a></li>
            <li><a href="?theme=dark">Dark</a></li>
          </ul>
        </nav>
      </aside>
    </amp-sidebar>

    <nav>
      <ul>
        <li>
          <button on="tap:sidebar-left.toggle" aria-label="Close menu">
            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1rem" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </li>
      </ul>
      <ul>
        <li><h1>Brand</h1></li>
      </ul>
      <ul>
        <li>
          <a href="#" aria-label="Facebook">
            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1rem">
              <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>

    <main>
      <hgroup>
        <h1>Google Amp</h1>
        <h2>A simple layout for Google Amp, with inlined CSS, Fixed nav, Sidebar and Social Share.</h2>
      </hgroup>
      <figure>
        <amp-img src="https://source.unsplash.com/pGM4sjt_BdQ/2000x1000"
                 srcset="https://source.unsplash.com/pGM4sjt_BdQ/2000x1000 2000w,
                         https://source.unsplash.com/pGM4sjt_BdQ/1000x500 1000w,
                         https://source.unsplash.com/pGM4sjt_BdQ/500x250 500w"
                 width="2000"
                 height="1000"
                 layout="responsive"
                 alt="Cupcake">
        </amp-img>
        <figcaption>Image from <a href="https://unsplash.com">unsplash.com</a></figcaption>
      </figure>

      <p>
        <amp-social-share type="twitter" width="2rem" height="1.5rem" aria-label="Share on Titter"></amp-social-share>
        <amp-social-share type="facebook" width="2rem" height="1.5rem" aria-label="Share on Facebook"></amp-social-share>
        <amp-social-share type="pinterest" width="2rem" height="1.5rem" aria-label="Share on Pinterest"></amp-social-share>
      </p>

      <p>Integer vitae mi sed est rutrum feugiat. Ut bibendum sagittis dictum. Donec dictum pellentesque ipsum quis maximus. Fusce porttitor, arcu nec convallis rutrum, lectus justo auctor enim, vitae condimentum quam leo eu ante. Mauris nec augue in orci posuere imperdiet. Nam vel aliquet nisl. Vivamus iaculis ultrices nisl vitae ultrices. Aenean ac risus a tortor gravida dictum malesuada nec erat. Fusce sodales pharetra facilisis. Nunc viverra, eros quis imperdiet dapibus, mauris nunc venenatis lorem, ut pharetra magna lorem in mi.</p>
      <p>Vivamus malesuada fermentum urna, sit amet luctus urna ultrices id. In consequat orci a enim congue, et pellentesque mi ultrices. Pellentesque cursus sapien arcu, consectetur faucibus massa sollicitudin sed. Vivamus porttitor vehicula leo, id volutpat velit posuere vel. Pellentesque diam dui, faucibus quis mollis eget, consequat et est. Nullam vel tellus massa. Suspendisse in lorem ac lorem varius euismod. Cras consectetur suscipit tellus rutrum condimentum. Etiam in erat laoreet, congue nisi maximus, tristique lacus. Quisque et lorem ex.</p>

      <article>
        <h3>Subscribe</h3>
        <form action-xhr="./" method="post">
          <input type="text" name="firstname" placeholder="First name" aria-label="First name" required>
          <input type="email" name="email" placeholder="Email address" aria-label="Email address" required>
          <fieldset>
            <label for="terms">
              <input type="checkbox" role="switch" id="terms" name="terms" aria-checked="false">
              I agree to the <a href="#">Privacy Policy</a>
            </label>
          </fieldset>
          <button type="submit">Subscribe</button>
        </form>
      </article>

      <p>For this example, we have compiled a custom and class-less version of pico (<a href="https://github.com/picocss/examples/blob/master/google-amp/scss/pico.google-amp.scss">See here</a>).</p>

    </main>

    <footer>
      <small>Built with <a href="https://picocss.com">Pico</a> • <a href="https://github.com/picocss/examples/tree/master/google-amp">Source code</a></small>
    </footer>

  </body>

</html>
