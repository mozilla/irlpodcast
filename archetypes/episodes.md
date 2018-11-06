---
date: {{ substr .Name 0 10 }}T04:55:00-08:00
title: "{{ replace (substr .Name 18) "-" " " | title }}"
ogtitle: "{{ replace (substr .Name 18) "-" " " | title }}"
description: ""
ogdescription: ""
number:
season: {{ strings.TrimPrefix "0" (substr .Name 12 2) }}
seasonepisode: {{ strings.TrimPrefix "0" (substr .Name 15 2) }}
url: /season{{ strings.TrimPrefix "0" (substr .Name 12 2) }}/episode{{ strings.TrimPrefix "0" (substr .Name 15 2) }}/
embed: ""
mp3: ".mp3"
categories: "episodes"
host: "Manoushz"
shownotes: |
transcript: |

---
