# myKit
BEM and Webpack Frontend Framework

## Minimum Requirements

* Node v6+

## Installation

```bash
npm install
```

## Run build

```bash
npm run build
```
## HTML setup

Next you just have to make sure you link the files properly in your webpage. Generally it is wise to import javascript files at the end of the body to reduce page load time.

```html
<!DOCTYPE html>
<html>
<head>
    <!--Import style.css-->
    <link rel="stylesheet" type="text/css" href="<your-project-path>/myKit/build/main.css">

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>

<body>
    <!--Import script.min.js-->
    <script type="text/javascript" src="<your-project-path>/myKit/build/main.js"> </script>
</body>
</html>
```

## SCSS setup

When using image paths within the SCSS files, you must ensure you referrence the image as if the relative path starts at the index of the site rather than the compiled css file.

In **myKit/scss/_variables.scss** update the $assetPath variable with the relative path from the root of your site.

When using images in your SCSS be sure to use this variable, for example:

```scss
@include component('banner') {
    background-image:url('#{$imgPath}/banner.jpg');
}
```

## Code Examples

In the below HTML you will see mark up for a simple section with the class banner. Banner also has an option class of main which inherits the standard .banner styles allowing you to specify any overrides or additional styles for the "main banner".

It also has a heading within banner, prefixing heading with "banner__" because this is a "part" of banner. This is reflected in the SCSS below.

```html
<section class="banner --main">
    <h2 class="banner__heading">Example heading</h2>
</section>
```

```scss
@include component('banner') {
    position: relative;
    height: 300px;

    @include option('main') {
        height: 700px;
    }

    @include part('heading') {
        color: #000;
        text-decoration: underline;
    }
}
```

## License

Take it.