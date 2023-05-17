<h1 align="center">Share</h1>
<div align="center">
<img src="https://img.shields.io/badge/hugo%20version-v0.111.3-EB17A4?style=for-the-badge&labelColor=000000">
<img src="https://img.shields.io/github/license/koc-he/codeblock-annotation?logoColor=000000&style=for-the-badge&labelColor=000000">
</div>


This is social media share buttons module for Hugo websites. 

## Supported Social Media and Other Platforms
- Email
- Facebook
- Facebook Messenger
- Hatena
- Instapaper
- Line
- LinkedIn
- Live Journal
- Mail.ru
- Odnoklassniki
- Pinterest
- Pocket
- Reddit
- Telegram
- Tumblr
- Twitter
- Viber
- VK
- Weibo
- Whatsapp
- Workplace

## Requirements
- Hugo `v0.111.3` 
> This module was written with this version of Hugo but it might be compatible with earlier versions.
- [A Hugo site that has been initialized as a module](https://gohugo.io/hugo-modules/use-modules/#initialize-a-new-module).

## Installation
1. In your Hugo config (toml), add this:
```toml
[module]
    [[module.imports]]
        path='github.com/koc-he/share'
```
Hugo will automatically download the module when your site is run or built.

2. In the <head> tag of your site, add this partial:
```twig
<head>
    <!-- Other things in your head tag --->
    {{partial "head/share-buttons-styling.html" . }}
</head>
```

## Usage
To use all the buttons in a square shape with their brand colors, add this partial:
```twig
{{partial "utils/share-buttons/index.html" . }}
```

To use all the buttons in a round shape, set the variable `round` to `true` in the page's scratch pad:
```twig
{{ .Scratch.Set "round" true }}
{{partial "utils/share-buttons/index.html" . }}
```

To use all the buttons in a rectangular shape with labels, set the variable `withLabel` to `true` in the page's scratch pad:
```twig
{{ .Scratch.Set "withLabel" true }}
{{partial "utils/share-buttons/index.html" . }}
```

To specify matching colours for 
normal and active states, set these values in the page's scratch pad (using `.Scratch.Set`). 
- `background`: the background colour of the buttons in their normal state. 
- `colour`: the text colour of the buttons in their normal state.
- `activeBackground`: the background colour of the buttons in their `active` and `hover` state. 
- `activeColour`: the text colour of the buttons in their `active` and `hover` state.

Here's an example:
```twig
{{ .Scratch.Set "background" "#aab2ff" }}
{{ .Scratch.Set "color" "#112A46" }}
{{ .Scratch.Set "activeBackground" "#ffffff" }}
{{ .Scratch.Set "activeColor" "#000000" }}
{{ partial "utils/share-buttons/index.html" . }}
```

To use enable specific buttons