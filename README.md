<h1 align="center">Share</h1>
<div align="center">
<img src="https://img.shields.io/badge/hugo%20version-v0.111.3-EB17A4?style=for-the-badge&labelColor=000000">
<img src="https://img.shields.io/github/license/koc-he/codeblock-annotation?logoColor=000000&style=for-the-badge&labelColor=000000">
</div>
<br>

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
    <!-- Other things in your head tag -->
    {{partial "head/share-buttons-styling.html" . }}
</head>
```

## Usage
Here is a basic example. All the buttons are enabled when no configuration is set. 

To use all the buttons add this partial:
```twig
{{partial "utils/share-buttons/index.html" . }}
```

### Shapes and Labels
The default shape is **square**, with no label.

To use the buttons in a round shape, set the variable `round` to `true` in the page's scratch pad:
```twig
{{ .Scratch.Set "round" true }}
{{partial "utils/share-buttons/index.html" . }}
```

To use the buttons in a rectangular shape with labels, set the variable `withLabel` to `true` in the page's scratch pad:
```twig
{{ .Scratch.Set "withLabel" true }}
{{partial "utils/share-buttons/index.html" . }}
```
### Colours
The default button colours are the brand colours for each of the social media sites. 

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
### Enabling Specific Buttons
By default, all the buttons are shown. 

To enable specific buttons, add their tag from the list shown below to the `enabled` slice variable to the page's scratch pad. 

```text
email
facebook-messenger
facebook
hatena
instapaper
line
linkedin
live-journal
mail-ru
odnoklassniki
pinterest
pocket
reddit
telegram
tumblr
twitter
viber
vk
weibo
whatsapp
workplace
```
Here's an example of how to set the `enabled` variable:
```twig
{{ .Scratch.Set "enabled" (slice "email" "twitter" "linkedin" "facebook" "reddit" "whatsapp" "pinterest") }}
{{ partial "utils/share-buttons/index.html" . }}
```

You can also chose to include individual button partials like this: 
```twig
{{ partial "utils/share-buttons/linkedin.html" . }}
```

Just add any of the above tags where there is a placeholder here `utils/share-buttons/[tag placeholder].html`.

### Resetting the Configuration
You can reset the configuration by calling this partial:
```twig
{{ partial "utils/share-buttons/helpers/reset.html" . }}
```

## Shared Information Configuration
This table explains what is shared from your Hugo content. A lot of the values are picked up automatically. 

In the **Your Intervention** column, anything marked with:
- 🔧 requires your intervention. You need to set these values yourself. 
- ✨ has been automatically set based on available Hugo site and page variables. It doesn't require you to do anything. 

### 1. Email
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `subject` | `.Title`| ✨ |
| `body` | `.Description` or `.Summary` with `.Permalink` | ✨ |

### 2. Facebook Messenger
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `url` | `.Permalink` | ✨ | 
| `app_id` | `.Site.Params.share.facebookMessenger.appId` (**string**) | 🔧 |
| `redirect_uri` | `.Params.share.facebookMessenger.redirectUri` (**string**) | 🔧 |
| | `.Permalink` | ✨ |

Set the Facebook Messenger app ID in your site configuration (**config.toml**).
```toml
[params]
    [params.share]
        [params.share.facebookMessenger]
            appId = '12345678'
```

Set the Facebook Messenger redirect URI on your content pages in the frontmatter, if you'd like as shown below. If it is not set, this value defaults to `.Permalink`. 
```yaml
share:
    facebookMessenger:
        redirectUri: 'https://example.com'
``` 

### 3. Facebook
### 4. Hatena
### 5. Instapaper
### 6. Line
### 7. LinkedIn
### 8. Live Journal
### 9. Mail.ru
### 10. Odnoklassniki
### 11. Pinterest
### 12. Pocket
### 13. Reddit
### 14. Telegram
### 15. Tumblr
### 16. Twitter
### 17. Viber
### 18. VK
### 19. Weibo
### 20. Whatsapp
### 21. Workplace