# apply-style-json-defined

This function dynamically applies (with auto merge) styles

Call function with style passed as a Json CamelCase defined


```
applyStyles({
  "myMenuClass" : {
  "color" : "rgb(254, 254, 254)"
},
  "myOtherClass" : {
  "backgroundColor" : "rgb(56, 60, 66)"
  "borderColor" : "rgba(0, 0, 0, 0.51)"
 }
})
```
All tags with these classes will be impacted.
