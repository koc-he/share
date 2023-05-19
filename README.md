<h1 align="center">Share</h1>
<div align="center">
    <a href="https://github.com/gohugoio/hugo/releases/tag/v0.111.3" aria-label="Hugo version">  
        <img src="https://img.shields.io/badge/hugo%20version-v0.111.3-EB17A4?style=for-the-badge&labelColor=000000">
    </a>
    <a href="https://github.com/koc-he/share/blob/main/LICENSE.md" aria-label="License">
        <img src="https://img.shields.io/github/license/koc-he/share?logoColor=000000&style=for-the-badge&labelColor=000000">
    </a>
    <a href="https://github.com/koc-he/share/releases" aria-label="Latest release">
        <img src="https://img.shields.io/github/v/release/koc-he/share?style=for-the-badge&labelColor=000000">
    </a>
</div>
<br>
<br>


<img id="screenshot-1" class="screenshot" src="/static/share-buttons/screenshots/1.png" alt="labelled buttons screenshot"/>

<img id="screenshot-2" class="screenshot" src="/static/share-buttons/screenshots/2.png" alt="square buttons screenshot"/>

This is social media share button module for Hugo websites. 

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Supported Social Media and Other Platforms](#supported-social-media-and-other-platforms)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
  - [Shapes and Labels](#shapes-and-labels)
  - [Colours](#colours)
  - [Enabling Specific Buttons](#enabling-specific-buttons)
  - [Resetting the Configuration](#resetting-the-configuration)
- [Share Information Configuration](#share-information-configuration)
  - [1. Email](#1-email)
  - [2. Facebook Messenger](#2-facebook-messenger)
  - [3. Facebook](#3-facebook)
  - [4. Hatena](#4-hatena)
  - [5. Instapaper](#5-instapaper)
  - [6. Line](#6-line)
  - [7. LinkedIn](#7-linkedin)
  - [8. Live Journal](#8-live-journal)
  - [9. Mail.ru](#9-mailru)
  - [10. Odnoklassniki](#10-odnoklassniki)
  - [11. Pinterest](#11-pinterest)
  - [12. Pocket](#12-pocket)
  - [13. Reddit](#13-reddit)
  - [14. Telegram](#14-telegram)
  - [15. Tumblr](#15-tumblr)
  - [16. Twitter](#16-twitter)
  - [17. Viber](#17-viber)
  - [18. VK](#18-vk)
  - [19. Weibo](#19-weibo)
  - [20. Whatsapp](#20-whatsapp)
  - [21. Workplace](#21-workplace)
- [Other Configuration Properties](#other-configuration-properties)

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
- **Hugo** `v0.111.3` 
- [A Hugo site that has been initialized as a module](https://gohugo.io/hugo-modules/use-modules/#initialize-a-new-module).
> This module was written with the above version of Hugo but it might be compatible with earlier versions.

## Installation
1. In your Hugo config (toml), add this:
```toml
[module]
    [[module.imports]]
        path='github.com/koc-he/share'
```
Hugo will automatically download the module when your site is run or built.

2. In the `<head>` tag of your site, add this partial:
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

To use the buttons in a round shape, set the variable `round` to `true` in [the page's scratch pad](https://gohugo.io/functions/scratch/):
```twig
{{ .Scratch.Set "round" true }}
{{partial "utils/share-buttons/index.html" . }}
```

To use the buttons in a rectangular shape with labels, set the variable `withLabel` to `true` in [the page's scratch pad](https://gohugo.io/functions/scratch/):
```twig
{{ .Scratch.Set "withLabel" true }}
{{partial "utils/share-buttons/index.html" . }}
```


### Colours
The default button colours are the brand colours for each of the social media sites. 

To specify matching colours for 
normal and active states, set these values in the page's scratch pad [(using `.Scratch.Set`)](https://gohugo.io/functions/scratch/). 
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

To enable specific buttons, add their tag from the list shown below to the `enabled` slice variable to [the page's scratch pad](https://gohugo.io/functions/scratch/). 

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

## Share Information Configuration
This table explains what is shared from your Hugo content. A lot of the values are picked up automatically. 

In the **Your Intervention** column in the tables below, anything marked with:
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
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `u` | `.Permalink` | ✨ | 
| `quote` | `.Title` | ✨ |
| `hashtag` | `.Params.share.facebook.hashtag` (**string**) | 🔧 |

Set the Facebook hashtag on your content pages in the frontmatter, if you'd like as shown below. If it is not set, this value defaults to an empty string. 
```yaml
share:
    facebook:
        hashtag: 'lorem'
``` 
> Note that the hashtag is a single string and not a list.


### 4. Hatena
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `url` | `.Permalink` | ✨ | 
| `title` | `.Title` | ✨ |


### 5. Instapaper
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `url` | `.Permalink` | ✨ | 
| `quote` | `.Title` | ✨ |
| `description` | first 40 characters of `.Description` or `.Summary` | ✨ |


### 6. Line
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `url` | `.Permalink` | ✨ | 
| `text` | `.Title` | ✨ |


### 7. LinkedIn
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `url` | `.Permalink` | ✨ | 
| `title` | `.Title` | ✨ |
| `summary` | first 40 characters of `.Description` or `.Summary` | ✨ |
| `source` | `.Site.BaseURL` | ✨ |


### 8. Live Journal
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `url` | `.Permalink` | ✨ | 
| `subject` | `.Title` | ✨ |
| `event` | first 40 characters of `.Description` or `.Summary` | ✨ |


### 9. Mail.ru
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `url` | `.Permalink` | ✨ | 
| `title` | `.Title` | ✨ |
| `description` | first 40 characters of `.Description` or `.Summary` | ✨ |
| `image_url` | first image of `.Params.images` (**string, relative path**) | 🔧 |

Set the image url on your content pages in the frontmatter, if you'd like as shown below. If it is not set, this value defaults to an empty string. This is the same image used by the various SEO internal templates (OG, schema, and twitter cards). 
```yaml
images:
    - 'share.svg'
``` 


### 10. Odnoklassniki
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `url` | `.Permalink` | ✨ | 
| `title` | `.Title` | ✨ |
| `description` | first 40 characters of `.Description` or `.Summary` | ✨ |
| `imageUrl` | first image of `.Params.images` (**string, relative path**) | 🔧 |

Set the image url on your content pages in the frontmatter, if you'd like as shown below. If it is not set, this value defaults to an empty string. This is the same image used by the various SEO internal templates (OG, schema, and twitter cards). 
```yaml
images:
    - 'share.svg'
``` 


### 11. Pinterest
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `url` | `.Permalink` | ✨ | 
| `description` | first 40 characters of `.Description` or `.Summary` | ✨ |
| `media` | first image of `.Params.images` (**string, relative path**) | 🔧 |

Set the image url on your content pages in the frontmatter, if you'd like as shown below. If it is not set, this value defaults to an empty string. This is the same image used by the various SEO internal templates (OG, schema, and twitter cards). 
```yaml
images:
    - 'share.svg'
``` 


### 12. Pocket
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `url` | `.Permalink` | ✨ | 
| `title` | `.Title` | ✨ |


### 13. Reddit
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `url` | `.Permalink` | ✨ | 
| `title` | `.Title` | ✨ |


### 14. Telegram
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `url` | `.Permalink` | ✨ | 
| `text` | `.Title` | ✨ |


### 15. Tumblr
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `canonicalUrl` | `.Permalink` | ✨ | 
| `title` | `.Title` | ✨ |
| `caption` | first 40 characters of `.Description` or `.Summary` | ✨ |
| `tags` | `.Params.share.tags` (**string slice**) | 🔧 |

The tags you use on social media may be different from the tags you use for content organization on your website. So you have the option to set social media tags under `.Params.share.tags`. 

The `.tags` are from Hugo's [built-in tags taxonomy](https://gohugo.io/content-management/taxonomies/). These are not considered.  

Set the tags on your content pages in the frontmatter, if you'd like as shown below. If it is not set, this value defaults to an empty slice. 
```yaml
share:
    tags:
        - lorem
        - ipsum
        - dolor
        - sit
        - amet
``` 


### 16. Twitter
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `url` | `.Permalink` | ✨ | 
| `text` | `.Title` | ✨ |
| `hashtags` | `.Params.share.tags` (**string slice**) | 🔧 |
| `via` | `.Site.Params.share.twitter.accountHandle` (**string**) | 🔧 |
| `related` | `.Site.Params.share.twitter.relatedAccounts` (**string slice**) | 🔧 |

`.Site.Params.share.twitter.accountHandle` is the handle for your personal or organization Twitter account that you want associated with the tweet. This defaults to an empty string if not set. `.Site.Params.share.twitter.relatedAccounts` is a list of Twitter account handles that you wanted associated with the tweet. This defaults to an empty slice if not set. Set these values in your site config file, `config.toml`.
```toml
[params]
    [params.share]
        [params.share.twitter]
            accountHandle = 'twitterdev'
            relatedAccounts = ['twitter']
```

The tags you use on social media may be different from the tags you use for content organization on your website. So you have the option to set social media tags under `.Params.share.tags`. 

The `.tags` are from Hugo's [built-in tags taxonomy](https://gohugo.io/content-management/taxonomies/). These are not considered.  

Set the tags on your content pages in the frontmatter, if you'd like as shown below. If it is not set, this value defaults to an empty slice. 
```yaml
share:
    tags:
        - lorem
        - ipsum
        - dolor
        - sit
        - amet
``` 


### 17. Viber
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `text` | `.Title` and `.Permalink` separated by a space | ✨ |


### 18. VK
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `url` | `.Permalink` | ✨ | 
| `title` | `.Title` | ✨ |
| `noparse` | `.Site.Params.share.vk.noParse` | 🔧 |
| `no_vk_links` | `.Site.Params.share.vk.noVKLinks` | 🔧 |
| `image` | first image of `.Params.images` (**string, relative path**) | 🔧 |

`.Site.Params.share.vk.noParse` when set to `true` tells VK servers not make an additional request to download missing information from the posted page. If `false`, the request is made.

`.Site.Params.share.vk.noVKLinks` when set to `true` indicates that there will be no active links to VK in the post window.

Set these values in your site config file, `config.toml`, as shown below.
```toml
[params]
    [params.share]
        [params.share.vk]
            noParse = true
            noVKLinks = true
```

Set the image url on your content pages in the frontmatter, if you'd like as shown below. If it is not set, this value defaults to an empty string. This is the same image used by the various SEO internal templates (OG, schema, and twitter cards). 
```yaml
images:
    - 'share.svg'
``` 


### 19. Weibo
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `url` | `.Permalink` | ✨ | 
| `title` | `.Title` | ✨ |
| `imageUrl` | first image of `.Params.images` (**string, relative path**) | 🔧 |

Set the image url on your content pages in the frontmatter, if you'd like as shown below. If it is not set, this value defaults to an empty string. This is the same image used by the various SEO internal templates (OG, schema, and twitter cards). 
```yaml
images:
    - 'share.svg'
``` 


### 20. Whatsapp
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `text` | `.Title` and `.Permalink` separated by a space | ✨ |


### 21. Workplace
| Platform Requirement | Hugo Equivalent | Your Intervention | 
| ----- | ----- |  ----- |
| `u` | `.Permalink` | ✨ | 
| `quote` | `.Title` | ✨ |
| `hashtag` | `.Params.share.facebook.hashtag` (**string**) | 🔧 |

Set the Facebook hashtag on your content pages in the frontmatter, if you'd like as shown below. If it is not set, this value defaults to an empty string. 
```yaml
share:
    workplace:
        hashtag: 'lorem'
``` 
> Note that the hashtag is a single string and not a list.


## Other Configuration Properties
By default, all sharing links are opened in a new tab. If you'd like them to open as a popup window, set `.Site.Params.share.popup` to `true`. You can also specify the dimensions of the popup window using `.Site.Params.share.window.height` and `.Site.Params.share.window.width`. These are both numerical values. 

Set these in the site config, `config.toml`, as shown below. 
```toml
[params]
    [params.share]
            popup = true
        [params.window]
            height = 500
            width = 500
```