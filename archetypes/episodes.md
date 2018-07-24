---
categories: "episodes"
date: {{ substr .Name 0 10 }}T06:00:00-08:00
description: ""
embed: ""
mp3: ""
number:
ogdescription: ""
ogtitle: "{{ replace (substr .Name 18) "-" " " | title }}"
season: {{ strings.TrimPrefix "0" (substr .Name 12 2) }}
seasonepisode: {{ strings.TrimPrefix "0" (substr .Name 15 2) }}
shownotes: |

url: /season{{ strings.TrimPrefix "0" (substr .Name 12 2) }}/episode{{ strings.TrimPrefix "0" (substr .Name 15 2) }}/
title: "{{ replace (substr .Name 18) "-" " " | title }}"
transcript: |

---
