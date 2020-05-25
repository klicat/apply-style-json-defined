# apply-style-json-defined

##This function dynamically applies (with auto merge) styles

##Call function with styles passed as a Json CamelCase defined.
You can pass all the existent html style definition, just transform them as CamelCase

##Examples :
-background-color: red; => backgroundColor:red
-font-size: 10px; => fontSize: 10px
-text-shadow: 3px 3px 1px black; => textShadow: 3px 3px 1px black
-background-image: linearGradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)), url("../../media/examples/lizard.png");

###ONLY the property name should be modified in camelCase, not the value

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
