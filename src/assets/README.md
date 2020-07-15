# data JSON

The files : 
* [skills.json](./skills.json)
* [works.json](./works.json)
are data to be displayed on some pages. 

## skills.json (fr)

C'est un tableau de compétences selon la structure : 
```json 
{
    "name": (String) "le nom du langage / de la compétence",
    "faIcon": (String) "une icon FontAwesome",
    "level": (int) "mon niveau par rapport à cette compétence",
    "label": (String[]) "un tableau de labels associés à cete compétences et à d'autres"
}
```

Un niveau est attribué aux compétences.

| Niveau | Signification |
| :----: | :------- |
|   1    | Des compétences que je maîtrise particulièrement, je les utilise régulièrement et je suis à mon aise avec elles. |
|   2    | Des compétences que j'ai déjà bien utilisé dans des projets, mais il se peut que cela date un peu. |
|   3    | Des compétences que j'ai déjà utilisé une ou plusieurs fois. |
|   4    | Des compétences que j'ai déjà étudiées, ou pour lesquelles j'ai déjà fait de la veille. |

## works.json (fr)

C'est un tableau d'expériences selon la structure : 
```json
{
    "date": (String) "La date sous le format AA-MM-JJ : 20-12-25  OU  20-12-##  OU  -  20-##-##",
    "date_end": (String) "Rien  OU  la date de fin sous le format AA-MM-JJ : 20-12-25.",
    "org": (String) "Le nom de l'entreprise, de l'école ou du groupe.",
    "def": (String) "Le détails de l'expérience.",
    "hashtag": (String[]) "Un tableau de technos ou de compétences développées durant cette expérience.",
    "source": (String) "Le lien vers le code source.",
    "demo": (String) "Le lien vers la démonstration.",
    "pro": (boolean) "Si l'expérience est professionnelle ou non."
}
```